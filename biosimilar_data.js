// バイオシミラー専用データ
const biosimilarData = [
    {
        originator: {
            id: 'remicade',
            name: 'インフリキシマブ (レミケード®)',
            manufacturer: '田辺三菱製薬',
            indications: [
                '関節リウマチ',
                'クローン病',
                '潰瘍性大腸炎',
                'ベーチェット病による難治性網膜ぶどう膜炎',
                '乾癬（尋常性、関節症性、膿疱性、紅皮症）',
                '強直性脊椎炎',
                '腸管型・神経型・血管型ベーチェット病',
                '川崎病の急性期'
            ]
        },
        biosimilars: [
            {
                id: 'infliximab-bs-nk',
                name: 'インフリキシマブBS点滴静注用100mg「NK」',
                manufacturer: 'セルトリオン・ヘルスケア・ジャパン / 日本化薬',
                release_date: '2014年11月',
                approved_indications: [
                    '関節リウマチ',
                    'クローン病',
                    '潰瘍性大腸炎',
                    'ベーチェット病による難治性網膜ぶどう膜炎',
                    '乾癬（尋常性、関節症性、膿疱性、紅皮症）',
                    '強直性脊椎炎'
                ],
                indication_match_with_originator: '一部不一致',
                price: '17,099円 (100mg/瓶)',
                manufacturing_cell: 'マウス骨髄腫由来細胞 (先行品と同様)',
                formulation_features: 'リン酸緩衝液を使用。',
                device_support: 'なし',
                special_notes: '日本で最初に承認されたインフリキシマブ・バイオシミラー。「インフリキシマブ後続1」として分類される。'
            },
            {
                id: 'infliximab-bs-cth',
                name: 'インフリキシマブBS点滴静注用100mg「CTH」',
                manufacturer: 'セルトリオン・ヘルスケア・ジャパン',
                release_date: '2014年7月承認',
                approved_indications: [
                    '関節リウマチ',
                    'クローン病',
                    '潰瘍性大腸炎',
                    'ベーチェット病による難治性網膜ぶどう膜炎',
                    '乾癬（尋常性、関節症性、膿疱性、紅皮症）',
                    '強直性脊椎炎'
                ],
                indication_match_with_originator: '一部不一致',
                price: '17,099円 (100mg/瓶)',
                manufacturing_cell: 'マウス骨髄腫由来細胞 (先行品と同様)',
                formulation_features: 'リン酸緩衝液を使用。',
                device_support: 'なし',
                special_notes: '「NK」と同一企業による製品。'
            },
            {
                id: 'infliximab-bs-ayumi',
                name: 'インフリキシマブBS点滴静注用100mg「あゆみ」',
                manufacturer: 'あゆみ製薬',
                release_date: '2017年11月',
                approved_indications: [
                    '関節リウマチ',
                    'クローン病',
                    '潰瘍性大腸炎',
                    'ベーチェット病による難治性網膜ぶどう膜炎',
                    '乾癬（尋常性、関節症性、膿疱性、紅皮症）',
                    '強直性脊椎炎'
                ],
                indication_match_with_originator: '一部不一致',
                price: '17,099円 (100mg/瓶)',
                manufacturing_cell: 'チャイニーズハムスター卵巣（CHO）細胞',
                formulation_features: 'リン酸緩衝液を使用。',
                device_support: 'なし',
                special_notes: '製造細胞株が先行品と異なる。「インフリキシマブ後続2」として分類される。'
            },
            {
                id: 'infliximab-bs-nichiiko',
                name: 'インフリキシマブBS点滴静注用100mg「日医工」',
                manufacturer: '日医工',
                release_date: '2017年11月',
                approved_indications: [
                    '関節リウマチ',
                    'クローン病',
                    '潰瘍性大腸炎',
                    'ベーチェット病による難治性網膜ぶどう膜炎',
                    '乾癬（尋常性、関節症性、膿疱性、紅皮症）',
                    '強直性脊椎炎'
                ],
                indication_match_with_originator: '一部不一致',
                price: '17,099円 (100mg/瓶)',
                manufacturing_cell: 'チャイニーズハムスター卵巣（CHO）細胞',
                formulation_features: 'リン酸緩衝液を使用。',
                device_support: 'なし',
                special_notes: '「あゆみ」と同様に「インフリキシマブ後続2」に分類される。'
            },
            {
                id: 'infliximab-bs-pfizer',
                name: 'インフリキシマブBS点滴静注用100mg「ファイザー」',
                manufacturer: 'ファイザー',
                release_date: '2018年7月',
                approved_indications: [
                    '関節リウマチ',
                    'クローン病',
                    '潰瘍性大腸炎',
                    'ベーチェット病による難治性網膜ぶどう膜炎',
                    '乾癬（尋常性、関節症性、膿疱性、紅皮症）',
                    '強直性脊椎炎'
                ],
                indication_match_with_originator: '一部不一致',
                price: '17,099円 (100mg/瓶)',
                manufacturing_cell: '（情報なし）',
                formulation_features: '緩衝液としてコハク酸を使用（他剤はリン酸）。製剤のpHが他剤より低めに設定されている。',
                device_support: 'なし',
                special_notes: '「インフリキシマブ後続3」として分類される。'
            }
        ]
    },
    {
        originator: {
            id: 'humira',
            name: 'アダリムマブ (ヒュミラ®)',
            manufacturer: 'アッヴィ',
            indications: [
                '関節リウマチ',
                '多関節に活動性を有する若年性特発性関節炎',
                '強直性脊椎炎',
                'X線基準を満たさない体軸性脊椎関節炎',
                '尋常性乾癬、関節症性乾癬、膿疱性乾癬',
                '化膿性汗腺炎',
                '壊疽性膿皮症',
                'クローン病',
                '潰瘍性大腸炎',
                '腸管型ベーチェット病',
                '非感染性の中間部、後部又は汎ぶどう膜炎'
            ]
        },
        biosimilars: [
            {
                id: 'adalimumab-bs-fkb',
                name: 'アダリムマブBS「FKB」',
                manufacturer: '協和キリン富士フイルムバイオロジクス / サンド',
                release_date: '2020年6月',
                approved_indications: [
                    '関節リウマチ',
                    '強直性脊椎炎',
                    'X線基準を満たさない体軸性脊椎関節炎',
                    '多関節に活動性を有する若年性特発性関節炎',
                    '尋常性乾癬、関節症性乾癬、膿疱性乾癬',
                    '壊疽性膿皮症',
                    'クローン病',
                    '潰瘍性大腸炎',
                    '腸管型ベーチェット病',
                    '非感染性の中間部、後部又は汎ぶどう膜炎'
                ],
                indication_match_with_originator: '一部不一致',
                price: 'シリンジ: 20,630円, ペン: 18,636円',
                manufacturing_cell: '完全ヒト抗体',
                formulation_features: '標準濃度 (40mg/0.8mL)',
                device_support: 'ペン型デバイスあり。患者の生活スタイルを重視した情報提供。',
                special_notes: '完全ヒト抗体であり、理論的にアレルギー反応等のリスクが低いとされる。壊疽性膿皮症の適応を持つ唯一のバイオシミラー。'
            },
            {
                id: 'adalimumab-bs-daiichisankyo',
                name: 'アダリムマブBS「第一三共」',
                manufacturer: '第一三共',
                release_date: '2021年3月',
                approved_indications: [
                    '関節リウマチ',
                    '強直性脊椎炎',
                    'X線基準を満たさない体軸性脊椎関節炎',
                    '多関節に活動性を有する若年性特発性関節炎',
                    '尋常性乾癬、関節症性乾癬、膿疱性乾癬',
                    'クローン病',
                    '潰瘍性大腸炎',
                    '腸管型ベーチェット病',
                    '非感染性の中間部、後部又は汎ぶどう膜炎'
                ],
                indication_match_with_originator: '一部不一致',
                price: 'シリンジ: 20,630円, ペン: 18,636円',
                manufacturing_cell: '完全ヒト抗体',
                formulation_features: 'クエン酸塩フリー製剤（緩衝剤: 氷酢酸）。注射時の疼痛軽減を目的とした設計。',
                device_support: '独自の包括的患者サポートプログラム「TOMO」を提供。',
                special_notes: '製剤の工夫と手厚いサポートで差別化。化膿性汗腺炎、壊疽性膿皮症の適応なし。'
            },
            {
                id: 'adalimumab-bs-ma',
                name: 'アダリムマブBS「MA」',
                manufacturer: '持田製薬 / あゆみ製薬',
                release_date: '2021年1月',
                approved_indications: [
                    '関節リウマチ',
                    '強直性脊椎炎',
                    'X線基準を満たさない体軸性脊椎関節炎',
                    '多関節に活動性を有する若年性特発性関節炎',
                    '尋常性乾癬、関節症性乾癬、膿疱性乾癬',
                    'クローン病',
                    '潰瘍性大腸炎',
                    '腸管型ベーチェット病',
                    '非感染性の中間部、後部又は汎ぶどう膜炎'
                ],
                indication_match_with_originator: '一部不一致',
                price: 'シリンジ: 20,630円, ペン: 18,636円',
                manufacturing_cell: '完全ヒト抗体',
                formulation_features: '高濃度製剤（40mg/0.4mL）。薬液量が少なく疼痛軽減に寄与する可能性。',
                device_support: '希望者にシリンジ用の自己注射補助具を無償提供。',
                special_notes: 'デバイスレベルでの患者中心の設計思想。化膿性汗腺炎、壊疽性膿皮症の適応なし。'
            },
            {
                id: 'adalimumab-bs-ctnk',
                name: 'アダリムマブBS「CTNK」',
                manufacturer: '日本化薬',
                release_date: '2023年11月',
                approved_indications: [
                    '関節リウマチ',
                    '強直性脊椎炎',
                    'X線基準を満たさない体軸性脊椎関節炎',
                    '多関節に活動性を有する若年性特発性関節炎',
                    '尋常性乾癬、関節症性乾癬、膿疱性乾癬',
                    'クローン病',
                    '潰瘍性大腸炎',
                    '腸管型ベーチェット病',
                    '非感染性の中間部、後部又は汎ぶどう膜炎'
                ],
                indication_match_with_originator: '一部不一致',
                price: 'シリンジ: 20,630円, ペン: 18,636円',
                manufacturing_cell: '完全ヒト抗体',
                formulation_features: '「高濃度・低容量・クエン酸塩フリー」製剤。注射時の疼痛を最小限に抑える設計。',
                device_support: 'ペン型デバイスあり。',
                special_notes: 'アダリムマブBS市場の最新トレンドを全て反映した製品。化膿性汗腺炎、壊疽性膿皮症の適応なし。'
            }
        ]
    },
    {
        originator: {
            id: 'enbrel',
            name: 'エタネルセプト (エンブレル®)',
            manufacturer: 'ファイザー / 武田薬品工業',
            indications: [
                '既存治療で効果不十分な関節リウマチ（関節の構造的損傷の防止を含む）',
                '多関節に活動性を有する若年性特発性関節炎（JIA）'
            ]
        },
        biosimilars: [
            {
                id: 'etanercept-bs-ma',
                name: 'エタネルセプトBS「MA」',
                manufacturer: '持田製薬 / あゆみ製薬',
                release_date: '2018年5月',
                approved_indications: [
                    '既存治療で効果不十分な関節リウマチ（関節の構造的損傷の防止を含む）'
                ],
                indication_match_with_originator: '一部不一致',
                price: '50mgペン: 10,745円',
                manufacturing_cell: '（情報なし）',
                formulation_features: '凍結乾燥製剤、シリンジ製剤、ペン型製剤の3種類すべての剤形をラインナップ。',
                device_support: '2ステップ操作のペンデバイス。治療に関する情報提供サイトあり。',
                special_notes: '広範な製剤ポートフォリオであらゆる医療機関のニーズに対応。50mg製剤はJIA適応なし。'
            },
            {
                id: 'etanercept-bs-ty',
                name: 'エタネルセプトBS「TY」',
                manufacturer: '陽進堂 / 帝人ファーマ',
                release_date: '2019年3月',
                approved_indications: [
                    '既存治療で効果不十分な関節リウマチ（関節の構造的損傷の防止を含む）'
                ],
                indication_match_with_originator: '一部不一致',
                price: '50mgペン: 10,745円',
                manufacturing_cell: '（情報なし）',
                formulation_features: '液状製剤（シリンジ、ペン）に特化。',
                device_support: 'ペンデバイスあり。',
                special_notes: '在宅自己注射の普及を見据え、利便性と即時使用性を重視した戦略。50mg製剤はJIA適応なし。'
            },
            {
                id: 'etanercept-bs-nichiiko',
                name: 'エタネルセプトBS「日医工」',
                manufacturer: '日医工',
                release_date: '2019年3月',
                approved_indications: [
                    '既存治療で効果不十分な関節リウマチ（関節の構造的損傷の防止を含む）'
                ],
                indication_match_with_originator: '一部不一致',
                price: '50mgペン: 10,745円',
                manufacturing_cell: '（情報なし）',
                formulation_features: '用量調整が容易な目盛り付きシリンジを提供。',
                device_support: '2ステップ操作のペンデバイス。',
                special_notes: '小児リウマチ診療において明確な利点。過去に供給制限の実績あり。50mg製剤はJIA適応なし。'
            }
        ]
    },
    {
        originator: {
            id: 'stelara',
            name: 'ウステキヌマブ (ステラーラ®)',
            manufacturer: 'ヤンセンファーマ',
            indications: [
                '尋常性乾癬',
                '乾癬性関節炎',
                '中等症から重症の活動期クローン病の導入療法',
                '中等症から重症の潰瘍性大腸炎の寛解導入療法',
                '中等症から重症の活動期クローン病の維持療法',
                '中等症から重症の潰瘍性大腸炎の維持療法'
            ]
        },
        biosimilars: [
            {
                id: 'ustekinumab-bs-f',
                name: 'ウステキヌマブBS皮下注45mgシリンジ「F」',
                manufacturer: '富士製薬工業',
                release_date: '2024年5月',
                approved_indications: [
                    '尋常性乾癬',
                    '乾癬性関節炎'
                ],
                indication_match_with_originator: '一部不一致',
                price: '139,002円 (45mg/0.5mL)',
                manufacturing_cell: 'マウスミエローマ（Sp2/0）細胞株',
                formulation_features: '（情報なし）',
                device_support: '医療関係者向けに患者説明用資材などを提供。',
                special_notes: '日本初のウステキヌマブ・バイオシミラー。クローン病、潰瘍性大腸炎の適応なし。'
            },
            {
                id: 'ustekinumab-bs-ct',
                name: 'ウステキヌマブBS皮下注45mgシリンジ「CT」',
                manufacturer: 'セルトリオン・ヘルスケア・ジャパン',
                release_date: '2025年7月',
                approved_indications: [
                    '尋常性乾癬',
                    '乾癬性関節炎'
                ],
                indication_match_with_originator: '一部不一致',
                price: '139,002円 (45mg/0.5mL)',
                manufacturing_cell: 'チャイニーズハムスター卵巣（CHO）細胞',
                formulation_features: '（情報なし）',
                device_support: '（情報なし）',
                special_notes: '他のウステキヌマブBSと製造細胞株が異なる。クローン病、潰瘍性大腸炎の適応なし。'
            },
            {
                id: 'ustekinumab-bs-yd',
                name: 'ウステキヌマブBS皮下注45mgシリンジ「YD」',
                manufacturer: '陽進堂',
                release_date: '2025年5月',
                approved_indications: [
                    '尋常性乾癬',
                    '乾癬性関節炎'
                ],
                indication_match_with_originator: '一部不一致',
                price: '139,002円 (45mg/0.5mL)',
                manufacturing_cell: 'マウス骨髄腫（Sp2/0 Ag14）細胞株',
                formulation_features: '（情報なし）',
                device_support: '（情報なし）',
                special_notes: 'クローン病、潰瘍性大腸炎の適応なし。'
            }
        ]
    }
];
