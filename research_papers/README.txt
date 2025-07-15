医学論文情報システム

このフォルダには乾癬治療に関する医学論文の管理システムが含まれています。

■ フォルダ構成:
research_papers/
├── pdf/                    # PDF論文ファイル格納フォルダ
│   ├── README.txt         # PDF配置ガイド
│   └── [論文PDFファイル]   # 実際のPDFファイルをここに配置
├── translations/          # 日本語翻訳テキストファイル格納フォルダ
│   ├── README.txt        # 翻訳ファイルガイド
│   ├── *.txt            # 日本語翻訳ファイル（既に5つ作成済み）
│   └── [新しい翻訳]      # 新しい翻訳ファイルをここに追加
└── README.txt            # このファイル（総合ガイド）

■ システム概要:
1. research_papers_data.js: 論文データベース（メタデータ管理）
2. research_papers.html: 論文一覧ページ
3. translation_viewer.html: 日本語翻訳表示ページ
4. style.css: 関連スタイリング

■ 使用方法:

【論文を追加する手順】
1. research_papers_data.js に論文情報を追加
2. PDFファイルを pdf/ フォルダに配置
3. 日本語翻訳を translations/ フォルダに配置（.txt形式）

【論文情報の設定例】
research_papers_data.js に以下の形式で追加:

{
    title: "論文タイトル",
    authors: "著者名",
    journal: "雑誌名",
    year: "発行年",
    abstract: "要約",
    keywords: "キーワード",
    pdf_url: "research_papers/pdf/ファイル名.pdf",
    translation_url: "translation_viewer.html?file=ファイル名"
}

■ 現在の論文（5つ準備済み）:
1. 乾癬治療における生物学的製剤の効果：システマティックレビュー（2023年）
2. 乾癬性関節炎における早期診断と治療戦略（2023年）
3. IL-23阻害薬の長期安全性に関する多施設共同研究（2022年）
4. 乾癬患者におけるメタボリックシンドロームの管理と治療選択（2022年）
5. 小児乾癬の治療選択と長期予後に関する前向きコホート研究（2024年）

■ 特徴:
- Apple風のモダンなデザイン
- モバイル対応
- 検索・フィルタリング機能
- 印刷対応
- クリップボードコピー機能
- エラーハンドリング

■ 技術仕様:
- HTML5/CSS3/JavaScript
- レスポンシブデザイン
- HTTPサーバー必須（file://プロトコルでは動作しません）

■ 推奨サーバー起動方法:
python3 -m http.server 8080
→ http://localhost:8080 でアクセス

■ トラブルシューティング:
- PDFが表示されない → ファイル名とパスを確認
- 翻訳が表示されない → txtファイルの文字エンコーディング（UTF-8）を確認
- データが表示されない → HTTPサーバーが起動しているか確認

■ カスタマイズ:
- style.css でデザインを調整可能
- research_papers_data.js でデータを管理
- translation_viewer.html で翻訳表示をカスタマイズ可能