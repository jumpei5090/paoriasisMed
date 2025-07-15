// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Guidelines modal functionality
function showGuideline(type) {
    const modal = document.getElementById('guidelines-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content-text');
    
    if (type === 'biological') {
        modalTitle.textContent = '乾癬における生物学的製剤の使用ガイダンス（2022年版）';
        loadGuidelineContent('biological');
    } else if (type === 'psa') {
        modalTitle.textContent = '乾癬性関節炎診療ガイドライン2019';
        loadGuidelineContent('psa');
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('guidelines-modal');
    modal.style.display = 'none';
    
    // Clear search when closing modal
    const searchInput = document.getElementById('guideline-search');
    searchInput.value = '';
    clearSearchHighlights();
}

function loadGuidelineContent(type) {
    const modalContent = document.getElementById('modal-content-text');
    
    // Show loading message
    modalContent.innerHTML = '<p>ガイドラインを読み込み中...</p>';
    
    const filename = type === 'biological' ? 'biological_agents_guideline.txt' : 'psa_guideline.txt';
    
    fetch(`guidelines/${filename}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`ガイドラインファイルが見つかりません (HTTP ${response.status})`);
            }
            return response.text();
        })
        .then(text => {
            // Convert markdown-style text to HTML
            const htmlContent = convertMarkdownToHtml(text);
            modalContent.innerHTML = htmlContent;
            
            // Store original content for search functionality
            originalContent = htmlContent;
            
            // Clear any previous search
            const searchInput = document.getElementById('guideline-search');
            searchInput.value = '';
            searchResults = [];
            currentSearchIndex = 0;
            updateSearchResults();
        })
        .catch(error => {
            console.error('Fetch error:', error);
            modalContent.innerHTML = `
                <div style="padding: 20px; text-align: center;">
                    <p style="color: #d32f2f; font-weight: bold;">⚠️ ガイドラインの読み込みに失敗しました</p>
                    <p>エラー: ${error.message}</p>
                    <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 8px; text-align: left;">
                        <p><strong>解決方法:</strong></p>
                        <ol>
                            <li>HTTPサーバーを起動してください:<br><code>python3 -m http.server 8080</code></li>
                            <li>ブラウザで以下のURLを開いてください:<br><code>http://localhost:8080</code></li>
                            <li>ガイドラインファイルが以下に配置されているか確認してください:
                                <ul>
                                    <li>guidelines/biological_agents_guideline.txt</li>
                                    <li>guidelines/psa_guideline.txt</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            `;
        });
}

function convertMarkdownToHtml(text) {
    let html = text;
    
    // Split into lines for better processing
    const lines = html.split('\n');
    let processedLines = [];
    let inTable = false;
    let tableRows = [];
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        // Handle headers
        if (line.match(/^#### /)) {
            line = line.replace(/^#### (.*)$/, '<h4>$1</h4>');
        } else if (line.match(/^### /)) {
            line = line.replace(/^### (.*)$/, '<h3>$1</h3>');
        } else if (line.match(/^## /)) {
            line = line.replace(/^## (.*)$/, '<h2>$1</h2>');
        } else if (line.match(/^# /)) {
            line = line.replace(/^# (.*)$/, '<h1>$1</h1>');
        }
        
        // Handle horizontal lines
        else if (line.match(/^-----$/)) {
            line = '<hr>';
        }
        
        // Handle blockquotes
        else if (line.match(/^> /)) {
            line = line.replace(/^> (.*)$/, '<blockquote>$1</blockquote>');
        }
        
        // Handle tables
        else if (line.match(/^\|.*\|$/)) {
            if (!inTable) {
                inTable = true;
                tableRows = [];
            }
            
            const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);
            const isHeader = cells.some(cell => cell.includes('**'));
            
            if (isHeader) {
                tableRows.push('<tr>' + cells.map(cell => `<th>${cell.replace(/\*\*/g, '')}</th>`).join('') + '</tr>');
            } else if (cells.length > 0 && !cells.every(cell => cell.match(/^:?-+:?$/))) {
                tableRows.push('<tr>' + cells.map(cell => `<td>${cell}</td>`).join('') + '</tr>');
            }
            continue;
        }
        
        // Handle numbered lists
        else if (line.match(/^\d+\.\s+/)) {
            line = line.replace(/^\d+\.\s+(.+)$/, '<li>$1</li>');
        }
        
        // Handle bullet lists
        else if (line.match(/^\s*[\*\-]\s+/)) {
            line = line.replace(/^\s*[\*\-]\s+(.+)$/, '<li>$1</li>');
        }
        
        // If we were in a table but this line isn't a table row, close the table
        if (inTable && !line.match(/^\|.*\|$/)) {
            if (tableRows.length > 0) {
                processedLines.push('<table class="guideline-table">' + tableRows.join('') + '</table>');
                tableRows = [];
            }
            inTable = false;
        }
        
        processedLines.push(line);
    }
    
    // Close any remaining table
    if (inTable && tableRows.length > 0) {
        processedLines.push('<table class="guideline-table">' + tableRows.join('') + '</table>');
    }
    
    html = processedLines.join('\n');
    
    // Handle bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Handle italic text (but not if it's part of bold)
    html = html.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
    
    // Wrap consecutive <li> elements in <ul>
    html = html.replace(/(<li>.*?<\/li>)\n(<li>.*?<\/li>)/gims, '$1\n$2');
    html = html.replace(/(<li>.*?<\/li>(\n<li>.*?<\/li>)*)/gims, '<ul>$1</ul>');
    
    // Handle paragraphs
    html = html.replace(/\n\n+/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');
    
    // Wrap content in paragraphs, but not headers, hr, tables, lists, or blockquotes
    const lines2 = html.split('</p><p>');
    const wrappedLines = lines2.map(line => {
        if (line.match(/^<(h[1-4]|hr|table|ul|ol|blockquote)/)) {
            return line;
        }
        return '<p>' + line + '</p>';
    });
    html = wrappedLines.join('');
    
    // Clean up
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p>(<h[1-4]>.*?<\/h[1-4]>)<\/p>/g, '$1');
    html = html.replace(/<p>(<hr>)<\/p>/g, '$1');
    html = html.replace(/<p>(<ul>.*?<\/ul>)<\/p>/gims, '$1');
    html = html.replace(/<p>(<table.*?<\/table>)<\/p>/gims, '$1');
    html = html.replace(/<p>(<blockquote>.*?<\/blockquote>)<\/p>/gims, '$1');
    
    return html;
}

// Search functionality
let searchResults = [];
let currentSearchIndex = 0;
let originalContent = '';

function searchGuideline() {
    const searchTerm = document.getElementById('guideline-search').value.trim();
    const modalContent = document.getElementById('modal-content-text');
    
    if (!searchTerm) {
        clearSearchHighlights();
        return;
    }
    
    // Store original content if not already stored
    if (!originalContent) {
        originalContent = modalContent.innerHTML;
    }
    
    // Clear previous highlights
    clearSearchHighlights();
    
    // Perform search
    const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
    const highlighted = originalContent.replace(regex, '<span class="search-highlight">$1</span>');
    
    modalContent.innerHTML = highlighted;
    
    // Get all search results
    searchResults = modalContent.querySelectorAll('.search-highlight');
    currentSearchIndex = 0;
    
    // Update search results info
    updateSearchResults();
    
    // Highlight first result
    if (searchResults.length > 0) {
        highlightCurrentResult();
    }
}

function clearSearchHighlights() {
    const modalContent = document.getElementById('modal-content-text');
    if (originalContent) {
        modalContent.innerHTML = originalContent;
    }
    
    searchResults = [];
    currentSearchIndex = 0;
    updateSearchResults();
}

function updateSearchResults() {
    const resultsCount = document.getElementById('search-results-count');
    const prevBtn = document.getElementById('search-prev');
    const nextBtn = document.getElementById('search-next');
    
    if (searchResults.length === 0) {
        resultsCount.textContent = '';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
    } else {
        resultsCount.textContent = `${currentSearchIndex + 1} / ${searchResults.length}`;
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

function navigateSearch(direction) {
    if (searchResults.length === 0) return;
    
    // Remove current highlight
    searchResults[currentSearchIndex].classList.remove('current');
    
    // Move to next/previous result
    currentSearchIndex += direction;
    
    // Wrap around if necessary
    if (currentSearchIndex < 0) {
        currentSearchIndex = searchResults.length - 1;
    } else if (currentSearchIndex >= searchResults.length) {
        currentSearchIndex = 0;
    }
    
    // Highlight new current result
    highlightCurrentResult();
    updateSearchResults();
}

function highlightCurrentResult() {
    if (searchResults.length === 0) return;
    
    // Remove previous current highlight
    searchResults.forEach(result => result.classList.remove('current'));
    
    // Add current highlight
    searchResults[currentSearchIndex].classList.add('current');
    
    // Scroll to current result
    searchResults[currentSearchIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Handle Enter key in search input
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('guideline-search');
    if (searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (e.shiftKey) {
                    navigateSearch(-1); // Shift+Enter: previous result
                } else {
                    navigateSearch(1); // Enter: next result
                }
            }
        });
    }
});

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('guidelines-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Function to create a drug card (for biological_agents.html and oral_medications.html)
function createDrugCard(drug, searchTerm = '') {
    const drugCard = document.createElement('div');
    drugCard.classList.add('drug-card');

    let html = `
        <h4>${highlightText(drug.name, searchTerm)}</h4>
        <p><strong>作用機序:</strong> ${highlightText(drug.mechanism, searchTerm)}</p>
        <p><strong>メーカー:</strong> ${highlightText(drug.manufacturer, searchTerm)}</p>
        <p><strong>薬価:</strong> ${highlightText(drug.price, searchTerm)}</p>
    `;

    // Detailed information section (initially hidden)
    let detailsHtml = '';

    if (drug.category === 'biological') {
        detailsHtml += `<p><strong>バイオシミラー:</strong> ${highlightText(drug.biosimilar, searchTerm)}</p>`;
        
        // Add detailed biosimilar information if available
        if (drug.biosimilar_details && drug.biosimilar_details.length > 0) {
            detailsHtml += '<button class="button secondary small biosimilar-details-button">バイオシミラー詳細情報</button>';
            detailsHtml += '<div class="biosimilar-details-content" style="display: none;">';
            detailsHtml += '<h5>バイオシミラー詳細情報</h5>';
            
            drug.biosimilar_details.forEach(biosimilar => {
                detailsHtml += '<div class="biosimilar-item">';
                detailsHtml += `<h6>${biosimilar.name}</h6>`;
                detailsHtml += `<p><strong>製造販売元:</strong> ${biosimilar.manufacturer}</p>`;
                detailsHtml += `<p><strong>発売時期:</strong> ${biosimilar.release_date}</p>`;
                detailsHtml += `<p><strong>先行品との適応一致:</strong> ${biosimilar.indication_match_with_originator}</p>`;
                detailsHtml += `<p><strong>薬価:</strong> ${biosimilar.price}</p>`;
                
                detailsHtml += '<div class="indication-comparison">';
                detailsHtml += '<p><strong>取得適応症:</strong></p>';
                detailsHtml += '<ul>';
                biosimilar.approved_indications.forEach(indication => {
                    detailsHtml += `<li>${indication}</li>`;
                });
                detailsHtml += '</ul>';
                detailsHtml += '</div>';
                detailsHtml += '</div>';
            });
            
            detailsHtml += '</div>';
        }
    } else if (drug.category === 'oral') {
        detailsHtml += `<p><strong>ジェネリック医薬品:</strong> ${highlightText(drug.generic, searchTerm)}</p>`;
        detailsHtml += `<p><strong>発売日:</strong> ${highlightText(drug.release_date, searchTerm)}</p>`;
    } else if (drug.category === 'topical') {
        if (drug.generic && drug.generic !== 'なし') {
            detailsHtml += `<p class="generic-info"><strong>ジェネリック医薬品:</strong> <span>${highlightText(drug.generic, searchTerm)}</span></p>`;
        } else {
            detailsHtml += `<p class="generic-info"><strong>ジェネリック医薬品:</strong> <span>なし</span></p>`;
        }
        detailsHtml += `<p><strong>発売日:</strong> ${highlightText(drug.release_date, searchTerm)}</p>`;
    }

    detailsHtml += `
        <p><strong>用法・用量:</strong> ${highlightText(drug.dosage, searchTerm)}</p>
        <p><strong>適応症:</strong> ${highlightText(drug.indications, searchTerm)}</p>
    `;

    if (drug.contraindications) {
        detailsHtml += `<p><strong>禁忌:</strong> ${highlightText(drug.contraindications, searchTerm)}</p>`;
    }

    // Add attachment links if available
    if (drug.attachments) {
        detailsHtml += '<div class="attachment-links">';
        if (drug.attachments.tensho_text) {
            detailsHtml += `<a href="package_insert.html?drug=${drug.id}&type=tensho_text" target="_blank" class="attachment-link">📄 テキストで見る</a>`;
        }
        if (drug.attachments.if_text) {
            detailsHtml += `<a href="package_insert.html?drug=${drug.id}&type=if_text" target="_blank" class="attachment-link">📋 IFファイルを見る</a>`;
        }
        detailsHtml += '</div>';
    }

    // Toggle details button
    html += `<button class="button secondary small toggle-details-button">詳細を見る</button>`;

    // Details content container
    html += `<div class="details-content" style="display: none;">${detailsHtml}</div>`;

    // Add favorite button
    const isFav = isFavorite(drug.id);
    html += `<button class="favorite-button" data-drug-id="${drug.id}">${isFav ? '★ お気に入り解除' : '☆ お気に入り登録'}</button>`;

    drugCard.innerHTML = html;

    // Add event listener for toggle button
    drugCard.querySelector('.toggle-details-button').addEventListener('click', function() {
        const detailsContent = drugCard.querySelector('.details-content');
        if (detailsContent.style.display === 'none') {
            detailsContent.style.display = 'block';
            this.textContent = '閉じる';
        } else {
            detailsContent.style.display = 'none';
            this.textContent = '詳細を見る';
        }
    });

    // Add event listener for biosimilar details button if it exists
    const biosimilarButton = drugCard.querySelector('.biosimilar-details-button');
    if (biosimilarButton) {
        biosimilarButton.addEventListener('click', function() {
            const biosimilarContent = drugCard.querySelector('.biosimilar-details-content');
            if (biosimilarContent.style.display === 'none') {
                biosimilarContent.style.display = 'block';
                this.textContent = 'バイオシミラー詳細を閉じる';
            } else {
                biosimilarContent.style.display = 'none';
                this.textContent = 'バイオシミラー詳細情報';
            }
        });
    }

    return drugCard;
}

// Helper function for text highlighting
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
    return text.replace(regex, '<mark class="highlight">$1</mark>');
}

// --- Search Page Specific Functions ---

function populateDrugNameCheckboxes() {
    const biologicalContainer = document.getElementById('biological-drug-checkboxes');
    const oralContainer = document.getElementById('oral-drug-checkboxes');
    const topicalContainer = document.getElementById('topical-drug-checkboxes');
    
    if (!biologicalContainer || !oralContainer || !topicalContainer) return;

    // Clear existing content
    biologicalContainer.innerHTML = '';
    oralContainer.innerHTML = '';
    topicalContainer.innerHTML = '';

    drugs.forEach(drug => {
        const checkboxDiv = document.createElement('div');
        checkboxDiv.classList.add('filter-checkbox');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `drug-${drug.id}`;
        checkbox.value = drug.id;

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = drug.name;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);

        // カテゴリ別にコンテナに追加
        if (drug.category === 'biological') {
            biologicalContainer.appendChild(checkboxDiv);
        } else if (drug.category === 'oral') {
            oralContainer.appendChild(checkboxDiv);
        } else if (drug.category === 'topical') {
            topicalContainer.appendChild(checkboxDiv);
        }
    });
}

function displaySelectedDrugsOnSearchPage() {
    const biologicalContainer = document.getElementById('biological-agents-search-results');
    const oralContainer = document.getElementById('oral-medications-search-results');
    const topicalContainer = document.getElementById('topical-medications-search-results');

    // Clear previous results from all category containers
    biologicalContainer.innerHTML = '';
    oralContainer.innerHTML = '';
    topicalContainer.innerHTML = '';

    const selectedDrugIds = Array.from(document.querySelectorAll('#biological-drug-checkboxes input[type="checkbox"]:checked, #oral-drug-checkboxes input[type="checkbox"]:checked, #topical-drug-checkboxes input[type="checkbox"]:checked'))
                                .map(checkbox => checkbox.value);

    if (selectedDrugIds.length === 0) {
        // If no drugs are selected, show a message in each category container
        biologicalContainer.innerHTML = '';
        oralContainer.innerHTML = '';
        topicalContainer.innerHTML = '';
        biologicalContainer.innerHTML = '<p>表示する薬剤を選択してください。</p>';
        return;
    }

    const filteredDrugs = drugs.filter(drug => selectedDrugIds.includes(drug.id));

    const searchInput = document.getElementById('search-keyword-input');
    const searchTerm = searchInput ? searchInput.value.trim() : '';

    filteredDrugs.forEach(drug => {
        const drugCard = createDrugCard(drug, searchTerm);
        if (drug.category === 'biological') {
            biologicalContainer.appendChild(drugCard);
        } else if (drug.category === 'oral') {
            oralContainer.appendChild(drugCard);
        } else if (drug.category === 'topical') {
            topicalContainer.appendChild(drugCard);
        }
    });

    attachFavoriteEventListeners();
}


// Helper functions for Favorites
function getFavorites() {
    const favorites = localStorage.getItem('favoriteDrugs');
    return favorites ? JSON.parse(favorites) : [];
}

function saveFavorites(favorites) {
    localStorage.setItem('favoriteDrugs', JSON.stringify(favorites));
}

function isFavorite(drugId) {
    return getFavorites().includes(drugId);
}

function toggleFavorite(drugId) {
    let favorites = getFavorites();
    if (favorites.includes(drugId)) {
        favorites = favorites.filter(id => id !== drugId);
    } else {
        favorites.push(drugId);
    }
    saveFavorites(favorites);
    return isFavorite(drugId); // Return new favorite status
}

// Attach event listeners for favorite buttons
function attachFavoriteEventListeners() {
    document.querySelectorAll('.favorite-button').forEach(button => {
        button.removeEventListener('click', handleFavoriteClick); // Prevent duplicate listeners
        button.addEventListener('click', handleFavoriteClick);
    });
}

// Event handler for favorite buttons
function handleFavoriteClick() {
    const drugId = this.dataset.drugId;
    const isFav = toggleFavorite(drugId);
    this.textContent = isFav ? '★ お気に入り解除' : '☆ お気に入り登録';
}


// Function to populate drug selection dropdowns on index.html
function populateDrugSelects() {
    const select1 = document.getElementById('drug-select-1');
    const select2 = document.getElementById('drug-select-2');
    const select3 = document.getElementById('drug-select-3');

    if (!select1 || !select2 || !select3) return; // Only run on index.html

    // Clear existing options (except the first placeholder)
    select1.innerHTML = '<option value="">薬剤1を選択</option>';
    select2.innerHTML = '<option value="">薬剤2を選択</option>';
    select3.innerHTML = '<option value="">薬剤3を選択</option>';

    drugs.forEach(drug => {
        const option1 = document.createElement('option');
        option1.value = drug.id;
        option1.textContent = drug.name;
        select1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = drug.id;
        option2.textContent = drug.name;
        select2.appendChild(option2);

        const option3 = document.createElement('option');
        option3.value = drug.id;
        option3.textContent = drug.name;
        select3.appendChild(option3);
    });
}

// Function to generate comparison table
function generateComparisonTable() {
    console.log("generateComparisonTable function called"); // デバッグ情報
    const selectedDrugIds = [
        document.getElementById('drug-select-1').value,
        document.getElementById('drug-select-2').value,
        document.getElementById('drug-select-3').value
    ].filter(id => id !== ''); // Filter out empty selections
    console.log("Selected drug IDs:", selectedDrugIds); // デバッグ情報

    const comparisonTableContainer = document.getElementById('comparison-table-container');
    comparisonTableContainer.innerHTML = ''; // Clear previous table

    if (selectedDrugIds.length === 0) {
        comparisonTableContainer.innerHTML = '<p>比較する薬剤を選択してください。</p>';
        return;
    }

    const selectedDrugs = drugs.filter(drug => selectedDrugIds.includes(drug.id));
    console.log("Selected drugs data:", selectedDrugs); // デバッグ情報

    let tableHtml = '<table class="comparison-table"><thead><tr><th>項目</th>';
    selectedDrugs.forEach(drug => {
        tableHtml += `<th>${drug.name}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';

    const propertiesToCompare = [
        { label: '作用機序', key: 'mechanism' },
        { label: 'メーカー', key: 'manufacturer' },
        { label: '薬価', key: 'price' },
        { label: 'バイオシミラー/ジェネリック', key: 'biosimilar' },
        { label: '発売日', key: 'release_date' },
        { label: '用法・用量', key: 'dosage' },
        { label: '適応症', key: 'indications' },
        { label: '禁忌', key: 'contraindications' } // 禁忌情報を比較項目に追加
    ];

    propertiesToCompare.forEach(prop => {
        tableHtml += `<tr><td>${prop.label}</td>`;
        selectedDrugs.forEach(drug => {
            let value = drug[prop.key] || '-';
            // Handle biosimilar/generic display based on category
            if (prop.key === 'biosimilar') {
                if (drug.category === 'biological') {
                    value = drug.biosimilar || 'なし';
                } else if (drug.category === 'oral') {
                    value = drug.generic || 'なし';
                }
            } else if (prop.key === 'release_date' && drug.category === 'biological') {
                // Biological drugs don't have release_date in data.js, so display '-' if not present
                value = drug.release_date || '-';
            }
            tableHtml += `<td>${value}</td>`;
        });
        tableHtml += '</tr>';
    });

    tableHtml += '</tbody></table>';
    comparisonTableContainer.innerHTML = tableHtml;
    console.log("Table HTML generated and inserted"); // デバッグ情報
}

// --- Patient Symptom Checklist Page Functions ---

/**
 * Populates the checklist form with data from symptomData.
 */
function populateSymptomChecklist() {
    if (typeof symptomData === 'undefined') {
        console.error('symptom_data.js is not loaded or symptomData is not defined.');
        return;
    }

    const createCheckboxes = (containerId, items) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = ''; // Clear existing content
        items.forEach(item => {
            const checkboxDiv = document.createElement('div');
            checkboxDiv.classList.add('filter-checkbox');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `chk-${containerId}-${item.replace(/\s|\(|\)|\/|%/g, '')}`;
            checkbox.value = item;

            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = item;

            checkboxDiv.appendChild(checkbox);
            checkboxDiv.appendChild(label);
            container.appendChild(checkboxDiv);
        });
    };

    createCheckboxes('symptom-filters', symptomData.症状);
    createCheckboxes('severity-filters', symptomData.重症度);
    createCheckboxes('comorbidity-filters', symptomData.合併症);
    createCheckboxes('history-filters', symptomData.既往歴);
}

/**
 * Displays the selected checklist items in the results area.
 */
function displaySelectedSymptoms() {
    const resultsContainer = document.getElementById('symptom-results-container');
    if (!resultsContainer) return;

    const getSelectedItems = (containerId) => {
        return Array.from(document.querySelectorAll(`#${containerId} input[type="checkbox"]:checked`))
                    .map(checkbox => checkbox.value);
    };

    const selectedSymptoms = getSelectedItems('symptom-filters');
    const selectedEvaluation = getSelectedItems('evaluation-filters');
    const selectedComorbidities = getSelectedItems('comorbidity-filters');
    const selectedTriggers = getSelectedItems('trigger-filters');

    let html = '';

    const appendDetails = (categoryName, selectedItems, dataCategory) => {
        if (selectedItems.length > 0) {
            html += `<h4>${categoryName}</h4><ul>`;
            selectedItems.forEach(selectedTerm => {
                const item = dataCategory.find(d => (typeof d === 'string' ? d : d.term) === selectedTerm);
                if (item) {
                    const displayText = typeof item === 'string' ? item : item.term;
                    const description = typeof item === 'object' && item.description ? item.description : '';
                    html += `<li><strong>${displayText}</strong>`;
                    if (description) {
                        html += `<br><small>${description}</small>`;
                    }
                    html += `</li>`;
                }
            });
            html += `</ul>`;
        }
    };

    appendDetails('症状', selectedSymptoms, symptomData.症状);
    appendDetails('評価指標', selectedEvaluation, symptomData.評価指標);
    appendDetails('合併症', selectedComorbidities, symptomData.合併症);
    appendDetails('増悪・誘発因子', selectedTriggers, symptomData["増悪・誘発因子"]);

    if (selectedSymptoms.length === 0 && selectedEvaluation.length === 0 && selectedComorbidities.length === 0 && selectedTriggers.length === 0) {
        resultsContainer.innerHTML = '<p>確認する項目をチェックしてください。</p>';
    } else {
        resultsContainer.innerHTML = html;
    }
}

// Create checkboxes for symptom data
function createCheckboxes(containerId, dataArray) {
    const container = document.getElementById(containerId);
    if (!container || !dataArray) return;
    
    container.innerHTML = ''; // Clear existing content
    
    dataArray.forEach((item, index) => {
        const checkboxDiv = document.createElement('div');
        checkboxDiv.classList.add('filter-checkbox');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${containerId}-${index}`;
        checkbox.value = typeof item === 'string' ? item : item.term;
        
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = typeof item === 'string' ? item : item.term;
        
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        container.appendChild(checkboxDiv);
    });
}

// Initialize symptom checker page
function initializeSymptomChecker() {
    // Create checkboxes for each category
    if (typeof symptomData !== 'undefined') {
        createCheckboxes('symptom-filters', symptomData.症状);
        createCheckboxes('evaluation-filters', symptomData.評価指標);
        createCheckboxes('comorbidity-filters', symptomData.合併症);
        createCheckboxes('trigger-filters', symptomData["増悪・誘発因子"]);
        
        // Add event listener to the show symptoms button
        const showSymptomsButton = document.getElementById('show-symptoms-button');
        if (showSymptomsButton) {
            showSymptomsButton.addEventListener('click', displaySelectedSymptoms);
        }
    }
}


function displayFavoriteDrugs() {
    const favoriteDrugListContainer = document.getElementById('favorite-drug-list-container');
    if (!favoriteDrugListContainer) return;

    favoriteDrugListContainer.innerHTML = ''; // Clear previous results

    const favoriteIds = getFavorites();

    if (favoriteIds.length === 0) {
        favoriteDrugListContainer.innerHTML = '<p>お気に入りの薬剤はまだ登録されていません。</p>';
        return;
    }

    const favoriteDrugs = drugs.filter(drug => favoriteIds.includes(drug.id));

    favoriteDrugs.forEach(drug => {
        favoriteDrugListContainer.appendChild(createDrugCard(drug));
    });

    attachFavoriteEventListeners();
}

// Function to load drugs by category
function loadDrugs(category) {
    if (category === 'biological') {
        const container = document.getElementById('biological-drugs-container');
        if (container) {
            container.innerHTML = '';
            const biologicalDrugs = drugs.filter(drug => drug.category === 'biological');
            
            if (biologicalDrugs.length === 0) {
                container.innerHTML = '<p>生物学的製剤データが見つかりません。</p>';
                return;
            }
            
            biologicalDrugs.forEach(drug => {
                const drugCard = createDrugCard(drug);
                container.appendChild(drugCard);
            });
            attachFavoriteEventListeners();
        }
    } else if (category === 'oral') {
        const container = document.getElementById('oral-drugs-container');
        if (container) {
            container.innerHTML = '';
            const oralDrugs = drugs.filter(drug => drug.category === 'oral');
            
            if (oralDrugs.length === 0) {
                container.innerHTML = '<p>内服薬データが見つかりません。</p>';
                return;
            }
            
            oralDrugs.forEach(drug => {
                const drugCard = createDrugCard(drug);
                container.appendChild(drugCard);
            });
            attachFavoriteEventListeners();
        }
    } else if (category === 'topical') {
        loadTopicalDrugs();
    }
}

// Function to load topical drugs with subcategory classification
function loadTopicalDrugs() {
    const topicalDrugs = drugs.filter(drug => drug.category === 'topical');
    
    // Clear all containers first
    const containers = [
        'strongest-steroids', 'very-strong-steroids', 'strong-steroids', 
        'medium-steroids', 'weak-steroids', 'vitamin-d3-high-conc', 
        'vitamin-d3-low-conc', 'combination-topical', 'calcineurin-inhibitor',
        'ahr-modulator'
    ];
    containers.forEach(id => {
        const container = document.getElementById(id);
        if (container) container.innerHTML = '';
    });
    
    topicalDrugs.forEach(drug => {
        const drugCard = createDrugCard(drug);
        let targetContainer = null;
        
        // Categorize by mechanism and strength
        if (drug.mechanism.includes('ステロイド外用薬')) {
            if (drug.mechanism.includes('最も強い')) {
                targetContainer = document.getElementById('strongest-steroids');
            } else if (drug.mechanism.includes('非常に強い')) {
                targetContainer = document.getElementById('very-strong-steroids');
            } else if (drug.mechanism.includes('強い')) {
                targetContainer = document.getElementById('strong-steroids');
            } else if (drug.mechanism.includes('普通')) {
                targetContainer = document.getElementById('medium-steroids');
            } else if (drug.mechanism.includes('弱い')) {
                targetContainer = document.getElementById('weak-steroids');
            }
        } else if (drug.mechanism.includes('活性型ビタミンD3')) {
            if (drug.mechanism.includes('高濃度')) {
                targetContainer = document.getElementById('vitamin-d3-high-conc');
            } else if (drug.mechanism.includes('低濃度')) {
                targetContainer = document.getElementById('vitamin-d3-low-conc');
            }
        } else if (drug.mechanism.includes('ビタミンD3+ステロイド')) {
            targetContainer = document.getElementById('combination-topical');
        } else if (drug.mechanism.includes('カルシニューリン阻害薬')) {
            targetContainer = document.getElementById('calcineurin-inhibitor');
        } else if (drug.mechanism.includes('芳香族炭化水素受容体') || drug.mechanism.includes('AhR')) {
            targetContainer = document.getElementById('ahr-modulator');
        }
        
        if (targetContainer) {
            targetContainer.appendChild(drugCard);
        }
    });
    
    attachFavoriteEventListeners();
}

// Function to load biosimilar drugs
function loadBiosimilarDrugs() {
    const container = document.getElementById('biosimilar-drugs-container');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    // Use new biosimilar data structure
    if (typeof biosimilarData === 'undefined') {
        container.innerHTML = '<p>バイオシミラーデータが見つかりません。</p>';
        return;
    }
    
    if (biosimilarData.length === 0) {
        container.innerHTML = '<p>バイオシミラー情報が見つかりません。</p>';
        return;
    }
    
    biosimilarData.forEach(originatorData => {
        // Create a section for each originator drug
        const originatorSection = document.createElement('div');
        originatorSection.className = 'biosimilar-originator-section';
        
        const originatorTitle = document.createElement('h4');
        originatorTitle.textContent = `${originatorData.originator.name} のバイオシミラー`;
        originatorTitle.className = 'biosimilar-originator-title';
        originatorSection.appendChild(originatorTitle);
        
        // Create cards for each biosimilar
        const biosimilarContainer = document.createElement('div');
        biosimilarContainer.className = 'biosimilar-cards-container';
        
        originatorData.biosimilars.forEach(biosimilar => {
            const biosimilarCard = createBiosimilarCard(biosimilar, originatorData.originator);
            biosimilarContainer.appendChild(biosimilarCard);
        });
        
        originatorSection.appendChild(biosimilarContainer);
        container.appendChild(originatorSection);
    });
}

// Function to create a biosimilar card
function createBiosimilarCard(biosimilar, originatorDrug) {
    const card = document.createElement('div');
    card.className = 'drug-card biosimilar-card';
    
    let indicationMatchClass = '';
    if (biosimilar.indication_match_with_originator === '完全一致') {
        indicationMatchClass = 'indication-match-complete';
    } else {
        indicationMatchClass = 'indication-match-partial';
    }
    
    card.innerHTML = `
        <div class="drug-card-header">
            <h4>${biosimilar.name}</h4>
            <button class="copy-button" title="製剤名をコピー">📋</button>
        </div>
        <p><strong>製造販売元:</strong> ${biosimilar.manufacturer}</p>
        <p><strong>発売時期:</strong> ${biosimilar.release_date}</p>
        <p><strong>薬価:</strong> ${biosimilar.price}</p>
        <p class="indication-match ${indicationMatchClass}">
            <strong>先行品との適応一致:</strong> ${biosimilar.indication_match_with_originator}
        </p>
        ${biosimilar.market_share ? `<p><strong>市場シェア:</strong> ${biosimilar.market_share}</p>` : ''}
        ${biosimilar.special_notes ? `<p class="special-notes"><strong>特記事項:</strong> ${biosimilar.special_notes}</p>` : ''}
        
        <button class="button secondary small biosimilar-comparison-button">適応症比較</button>
        <button class="button secondary small biosimilar-details-button">詳細情報</button>
        <a href="https://www.info.pmda.go.jp/psearch/html/menu_tenpu_base.html" target="_blank" rel="noopener noreferrer" class="button primary small">添付文章はこちらから</a>
        
        <div class="biosimilar-comparison-content" style="display: none;">
            <div class="indication-comparison-grid">
                <div class="originator-indications">
                    <h6>先行品（${originatorDrug.name}）の適応症</h6>
                    <ul>
                        ${originatorDrug.indications.map(ind => {
                            const isApproved = biosimilar.approved_indications.map(a => a.replace(/\s/g, '').toLowerCase()).includes(ind.replace(/\s/g, '').toLowerCase());
                            return `<li class="${isApproved ? '' : 'unapproved-indication'}">${ind.trim()}</li>`;
                        }).join('')}
                    </ul>
                </div>
                <div class="biosimilar-indications">
                    <h6>バイオシミラーの適応症</h6>
                    <ul>
                        ${biosimilar.approved_indications.map(ind => `<li>${ind}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="biosimilar-detail-content" style="display: none;">
            <h6>製品詳細</h6>
            <ul>
                ${biosimilar.manufacturing_cell ? `<li><strong>製造細胞:</strong> ${biosimilar.manufacturing_cell}</li>` : ''}
                ${biosimilar.formulation_features ? `<li><strong>製剤特徴:</strong> ${biosimilar.formulation_features}</li>` : ''}
                ${biosimilar.device_support ? `<li><strong>デバイス/サポート:</strong> ${biosimilar.device_support}</li>` : ''}
                ${biosimilar.special_notes ? `<li><strong>その他特記事項:</strong> ${biosimilar.special_notes}</li>` : ''}
            </ul>
        </div>
    `;

    // Add event listener for copy button
    const copyButton = card.querySelector('.copy-button');
    copyButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent card from toggling
        navigator.clipboard.writeText(biosimilar.name).then(() => {
            copyButton.textContent = '✅';
            setTimeout(() => {
                copyButton.textContent = '📋';
            }, 1500);
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });
    
    // Add event listener for comparison button
    const comparisonButton = card.querySelector('.biosimilar-comparison-button');
    comparisonButton.addEventListener('click', function() {
        const comparisonContent = card.querySelector('.biosimilar-comparison-content');
        if (comparisonContent.style.display === 'none') {
            comparisonContent.style.display = 'block';
            this.textContent = '適応症比較を閉じる';
        } else {
            comparisonContent.style.display = 'none';
            this.textContent = '適応症比較';
        }
    });

    // Add event listener for details button
    const detailsButton = card.querySelector('.biosimilar-details-button');
    detailsButton.addEventListener('click', function() {
        const detailContent = card.querySelector('.biosimilar-detail-content');
        if (detailContent.style.display === 'none') {
            detailContent.style.display = 'block';
            this.textContent = '詳細情報を閉じる';
        } else {
            detailContent.style.display = 'none';
            this.textContent = '詳細情報';
        }
    });
    
    return card;
}

// Initial load based on current page
document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.title;

    // Check for specific elements instead of just page title to be more reliable
    if (document.getElementById('biological-drugs-container')) {
        loadDrugs('biological');
    } else if (document.getElementById('oral-drugs-container')) {
        loadDrugs('oral');
    } else if (document.getElementById('strongest-steroids')) {
        loadDrugs('topical');
    } else if (document.getElementById('biosimilar-drugs-container')) {
        loadBiosimilarDrugs();
    } else if (pageTitle.includes('PsoriasisMed - 乾癬治療薬情報')) { // index.html
        populateDrugSelects();
        const comparisonButton = document.getElementById('start-comparison-button');
        if (comparisonButton) {
            comparisonButton.addEventListener('click', generateComparisonTable);
        }
    } else if (pageTitle.includes('薬剤検索')) { // search.html
        populateDrugNameCheckboxes(); // Call new function for search page
        const showSelectedButton = document.getElementById('show-selected-drugs-button');
        if (showSelectedButton) {
            showSelectedButton.addEventListener('click', displaySelectedDrugsOnSearchPage);
        }
    } else if (pageTitle.includes('患者症状確認表')) { // patient_symptom_checklist.html
        populateSymptomChecklist();
        const showButton = document.getElementById('show-symptoms-button');
        if (showButton) {
            showButton.addEventListener('click', displaySelectedSymptoms);
        }
    } else if (pageTitle.includes('お気に入り')) { // favorites.html
        displayFavoriteDrugs();
    }
});

// --- Research Papers Page Functions ---

function loadResearchPapers() {
    const container = document.getElementById('research-papers-container');
    if (!container) return;

    container.innerHTML = '';

    if (typeof researchPapersData === 'undefined' || researchPapersData.length === 0) {
        container.innerHTML = '<p>論文データが見つかりません。</p>';
        return;
    }

    researchPapersData.forEach(paper => {
        const paperCard = createResearchPaperCard(paper);
        container.appendChild(paperCard);
    });
}

function createResearchPaperCard(paper) {
    const card = document.createElement('div');
    card.className = 'research-paper-card';

    card.innerHTML = `
        <h4>${paper.title}</h4>
        <p class="paper-meta"><strong>著者:</strong> ${paper.authors}</p>
        <p class="paper-meta"><strong>ジャーナル:</strong> ${paper.journal}, ${paper.year}</p>
        <div class="paper-summary">
            <h5>概要</h5>
            <p>${paper.summary}</p>
        </div>
        <div class="paper-links">
            <a href="research_papers/pdf/${paper.pdf_filename}" target="_blank" class="button secondary small">原文PDF</a>
            <a href="translation_viewer.html?paper=${paper.translation_filename}" target="_blank" class="button primary small">日本語翻訳</a>
        </div>
    `;
    return card;
}

// --- Translation Viewer Page Functions ---

function loadTranslation() {
    const params = new URLSearchParams(window.location.search);
    const paperFilename = params.get('paper');
    const container = document.getElementById('translation-content');
    const titleContainer = document.getElementById('translation-title');

    if (!paperFilename || !container || !titleContainer) return;

    // Find the paper data to get the title
    const paperData = researchPapersData.find(p => p.translation_filename === paperFilename);
    if (paperData) {
        titleContainer.textContent = paperData.title;
    } else {
        titleContainer.textContent = '翻訳';
    }

    container.innerHTML = '<p>翻訳を読み込み中...</p>';

    fetch(`research_papers/translations/${paperFilename}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`翻訳ファイルが見つかりません (HTTP ${response.status})`);
            }
            return response.text();
        })
        .then(text => {
            // Simple text to HTML conversion (paragraphs)
            const htmlContent = '<p>' + text.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>') + '</p>';
            container.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Fetch error:', error);
            container.innerHTML = `<p style="color: red;">翻訳の読み込みに失敗しました: ${error.message}</p>`;
        });
}

// --- Package Insert Viewer Page Functions ---



// --- General Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // This will run on all pages. We use specific checks inside functions to see if they should execute.
    
    // For pages that display drug cards
    if (document.querySelector('.drug-card-container, .drug-cards-grid, #favorite-drug-list-container')) {
        attachFavoriteEventListeners();
    }

    // For the research papers page
    if (document.getElementById('research-papers-container')) {
        loadResearchPapers();
    }

    // For the translation viewer page
    if (document.getElementById('translation-content')) {
        loadTranslation();
    }

    // For the package insert viewer page
    if (document.getElementById('package-insert-content')) {
        loadPackageInsert();
    }
});
