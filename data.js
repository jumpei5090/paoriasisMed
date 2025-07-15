const drugs = [
    {
        id: 'humira',
        name: 'アダリムマブ (ヒュミラ)',
        category: 'biological',
        mechanism: 'TNFα阻害薬',
        manufacturer: 'アッヴィ合同会社',
        price: '40mg: 49,726円',
        biosimilar: 'あり（アダリムマブBS「FKB」、アダリムマブBS「第一三共」、アダリムマブBS「MA」、アダリムマブBS「CTNK」）',
        biosimilar_details: [
            {
                name: 'アムジェビータ（アダリムマブBS）',
                manufacturer: '第一三共株式会社',
                release_date: '2018年11月',
                approved_indications: [
                    '関節リウマチ',
                    '若年性特発性関節炎',
                    '尋常性乾癬',
                    '関節症性乾癬',
                    '強直性脊椎炎',
                    '腸管ベーチェット病',
                    'クローン病',
                    '潰瘍性大腸炎',
                    '化膿性汗腺炎',
                    '非感染性ぶどう膜炎'
                ],
                indication_match_with_originator: '完全一致',
                price: '40mg: 約35,800円（先行品の約28%減）',
                clinical_trials: '国内第III相試験で先行品と同等の有効性・安全性を確認',
                regulatory_status: '2018年3月承認取得',
                market_share: '約25%（2023年時点）',
                special_notes: '日本初のTNFα阻害薬バイオシミラー'
            },
            {
                name: 'ハリメーザ（アダリムマブBS）',
                manufacturer: 'ファイザー株式会社',
                release_date: '2018年11月',
                approved_indications: [
                    '関節リウマチ',
                    '若年性特発性関節炎',
                    '尋常性乾癬',
                    '関節症性乾癬',
                    '強直性脊椎炎',
                    '腸管ベーチェット病',
                    'クローン病',
                    '潰瘍性大腸炎',
                    '化膿性汗腺炎',
                    '非感染性ぶどう膜炎'
                ],
                indication_match_with_originator: '完全一致',
                price: '40mg: 約35,800円（先行品の約28%減）',
                clinical_trials: '欧州第III相試験で先行品と同等の有効性・安全性を確認',
                regulatory_status: '2018年3月承認取得',
                market_share: '約20%（2023年時点）',
                special_notes: 'ファイザーが開発したグローバルバイオシミラー'
            },
            {
                name: 'ヒュリオ（アダリムマブBS）',
                manufacturer: 'マルホ株式会社',
                release_date: '2018年11月',
                approved_indications: [
                    '関節リウマチ',
                    '若年性特発性関節炎',
                    '尋常性乾癬',
                    '関節症性乾癬',
                    '強直性脊椎炎',
                    '腸管ベーチェット病',
                    'クローン病',
                    '潰瘍性大腸炎',
                    '化膿性汗腺炎',
                    '非感染性ぶどう膜炎'
                ],
                indication_match_with_originator: '完全一致',
                price: '40mg: 約35,800円（先行品の約28%減）',
                clinical_trials: '国内第III相試験で先行品と同等の有効性・安全性を確認',
                regulatory_status: '2018年3月承認取得',
                market_share: '約18%（2023年時点）',
                special_notes: '皮膚科領域に強みを持つマルホが販売'
            }
        ],
        release_date: '2008年6月18日',
        dosage: '初回80mg皮下注射、以後40mg、2週間おきに皮下注射',
        detailed_dosage: {
            関節リウマチ: '通常、成人にはアダリムマブ（遺伝子組換え）として40mgを2週に1回、皮下注射する。なお、効果不十分な場合、1回80mgまで増量できる。',
            尋常性乾癬: '通常、成人にはアダリムマブ（遺伝子組換え）として初回に80mgを皮下注射し、以後2週に1回、40mgを皮下注射する。なお、効果不十分な場合には1回80mgまで増量できる。',
            強直性脊椎炎: '通常、成人にはアダリムマブ（遺伝子組換え）として40mgを2週に1回、皮下注射する。なお、効果不十分な場合、1回80mgまで増量できる。',
            若年性特発性関節炎: '通常、アダリムマブ（遺伝子組換え）として、体重15kg以上30kg未満の場合は20mgを、体重30kg以上の場合は40mgを2週に1回、皮下注射する。',
            腸管型ベーチェット病: '通常、成人にはアダリムマブ（遺伝子組換え）として初回に160mgを、初回投与2週間後に80mgを皮下注射する。初回投与4週間後以降は、40mgを2週に1回、皮下注射する。',
            クローン病: '通常、成人にはアダリムマブ（遺伝子組換え）として初回に160mgを、初回投与2週間後に80mgを皮下注射する。初回投与4週間後以降は、40mgを2週に1回、皮下注射する。なお、効果が減弱した場合には1回80mgに増量できる。',
            潰瘍性大腸炎: '通常、成人にはアダリムマブ（遺伝子組換え）として初回に160mgを、初回投与2週間後に80mgを皮下注射する。初回投与4週間後以降は、40mgを2週に1回、皮下注射する。',
            非感染性ぶどう膜炎: '通常、成人にはアダリムマブ（遺伝子組換え）として初回に80mgを、初回投与1週間後に40mgを皮下注射する。初回投与3週間後以降は、40mgを2週に1回、皮下注射する。'
        },
        indications: '関節リウマチ、若年性特発性関節炎、尋常性乾癬、関節症性乾癬、強直性脊椎炎、腸管ベーチェット病、クローン病、潰瘍性大腸炎、化膿性汗腺炎、非感染性ぶどう膜炎',
        contraindications: '重篤な感染症（敗血症等）の患者、活動性結核の患者、本剤の成分に対し過敏症の既往歴のある患者、脱髄疾患（多発性硬化症等）及びその既往歴のある患者、うっ血性心不全の患者',
        serious_side_effects: ['敗血症、肺炎等の重篤な感染症', '結核', 'ループス様症候群', '脱髄疾患', '重篤なアレルギー反応', '重篤な血液障害', '間質性肺炎', '劇症肝炎、肝機能障害、黄疸、肝不全'],
        warnings: ['本剤投与により、結核、肺炎、敗血症を含む重篤な感染症及び脱髄疾患の新たな発生もしくは悪化等が報告されている', '悪性腫瘍の発現も報告されている', '本剤が疾病を完治させる薬剤でないことを患者に十分説明すること'],
        monitoring: ['結核に関する十分な問診及び胸部X線検査', 'インターフェロン-γ遊離試験又はツベルクリン反応検査', '血液検査', '肝機能検査', 'B型肝炎ウイルス感染の有無の確認'],
        attachments: {
            tensho_text: 'attachments/humira/tensho_text.txt',
            if_text: 'attachments/humira/if_text.txt'
        }
    },
    {
        id: 'remicade',
        name: 'インフリキシマブ (レミケード)',
        category: 'biological',
        mechanism: 'TNFα阻害薬',
        manufacturer: 'ヤンセンファーマ株式会社',
        price: '100mg: 51,351円',
        biosimilar: 'あり（インフリキシマブBS「NK」、インフリキシマブBS「CTH」、インフリキシマブBS「あゆみ」、インフリキシマブBS「日医工」、インフリキシマブBS「ファイザー」）',
        biosimilar_details: [
            {
                name: 'インフリキシマブBS「NK」',
                manufacturer: '日医工株式会社',
                release_date: '2014年12月',
                approved_indications: [
                    '関節リウマチ',
                    'ベーチェット病による難治性網膜ぶどう膜炎',
                    '尋常性乾癬',
                    '乾癬性関節炎',
                    '膿疱性乾癬',
                    '乾癬性紅皮症',
                    '強直性脊椎炎',
                    '腸管型ベーチェット病',
                    'クローン病',
                    '潰瘍性大腸炎'
                ],
                indication_match_with_originator: '一部適応なし（神経型・血管型ベーチェット病、川崎病なし）',
                price: '100mg: 約36,900円（先行品の約28%減）',
                clinical_trials: '国内第I/III相試験で先行品と同等の有効性・安全性を確認',
                regulatory_status: '2014年7月承認取得',
                market_share: '約20%（2023年時点）',
                special_notes: '日本初のインフリキシマブバイオシミラー'
            },
            {
                name: 'インフリキシマブBS「CTH」',
                manufacturer: 'セルトリオン・ファーマ株式会社',
                release_date: '2014年12月',
                approved_indications: [
                    '関節リウマチ',
                    'ベーチェット病による難治性網膜ぶどう膜炎',
                    '尋常性乾癬',
                    '乾癬性関節炎',
                    '膿疱性乾癬',
                    '乾癬性紅皮症',
                    '強直性脊椎炎',
                    '腸管型ベーチェット病',
                    'クローン病',
                    '潰瘍性大腸炎'
                ],
                indication_match_with_originator: '一部適応なし（神経型・血管型ベーチェット病、川崎病なし）',
                price: '100mg: 約36,900円（先行品の約28%減）',
                clinical_trials: '欧州第III相試験で先行品と同等の有効性・安全性を確認',
                regulatory_status: '2014年7月承認取得',
                market_share: '約15%（2023年時点）',
                special_notes: 'セルトリオン開発のグローバルバイオシミラー'
            }
        ],
        release_date: '2002年5月',
        dosage: '5mg/kg点滴静注、0週・2週・6週、以後8週間隔',
        detailed_dosage: {
            関節リウマチ: '通常、成人にはインフリキシマブ（遺伝子組換え）として3mg/kgを点滴静注し、初回投与後2週、6週に同用量を投与し、以後8週間隔で投与する。なお、効果不十分な場合には、投与量の増量や投与間隔の短縮ができるが、投与量は10mg/kg、投与間隔は4週間を超えないこと。',
            乾癬: '通常、成人にはインフリキシマブ（遺伝子組換え）として5mg/kgを点滴静注し、初回投与後2週、6週に同用量を投与し、以後8週間隔で投与する。',
            クローン病: '通常、成人にはインフリキシマブ（遺伝子組換え）として5mg/kgを点滴静注する。その後の維持療法には、初回投与後2週、6週に同用量を投与し、以後8週間隔で投与する。',
            潰瘍性大腸炎: '通常、成人にはインフリキシマブ（遺伝子組換え）として5mg/kgを点滴静注し、初回投与後2週、6週に同用量を投与し、以後8週間隔で投与する。',
            川崎病: '通常、小児にはインフリキシマブ（遺伝子組換え）として5mg/kgを単回点滴静注する。'
        },
        indications: '関節リウマチ（関節の構造的損傷の防止を含む）、ベーチェット病による難治性網膜ぶどう膜炎、尋常性乾癬、乾癬性関節炎、膿疱性乾癬、乾癬性紅皮症、強直性脊椎炎、腸管型ベーチェット病、神経型ベーチェット病、血管型ベーチェット病、川崎病の急性期、クローン病、潰瘍性大腸炎',
        contraindications: '重篤な感染症（敗血症等）の患者、活動性結核の患者、本剤の成分又はマウス由来の蛋白質に対する過敏症の既往歴のある患者、脱髄疾患（多発性硬化症等）及びその既往歴のある患者、うっ血性心不全の患者',
        serious_side_effects: ['感染症（敗血症、肺炎等）', '結核', '重篤なinfusion reaction', '脱髄疾患', '間質性肺炎', '肝機能障害', '遅発性過敏症', 'ループス様症候群', '重篤な血液障害', '横紋筋融解症'],
        warnings: ['本剤投与により、結核、敗血症を含む重篤な感染症及び脱髄疾患の悪化等があらわれることがある', '悪性腫瘍の発現も報告されている', 'Infusion reactionや遅発性過敏症に注意が必要'],
        monitoring: ['結核感染の有無を確認すること', 'B型肝炎ウイルス感染の有無を確認すること', '血液検査', '肝機能検査', 'Infusion reactionの観察'],
        special_precautions: ['1.2ミクロン以下のメンブランフィルターを通して投与すること', '原則として2時間以上かけて緩徐に点滴静注すること', '他の生物学的製剤との併用は避けること'],
        attachments: {
            tensho_text: 'attachments/remicade/tensho_text.txt',
            if_text: 'attachments/remicade/if_text.txt'
        }
    },
    {
        id: 'enbrel',
        name: 'エタネルセプト (エンブレル)',
        category: 'biological',
        mechanism: 'TNFα阻害薬',
        manufacturer: 'ファイザー株式会社',
        price: '25mg: 12,679円',
        biosimilar: 'あり（エタネルセプトBS「MA」、エタネルセプトBS「TY」、エタネルセプトBS「日医工」）',
        release_date: '2005年3月',
        dosage: '25mg皮下注射、週2回または50mg皮下注射、週1回',
        indications: '関節リウマチ、若年性特発性関節炎、尋常性乾癬、関節症性乾癬、強直性脊椎炎',
        contraindications: '敗血症の患者またはそのリスクを有する患者、活動性感染症、過敏症の既往歴、脱髄疾患およびその既往歴、うっ血性心不全、他の生物学的製剤または標的型合成DMARDsとの併用、生ワクチン接種、活動性結核',
        biosimilar_details: [
            {
                name: 'エタネルセプトBS「MA」',
                manufacturer: '持田製薬株式会社',
                release_date: '2019年9月',
                approved_indications: [
                    '関節リウマチ',
                    '若年性特発性関節炎',
                    '尋常性乾癬',
                    '関節症性乾癬',
                    '強直性脊椎炎'
                ],
                indication_match_with_originator: '完全一致',
                price: '25mg: 約9,100円（先行品の約28%減）',
                clinical_trials: '国内第III相試験で先行品と同等の有効性・安全性を確認',
                regulatory_status: '2019年3月承認取得',
                market_share: '約15%（2023年時点）',
                special_notes: '持田製薬が開発した国産バイオシミラー'
            },
            {
                name: 'エタネルセプトBS「YSP」',
                manufacturer: '陽進堂株式会社',
                release_date: '2019年9月',
                approved_indications: [
                    '関節リウマチ',
                    '若年性特発性関節炎',
                    '尋常性乾癬',
                    '関節症性乾癬',
                    '強直性脊椎炎'
                ],
                indication_match_with_originator: '完全一致',
                price: '25mg: 約9,100円（先行品の約28%減）',
                clinical_trials: '国内第III相試験で先行品と同等の有効性・安全性を確認',
                regulatory_status: '2019年3月承認取得',
                market_share: '約10%（2023年時点）',
                special_notes: '陽進堂が開発した国産バイオシミラー'
            }
        ],
        attachments: {
            tensho_text: 'attachments/enbrel/tensho_text.txt',
            if_text: 'attachments/enbrel/if_text.txt'
        }
    },
    {
        id: 'cimzia',
        name: 'セルトリズマブペゴル (シムジア)',
        category: 'biological',
        mechanism: 'TNFα阻害薬',
        manufacturer: 'UCBジャパン株式会社',
        price: '200mg: 55,360円',
        biosimilar: 'なし',
        release_date: '2013年3月8日',
        dosage: '初回400mg皮下注射、2週・4週後に400mg、以後400mg、4週間おきに皮下注射',
        detailed_dosage: {
            関節リウマチ: '通常、成人にはセルトリズマブペゴル（遺伝子組換え）として、1回400mgを初回、2週後、4週後に皮下注射し、以後1回200mgを2週間の間隔で皮下注射する。なお、症状安定後には、1回400mgを4週間の間隔で皮下注射できる。',
            乾癬: '通常、成人にはセルトリズマブペゴル（遺伝子組換え）として、1回400mgを2週間の間隔で皮下注射する。症状安定後には、1回200mgを2週間の間隔、又は1回400mgを4週間の間隔で皮下注射できる。'
        },
        indications: '関節リウマチ（関節の構造的損傷の防止を含む）、尋常性乾癬、乾癬性関節炎、膿疱性乾癬、乾癬性紅皮症',
        contraindications: '重篤な感染症（敗血症等）の患者、活動性結核の患者、本剤の成分に対し過敏症の既往歴のある患者、脱髄疾患（多発性硬化症等）及びその既往歴のある患者、うっ血性心不全の患者',
        serious_side_effects: ['重篤な感染症（敗血症、肺炎等）', '結核', '重篤なアレルギー反応', '脱髄疾患', '重篤な血液障害', 'ループス様症候群', '間質性肺炎'],
        warnings: ['本剤投与により、結核、肺炎、敗血症を含む重篤な感染症及び脱髄疾患の新たな発生もしくは悪化等が報告されている', '悪性腫瘍の発現も報告されている', '本剤が疾病を完治させる薬剤でないことを患者に十分説明すること'],
        monitoring: ['結核感染の有無を確認すること', 'B型肝炎ウイルス感染の有無の検査', '血液検査', '肝機能検査'],
        special_precautions: ['本剤と他の生物製剤の併用について安全性及び有効性は確立していないので併用を避けること', '自己投与の適用については医師が慎重に検討し十分な教育訓練を実施すること', '本剤が一部の凝固検査キットに干渉することがある'],
        attachments: {
            tensho_text: 'attachments/cimzia/tensho_text.txt',
            if_text: 'attachments/cimzia/if_text.txt'
        }
    },
    {
        id: 'simponi',
        name: 'ゴリムマブ (シンポニー)',
        category: 'biological',
        mechanism: 'TNFα阻害薬',
        manufacturer: 'ヤンセンファーマ株式会社',
        price: '50mg: 110,649円',
        biosimilar: 'なし',
        release_date: '2011年9月16日',
        dosage: '50mg皮下注射、4週間おきに皮下注射',
        detailed_dosage: {
            関節リウマチ_MTX併用: '通常、成人にはゴリムマブ（遺伝子組換え）として50mgを4週に1回、皮下注射する。なお、患者の状態に応じて1回100mgを使用することができる。',
            関節リウマチ_MTX非併用: '通常、成人にはゴリムマブ（遺伝子組換え）として100mgを4週に1回、皮下注射する。',
            潰瘍性大腸炎: '通常、成人にはゴリムマブ（遺伝子組換え）として初回投与時に200mg、初回投与2週後に100mgを皮下注射する。初回投与6週目以降は100mgを4週に1回、皮下注射する。'
        },
        indications: '既存治療で効果不十分な関節リウマチ（関節の構造的損傷の防止を含む）、中等症から重症の潰瘍性大腸炎の改善及び維持療法（既存治療で効果不十分な場合に限る）',
        contraindications: '重篤な感染症（敗血症等）の患者、活動性結核の患者、本剤の成分に対し過敏症の既往歴のある患者、脱髄疾患（多発性硬化症等）及びその既往歴のある患者、うっ血性心不全の患者',
        serious_side_effects: ['敗血症性ショック、敗血症、肺炎等の重篤な感染症', '間質性肺炎', '結核', '脱髄疾患', '重篤な血液障害', 'うっ血性心不全', '重篤なアレルギー反応', 'ループス様症候群'],
        warnings: ['本剤投与により、結核、肺炎、敗血症を含む重篤な感染症及び脱髄疾患の新たな発現若しくは悪化等が報告されている', '悪性腫瘍の発現も報告されている', '100mg投与は50mg投与に比較して、一部の重篤な副作用の発現頻度が高まる可能性がある'],
        monitoring: ['結核感染の有無を確認すること', 'B型肝炎ウイルス感染の有無を確認すること', '血液検査', '肝機能検査'],
        special_precautions: ['本剤単独投与による有効性はメトトレキサート併用時に比べ低いことが示されている', '本剤とアバタセプトの併用は行わないこと', '自己投与の適用については医師が慎重に検討すること'],
        attachments: {
            tensho_text: 'attachments/simponi/tensho_text.txt',
            if_text: 'attachments/simponi/if_text.txt'
        }
    },
    {
        id: 'stelara',
        name: 'ウステキヌマブ (ステラーラ)',
        category: 'biological',
        mechanism: 'IL-12/23阻害薬',
        manufacturer: 'ヤンセンファーマ株式会社',
        price: '90mg: 254,783円',
        biosimilar: 'あり（ウステキヌマブBS「F」、ウステキヌマブBS「CT」、ウステキヌマブBS「YD」）',
        release_date: '2011年3月14日',
        dosage: '初回90mg皮下注射、4週間後に90mg、以後12週間おきに90mg',
        indications: '尋常性乾癬、関節症性乾癬、クローン病',
        contraindications: '重篤な感染症（敗血症、活動性結核など）、過敏症の既往歴、悪性腫瘍の既往歴、脱髄疾患、生ワクチン接種',
        biosimilar_details: [
            {
                name: 'ウステキヌマブBS「FKB」',
                manufacturer: '富士製薬工業株式会社',
                release_date: '2022年6月',
                approved_indications: [
                    '尋常性乾癬',
                    '関節症性乾癬',
                    'クローン病'
                ],
                indication_match_with_originator: '完全一致',
                price: '90mg: 約183,400円（先行品の約28%減）',
                clinical_trials: '国内第I/III相試験で先行品と同等の有効性・安全性を確認',
                regulatory_status: '2022年3月承認取得',
                market_share: '約8%（2023年時点）',
                special_notes: '日本初のIL-12/23阻害薬バイオシミラー'
            }
        ],
        attachments: {
            tensho_text: 'attachments/stelara/tensho_text.txt',
            if_text: 'attachments/stelara/if_text.txt'
        }
    },
    {
        id: 'tremfya',
        name: 'グセルクマブ (トレムフィア)',
        category: 'biological',
        mechanism: 'IL-23阻害薬',
        manufacturer: 'ヤンセンファーマ株式会社',
        price: '100mg: 325,040円',
        biosimilar: 'なし',
        release_date: '2018年5月22日',
        dosage: '初回100mg皮下注射、4週間後に100mg、以後8週間おきに100mg',
        indications: '尋常性乾癬、関節症性乾癬、潰瘍性大腸炎',
        contraindications: 'グセルクマブまたは本剤のいずれかの成分に対する重篤な過敏症の既往歴、重篤な感染症、活動性結核',
        attachments: {
            tensho_text: 'attachments/tremfya/tensho_text.txt',
            if_text: 'attachments/tremfya/if_text.txt'
        }
    },
    {
        id: 'skyrizi',
        name: 'リサンキズマブ (スキリージ)',
        category: 'biological',
        mechanism: 'IL-23阻害薬',
        manufacturer: 'アッヴィ合同会社',
        price: '75mg: 233,885円',
        biosimilar: 'なし',
        release_date: '2019年5月24日',
        dosage: '初回75mg皮下注射、4週間後に75mg、以後12週間おきに75mg',
        indications: '尋常性乾癬、関節症性乾癬、クローン病',
        contraindications: '本剤の成分に対し過敏症の既往歴、重篤な感染症、活動性結核',
        attachments: {
            tensho_text: 'attachments/skyrizi/tensho_text.txt',
            if_text: 'attachments/skyrizi/if_text.txt'
        }
    },
    {
        id: 'ilumya',
        name: 'チルドラキズマブ (イルミア)',
        category: 'biological',
        mechanism: 'IL-23阻害薬',
        manufacturer: 'サンファーマ株式会社',
        price: '100mg: 486,197円',
        biosimilar: 'なし',
        release_date: '2020年9月23日',
        dosage: '初回100mg皮下注射、4週間後に100mg、以後12週間おきに100mg',
        indications: '尋常性乾癬、クローン病',
        contraindications: '重篤な感染症の患者、活動性結核の患者、イルミアの成分に対し過敏症の既往歴',
        attachments: {
            tensho_text: 'attachments/ilumya/tensho_text.txt',
            if_text: 'attachments/ilumya/if_text.txt'
        }
    },
    {
        id: 'cosentyx',
        name: 'セクキヌマブ (コセンティクス)',
        category: 'biological',
        mechanism: 'IL-17阻害薬',
        manufacturer: 'ノバルティスファーマ株式会社',
        price: '150mg: 71,469円',
        biosimilar: 'なし',
        release_date: '2015年2月27日',
        dosage: '初回300mg皮下注射（週1回×5回）、以後300mg、4週間おきに皮下注射',
        indications: '関節リウマチ、尋常性乾癬、関節症性乾癬、強直性脊椎炎',
        contraindications: '重篤な感染症の患者、活動性結核の患者、コセンティクスに含まれる成分に対し過敏症の既往歴',
        attachments: {
            tensho_text: 'attachments/cosentyx/tensho_text.txt',
            if_text: 'attachments/cosentyx/if_text.txt'
        }
    },
    {
        id: 'taltz',
        name: 'イキセキズマブ (タルツ)',
        category: 'biological',
        mechanism: 'IL-17阻害薬',
        manufacturer: '日本イーライリリー株式会社',
        price: '80mg: 148,952円',
        biosimilar: 'なし',
        release_date: '2016年11月18日',
        dosage: '初回160mg皮下注射、以後80mg、4週間おきに皮下注射',
        indications: '関節リウマチ、尋常性乾癬、関節症性乾癬、強直性脊椎炎',
        contraindications: 'イキセキズマブまたはその賦形剤に対する重篤な過敏症の既往歴',
        attachments: {
            tensho_text: 'attachments/taltz/tensho_text.txt',
            if_text: 'attachments/taltz/if_text.txt'
        }
    },
    {
        id: 'lumicef',
        name: 'ブロダルマブ (ルミセフ)',
        category: 'biological',
        mechanism: 'IL-17受容体阻害薬',
        manufacturer: '協和キリン株式会社',
        price: '210mg: 74,513円',
        biosimilar: 'なし',
        release_date: '2016年9月30日',
        dosage: '初回210mg皮下注射（週1回×3回）、以後210mg、12週間おきに皮下注射',
        indications: '尋常性乾癬、関節症性乾癬',
        contraindications: '重篤な感染症がある患者、活動性結核の患者、ルミセフの成分に対し過敏症の既往歴',
        attachments: {
            tensho_text: 'attachments/lumicef/tensho_text.txt',
            if_text: 'attachments/lumicef/if_text.txt'
        }
    },
    {
        id: 'binzelx',
        name: 'ビメキズマブ (ビンゼレックス)',
        category: 'biological',
        mechanism: 'IL-17阻害薬',
        manufacturer: 'UCBジャパン株式会社',
        price: '160mg: 156,587円, 320mg: 303,466円',
        biosimilar: 'なし',
        release_date: '2022年4月20日',
        dosage: '初回320mg皮下注射、1週・2週・4週後に160mg、以後160mg、8週間おきに皮下注射',
        indications: '尋常性乾癬、関節症性乾癬',
        contraindications: '重篤な感染症の患者、活動性結核の患者、本剤の成分に対し過敏症の既往歴',
        attachments: {
            tensho_text: 'attachments/binzelx/tensho_text.txt',
            if_text: 'attachments/binzelx/if_text.txt'
        }
    },
    {
        id: 'chigason',
        name: 'チガソン (ビタミンA誘導体)',
        category: 'oral',
        mechanism: 'ビタミンA誘導体',
        manufacturer: '太陽ファルマ株式会社',
        price: '(情報なし)',
        generic: 'なし',
        release_date: '1985年12月10日',
        dosage: '通常、成人にはエトレチナートとして1日25mgを食後又は食直後に経口投与する。症状により適宜増減するが、1日75mgを上限とする。維持量としては、通常1日10〜25mgを隔日又は連日経口投与する。',
        indications: '乾癬',
        contraindications: '妊婦または妊娠している可能性のある女性、授乳婦、肝機能障害、腎機能障害、ビタミンA過剰症、本剤の成分に対し過敏症の既往歴',
        attachments: {
            tensho_text: 'attachments/chigason/tensho_text.txt',
            if_text: 'attachments/chigason/if_text.txt'
        }
    },
    {
        id: 'neoral',
        name: 'シクロスポリン (ネオーラル)',
        category: 'oral',
        mechanism: '免疫抑制薬',
        manufacturer: '(先発品: ノバルティスファーマ)',
        price: 'ネオーラル内用液10%: 400.6円',
        generic: 'あり（東和薬品、サンド、沢井製薬、日医工など）',
        release_date: '2000年5月23日',
        dosage: '通常、成人はシクロスポリンとして1日量3mg/kgを1日2回に分けて経口投与し、症状により適宜増減しますが1日量5mg/kgを超えないこととされています。',
        indications: '乾癬',
        contraindications: '腎機能障害、肝機能障害、高血圧症、悪性腫瘍、感染症、過敏症の既往歴、生ワクチン接種者',
        attachments: {
            tensho_text: 'attachments/neoral/tensho_text.txt',
            if_text: 'attachments/neoral/if_text.txt'
        }
    },
    {
        id: 'otezla',
        name: 'アプレミラスト (オテズラ)',
        category: 'oral',
        mechanism: 'PDE4阻害薬',
        manufacturer: 'アムジェン株式会社',
        price: '10mg: 329.9円/錠, 20mg: 659.8円/錠, 30mg: 990円/錠',
        generic: '海外製あり',
        release_date: '2017年3月2日',
        dosage: '通常、成人には以下の通り経口投与し、6日目以降はアプレミラストとして1回30mgを1日2回、朝夕に経口投与します。<br>1日目：朝 10mg<br>2日目：朝 10mg、夕 10mg<br>3日目：朝 10mg、夕 20mg<br>4日目：朝 20mg、夕 20mg<br>5日目：朝 20mg、夕 30mg<br>6日目以降：朝 30mg、夕 30mg',
        indications: '乾癬',
        contraindications: '本剤の成分に対し過敏症の既往歴、妊婦または妊娠している可能性のある女性',
        attachments: {
            tensho_text: 'attachments/otezla/tensho_text.txt',
            if_text: 'attachments/otezla/if_text.txt'
        }
    },
    {
        id: 'sotyktu',
        name: 'ソーティクツ錠 (チロシンキナーゼ2阻害薬)',
        category: 'oral',
        mechanism: 'チロシンキナーゼ2阻害薬',
        manufacturer: 'ブリストル・マイヤーズ スクイブ株式会社',
        price: '1日薬価: 2,533.4円',
        generic: 'なし',
        release_date: '2022年11月16日',
        dosage: '通常、成人にはデュークラバシチニブとして1回6mgを1日1回経口投与します。',
        indications: '乾癬',
        contraindications: '本剤の成分に対し過敏症の既往歴、重篤な感染症、活動性結核、重度の肝機能障害、重度の腎機能障害',
        attachments: {
            tensho_text: 'attachments/sotyktu/tensho_text.txt',
            if_text: 'attachments/sotyktu/if_text.txt'
        }
    },
    {
        id: 'rheumatrex',
        name: 'リウマトレックス (メトトレキサート)',
        category: 'oral',
        mechanism: '疾患修飾性抗リウマチ薬',
        manufacturer: '(先発品: 輝生会)',
        price: '(情報なし)',
        generic: 'あり（沢井製薬、田辺三菱製薬、参天製薬、日本ジェネリックなど）',
        release_date: '1999年8月2日',
        dosage: '通常、1週間単位の投与量をメトトレキサートとして6mgとし、1週間単位の投与量を1回または2〜3回に分割して経口投与します。分割して投与する場合、初日から2日目にかけて12時間間隔で投与し、1回または2回分割投与の場合は残りの6日間、3回分割投与の場合は残りの5日間は休薬します。これを1週間ごとに繰り返します。患者の年齢、症状、忍容性、および本剤に対する反応に応じて適宜増減が可能ですが、増量する場合はメトトレキサートとして1週間単位で8mgまでとし、12時間間隔で3回経口投与します。',
        indications: '乾癬',
        contraindications: '妊婦または妊娠している可能性のある女性、授乳婦、重篤な腎機能障害、重篤な肝機能障害、骨髄抑制、活動性感染症、胸水・腹水、消化管潰瘍、血液疾患、アルコール中毒、水痘患者',
        attachments: {
            tensho_text: 'attachments/rheumatrex/tensho_text.txt',
            if_text: 'attachments/rheumatrex/if_text.txt'
        }
    },
    {
        id: 'rinvoq',
        name: 'リンヴォック錠 (ヤヌスキナーゼ阻害薬)',
        category: 'oral',
        mechanism: 'ヤヌスキナーゼ阻害薬',
        manufacturer: 'アッヴィ合同会社',
        price: '28日分の薬価: 139,160円',
        generic: 'なし',
        release_date: '2020年4月24日',
        dosage: '通常、成人にはウパダシチニブとして15mgを1日1回経口投与します。患者の状態に応じて7.5mgを1日1回投与することも可能です。',
        indications: '乾癬性関節炎',
        contraindications: '本剤の成分に対し過敏症の既往歴、重篤な感染症、活動性結核、重度の肝機能障害、重度の腎機能障害、妊婦または妊娠している可能性のある女性、授乳婦',
        attachments: {
            tensho_text: 'attachments/rinvoq/tensho_text.txt',
            if_text: 'attachments/rinvoq/if_text.txt'
        }
    },
    {
        id: 'dovobet',
        name: 'カルシポトリオール水和物＋ベタメタゾンジプロピオン酸エステル (ドボベット)',
        category: 'topical',
        mechanism: 'ビタミンD3+ステロイド配合外用薬',
        manufacturer: '(情報なし)',
        price: '1g: 154.1円',
        generic: 'なし', // ジェネリック医薬品なし
        release_date: '2014年9月12日',
        dosage: '(一般的な用法・用量)',
        indications: '尋常性乾癬',
        contraindications: '細菌、真菌、ウイルス、動物性皮膚感染症、皮膚潰瘍、熱傷、凍傷、鼓膜穿孔のある湿疹性外耳道炎、潰瘍、第2度深在性以上の熱傷・凍傷、本剤の成分に対し過敏症の既往歴',
        attachments: {
            tensho_text: 'attachments/dovobet/tensho_text.txt',
            if_text: 'attachments/dovobet/if_text.txt'
        }
    },
    {
        id: 'marduox',
        name: 'マキサカルシトール＋ベタメタゾン酪酸エステルプロピオン酸エステル (マーデュオックス)',
        category: 'topical',
        mechanism: 'ビタミンD3+ステロイド配合外用薬',
        manufacturer: 'マルホ株式会社',
        price: '1g: 139.4円',
        generic: 'なし', // ジェネリック医薬品なし
        release_date: '2016年6月21日',
        dosage: '(一般的な用法・用量)',
        indications: '尋常性乾癬',
        contraindications: '細菌、真菌、ウイルス、動物性皮膚感染症、皮膚潰瘍、熱傷、凍傷、鼓膜穿孔のある湿疹性外耳道炎、潰瘍、第2度深在性以上の熱傷・凍傷、本剤の成分に対し過敏症の既往歴',
        attachments: {
            tensho_text: 'attachments/marduox/tensho_text.txt',
            if_text: 'attachments/marduox/if_text.txt'
        }
    },
    {
        id: 'vtamark',
        name: 'ブイタマークリーム',
        category: 'topical',
        mechanism: '芳香族炭化水素受容体（AhR）調整薬',
        manufacturer: '日本たばこ産業株式会社（製造販売元）、鳥居薬品株式会社（販売）',
        price: '1gあたり300.8円',
        generic: 'なし',
        release_date: '2024年10月29日', // 以前の情報から更新
        dosage: '(情報なし)',
        indications: '尋常性乾癬、アトピー性皮膚炎',
        contraindications: '本剤の成分に対し過敏症の既往歴',
        attachments: {
            tensho_text: 'attachments/vtamark/tensho_text.txt',
            if_text: 'attachments/vtamark/if_text.txt'
        }
    },
    // 新規追加の外用薬
    {
        id: 'clobetasol-propionate',
        name: 'クロベタゾールプロピオン酸エステル (コムクロ/デルモベート)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (最も強い)',
        manufacturer: 'コムクロ: マルホ株式会社、デルモベート: グラクソ・スミスクライン株式会社',
        price: 'デルモベート軟膏/クリーム0.05%: 14.6円/g、デルモベートスカルプローション0.05%: 14.4円/g、コムクロシャンプー0.05%: 18.3円/g',
        generic: 'あり（主要後発品メーカー: 日医工岐阜工場、岩城製薬、MAe、前田薬品工業、佐藤製薬、池田薬品、東光薬品工業。薬価: 軟膏・クリーム0.05%は11.70円/gまたは16.70円/g。ローション0.05%は9.70円/g、12.80円/g、または17.40円/g。）',
        release_date: '(情報なし)',
        dosage: '(一般的な用法・用量)',
        indications: '尋常性乾癬',
        contraindications: '(一般的な禁忌)',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'diflorasone-acetate',
        name: 'ジフロラゾン酢酸エステル (ダイアコート)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (非常に強い)',
        manufacturer: '帝國製薬株式会社',
        price: 'ダイアコート軟膏/クリーム0.05％: 10.90円/g',
        generic: 'あり（主要後発品メーカー: 陽進堂。薬価: 軟膏/クリーム0.05%は11.7円/g。）',
        release_date: 'ダイアコート軟膏0.05％: 2009年10月27日',
        dosage: '通常、1日1～数回、適量を患部に塗布します。',
        indications: '湿疹・皮膚炎群（ビダール苔癬、進行性指掌角皮症、脂漏性皮膚炎を含む）、乾癬、痒疹群（ストロフルス、じん麻疹様苔癬、固定じん麻疹を含む）、掌蹠膿疱症、紅皮症、薬疹・中毒疹、虫さされ、紅斑症（多形滲出性紅斑、ダリエ遠心性環状紅斑、遠心性丘疹性紅斑）、慢性円板状エリテマトーデス、扁平紅色苔癬、毛孔性紅色粃糠疹、特発性色素性紫斑（マヨッキー紫斑、シャンバーグ病、紫斑性色素性苔癬様皮膚炎を含む）、肥厚性瘢痕・ケロイド、肉芽腫症（サルコイドーシス、環状肉芽腫）、悪性リンパ腫（菌状息肉症を含む）、皮膚アミロイドーシス（アミロイド苔癬、斑状型アミロイド苔癬を含む）、天疱瘡群、類天疱瘡（ジューリング疱疹状皮膚炎を含む）、円形脱毛症',
        contraindications: '細菌・真菌・スピロヘータ・ウィルス皮膚感染症及び動物性皮膚疾患（疥癬、けじらみ等）の患者、本剤の成分に対し過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎の患者、潰瘍（ベーチェット病は除く）、第2度深在性以上の熱傷・凍傷のある患者。皮膚感染を伴う場合には使用しないこと。長期または大量使用、密封法（ODT）は、特に乳幼児や高齢者において全身性の副作用を引き起こす可能性があるため避けるべきです。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'mometasone-furoate',
        name: 'モメタゾンフランカルボン酸エステル (フルメタ)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (非常に強い)',
        manufacturer: 'シオノギファーマ（製造販売元）、塩野義製薬（発売・販売元）',
        price: '0.1%1gあたり17.9円',
        generic: 'あり（主要後発品メーカー: 岩城製薬、日本ジェネリック、キョーリンリメディオ、日東メディック、高田製薬、東和薬品。薬価: 軟膏・クリーム・ローション0.1%は20.1円/gなど。）',
        release_date: '1993年11月29日',
        dosage: '通常、1日1〜数回、適量を患部に塗布します。症状により適宜増減されます。',
        indications: '湿疹・皮膚炎群（進行性指掌角皮症を含む）、乾癬、掌蹠膿疱症、紅皮症、薬疹・中毒疹、虫さされ、痒疹群（蕁麻疹様苔癬、ストロフルス、固定蕁麻疹を含む）、多形滲出性紅斑、慢性円板状エリテマトーデス、扁平紅色苔癬、ジベル薔薇色粃糠疹、シャンバーグ病、肥厚性瘢痕・ケロイド、天疱瘡群、類天疱瘡、円形脱毛症',
        contraindications: '細菌・真菌・スピロヘータ・ウイルス皮膚感染症及び動物性皮膚疾患、本剤の成分に対し過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎、潰瘍（ベーチェット病は除く）、第2度深在性以上の熱傷・凍傷。皮膚感染を伴う湿疹・皮膚炎には原則使用しない。妊婦または妊娠している可能性のある女性には使用しないことが望ましい。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'betamethasone-dipropionate',
        name: 'ベタメタゾンジプロピオン酸エステル (リンデロンDP)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (非常に強い)',
        manufacturer: 'シオノギファーマ株式会社（製造販売元）、塩野義製薬株式会社（販売元）',
        price: '1gあたり9.3円',
        generic: 'あり（主要後発品メーカー: 辰巳化学、岩城製薬、陽進堂、帝國製薬（日医工）、佐藤製薬、東光薬品工業。薬価: 軟膏0.064%の場合、5.6円/gから8.4円/g。）',
        release_date: '軟膏とクリームは1980年2月12日、ゾルは1987年11月2日',
        dosage: '通常、1日1〜数回、適量を患部に塗布します。症状により適宜増減されます。',
        indications: '湿疹・皮膚炎群（進行性指掌角皮症、ビダール苔癬を含む）、乾癬、掌蹠膿疱症、紅皮症、薬疹・中毒疹、虫さされ、痒疹群（蕁麻疹様苔癬、ストロフルス、固定蕁麻疹を含む）、紅斑症（多形滲出性紅斑、ダリエ遠心性環状紅斑、遠心性丘疹性紅斑）、慢性円板状エリテマトーデス、扁平紅色苔癬、毛孔性紅色粃糠疹、特発性色素性紫斑、肥厚性瘢痕・ケロイド、肉芽腫症（サルコイドーシス、環状肉芽腫）、悪性リンパ腫（菌状息肉症を含む）、皮膚アミロイドージス、天疱瘡群、類天疱瘡、円形脱毛症',
        contraindications: '細菌・真菌・スピロヘータ・ウイルス皮膚感染症および動物性皮膚疾患、本剤の成分に対し過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎、潰瘍（ベーチェット病は除く）、第2度深在性以上の熱傷・凍傷。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'diflucortolone-valerate',
        name: 'ジフルコルトロン吉草酸エステル (ネリゾナ/ユニバーサル)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (非常に強い)',
        manufacturer: 'レオファーマ株式会社',
        price: 'ネリゾナユニバーサルクリーム0.1%: 1gあたり17.0円',
        generic: 'あり（主要後発品メーカー: レオファーマ、佐藤製薬、ジェイドルフ製薬、日新製薬、東光薬品工業。薬価: アルゾナユニバーサルクリーム0.1%は10.60円/g。）',
        release_date: 'ネリゾナユニバーサルクリーム0.1%: 2009年9月25日薬価収載。ネリゾナ軟膏およびユニバーサルクリームは1980年6月承認、同年12月市販。',
        dosage: '通常、1日1〜3回、適量を患部に塗布します。',
        indications: '湿疹・皮膚炎群（進行性指掌角皮症、ビダール苔癬、日光皮膚炎を含む）、乾癬、掌蹠膿疱症、痒疹群（じん麻疹様苔癬、ストロフルス、固定じん麻疹を含む）、紅皮症、慢性円板状エリテマトーデス、アミロイド苔癬、扁平紅色苔癬',
        contraindications: '皮膚結核、梅毒性皮膚疾患、単純疱疹、水痘、帯状疱疹、種痘疹の患者、本剤の成分に対し過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎の患者、潰瘍（ベーチェット病は除く）、第2度深在性以上の熱傷・凍傷の患者。皮膚感染を伴う湿疹・皮膚炎には原則使用しない。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'amcinonide',
        name: 'アムシノニド (ビスダーム)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (非常に強い)',
        manufacturer: '帝國製薬株式会社',
        price: '0.1%1gあたり25.4円',
        generic: 'なし', // ジェネリック医薬品なし
        release_date: '1982年2月22日',
        dosage: '通常、1日1〜数回、適量を患部に塗布します。症状により適宜増減されます。',
        indications: '湿疹・皮膚炎群（手湿疹、進行性指掌角皮症、ビダール苔癬、日光皮膚炎を含む）、痒疹群、虫さされ、乾癬、掌蹠膿疱症、扁平苔癬、紅皮症、慢性円板状エリテマトーデス、円形脱毛症',
        contraindications: '皮膚結核、単純疱疹、水痘、帯状疱疹、種痘疹の患者、本剤の成分に対し過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎の患者、潰瘍、第2度深在性以上の熱傷・凍傷の患者。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'fluocinonide',
        name: 'フルオシノニド (トプシム)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (強い)',
        manufacturer: '田辺三菱製薬',
        price: 'クリーム・軟膏・ローション: 13.1円/g、スプレー: 9.2円/g',
        generic: 'あり（主要後発品メーカー: 帝國製薬、日医工。薬価: 軟膏・クリーム0.05%は10.2円/g。）',
        release_date: '不明',
        dosage: '通常、1日1〜3回、適量を患部に塗布します。スプレー剤の場合は、適量を患部に噴霧します。',
        indications: '湿疹・皮膚炎群（進行性指掌角皮症、女子顔面黒皮症、ビダール苔癬、放射線皮膚炎、日光皮膚炎を含む）、痒疹群、乾癬、掌蹠膿疱症、円形脱毛症（悪性を含む）、尋常性白斑',
        contraindications: '細菌・真菌・スピロヘータ・ウイルス皮膚感染症・動物性皮膚疾患、本剤（成分）に過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎、潰瘍（ベーチェット病は除く）、第2度深在性以上の熱傷・凍傷。皮膚感染を伴う湿疹・皮膚炎には原則使用しない。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'dexamethasone-propionate',
        name: 'デキサメタゾンプロピオン酸エステル (メサデルム)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (強い)',
        manufacturer: '岡山大鵬薬品株式会社（製造販売元）、大鵬薬品工業株式会社（販売元）',
        price: 'クリーム、軟膏、ローションいずれも0.1%1gあたり9.6円',
        generic: 'あり（主要後発品メーカー: 東光薬品工業、前田薬品工業、池田薬品工業。薬価: 軟膏0.1%「ラクール」7.3円/g、軟膏0.1%「MYK」7.3円/gなど）',
        release_date: 'クリーム・軟膏: 1987年5月1日、ローション: 1994年7月8日',
        dosage: '通常、1日1〜数回、適量を患部に塗布します。',
        indications: '湿疹・皮膚炎群（進行性指掌角皮症、ビダール苔癬、日光皮膚炎を含む）、痒疹群（蕁麻疹様苔癬、ストロフルス、固定蕁麻疹を含む）、虫さされ、薬疹・中毒疹、乾癬、掌蹠膿疱症、扁平紅色苔癬、紅皮症、慢性円板状エリトマトーデス、紅斑症（多形滲出性紅斑、ダリエ遠心性環状紅斑、遠心性丘疹性紅斑）、毛孔性紅色粃糠疹、特発性色素性紫斑（マヨッキー紫斑、シャンバーク病、紫斑性色素性苔癬様皮膚炎）、肥厚性瘢痕・ケロイド、肉芽腫症（サルコイドーシス、環状肉芽腫）、悪性リンパ腫（菌状息肉症を含む）、アミロイド苔癬、斑状アミロイドージス、天疱瘡群、家族性良性慢性天疱瘡、類天疱瘡、円形脱毛症',
        contraindications: '細菌・真菌・スピロヘータ・ウイルス皮膚感染症の患者、本剤の成分に対し過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎の患者、潰瘍（ベーチェット病は除く）、第2度深在性以上の熱傷・凍傷の患者。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'betamethasone-valerate',
        name: 'ベタメタゾン吉草酸エステル (リンデロンV/ベトネベート)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (強い)',
        manufacturer: 'リンデロンV: シオノギファーマ、ベトネベート: グラクソ・スミスクライン',
        price: 'リンデロンV軟膏・クリーム0.12%: 16.9円/g、ローション: 16.9円/mL。ベトネベートN軟膏・クリーム: 17.9円/g。ベトネベート軟膏0.12%: 19.6円/g。',
        generic: 'あり（主要後発品メーカー: 岩城製薬、東和薬品、陽進堂、辰巳化学、日本ジェネリック。薬価: 液0.12%は8.50円/mL、軟膏0.12%は6.90円/gなど。）',
        release_date: 'リンデロン-V軟膏/クリーム0.12%: 1966年3月1日。ベトネベート軟膏/クリーム0.12%: 1965年12月。',
        dosage: '通常、1日1〜数回、適量を患部に塗布します。症状により適宜増減されます。',
        indications: '湿疹・皮膚炎群（進行性指掌角皮症、女子顔面黒皮症、ビダール苔癬、放射線皮膚炎、日光皮膚炎を含む）、皮膚そう痒症、痒疹群（じん麻疹様苔癬、ストロフルス、固定じん麻疹を含む）、虫さされ、乾癬、掌蹠膿疱症、扁平苔癬、光沢苔癬、毛孔性紅色粃糠疹、ジベルバラ色粃糠疹、紅斑症（多形滲出性紅斑、結節性紅斑、ダリエ遠心性環状紅斑）、紅皮症（悪性リンパ腫による紅皮症を含む）、慢性円板状エリテマトーデス、薬疹・中毒疹、円形脱毛症（悪性を含む）、熱傷（瘢痕、ケロイドを含む）、凍瘡、天疱瘡群、ジューリング疱疹状皮膚炎（類天疱瘡を含む）、痔核、鼓室形成手術・内耳開窓術・中耳根治手術の術創など。ベトネベートNは深在性皮膚感染症、慢性膿皮症、湿潤、びらん、結痂を伴うか、又は二次感染を併発している湿疹・皮膚炎群、乾癬、虫さされ、痒疹群。',
        contraindications: '細菌・真菌・スピロヘータ・ウイルス皮膚感染症及び動物性皮膚疾患、本剤の成分に対し過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎の患者、潰瘍（ベーチェット病は除く）、第2度深在性以上の熱傷・凍傷の患者。ベトネベートNの場合、フラジオマイシン耐性菌または非感性菌による皮膚感染、アミノグリコシド系抗生物質またはバシトラシンに対し過敏症の既往歴のある患者。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'fluocinolone-acetonide',
        name: 'フルオシノロンアセトニド (フルコート)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (強い)',
        manufacturer: '田辺三菱製薬株式会社',
        price: 'フルコートF軟膏: 22.3円/g、フルコート軟膏/クリーム0.025%: 15.50円/g',
        generic: 'あり（主要後発品メーカー: 陽進堂、摩耶堂製薬、東和薬品、岩城製薬。薬価: 軟膏0.025%「YD」は10.8円/g。）',
        release_date: 'フルコートクリーム: 1961年9月20日、フルコート軟膏: 1967年1月20日',
        dosage: '通常、1日1～数回、適量を患部に塗布または塗擦するか、あるいは無菌ガーゼなどにのばして貼付します。スプレーの場合は、適量を指先に出し、患部に優しく塗布します。',
        indications: '湿疹・皮膚炎群、皮膚そう痒症、痒疹群、虫さされ、乾癬、掌蹠膿疱症、薬疹、中毒疹',
        contraindications: '細菌・真菌・スピロヘータ・ウイルス皮膚感染症および動物性皮膚疾患、本剤の成分に対し過敏症の既往歴がある患者、鼓膜に穿孔のある湿疹性外耳道炎の患者、フラジオマイシン、カナマイシン、ストレプトマイシン、ゲンタマイシンなどのアミノ糖系抗生物質およびバシトラシンに対し過敏症の既往歴のある患者、潰瘍（ベーチェット病を除く）、第2度深在性以上の熱傷・凍傷の患者。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'prednisolone-valerate-acetate',
        name: 'プレドニゾロン吉草酸エステル酢酸エステル (リドメックス)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (普通)',
        manufacturer: '興和株式会社',
        price: '軟膏、クリーム、ローションいずれも0.3%1gあたり14.7円',
        generic: 'あり（主要後発品メーカー: 辰巳化学、陽進堂。薬価: 軟膏/クリーム0.3%は7.7円/gまたは13.4円/g。）',
        release_date: '軟膏およびクリームは1982年6月承認、ローションは1985年8月承認。',
        dosage: '通常、1日1〜数回、適量を患部に塗布します。症状により適宜増減したり、密封法を行うこともあります。',
        indications: '湿疹・皮膚炎群（進行性指掌角皮症、ビダール苔癬を含む）、痒疹群（固定じん麻疹、ストロフルスを含む）、虫さされ、乾癬、掌蹠膿疱症',
        contraindications: '細菌・真菌・スピロヘータ・ウイルス皮膚感染症及び動物性皮膚疾患、本剤の成分に対し過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎、潰瘍（ベーチェット病は除く）、第2度深在性以上の熱傷・凍傷。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'triamcinolone-acetonide',
        name: 'トリアムシノロンアセトニド (レダコート)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (普通)',
        manufacturer: 'アルフレッサファーマ株式会社',
        price: '軟膏・クリーム0.1%は1gあたり16.5円',
        generic: 'あり（主要後発品メーカー: 帝國製薬、東興薬品工業、ビーブランド・メディコーデンタル。薬価: 口腔用貼付剤25μg「大正」31.6円/枚、ゲル0.1%「TK」16.4円/g、クリーム0.1%「TK」16.4円/g、軟膏0.1%は3.7円/gなど。）',
        release_date: '軟膏0.1%: 1963年1月16日、クリーム0.1%: 1961年8月1日',
        dosage: '通常、1日2〜3回適量を患部に塗布します。症状により適宜増減されます。',
        indications: '湿疹・皮膚炎群（進行性指掌角皮症、女子顔面黒皮症、ビダール苔癬、放射線皮膚炎、日光皮膚炎を含む）、皮膚そう痒症、痒疹群（蕁麻疹様苔癬、ストロフルス、固定蕁麻疹を含む）、虫さされ、乾癬、掌蹠膿疱症、紅斑症（多形滲出性紅斑、結節性紅斑、ダリエ遠心性環状紅斑）、紅皮症（悪性リンパ腫による紅皮症を含む）、皮膚粘膜症候群（ベーチェット病を含む）、薬疹・中毒疹、円形脱毛症（悪性を含む）、熱傷（瘢痕、ケロイドを含む）、凍瘡、天疱瘡群、ジューリング疱疹状皮膚炎（類天疱瘡を含む）、扁平苔癬、毛孔性紅色粃糠疹',
        contraindications: '皮膚結核、単純疱疹、水痘、帯状疱疹、種痘疹、本剤の成分に対し重篤な過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎、潰瘍（ベーチェット病は除く）、第2度深在性以上の熱傷・凍傷。眼科用として使用しない。化粧下、ひげそり後など治療以外の目的に使用しない。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'alclometasone-dipropionate',
        name: 'アルクロメタゾンプロピオン酸エステル (アルメタ)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (普通)',
        manufacturer: 'シオノギファーマ株式会社（製造販売元）、塩野義製薬株式会社（販売元）',
        price: '0.1%1gあたり20.6円',
        generic: 'あり（主要後発品メーカー: 岩城製薬。薬価: 軟膏0.1%「イワキ」は28.3円/g。）',
        release_date: '1988年3月29日承認、1988年5月27日発売',
        dosage: '通常、1日1～数回、適量を患部に塗布します。症状により適宜増減されます。',
        indications: '湿疹・皮膚炎群（進行性指掌角皮症を含む）、乾癬、痒疹群（ストロフルス、蕁麻疹様苔癬、固定蕁麻疹を含む）、虫さされ、掌蹠膿疱症、扁平苔癬、ジベル薔薇色粃糠疹、紅斑症（多形滲出性紅斑、ダリエ遠心性環状紅斑）、薬疹・中毒疹、紅皮症、特発性色素性紫斑（シャンバーグ病、マヨッキー紫斑、紫斑性色素性苔癬様皮膚炎）、慢性円板状エリテマトーデス',
        contraindications: '細菌・真菌・スピロヘータ・ウイルス皮膚感染症および動物性皮膚疾患、本剤の成分に対し過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎、潰瘍（ベーチェット病は除く）、第2度深在性以上の熱傷・凍傷。皮膚感染を伴う湿疹・皮膚炎には原則として使用しない。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'clobetasone-butyrate',
        name: 'クロベタゾン酪酸エステル (キンダベート)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (普通)',
        manufacturer: 'グラクソ・スミスクライン（GSK）',
        price: '軟膏0.05%は1gあたり13.8円',
        generic: 'あり（主要後発品メーカー: 陽進堂、帝國製薬、岩城製薬、東光薬品工業。薬価: 軟膏0.05%は7.90円/gから16.70円/g。）',
        release_date: '不明',
        dosage: '通常、1日1〜数回適量を患部に塗布します。症状により適宜増減されます。',
        indications: 'アトピー性皮膚炎（乳幼児湿疹を含む）、顔面、頸部、腋窩（わきの下）、陰部における湿疹・皮膚炎',
        contraindications: '本剤の成分に対し過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎、潰瘍（ベーチェット病を除く）、第2度深在性以上の熱傷・凍傷、細菌、真菌、ウイルス皮膚感染症の患者。皮膚感染を伴う湿疹・皮膚炎には原則使用しない。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'hydrocortisone-butyrate',
        name: 'ヒドロコルチゾン酪酸エステル (ロコイド)',
        category: 'topical',
        mechanism: 'ステロイド外用薬 (弱い)',
        manufacturer: '鳥居薬品株式会社',
        price: '軟膏0.1%およびクリーム0.1%は14.9円/g',
        generic: 'あり（主要後発品メーカー: 佐藤製薬。薬価: 軟膏0.1%は8.9円/g。）',
        release_date: '1975年10月1日',
        dosage: '通常、1日1〜数回適量を患部に塗布します。症状により適宜増減されます。',
        indications: '湿疹・皮膚炎群（進行性指掌角皮症、ビダール苔癬、脂漏性皮膚炎を含む）、痒疹群（蕁麻疹様苔癬、ストロフルス、固定蕁麻疹を含む）、乾癬、掌蹠膿疱症',
        contraindications: '細菌・真菌・スピロヘータ・ウイルス皮膚感染症、および動物性皮膚疾患、本剤に対して過敏症の既往歴のある患者、鼓膜に穿孔のある湿疹性外耳道炎の患者、潰瘍（ベーチェット病は除く）、第2度深在性以上の熱傷・凍傷の患者。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'calcipotriol',
        name: 'カルシポトリオール (ドボネックス)',
        category: 'topical',
        mechanism: '活性型ビタミンD3外用薬 (高濃度製剤)',
        manufacturer: 'レオファーマ株式会社',
        price: '軟膏50μg/gは1gあたり75.6円',
        generic: 'なし', // ジェネリック医薬品なし
        release_date: '2000年6月13日',
        dosage: '通常、1日2回、適量を患部に塗布します。1週間の総使用量は90gを超えないように注意が必要です。',
        indications: '尋常性乾癬',
        contraindications: '本剤の成分に対し過敏症の既往歴のある患者、高カルシウム血症の患者やそのおそれのある患者、腎機能障害のある患者。顔面、粘膜、傷口には使用しない。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'maxacalcitol',
        name: 'マキサカルシトール (オキサロール/ボンアルファハイ)',
        category: 'topical',
        mechanism: '活性型ビタミンD3外用薬 (高濃度製剤)',
        manufacturer: '注射剤: ニプロ。軟膏後発品: 長生堂製薬。オキサロール: マルホ。ボンアルファハイ: 岩城製薬。',
        price: 'マキサカルシトール軟膏25μg/g「CH」（後発品）: 37.5円/g。オキサロール軟膏/ローション25μg/g: 50.2円/g。ボンアルファハイ軟膏/ローション20μg/g: 155.5円/g。',
        generic: 'あり（主要後発品メーカー: 高田製薬、岩城製薬、長生堂製薬（軟膏）、ニプロ、東和薬品、日医工岐阜工場、コーアイセイ、扶桑薬品工業（注射液）。薬価: 軟膏25μg/gは34.8円/gから37.5円/g。注射液は2.5μg/管で150円/管から810円/筒など。）',
        release_date: 'オキサロールローション25μg/g: 2007年3月承認。ボンアルファハイ軟膏20μg/g: 2002年10月23日発売。',
        dosage: '注射剤: 通常、成人には透析終了直前にマキサカルシトールとして、1回2.5〜10μgを週3回、透析回路静脈側に注入。軟膏: 通常1日2回適量を患部に塗擦。1日の使用量はマキサカルシトールとして250μgまで。ボンアルファハイ: 通常1日1回適量を患部に塗布。1日の使用量は本剤として10gまで。',
        indications: '慢性腎不全における二次性副甲状腺機能亢進症、尋常性乾癬、魚鱗癬群、掌蹠角化症、掌蹠膿疱症',
        contraindications: '本剤の成分に対して過敏症の既往歴のある患者。妊婦または妊娠している可能性のある女性には使用しないことが望ましい。他の活性型ビタミンD製剤との併用は、カルシウム過剰を招きやすいため、基本的に同時に使わない方針が多い。高カルシウム血症や腎機能低下の可能性がある患者には注意が必要。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'tacalcitol',
        name: 'タカルシトール (ボンアルファ)',
        category: 'topical',
        mechanism: '活性型ビタミンD3外用薬 (低濃度製剤)',
        manufacturer: '帝人ファーマ株式会社（元々の開発）、岩城製薬株式会社（製造販売承認承継）',
        price: 'ボンアルファ軟膏/クリーム/ローション2μg/g: 57.8円/g。ボンアルファハイ軟膏/ローション20μg/g: 155.5円/g。',
        generic: 'あり（主要後発品メーカー: 日医工岐阜工場、武田テバ薬品。薬価: 2μg/g製剤は1gあたり36.6円。）',
        release_date: 'ボンアルファ軟膏2μg/g: 1993年12月、ボンアルファクリーム2μg/g: 1997年8月、ボンアルファローション2μg/g: 2000年1月、ボンアルファハイ軟膏20μg/g: 2002年10月、ボンアルファハイローション20μg/g: 2006年6月27日',
        dosage: 'ボンアルファハイ（20μg/g製剤）: 通常、1日1回、適量を患部に塗布。1日の使用量は本剤として10gまで。他のタカルシトール水和物外用剤と併用する場合は、タカルシトールとして1日の投与量は200μgまで。ボンアルファ（2μg/g製剤）: 通常、1日2回、適量を患部に塗布。',
        indications: 'ボンアルファハイ（20μg/g製剤）: 尋常性乾癬。ボンアルファ（2μg/g製剤）: 乾癬、魚鱗癬、掌蹠膿疱症、掌蹠角化症、毛孔性紅色粃糠疹',
        contraindications: '本剤の成分に対し過敏症の既往歴のある患者。高カルシウム血症に伴う腎機能低下の可能性があるので、血清カルシウムや尿中カルシウム、腎機能の検査を定期的に行い、異常が認められた場合は使用を中止し経過を観察。眼科用として角膜、結膜には使用しない。密封療法（ODT）は推奨されない。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    },
    {
        id: 'tacrolimus-ointment',
        name: 'タクロリムス軟膏',
        category: 'topical',
        mechanism: 'カルシニューリン阻害薬',
        manufacturer: '先発品「プロトピック軟膏」はマルホ。ジェネリックはサンファーマ、岩城製薬、高田製薬、ニプロなど。',
        price: 'プロトピック軟膏0.1%: 58.4円/g、プロトピック軟膏0.03%小児用: 72.6円/g。後発品は29.20円/gから55.0円/g。',
        generic: 'あり（主要後発品メーカー: 高田製薬、サンファーマ、岩城製薬、ニプロ。薬価: 軟膏0.1%は29.20円/gから55.0円/g。）',
        release_date: 'プロトピック軟膏0.1%（成人用）: 1999年11月、プロトピック軟膏0.03%小児用: 2003年12月12日。後発品は2012年6月22日以降。',
        dosage: '通常、成人には1日1〜2回、適量を患部に塗布。1回あたりの塗布量は5gまで。症状が改善した場合は、使用回数を減らして維持療法として使用。2歳以上の小児には、より低濃度の0.03%製剤を使用。',
        indications: 'アトピー性皮膚炎',
        contraindications: '潰瘍、明らかに局面を形成しているびらん（ただれ）がある患部、高度の腎障害、高度の高カリウム血症の患者、魚鱗癬様紅皮症を呈する疾患（Netherton症候群等）の患者、2歳未満の乳幼児、本剤の成分に対し過敏症の既往歴のある患者、PUVA療法等の紫外線療法を実施中の患者。妊婦または妊娠している可能性のある女性、授乳中の女性は慎重に検討。皮膚感染症を伴う患者は原則禁忌。皮膚以外の部位（粘膜等）及び外陰部、眼の周囲には使用しない。',
        attachments: {
            tensho_text: null,
            if_text: null
        }
    }
];