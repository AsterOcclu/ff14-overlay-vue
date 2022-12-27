import { cleanMacro, getZoneIDByZoneName } from "../store/macro";
import { ZoneIdInfo } from "../types/Macro";
export const defaultMacro: { zoneId: ZoneIdInfo } = {
  zoneId: {
    "1003": [
      {
        Name: "P1S被窝",
        Type: "macro",
        Text: cleanMacro(`
          /p 【基本八方】|【P1锁链换位】同色标点
          /p D3 MT D4    | MTD3 STD2 H1D1 H2D4
          /p H1  ◎   H2   |【冰火侵蚀】
          /p D1  ST  D2   |MT和D3第二次固定换颜色
          /p                         |第三次根据颜色站位
          /p 【四连锁】
          /p 红3                 红8
          /p              紫3
          /p     紫18 ◎ 紫8
          /p             紫13
          /p 红18              红13
          /p 【定时锁链】
          /p 人群：红 点名：白
  `),
      },
      {
        Name: "P1S WayMark",
        Type: "place",
        Place: {
          A: { X: 100.0, Y: 0.0, Z: 96.0, ID: 0, Active: true },
          B: { X: 104.0, Y: 0.0, Z: 100.0, ID: 1, Active: true },
          C: { X: 100.0, Y: 0.0, Z: 104.0, ID: 2, Active: true },
          D: { X: 96.0, Y: 0.0, Z: 100.0, ID: 3, Active: true },
          One: { X: 90.0, Y: 0.0, Z: 90.0, ID: 4, Active: true },
          Two: { X: 110.0, Y: 0.0, Z: 90.0, ID: 5, Active: true },
          Three: { X: 110.0, Y: 0.0, Z: 110.0, ID: 6, Active: true },
          Four: { X: 90.0, Y: 0.0, Z: 110.0, ID: 7, Active: true },
        },
      },
    ],
    "1005": [
      {
        Name: "P2S被窝",
        Type: "macro",
        Text: cleanMacro(`
          /p 【跳跃分摊】
          /p    原地：MTH1D1D3
          /p    水路：ST H2D2D4
          /p 【麻将】
          /p    紫三角1234→【1234】（无连线）
          /p    蓝方块13：对面 蓝方块24：原地（有连线）
          /p 【第二次对冲】
          /p 非对冲的H固定站污水地板对角，其余人灵性分散
          /p 【多重刻印&污水】←T 分摊 DPS→
          /p 【多重刻印&俯冲】DPS：角落 T：边上
          /p 【散开→接线】T：对面 人群：原地
  `),
      },
      {
        Name: "P2S WayMark",
        Type: "place",
        Place: {
          A: { X: 87.5, Y: 0.5, Z: 87.5, ID: 0, Active: true },
          B: { X: 112.5, Y: 0.5, Z: 87.5, ID: 1, Active: true },
          C: { X: 112.5, Y: 0.5, Z: 112.5, ID: 2, Active: true },
          D: { X: 87.5, Y: 0.5, Z: 112.5, ID: 3, Active: true },
          One: { X: 100.0, Y: 0.0, Z: 90.0, ID: 4, Active: true },
          Two: { X: 110.0, Y: 0.0, Z: 100.0, ID: 5, Active: true },
          Three: { X: 100.0, Y: 0.0, Z: 110.0, ID: 6, Active: true },
          Four: { X: 90.0, Y: 0.0, Z: 100.0, ID: 7, Active: true },
        },
      },
    ],
    "1007": [
      {
        Name: "P3S魔法少女",
        Type: "macro",
        Text: cleanMacro(`
          /p ┌───■暗之炎────┬─■十字地火─┐
          /p │　⑴　│●大球：　　　│
          /p │　⑷　　　　　　　⑵　│　　　北西　　│
          /p │　⑶　│●小球：　　　│
          /p │※顺时针击杀暗之炎　　│　　　11/1点  │
          /p ├───────────┴───────┤
          /p ├─────■俯冲─────┬─■灵泉─┤
          /p │【两侧发光】│【中央发光】│塔：　　　│
          /p │↓　　　　↓│西　↓↓　东│　西北│
          /p │　　│　│　东南│
          /p │　　├──────┘　　　　　│
          /p │　　│点名：→→　│
          /p │　　│　　　→→　│
          /p └──────┴────────────┘
          /p ┌─■炎暗劫火分散─┬─■火龙卷站位──┐
          /p │　　　　　│　　　　　　│
          /p │　　　　　│　　　　　　　　│
          /p │　　　　　│　　★　　│
          /p │　　　　　│　　　　　　│
          /p ├─────────┴─────────┤
          /p ├■火龙卷三穿一分散┬■火龙卷击退后分散┤
          /p │　　　　　　　　　│　　　　黑　　　　│
          /p │　　　　　│　　　　　　　　　│
          /p │　　　　　│　　　　　│
          /p │　　　　★　　　　│　　　　　│
          /p │　　　　　│　　　　　│
          /p │　　　　　│　　　　　　　│
          /p │　　　　　　　　　│　　　　　│
          /p └─────────┴─────────┘
  `),
      },
      {
        Name: "P3S WayMark 魔法少女",
        Type: "place",
        Place: {
          A: { X: 100.0, Y: 0.0, Z: 80.0, ID: 0, Active: true },
          B: { X: 120.0, Y: 0.0, Z: 100.0, ID: 1, Active: true },
          C: { X: 100.0, Y: 0.0, Z: 120.0, ID: 2, Active: true },
          D: { X: 80.0, Y: 0.0, Z: 100.0, ID: 3, Active: true },
          One: { X: 100.0, Y: 0.0, Z: 94.0, ID: 4, Active: true },
          Two: { X: 106.0, Y: 0.0, Z: 100.0, ID: 5, Active: true },
          Three: { X: 100.0, Y: 0.0, Z: 106.0, ID: 6, Active: true },
          Four: { X: 94.0, Y: 0.0, Z: 100.0, ID: 7, Active: true },
        },
      },
      {
        Name: "P3S WayMark 被窝",
        Type: "place",
        Place: {
          A: { X: 100.0, Y: 0.0, Z: 91.19, ID: 0, Active: true },
          B: { X: 108.81, Y: 0.0, Z: 100.277, ID: 1, Active: true },
          C: { X: 100.0, Y: 0.0, Z: 108.81, ID: 2, Active: true },
          D: { X: 91.19, Y: 0.0, Z: 100.0, ID: 3, Active: true },
          One: { X: 93.966, Y: 0.007, Z: 93.921, ID: 4, Active: true },
          Two: { X: 105.988, Y: 0.007, Z: 93.938, ID: 5, Active: true },
          Three: { X: 106.035, Y: 0.008, Z: 106.026, ID: 6, Active: true },
          Four: { X: 93.989, Y: 0.008, Z: 105.995, ID: 7, Active: true },
        },
      },
    ],
    "1009": [
      {
        Name: "P4S被窝门神",
        Type: "macro",
        Text: cleanMacro(`
          /p 【P1拉线 + P3踩塔】     |【踩塔时拉线】
          /p    D1/MT　　 D2/ST     |     H1/D3
          /p                     ◎                    |     MT/D1
          /p    D3/H1  [1]  D4/H2   |     ST/D2
          /p                                             |     H2/D4
          /p 接毒顺序：D1D2D3D4/MTSTH1H2
          /p 【剧场分散】雷火为6点|【撞球】
          /p             MT    ST                |D3 MT H2
          /p   D3    D1◎D2    D4     |D1 ◎  D2
          /p             H1    H2               |H1 ST  D4
          /p 【剧场分摊】                   |同组一起顺时针连撞两个
          /p   前：MTH1D1D3         |D1D3→A开始 D2D4→C开始
          /p   后： STH2D2D4          |MTH2→B开始 STH1→D开始
          /p 【死刑】MT无敌→ST无敌→换T（战士无敌）
  `),
      },
      {
        Name: "P4S被窝本体",
        Type: "macro",
        Text: cleanMacro(`
          /p          【一运】    | 【三运】MTD4引导
          /p  D3　　　  D4  | H1                    |                     MT
          /p   　MT　ST        | D3        D1      |        H1      D1
          /p   　　   ◎            |              ◎ ST  →   D3◎
          /p   　D1　D2       | D4       D2       |        H2      D2
          /p  H1　　　H2    | H2                    |                     ST
          /p 【二运】以第一次A/B的安全区为12点
          /p 无T：11点钟拉线→12点钟踩塔→3点钟分摊  红T：12点钟分摊→3点钟分摊
          /p 紫H：5点钟拉线→6点钟踩塔→3点钟踩塔   红H：6点钟分摊→9点钟踩塔
          /p 红D：12点钟分摊→9点分摊[D1234]3点分摊 绿D：6点钟分摊→9点钟分摊
          /p 【五运】D3　D1　　　ST　H2
          /p 　　           荆棘         ◎        荆棘
          /p                 D4    D2            MT   H1
          /p 【四运】顺时针，蓝三紫一【六运】DPS：10s TH：5s
  `),
      },
      {
        Name: "P4S WayMark 被窝门神",
        Type: "place",
        Place: {
          A: { X: 100.0, Y: 0.0, Z: 85.0, ID: 0, Active: true },
          B: { X: 115.0, Y: 0.0, Z: 100.0, ID: 1, Active: true },
          C: { X: 100.0, Y: 0.0, Z: 115.0, ID: 2, Active: true },
          D: { X: 85.0, Y: 0.0, Z: 100.0, ID: 3, Active: true },
          One: { X: 100.0, Y: 0.0, Z: 102.5, ID: 4, Active: true },
          Two: { X: 100.0, Y: 0.0, Z: 107.5, ID: 5, Active: true },
          Three: { X: 0.0, Y: 0.0, Z: 0.0, ID: 6, Active: false },
          Four: { X: 0.0, Y: 0.0, Z: 0.0, ID: 7, Active: false },
        },
      },
      {
        Name: "P4S WayMark 被窝本体",
        Type: "place",
        Place: {
          A: { X: 99.058, Y: 0.0, Z: 81.135, ID: 0, Active: true },
          B: { X: 119.352, Y: 0.0, Z: 99.316, ID: 1, Active: true },
          C: { X: 100.747, Y: 0.0, Z: 119.114, ID: 2, Active: true },
          D: { X: 80.574, Y: 0.0, Z: 101.415, ID: 3, Active: true },
          One: { X: 105.052, Y: 0.0, Z: 84.859, ID: 4, Active: true },
          Two: { X: 114.869, Y: 0.0, Z: 104.923, ID: 5, Active: true },
          Three: { X: 95.007, Y: 0.0, Z: 114.873, ID: 6, Active: true },
          Four: { X: 85.0, Y: 0.0, Z: 95.019, ID: 7, Active: true },
        },
      },
      {
        Name: "P4S WayMark Melee Uptime",
        Type: "place",
        Place: {
          A: { X: 102.5, Y: 0.0, Z: 90.0, ID: 0, Active: true },
          B: { X: 110.0, Y: 0.0, Z: 102.5, ID: 1, Active: true },
          C: { X: 97.5, Y: 0.0, Z: 110.0, ID: 2, Active: true },
          D: { X: 90.0, Y: 0.0, Z: 97.5, ID: 3, Active: true },
          One: { X: 97.0, Y: 0.0, Z: 82.0, ID: 4, Active: true },
          Two: { X: 118.0, Y: 0.0, Z: 97.0, ID: 5, Active: true },
          Three: { X: 103.0, Y: 0.0, Z: 118.0, ID: 6, Active: true },
          Four: { X: 82.0, Y: 0.0, Z: 103.0, ID: 7, Active: true },
        },
      },
    ],
    "1072": [
      {
        Name: "宏" + getSource(`https://nga.178.com/read.php?tid=34756217`),
        Type: "macro",
        Text: cleanMacro(`/p 【散开基准】咒发突袭：BOSS面向基准　其它：北（A）基准
        /p 【基本散开】 【十字分摊】
        /p D3 MT D4　　　MTD3
        /p H1　　H2　 H1D1　 H2D4
        /p D1 ST D2　 　　 STD2
        /p 【咒法突袭（分摊/分散）】
        /p D3H1D1MT←▲→STD2H2D4　※分散：T原地不动,D1D2在扇形结束后往内侧走
        /p 【距离衰减+分摊】【PS连线：TH固定法】
        /p 　　MT　　ST　　　　　　   MT(A)
        /p 　　　　◎ 　 　 　　　H1(D)  DPS  H2(B)
        /p 　　　分摊  　 　 　　　　       ST(C)  ※T分摊死刑点名T无敌单吃
        /p 【咒发拘束1】①③标记处分摊
        /p 【咒发拘束2/PS连线】DPS：顺时针（左）　TH：逆时针（右）
        /p 【4连黄圈】C点集合，顺时针放圈
        /p 【PS连线2分摊】对组分摊：全员靠近后和邻组分摊  邻组分摊：无点名找点名分摊`),
      },
      {
        Name: "标点",
        Type: "place",
        Place: {
          A: { "X": 99.845, "Y": 0.0, "Z": 93.175, "ID": 0, "Active": true },
          B: { "X": 107.21, "Y": 0.0, "Z": 100.694, "ID": 1, "Active": true },
          C: { "X": 99.657, "Y": 0.0, "Z": 107.984, "ID": 2, "Active": true },
          D: { "X": 91.972, "Y": 0.0, "Z": 100.319, "ID": 3, "Active": true },
          One: { "X": 106.731, "Y": 0.0, "Z": 94.095, "ID": 4, "Active": true },
          Two: { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
          Three: { "X": 92.535, "Y": 0.0, "Z": 107.564, "ID": 6, "Active": true },
          Four: { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      },
    ],
    "1082": [
      {
        Name: "P5S 苦茶子（和game8一样）",
        Type: "macro",
        Text: cleanMacro(`/p 【基本散开】 【捕食毒塔】ST自由
      /p D3 MT D4　　　　　　MT(无敌)
      /p H1　　H2　　　H1D3　　 H2D4
      /p D1 ST D2　　　　　　 D1D2
      /p 【毒塔（近战内侧 / 远程外侧）】
      /p MTST / H1D3：12点位置逆时针找塔
      /p D1D2 / H2D4：1点位置顺时针找塔
      /p 【毒液泉涌（染色分摊)】
      /p 内侧：MTH1D1D3 外侧：STH2D2D4
      /p  【毒池 + 毒液风暴】
      /p 　　毒D1H1D3外
      /p 　　　　MT
      /p 　　　　☆
      /p 　　　　ST
      /p 外D4H2D2毒　※毒如果相反则站位相反
      /p MT組：标记1or4 找毒圈
      /p ST組： 标记2or3 找毒圈
      /p AOE放在外侧，内侧分摊
      /p 【染色+冲锋 找3个水晶的对侧房间分摊染色】`),
      },
      {
        Name: "P5S game8",
        Type: "macro",
        Text: cleanMacro(`
          /p 【基本散開】　　　【十字毒塔】STフリー
          /p D3 MT D4　　　　　　MT(無敵)
          /p H1　　H2　　　H1D3　　 H2D4
          /p D1 ST D2　　　　　　 D1D2
          /p 【毒塔（近接内側 / 遠隔外側）】
          /p MTST / H1D3：12時から反時計回り
          /p D1D2 / H2D4：1時から時計回り
          /p 【ベノムサージ(東西受け)/スプラッシュ】
          /p 西/内壁：MTH1D1D3 東/外壁：STH2D2D4
          /p 【毒沼 + ベノムスコール】
          /p 　　毒D1H1D3外
          /p 　　　　MT
          /p 　　　　☆
          /p 　　　　ST
          /p 　外D4H2D2毒　※毒が逆位置の場合反転
          /p MT組：マーカー1or4に出た毒に合わせて移動
          /p ST組：マーカー2or3に出た毒に合わせて移動
          /p AOEは外周に捨ててMT/STの位置で頭割り
          /p 【4部屋ベノムスプラッシュ：3個部屋の対角】
  `),
      },
      {
        Name: "P5S Standard",
        Type: "place",
        Place: {
          A: { X: 100.0, Y: -300.0, Z: 93.0, ID: 0, Active: true },
          B: { X: 107.0, Y: -300.0, Z: 100.0, ID: 1, Active: true },
          C: { X: 100.0, Y: -300.0, Z: 107.0, ID: 2, Active: true },
          D: { X: 93.0, Y: -300.0, Z: 100.0, ID: 3, Active: true },
          One: { X: 112.5, Y: -300.0, Z: 87.5, ID: 4, Active: true },
          Two: { X: 112.5, Y: -300.0, Z: 112.5, ID: 5, Active: true },
          Three: { X: 87.5, Y: -300.0, Z: 112.5, ID: 6, Active: true },
          Four: { X: 87.5, Y: -300.0, Z: 87.5, ID: 7, Active: true },
        },
      },
      {
        Name: "P5S Quadrants",
        Type: "place",
        Place: {
          "A": { "X": 100.0, "Y": -300.0, "Z": 86.0, "ID": 0, "Active": true },
          "B": { "X": 114.0, "Y": -300.0, "Z": 100.0, "ID": 1, "Active": true },
          "C": { "X": 100.009, "Y": -300.0, "Z": 114.0, "ID": 2, "Active": true },
          "D": { "X": 86.0, "Y": -300.0, "Z": 100.0, "ID": 3, "Active": true },
          "One": { "X": 92.0, "Y": -300.0, "Z": 92.0, "ID": 4, "Active": true },
          "Two": { "X": 108.0, "Y": -300.0, "Z": 92.0, "ID": 5, "Active": true },
          "Three": { "X": 108.0, "Y": -300.0, "Z": 108.0, "ID": 6, "Active": true },
          "Four": { "X": 92.0, "Y": -300.0, "Z": 108.0, "ID": 7, "Active": true },
        },
      },
      {
        Name: "P5S 子言",
        Type: "place",
        Place: {
          "A": { "X": 100.0, "Y": -300.0, "Z": 86.0, "ID": 0, "Active": true },
          "B": { "X": 114.0, "Y": -300.0, "Z": 100.0, "ID": 1, "Active": true },
          "C": { "X": 100.009, "Y": -300.0, "Z": 114.0, "ID": 2, "Active": true },
          "D": { "X": 86.0, "Y": -300.0, "Z": 100.0, "ID": 3, "Active": true },
          "One": { "X": 108.0, "Y": -300.0, "Z": 92.0, "ID": 5, "Active": true },
          "Two": { "X": 108.0, "Y": -300.0, "Z": 108.0, "ID": 6, "Active": true },
          "Three": { "X": 92.0, "Y": -300.0, "Z": 108.0, "ID": 7, "Active": true },
          "Four": { "X": 92.0, "Y": -300.0, "Z": 92.0, "ID": 4, "Active": true },
        },
      },
    ],
    "1084": [
      {
        Name: "P6S 千星流月夜（推荐）" + getSource(`https://www.bilibili.com/video/BV1RG4y1u78L`),
        Type: "macro",
        Text: cleanMacro(`/p ※MT组：MTH1D1D3 ST组：STH2D2D4
      /p 　【基本散开】　　 【恶病质】
      /p MT/D3　ST/D4　　　　20　 20
      /p 　　　★　　　　　　8　★　8
      /p H1/D1　H2/D2　　　12　　　12
      /p 　　　　　　　　　　16　　16
      /p 【 分摊分组 】 ｜ 【苦痛爆发+寄生之舞】
      /p 西：MT组 东：ST組 ｜DPS分摊：场地4点 TN分摊：场地3点
      /p ※顺时针移动处理分摊｜DPS大圈：D1→B D2→4 D3→右下 D4→D
      /p 【致病胞流】　　 　｜TN 大圈：MT→3 ST→D H1→左上 H2→B
      /p 奇数：场地1点　　 　｜ 【苦痛爆发+界外劈砍】
      /p 偶数：场地2点　　　 ｜DPS分摊：场地4点 TN分摊：场地3点
      /p ｜DPS大圈：B /TN大圈：D
      /p 【恶病质+多元以太】
      /p 安全格中上半两格→AoE　下半两格→分摊`),
      },
      {
        Name: "P6S 苦茶子（和game8一样）",
        Type: "macro",
        Text: cleanMacro(`/p ※MT组：MTH1D1D3 ST组：STH2D2D4
    /p 【基本散开】 【恶病体质第一次】
    /p MT/D3　ST/D4 　 　 8　　 　 　8
    /p 　　 　 ★　　 　 12　20 ★ 20　12
    /p H1/D1　H2/D2　　  16 　 　 　 16
    /p 【 分摊+扇型攻击 】｜ 【4：4分摊】
    /p 西：MT组 东：ST组 ｜西侧→MT组 东侧→ST组
    /p ※顺时针移动分摊   ｜※内侧标记集合
    /p 【麻将】　　　　 　｜【苦痛交换第二次】
    /p 西：奇数　　　 　　｜西→T・H    东→DPS
    /p 东：偶数　　 　　　｜※AOE放置方向同上
    /p 【恶病体质第二次】
    /p 西：紫DEBUFF　东：绿DEBUFF
    /p 北・南外侧标记→AoE　内侧标记→分摊`),
      },
      {
        Name: "P6S game8",
        Type: "macro",
        Text: cleanMacro(`
          /p ※MT組：MTH1D1D3 ST組：STH2D2D4
          /p 　【基本散開】　　【カヘキシー1回目】
          /p MT/D3　ST/D4 　 　 8　　 　 　8
          /p 　　 　 ★　　 　 　12　20 ★ 20　12
          /p H1/D1　H2/D2　　16 　 　 　 16
          /p 【 頭割り+扇範囲 】｜ 【4：4頭割り】
          /p 西：MT組 東：ST組｜西側→MT組 東側→ST組
          /p ※時計回りで頭割り｜※内周4マスを使用
          /p 【サイコロ】　　 　｜【チェンジバースト2回目】
          /p 西：奇数　　　　　｜西→T・H 東→DPS
          /p 東：偶数　　　　　｜※AOEも上記方向に捨てる
          /p 【カヘキシー2回目】
          /p 西：紫デバフ　東：緑デバフ
          /p 北・南外周マス→AoE　内周マス→頭割り
  `),
      },
      {
        Name: "P6S 千星",
        Type: "place",
        Place: {
          A: { X: 100, Y: 0, Z: 81.818, ID: 0, Active: true },
          B: { X: 90.91, Y: 0, Z: 109.09, ID: 1, Active: true },
          C: { X: 100, Y: 0, Z: 118.182, ID: 2, Active: true },
          D: { X: 109.09, Y: 0, Z: 90.91, ID: 3, Active: true },
          One: { X: 95, Y: 0, Z: 95, ID: 4, Active: true },
          Two: { X: 105, Y: 0, Z: 95, ID: 5, Active: true },
          Three: { X: 92.728, Y: 0, Z: 92.728, ID: 6, Active: true },
          Four: { X: 107.272, Y: 0, Z: 107.272, ID: 7, Active: true },
        },
      },
      {
        Name: "P6S Box Setup",
        Type: "place",
        Place: {
          A: { X: 100.071, Y: 0.0, Z: 90.053, ID: 0, Active: true },
          B: { X: 110.043, Y: 0.0, Z: 99.861, ID: 1, Active: true },
          C: { X: 99.954, Y: 0.0, Z: 110.023, ID: 2, Active: true },
          D: { X: 89.937, Y: 0.0, Z: 99.946, ID: 3, Active: true },
          One: { X: 109.937, Y: 0.0, Z: 90.068, ID: 4, Active: true },
          Two: { X: 109.992, Y: 0.0, Z: 109.859, ID: 5, Active: true },
          Three: { X: 89.9, Y: 0.0, Z: 109.926, ID: 6, Active: true },
          Four: { X: 89.969, Y: 0.0, Z: 90.134, ID: 7, Active: true },
        },
      },
      {
        Name: "P6S Diamond Limit Cut",
        Type: "place",
        Place: {
          "A": { "X": 100.0, "Y": 0.0, "Z": 81.25, "ID": 0, "Active": true },
          "B": { "X": 115.0, "Y": 0.0, "Z": 100.0, "ID": 1, "Active": true },
          "C": { "X": 100.0, "Y": 0.0, "Z": 118.75, "ID": 2, "Active": true },
          "D": { "X": 85.0, "Y": 0.0, "Z": 100.0, "ID": 3, "Active": true },
          "One": { "X": 93.5, "Y": 0.0, "Z": 90.0, "ID": 4, "Active": true },
          "Two": { "X": 106.5, "Y": 0.0, "Z": 90.0, "ID": 5, "Active": true },
          "Three": { "X": 93.5, "Y": 0.0, "Z": 110.0, "ID": 6, "Active": true },
          "Four": { "X": 106.5, "Y": 0.0, "Z": 110.0, "ID": 7, "Active": true },
        },
      },
      {
        Name: "P6S Diamond + Timer Strat Marker",
        Type: "place",
        Place: {
          "A": { "X": 111.5, "Y": 0.0, "Z": 95.5, "ID": 0, "Active": true },
          "B": { "X": 111.5, "Y": 0.0, "Z": 104.5, "ID": 1, "Active": true },
          "C": { "X": 88.5, "Y": 0.0, "Z": 104.5, "ID": 2, "Active": true },
          "D": { "X": 88.5, "Y": 0.0, "Z": 95.5, "ID": 3, "Active": true },
          "One": { "X": 106.0, "Y": 0.0, "Z": 88.0, "ID": 4, "Active": true },
          "Two": { "X": 106.0, "Y": 0.0, "Z": 112.0, "ID": 5, "Active": true },
          "Three": { "X": 94.0, "Y": 0.0, "Z": 112.0, "ID": 6, "Active": true },
          "Four": { "X": 94.0, "Y": 0.0, "Z": 88.0, "ID": 7, "Active": true },
        },
      },
    ],
    "1086": [
      {
        Name: "P7S 苦茶子",
        Type: "macro",
        Text: cleanMacro(`
        /p ■4:4分摊　　─ ─┬■魔印(以北为准)+鸟塔(面向外侧)
        /p MT组 北、西　　│　MT/D1　　ST/D2 ※2第二回
        /p ST组 南、东　　│ 　　　　　　　　　　的分摊在
        /p               │　H1/D3　　H2/D4　桥前集合
        /p ■击退+分散    ─┴┬■獄8人      
        /p 　D1　　D2　　　│　　 　MT/D1　北西＞北东
        /p D3 MT　ST D4   │ 分摊 　　　※相反则翻转站位
        /p 　　　　　　　  │  　　H2/D4
        /p 　H1　　H2　　　│ ST/D2　　　 　道  道
        /p 　　　　　　　　│ 　　H1/D3 　　　路
        /p ■凶无敌处理(以牛为北) -■生命的繁茂【乱】 
        /p ※T没有牛通路无敌 │　牛…按基本分散
        /p H1　　　　 H2 　　│　鳥…躲避牛头人的线开防击退
        /p 　　　牛　　　　 │ 牛头人…平行于桥拉线
        /p D3 D1　D2 D4  　│
  `),
      },
      {
        Name: "P7S game8",
        Type: "macro",
        Text: cleanMacro(`
          /p MT組：MTH1D1D3　ST組：STH2D2D4
          /p 　【基本散開】　　　　　【ノックバック+鳥】
          /p MT/D1　ST/D2　　　　 D1　　 　 　 D2
          /p 　　 　 ★　　　　　　D3　 MT　 　ST　 D4
          /p H1/D3　H2/D4　　　　通路 　 　 　 通路
          /p 　　　　　　　　　　　H1　　　　　　　H2
          /p 【生命の果実：頭割り】　│【魔印創成：散開】
          /p 北側：MT組　南側：ST組 │基本散開※頭割りと被ったら通路
          /p 【エクサ+頭割り】　 　 　 │【鳥誘導＋塔】
          /p 西：MT組　東：ST組　　 │基本散開準拠でズレたら時計回り
          /p 【魔印創成：獄】
          /p 　 ▼西島▼　　　　　　　 　 ▼東島▼
          /p 頭割り　MT/D1 　 　 　 MT/D1　頭割り
          /p ST/D2　H2/D4　通路　H2/D4　ST/D2
          /p 　　　　H1/D3　 　　　H1/D3
  `),
      },
      {
        Name: "被窝国际P7S站位宏",
        Type: "macro",
        Text: cleanMacro(`
        /p MT组：MTH1D1D3　ST组：STH2D2D4
        /p 　【基础分散】　　　 【击退+分散+鸟】
        /p MT/D1　ST/D2　　　　 D1　　 　 　 D2
        /p 　　 ★            D3　 MT　 　ST　 D4
        /p H1/D3　H2/D4　　　　过道 　 　 　 过道
        /p                     H1           H2
        /p 【生命的果实:分摊】　 │【魔印创造:分散】
        /p 北侧：MT组 南测：ST组 │基础分散※分摊在中心
        /p 【左右分摊】　 　 　 │【鸟+塔】
        /p 西：MT组　东：ST组　 │相对基础分散※贴近引导
        /p 【魔印创造·狱】
        /p 　 ▼西平台▼ 　         ▼东平台▼
        /p 分摊 　MT/D1 　 　 　 MT/D1　分摊
        /p ST/D2　H2/D4　 过道　H2/D4　ST/D2
        /p 　　　 H1/D3    　　　H1/D3
  `),
      },
      {
        Name: "P7S WayMark",
        Type: "place",
        Place: {
          A: { X: 114.29, Y: 0.0, Z: 83.0, ID: 0, Active: true },
          B: { X: 121.87, Y: 0.0, Z: 87.38, ID: 1, Active: true },
          C: { X: 121.87, Y: 0.0, Z: 96.13, ID: 2, Active: true },
          D: { X: 114.29, Y: 0.0, Z: 100.5, ID: 3, Active: true },
          One: { X: 85.71, Y: 0.0, Z: 83.0, ID: 4, Active: true },
          Two: { X: 78.13, Y: 0.0, Z: 87.38, ID: 5, Active: true },
          Three: { X: 78.13, Y: 0.0, Z: 96.13, ID: 6, Active: true },
          Four: { X: 85.71, Y: 0.0, Z: 100.5, ID: 7, Active: true },
        },
      },
    ],
    "1088": [
      {
        Name: "P8S 苦茶子门神",
        Type: "macro",
        Text: cleanMacro(`
        p ■四重核爆/引导/蛇2     ■基本散开
        /p MT/D3　→　ST/D4　　　D3 MT D4
        /p ↑　　　☆　　↓ 　　　 H1    ST
        /p H1/D1　←　H2/D2 　　 D1 H2 D2
        /p ■巨蛇模式(第一次)
        /p 蛇：从北顺时针MTD1>STD2>H1D3>H2D4
        /p ■四足步行
        /p 1,3次→1(北西)　2,4次→中央　待机→A(北)
        /p ■幻影创造
        /p ◎龙龙×散开 　　│ ◎凤凰×散开
        /p 　　D3 　　　　│　D3 MT D4
        /p 　　MT　ST　D4 │　H1 ☆ ST
        /p H1　D1　D2 　　│　D1 H2 D2
        /p 　　　　H2 　　│
        /p ■四重炎岚(横竖) ｜■四重炎岚(角)
        /p 　　　MT 　　　│ 　　中央　　※MT组：西优先
        /p 　D1 ST D2 　 ｜ T　近
        /p D3 H1 H2 D4 　│ 远　H
        /p ◎分摊：靠近H位置(MTD1/STD2/H1D3/H2D4)
        /p ■巨蛇模式(第二次) 4:4分摊
        /p DEBUFF：北西>MT/D1>ST/D2>H1/D3>H2/D4>南东
        /p 其余：北西TH/南东DPS
        /p ■四重核爆/双重核爆
        /p 四重：(BOSS)MT/D1>ST/D2>H1/D3>H2/D4
        /p 双重：(BOSS)MTH1D1D2>STH2D3D4
        
  `),
      },
      {
        Name: "P8S 奶油咖啡门神",
        Type: "macro",
        Text: cleanMacro(`
/p 【辣翅辣尾分散】         
/p D3  D4    D3 MT ST D4      
/p MT  ST    H1 D1 D2 H2   【蛇优先级】   
/p D1  D2          A逆←MT ST H1 H2→2顺
/p H1  H2          A逆←D1 D2 D3 D4→2顺
/p 【八方站位】            【超级跳引导】
/p D3 MT D4         1,3→2点
/p H1        H2        2,4→场中
/p D1 ST  D2        待机→A点或B点
/p 【火龙卷分散站位(对角/并排)】
/p     BOSS                     MT
/p MT D1 | D2 ST     D3 D1  D2 D4
/p D3 H1 | H2 D4       H1 ST H2
/p 【火龙卷分摊】坦克→近战；远程→奶妈
/p 【加强兽分摊】
/p MT D1   MT H1 D1 D3
/p ST  D2    ST  H2 D2 D4
/p H1 D3
/p H2 D4
/p 【加强蛇固定站位】
/p      MT D4
/p D3            H2
/p H1            D2
/p      D1 ST
/p 【加强蛇后半分组/换位优先级】
/p 默认左上←MT ST H1 H2→换位右下
/p 换位左上←D1 D2 D3 D4→默认右下
  `),
      },
      {
        Name: "P8S game8门神",
        Type: "macro",
        Text: cleanMacro(`
          /p ■テトラオクタ/誘導/蛇2　 ■基本散会
          /p 　MT/D3　→　ST/D4　　　D3 MT D4
          /p 　　↑　　 ☆　　↓　 　　　H1(H2) ST
          /p 　H1/D1　←　H2/D2 　　D1 H2 D2
          /p ■イントゥシャドウ(1回目)
          /p 　蛇：北から時計回りMTD1>STD2>H1D3>H2D4
          /p ■フェイタルストンプ
          /p 　1,3回目→1(北西)　2,4回目→中央　待機→A(北)
          /p ■幻影創造
          /p ◎竜竜×散開　　　　 │◎フェニ×散開
          /p 　　　　D3　　　 　 │　D3 MT D4
          /p 　　　　MT　ST　D4│　H1 ☆ ST
          /p 　　H1 D1　D2　　 │　D1 H2 D2
          /p 　　　　　　 H2　　 │
          /p ■四重炎嵐(縦横) ｜■四重炎嵐(角)
          /p 　　　 MT　　　│　　中央　※MT組：西優先
          /p 　 D1 ST D2 　　｜T　近
          /p 　D3 H1 H2 D4 │遠　H
          /p ◎頭割り：近H位置(MTD1/STD2/H1D3/H2D4)
          /p ■イントゥシャドウ(2回目) 4:4頭割り
          /p 　デバフ持ち：北西>MT/D1>ST/D2>H1/D3>H2/D4>南東
          /p 　無職：北西TH/南東DPS
          /p ■テトラ/ディフレア
          /p 　テトラ：(ボス)MT/D1>ST/D2>H1/D3>H2/D4
          /p 　ディフレア：(ボス)MTH1D1D2>STH2D3D4
  `),
      },
      {
        Name: "P8S game8本体",
        Type: "macro",
        Text: cleanMacro(`
          /p 【術式1回目(頭割は西)】【術式炎氷(TH西 DPS東) 】
          /p 　 　★　　　紫 　 ST│ ▼炎:中央前詰め　▼氷誘導
          /p D1 MT D2　　 MT　│ MT>ST >H1>H2 西 D1>ST
          /p H1　　H2　H1　D2│ D1>D2>D3>D4 東MT>D2
          /p D3 S T D4　 　 D1　│【術式2回目散開 】
          /p 　※左安置は　H2　D3│　STMT 紫 D3D1
          /p 　　左右反転→　 D4 　│　　 H1H2D4D2
          /p 【概念1回目①】　　【概念1回目②】
          /p 　　　　早α　　 　 │　　　遅α
          /p 複/遅α　　　　　　│
          /p 　　　　　　 早β 　│ 生物　　　　遅β
          /p 重/遅βγ　　　　　 │
          /p 　　　　早γ　　 　 │　　　遅γ
          /p ※4塔：遅αβγ→北で合成
          /p 　 　 　 複/重/早余り→南で合成
          /p 【万象灰燼：はいじあ/ビジョン式】
          /p 　　MT　　D1
          /p ST　 +　　　+　D2　※1,3番塔は前+で範囲捨て
          /p H1　+　　　+　D3　※2,4番塔は後+で範囲捨て
          /p 　 　H2　　D4
          /p 【概念2回目①】 　 　【概念2回目②】
          /p 　　 無/早α　　　 │　　　　遅α
          /p 単　　　　　 　 　 │ 生物
          /p 　　　　　　早β　│ ｲﾌ ｲﾌ　　　　遅β
          /p 複/遅　　　　　　 │ 生物
          /p 　　　 早γ 　　 　 │　　　　遅γ
          /p ※4塔：遅αβ→北で合成　遅γ/早余り→南で合成
          /p 【支配者の一撃】　　　　　【塔優先度】
          /p 　MTH1 D3 D1　西>MTSTH1H2D4D3D2D1>東
          /p 　ST H2 D4 D2
  `),
      },
      {
        Name: "P8S 菓子 门神",
        Type: "macro",
        Text: cleanMacro(`
        /p 《菓子系列》P8S门神专用宏
        /p ------------------------------------------------------------------
        /p ◆基本分摊/多重灼炎/二蛇传统
        /p     MT/D3  →  ST/D4
        /p         ↑                  ↓
        /p     H1/D1  ←  H2/D2
        /p ------------------------------------------------------------------
        /p ◆一蛇顺位
        /p 从A起顺时针：MTD1＞STD2＞H1D3＞H2D4
        /p ------------------------------------------------------------------
        /p ◆一兽分散            | ◆一兽跳跃
        /p     D3  MT  D4      | 1、3轮=1点
        /p     H1  H2   ST      |  2、4轮=中间
        /p     D1          D2      |  安全区=A/D点
        /p ------------------------------------------------------------------
        /p ◆八方/二蛇固定   | ◆二蛇顺位
        /p        MT    D4         | 闲人：TH西北、DPS东南
        /p     D3           ST      | 石光/邪毒：
        /p     H1           D2     | 西北    MT>ST>H1>H2   
        /p        D1     H2        |             D1>D2>D3>D4    东南
        /p ------------------------------------------------------------------
        /p ◆四重同侧分散　　| ◆四重对角分散　| ◆四重分摊
        /p 　 　　MT　　　　|　　　 中央　　　｜MT→D1
        /p D3 D1 ST D2 D4  ｜　　　近D　　　｜ST→D2
        /p 　　H1　H2　　　|　   H　○　T　　 | D3→H1
        /p (MT组西、ST组东)  |　　 　远D　　 　 | D4→H2 
        /p ------------------------------------------------------------------
        /p ◆二兽分摊
        /p 二分：BOSS＞MTH1D1D2＞STH2D3D4
        /p 四分：BOSS＞MTD1＞STD2＞H1D3＞H2D4
  `),
      },
      {
        Name: "P8S NO CCHH 本体",
        Type: "macro",
        Text: cleanMacro(`
        /p 【 NO CCHH 】P8S本体 专用宏
        /p -----------------------------------------------------------------------------
        /p ■第一次术式记述（分摊分散）
        /p    8方分散站位               左右刀+分散
        /p   D1  MT   D2              ST   MT |  MT  ST
        /p   H1       ST  　          D1   H1 |  H1  D1
        /p   D3  H2   D4              D2   H2 |  H2  D2
        /p                            D3   D4 |  D4  D3
        /p  ----------------------------------------------------------------------------
        /p  NGA冰火 固定站位（标点） |  冰点名优先级（从左到右）
        /p  MT (4) H1 (D) H2 (2) ST    |  D1＞D2＞D3＞D4
        /p  D1 (4) D2 (D) D3 (2) D4   |  H1＞MT＞ST ＞H2
        /p  ----------------------------------------------------------------------------
        /p ■第一次概念支配
        /p 短αβγ→ABC  |  2分摊+长α→ 2  | 3分摊+长βγ→ 3  |
        /p 未合成短buff去原位 |  2分摊＞3分摊  → A ＞ B ＞ C |
        /p --------------------------------------------------------------------------------
        /p ■万象灰烬脑死 |   ■第二次术式分散＆支配者的一击
        /p        MT   D1  　 |        MT  H1   D3  D1
        /p   ST　　       D2 |         ST   H2   D4   D2
        /p   H1              D3 |  ■支配者一击踩塔优先级(从左到右)
        /p        H2   D4       | MT＞ST＞H1＞H2＞D4＞D3＞D2＞D1                 
        /p  ----------------------------------------------------------------------------
        /p  ■第二次概念支配
        /p  短αβγ→ABC  |  无→4 | 2分摊+长→ 2 | 单人→ 3  |
        /p  2火+2踩塔 → 场中十字站位引导后续分身
        /p  左下左上 → 左2塔中间  |  右上右下→ 右2塔中间 
        /p  ----------------------------------------------------------------------------
  `),
      },
      {
        Name: "P8S WayMark 门神",
        Type: "place",
        Place: {
          "A": { "X": 100, "Y": 0, "Z": 91.6, "ID": 0, "Active": true },
          "B": { "X": 108.4, "Y": 0, "Z": 100, "ID": 1, "Active": true },
          "C": { "X": 100, "Y": 0, "Z": 108.4, "ID": 2, "Active": true },
          "D": { "X": 91.6, "Y": 0, "Z": 100, "ID": 3, "Active": true },
          "One": { "X": 91.6, "Y": 0, "Z": 91.6, "ID": 4, "Active": true },
          "Two": { "X": 108.4, "Y": 0, "Z": 91.6, "ID": 5, "Active": true },
          "Three": { "X": 108.4, "Y": 0, "Z": 108.4, "ID": 6, "Active": true },
          "Four": { "X": 91.6, "Y": 0, "Z": 108.4, "ID": 7, "Active": true },
        },
      },
      {
        Name: "P8S WayMark 本体",
        Type: "place",
        Place: {
          "A": { "X": 100, "Y": 0, "Z": 81.5, "ID": 0, "Active": true },
          "B": { "X": 118.5, "Y": 0, "Z": 100, "ID": 1, "Active": true },
          "C": { "X": 100, "Y": 0, "Z": 118.5, "ID": 2, "Active": true },
          "D": { "X": 81.5, "Y": 0, "Z": 100, "ID": 3, "Active": true },
          "One": { "X": 100, "Y": 0, "Z": 85, "ID": 4, "Active": true },
          "Two": { "X": 100, "Y": 0, "Z": 95, "ID": 5, "Active": true },
          "Three": { "X": 90, "Y": 0, "Z": 90, "ID": 6, "Active": true },
          "Four": { "X": 110, "Y": 0, "Z": 90, "ID": 7, "Active": true },
        },
      },
      {
        Name: "P8S WayMark High Concept",
        Type: "place",
        Place: {
          "A": { "X": 117.531, "Y": 0.0, "Z": 82.394, "ID": 0, "Active": true },
          "B": { "X": 117.7, "Y": 0.0, "Z": 117.216, "ID": 1, "Active": true },
          "C": { "X": 82.823, "Y": 0.0, "Z": 117.213, "ID": 2, "Active": true },
          "D": { "X": 104.985, "Y": 0.0, "Z": 94.741, "ID": 3, "Active": true },
          "One": { "X": 88.489, "Y": 0.0, "Z": 80.738, "ID": 4, "Active": true },
          "Two": { "X": 80.601, "Y": 0.0, "Z": 90.739, "ID": 5, "Active": true },
          "Three": { "X": 89.753, "Y": 0.0, "Z": 81.265, "ID": 6, "Active": true },
          "Four": { "X": 105.044, "Y": 0.0, "Z": 83.843, "ID": 7, "Active": true },
        },
      },
      {
        Name: "P8S 本体 我云的青瓜标点 NO CCHH (未实测)",
        Type: "place",
        Place: {
          "A": { "X": 82, "Y": 0, "Z": 82, "ID": 0, "Active": true },
          "B": { "X": 82, "Y": 0, "Z": 118, "ID": 1, "Active": true },
          "C": { "X": 118, "Y": 0, "Z": 118, "ID": 2, "Active": true },
          "D": { "X": 100, "Y": 0, "Z": 90, "ID": 3, "Active": true },
          "One": { "X": 99, "Y": 0, "Z": 100, "ID": 4, "Active": true },
          "Two": { "X": 108, "Y": 0, "Z": 90, "ID": 5, "Active": true },
          "Three": { "X": 101, "Y": 0, "Z": 100, "ID": 6, "Active": true },
          "Four": { "X": 92, "Y": 0, "Z": 90, "ID": 7, "Active": true },
        },
      },
    ],
    "1090": [
      {
        Name: "候鸟",
        Type: "place",
        Place: {
          "A": { "X": 0.0, "Y": 0.074, "Z": -11.161, "ID": 0, "Active": true },
          "B": { "X": 5.7, "Y": 0.082, "Z": -18.5, "ID": 1, "Active": true },
          "C": { "X": -5.7, "Y": 0.082, "Z": -18.5, "ID": 2, "Active": true },
          "D": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 3, "Active": false },
          "One": { "X": 4.171, "Y": 0.07, "Z": -6.632, "ID": 4, "Active": true },
          "Two": { "X": 0.08, "Y": 0.048, "Z": -1.98, "ID": 5, "Active": true },
          "Three": { "X": 7.038, "Y": 0.074, "Z": 4.041, "ID": 6, "Active": true },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      },
    ],
    "968": [
      {
        Name: "莫古力P1",
        Type: "macro",
        Text: cleanMacro(`
          /p P1锁链点名 索尼 ｜ 白球冲锋：骑士12点，下半场躲避
          /p    △H  ×T   □T   ｜ 深仁厚泽打断：ST→远敏→MT
          /p    ○D          ○D   ｜ 钢铁：全维空间/月环：无维空间
          /p    □D  ×H  △D   ｜ P1.5引导：奶→远→近→T
          /p                              右 左 右 左
      `),
      },
      {
        Name: "莫古力P2",
        Type: "macro",
        Text: cleanMacro(`
          /p 一运雷分散   ｜ 二运分组：D12补位
          /p         奶          ｜ MTH1       STH2
          /p    近  T  远     ｜  D1D3       D2D4
          /p  3C4D-MT组 |     2刀            1刀
          /p  1A2B-ST组  |     脚下           对面
          /p ————————————————
          /p              MTD1             ｜ 固定AC陨石整组换位（除非BD正好出现陨石）
          /p  H1D3            H2D4  ｜ 第一次踩塔：陨石＞DPS＞TN，对应塔：场外中左右＞场内左手
          /p              STD2              ｜ 第二次踩塔：陨石＞DPS＞TN，按换位后的组同色标点塔正＞斜
      `),
      },
      {
        Name: "莫古力P3",
        Type: "macro",
        Text: cleanMacro(`
          /p 【莫古力龙诗站位宏P3】
          /p 牙尾的连旋：分摊-钢铁-月环
          /p 尾牙的连旋：分摊-月环-钢铁
          /p ————————————————
          /p 【麻将阶段】预站位｜【麻将阶段】小抄 
          /p               A               ｜  注意麻将组内点名，B上D下
          /p       4②       ②1       ｜ 处理麻将时请注意钢铁月环
          /p           ③③③           ｜ ①C：放塔-回人群-分摊-踩3塔-引导
          /p   B①          ①D    ｜  ①BD：放塔-回人群-踩2塔-引导-回人群-分摊
          /p       3      ①     2       ｜  ② BD：分摊-连旋-放塔-回人群-分摊-踩3塔-引导
          /p                C               ｜  ③BCD：分摊-踩1塔-引导-连旋-放塔-回人群
          /p ————————————————
          /p 【8人4塔阶段】 ｜ 4近战负责补塔，顺序：左→右→中
          /p MTD3      STD4 ｜组内只有1座塔，补位；组内超过2座塔，不动
          /p H1D1      H2D2｜死刑：MT接本体，ST接分身，本体/分身脚下处理
      `),
      },
      {
        Name: "莫古力P4~P7",
        Type: "macro",
        Text: cleanMacro(`
          /p 【P4撞球阶段】      ｜【陨石流】D12→D34→第一轮点名
          /p 场中换色，DPS先撞｜ 左上角开始顺、逆时针数的第一个点名
          /p         MT    ST          ｜  MT       ST
          /p D12蓝      红D34    ｜       人群（蓝龙眼）
          /p         H1    H2         ｜  H2       H1
          /p ————————————————
          /p  【P5死宣+锁链】｜ 【P7接刀】D12→D34→H12
          /p   △无  X无  □无   ｜ 【死亡轮回/狂暴】BOSS面向！
          /p   ○死           ○死  ｜ H1D3D1           H2D4D2
          /p   □死  X无  △死   ｜                  MTST
          /p 【P6传毒】DTTDD最后一次原地，其他全部场中处理
          /p 【P6十字火阶段↓】｜ 【P6光翼死刑】MT固定中，ST找位置
          /p V字放地火，从场边跑到场中时的面向处理点名
          /p 攻击1 2 3 4 ←o→ 锁链2禁止2 锁链1禁止1
          /p 【P6双龙俯冲+P7地火左右出】MT去左，ST去右
      `),
      },
      {
        Name: "莫古力减伤宏",
        Type: "macro",
        Text: cleanMacro(`
          /p 【莫古力龙诗减伤宏P1~P7】只安排目标减伤，场地减伤请队内自行沟通
          /p P1至圣：MT雪仇、D1牵制                     ｜P2古代爆震：MT雪仇、D1牵制、D4昏乱
          /p P1锁链点名：ST雪仇、D2牵制、D4昏乱｜P2碎屏斩：ST雪仇、D2牵制、D4昏乱
          /p ————————————————
          /p P3第一次连旋：MT雪仇、D1牵制               ｜P4陨石流：给不给都可以
          /p P3第二次连旋：ST雪仇、D2牵制、D4昏乱 ｜P4.5纯洁心灵：ST雪仇、D2牵制、D4昏乱
          /p ————————————————
          /p P5第一次古代爆震：MT雪仇、D1牵制              ｜P6两次血量检测：MT雪仇
          /p P5第二次古代爆震：ST雪仇、D2牵制、D4昏乱｜P6死亡轮回：ST雪仇、D1牵制、D4昏乱
          /p ————————————————
          /p 转场，超大AOE注意减伤嗷！别好不容易要进P7了结果噶了嗷！MTST给D34减伤，H12D12开特色减伤，龙骑找奶妈要
          /p ————————————————
          /p P7第一次死亡轮回：MT雪仇、D1牵制、D4昏乱  ｜P7第一次陨石：ST雪仇、D2牵制
          /p P7第二次死亡轮回：MT雪仇                 ｜P7第二次陨石：ST雪仇  、D1牵制、D4昏乱
          /p P7第三次死亡轮回：别看了！有什么给什么！留着过年吗？
          （如果觉得第二次死亡轮回的压力过大，可以考虑2死亡轮回D2牵制）
      `),
      },
      {
        Name: `陨石逃课宏 需要连打+锁60帧 ${getSource("https://docs.qq.com/doc/DSkpLTVNTT2doT2Rz")}`,
        Type: "macro",
        Text: cleanMacro(`
          /mlock
          /merror off
          /automove on <wait.1>
          /automove off
          /echo
          /echo
          /echo
          /echo
          /echo
          /echo
          /echo
          /echo
          /echo
          /echo
          /echo
      `),
      },
      {
        Name: "陨石宏 @竹取辉夜姬",
        Type: "macro",
        Text: cleanMacro(`
          /automove on <wait.1>
          /automove off
      `),
      },
      {
        Name: "黑色分散buff-攻击标",
        Type: "macro",
        Text: cleanMacro(`
          /macrolock
          /macroicon attack1 marking
          /mk attack <me>
          /wait 1
      `),
      },
      {
        Name: "白色分摊buff-锁链标",
        Type: "macro",
        Text: cleanMacro(`
          /macrolock
          /macroicon bind1 marking
          /mk bind <me>
          /wait 1
      `),
      },
      {
        Name: "无buff-禁止标",
        Type: "macro",
        Text: cleanMacro(`
          /macrolock
          /macroicon stop1 marking
          /mk stop <me>
          /wait 1
      `),
      },
      {
        Name: "一键清除标记",
        Type: "macro",
        Text: cleanMacro(`
          /mk attack1 <attack1>
          /mk attack2 <attack2>
          /mk attack3 <attack3>
          /mk attack4 <attack4>
          /mk attack5 <attack5>
          /mk bind1 <bind1>
          /mk bind2 <bind2>
          /mk bind3 <bind3>
          /mk stop1 <stop1>
          /mk stop2 <stop2>
      `),
      },
      {
        Name: "P1 门神",
        Type: "place",
        Place: {
          A: { X: 94.265, Y: 0.0, Z: 90.057, ID: 0, Active: true },
          B: { X: 105.559, Y: 0.0, Z: 89.944, ID: 1, Active: true },
          C: { X: 105.687, Y: 0.0, Z: 109.95, ID: 2, Active: true },
          D: { X: 94.363, Y: 0.0, Z: 109.892, ID: 3, Active: true },
          One: { X: 89.994, Y: 0.0, Z: 94.231, ID: 4, Active: true },
          Two: { X: 110.13, Y: 0.0, Z: 94.36, ID: 5, Active: true },
          Three: { X: 110.003, Y: 0.0, Z: 105.871, ID: 6, Active: true },
          Four: { X: 90.049, Y: 0.0, Z: 105.51, ID: 7, Active: true },
        },
      },
      {
        Name: `P2 @竹取辉夜姬 ${getSource("https://nga.178.com/read.php?tid=31807681")}`,
        Type: "place",
        Place: {
          A: { X: 100.0, Y: 0.0, Z: 86.8, ID: 0, Active: true },
          B: { X: 113.2, Y: 0.0, Z: 100.0, ID: 1, Active: true },
          C: { X: 100.0, Y: 0.0, Z: 113.2, ID: 2, Active: true },
          D: { X: 86.8, Y: 0.0, Z: 100.0, ID: 3, Active: true },
          One: { X: 109.333809, Y: 0.0, Z: 90.66619, ID: 4, Active: true },
          Two: { X: 109.333809, Y: 0.0, Z: 109.333809, ID: 5, Active: true },
          Three: { X: 90.66619, Y: 0.0, Z: 109.333809, ID: 6, Active: true },
          Four: { X: 90.66619, Y: 0.0, Z: 90.66619, ID: 7, Active: true },
        },
      },
    ],
    "1036": [
      {
        "Name": "天然要害沙斯塔夏溶洞",
        "Type": "macro",
        "Text":
          "15溶洞\n沿途：地图直走的笔记文字提示了老一需要打开的机关的颜色。贝壳不用打。\n开完机关之后出现BOSS，打就行了。\n沿途需击杀门口小怪捡钥匙\n最后出洞窟之后需要贴左侧前进,尽量不拉到右侧小怪",
      },
    ],
    "1037": [
      {
        "Name": "地下灵殿塔姆·塔拉墓园",
        "Type": "macro",
        "Text":
          "16墓园\n击杀虚无魂魔之后 取下祭坛上的宝珠\n第三个祭坛有封印结界 要玩家一直前进 在最深处击杀所有小怪取得念珠解除结界.\n最终BOSS 主宰者 加尔梵斯没有特别需要注意的技能 当它与其他小怪连线时 BOSS会变为无敌 需要DPS优先击杀被连线的小怪.",
      },
    ],
    "1038": [
      {
        "Name": "封锁坑道铜铃铜山",
        "Type": "macro",
        "Text":
          "17铜山\n老一愤怒的科托斯 没有任何难度 \n坐电梯下行之后 击杀“爆破爆弹怪” 后捡起掉落的火药 \n老二怒水腐液 需要T拉住粘液胶 其他人启动机关 T同时拉住出现的爆弹怪和粘液胶 让爆弹怪把粘液胶炸碎。魔石精 需要DPS击杀 粘液胶被炸碎3次之后 就可以正常击杀\n老三强腕的居格斯 直接打BOSS即可",
      },
    ],
    "162": [
      {
        "Name": "魔兽领域日影地修炼所",
        "Type": "macro",
        "Text":
          "20修炼所\n老一炽热火丛 直接打BOSS即可\n击杀老一之后点击火堆中的“魔力的奔流”传送\n 道中需要沿途打开“绞车锁链” \n老二霹雳雷蛟脚下是一个雷池 T把BOSS拉到场边的斜坡上 每过一段时间 BOSS就会返回雷池中央无敌 并召唤小怪 此时雷池带电 请不要踩雷池…清理小怪后继续攻击BOSS \n老三兽斗士 坦伽塔 T把BOSS放在中场 T拉住小怪 只击杀最后一只毒火即可 \n当BOSS脚下出现火圈时会无敌 需要转火火元精  ",
      },
    ],
    "1039": [
      {
        "Name": "监狱废墟托托·拉克千狱",
        "Type": "macro",
        "Text":
          "24千狱\n路上需要捡拾4个“魔导感光器” \n抵达第二个房间时身上应该有3个感光器 此时左转 在愚者大厅下方会有第4个感光器 \n老三霸星蛛蝎 BOSS血量下降到一定程度之后 会出现尾刺\n需要DPS立刻集中攻击尾刺 场中刷新的小怪需要由T拉住 奶妈如果是小怪第一仇恨 请把小怪带到T身边 ",
      },
    ],
    "1040": [
      {
        "Name": "名门府邸静语庄园",
        "Type": "macro",
        "Text":
          "28庄园\n进门之后沿左侧前进 在第一间屋子里能捡到小钥匙 沿途女仆的读条AOE可以使用眩晕技能打断\n老一 随从女工 没有特别需要注意的\n打完老一捡了钥匙要原地向后,转开门后不走楼梯 直接跳下去\n下楼之后最后一间房子(地图左下角)里有BOSS房间的钥匙 \n老二 庄园的小丑总管 打就完了\n打完老二之后需要使用通用技能“返回” 然后前行上楼梯 \n老三阿芒迪娜女士 打BOSS就行，如果新人较多可以考虑关灯、打大眼睛小怪。",
      },
    ],
    "1041": [
      {
        "Name": "休养胜地布雷福洛克斯野营地",
        "Type": "macro",
        "Text":
          "32营地\n进门之后在布雷福洛克斯监视小屋的跟哥布林说话拿到钥匙\n老一大黄鹈鹕 T拉住小怪和BOSS 奶妈注意驱散DEbuff\n沿途的怪能不打就不打 直接去BOSS房\n老二狱炎火蛟每隔一段时间会追一段时间哥布林，无视仇恨，不必慌张。\n老三水栖蝾螈 奶妈注意驱散淤泥DEBUFF 出水泡打水泡\n最终BOSS阿杰特 出啥躲啥 BOSS会随机点名一名玩家吐一摊毒 BOSS站在毒里会回血 需要T将其带离毒潭",
      },
    ],
    "163": [
      {
        "Name": "古代遗迹喀恩埋没圣堂",
        "Type": "macro",
        "Text":
          "35圣堂\nDPS第一时间集火圣堂峰，不然会读条能秒杀T的大伤害技能“终结针”\n老一巨齿牛头魔会读条技能“致命射线” 同时屏幕提示“巨齿牛头魔发出了诡异的咆哮！”\n此时需要所有人找到发光的石板踩上去解除buff\n路上遇到的“常衡石面”需要把它放在石板上击杀 石板不发光说明位置正确\n老二圣堂守卫 DPS要先集火巨像兵的魂石 把魂石打掉之后 才能攻击本体 \n老三审判化身 石面同样要在石板上击杀 BOSS会唤权杖，可以无视，也可以打掉。",
      },
    ],
    "170": [
      {
        "Name": "流沙迷宫樵鸣洞",
        "Type": "macro",
        "Text":
          "38樵鸣洞\n打掉蚂蚁、跳进流沙 \n老一灵蚁禁军公主 出啥打啥\n沿途一路狂奔 不要回头 不要摸怪 跑到流沙之后迅速下潜即可 \n老二巨型地道蠕虫 奶妈注意驱散debuff \nBOSS下潜后 所有人贴边躲开伤害范围即可\n老三奇美拉 读条雷电咆哮接近BOSS 读条寒冰咆哮远离BOSS 被点名者远离人群",
      },
    ],
    "1042": [
      {
        "Name": "对龙城塞石卫塔",
        "Type": "macro",
        "Text":
          "41石卫塔\n小怪A人巨疼!\n老一丘都尤都 当BOSS突然离开走向场边或角落时 请立刻跟过去 躲到他身侧或身后\n老二柯西切 T把BOSS拉到门口 面冲外 奶妈站到场地内侧\n当屏幕提示“足枷冰龙从天而降”时 可以开对应位置的炮打断。\n老三足枷冰龙 BOSS血量降低到一定程度之后会上天 对场地进行俯冲 被俯冲的地面会变白 所有人注意躲避 \n第二次俯冲后注意躲开冰圈\n俯冲结束之后 所有人远离T BOSS降落时会对周围造成一定的伤害 ",
      },
    ],
    "171": [
      {
        "Name": "山中战线泽梅尔要塞",
        "Type": "macro",
        "Text":
          "44要塞\n小怪拉到水晶纱帐里面打\n老一全视之眼平时是无敌的 需要拉进水晶纱帐\n老二 躲好AOE\n老三巴特拉尔 BOSS血量下降到一定程度时 会和场边的水晶连线并变为无敌 需要转火水晶",
      },
    ],
    "172": [
      {
        "Name": "毒雾洞窟黄金谷",
        "Type": "macro",
        "Text":
          "47黄金谷\n贴着左边走!\n老一锁匠花 会每隔一段时间全屏上buff buff会让玩家持续掉血 2层吃果子解buff \n老二数币巨人 十吨横扫” 需要T穿过BOSS躲避；“百吨回转” 吃到即死 所有人远离\n老三守财夫人 2层buff就要吃果子 注意转火花苞",
      },
    ],
    "361": [
      {
        "Name": "财宝传说破舰岛",
        "Type": "macro",
        "Text":
          "50破舰岛\n老一大脚巨猿 当BOSS开始全屏AOE时 需要调查场边的树 让BOSS吃掉掉下来的香蕉\n沿途的宝箱都要开 有些会出拟态怪 开箱子或者拟态怪会掉石板 需要凑齐4个石板才能开门 \n老二肖鲁姆 开场BOSS会在场周召唤一堆水泡 不要离得太近 会被吸进去 当BOSS偶潜入地底 出现大漩涡时 需要钻到水泡里躲避\n老三克拉肯 每个岛上会出2只腕足 还有2只触手 触手请优先击杀\nBOSS会随机点一名玩家 头上出现绿色的小石头 需要跳到隔壁没人的岛上 等陨石消失并出现漩涡后 才能返回",
      },
    ],
    "350": [
      {
        "Name": "恶灵府邸静语庄园",
        "Type": "macro",
        "Text":
          "50庄园\n老一庄园的小丑 T拉住小怪 DPS集火即可\n老二阿修 BOSS有顺劈 正面不要有人 注意躲避AOE和旋转剑 小怪出场请转火\n老三哈利卡纳苏斯 小怪请第一时间转火 否则会有灭团级AOE 第二次小怪刷新后 DPS酌情停手等第三波刷新后击杀",
      },
    ],
    "1063": [
      {
        "Name": "幻龙残骸密约之塔",
        "Type": "macro",
        "Text":
          "50幻龙\n老一独爪妖禽 T把BOSS放在场边 请打飞水箱 DPS和H注意身后和四周也不要有水箱\n老二魔导炮艇 BOSS会随机点名一名玩家飞过去并沿途扔一堆火圈 被点名的玩家最好前往场边引导火圈的位置 \n老三尘世幻龙 场地上有两条小龙 BOSS血量下降到一定程度后就会复活小龙 第一条龙需要远离BOSS 而第二条龙需要接近BOSS \n小龙打到一定程度后 会刷新一个魔导机器 第一时间集火 场地上出现全场蓝色的范围AOE时 打开魔导屏障发生器 并且躲进去",
      },
    ],
    "1062": [
      {
        "Name": "凛冽洞天披雪大冰壁",
        "Type": "macro",
        "Text":
          "50大冰壁\n老一冰锥万迪尔 “风雪”之后2~4s会出现暴风雪，保持移动或跳跃可以避免被叠buff。爆弹怪爆炸也会叠buff，4层就会被冻住，并持续掉血。\n中间有暴风雪的区域，不要站在里面，会持续掉血。\n老二大脚雪人，需要T把BOSS拉到场边，并面向场中。场上会刷两种小怪，魔石精不打，BOSS会读条超大范围扇形攻击，把魔石精冻成雪球。当BOSS读条全屏AOE时，需要打一下雪球将其推向BOSS打断。DPS第一时间击杀小怪。\n沿途注意打断的异端者读条“龙血”\n老三芬里尔 偶数次冰柱掉下来之后，躲在仅剩的一根冰柱之后。\n",
      },
    ],
    "160": [
      {
        "Name": "领航明灯天狼星灯塔",
        "Type": "macro",
        "Text":
          "50灯塔\n老一不沉者 西蒙德 出啥打啥\n老二祖 别碰鸟蛋 鸟蛋过一段时间就会孵化 先打公的\nBOSS上天后所有人远离T\n老三暴君 直接打即可\n塞壬 T开怪后把BOSS放在场中央背对人群 优先击杀 爬行小怪\nBOSS读条“死者之歌”后 奶妈需要奶满有BUFF的玩家 注意躲避俯冲",
      },
    ],
    "349": [
      {
        "Name": "骚乱坑道铜铃铜山",
        "Type": "macro",
        "Text":
          "50铜山\n老一百臂主脑巨人 T把BOSS带走到没有火的地方 刷新爆弹怪需要DPS第一时间击杀\n老二比吉 需要DPS启动装置 捡起炸弹 并放在BOSS脚下 炸弹炸几次之后 BOSS就会从石头人上下来 此时全员攻击BOSS即可\n老三复仇者 乌拉诺斯 开场T把BOSS拉到场地边缘 屏幕提示“沙虫在找吃的”时 奶妈或者远程DPS把水晶搬到沙地上 \nDPS优先击杀小怪",
      },
    ],
    "367": [
      {
        "Name": "苏醒遗迹喀恩埋没圣堂",
        "Type": "macro",
        "Text":
          "50圣堂\n老一受损的审判化身 开战后不久 会有某个部位发光 集火该部位即可\n途中的蛇会石化需要注意\n老二仙人刺女皇 BOSS读条“十万针刺”时 需要集火攻击打断咏唱 场上出现“仙人掌守卫” 先打掉守卫接下来马上集火BOSS\n老三审理神代言者 四周会升起棺材 里面会跑出木乃伊 躲开它的直线前进方向 BOSS读条“怨恨的斩击” 是对随机一名玩家的直线范围AOE \nBOSS还会随机连线一名玩家 被连线的人远离BOSS 绕场狂奔",
      },
    ],
    "434": [
      {
        "Name": "冰雪废堡暮卫塔",
        "Type": "macro",
        "Text":
          "51暮卫塔\n老一角牙古象 出啥躲啥\n沿途走过去就有很多怪会爬起来打你\n老二寒光剑 尤埃尔默里克  BOSS每使用一次全屏AOE，就会随机复活2只小怪，小怪站起来后，会立刻读条对它周围的怪释放增益buff。当发现小怪在BOSS身边复活时，T要注意把BOSS带走。\n沿途有暴风雪的地方会对全团施加不断掉血的伤害。\n老三狮身巨鹰，场地上会有2~4块石头，当BOSS跳回场地中央读条“回转牢狱”时，所有人立刻就近找石头躲避，否则会被吸入中间的龙卷风里并造成大量伤害。BOSS的凛冬之风会摧毁石块。",
      },
    ],
    "1064": [
      {
        "Name": "天山绝顶索姆阿尔灵峰",
        "Type": "macro",
        "Text":
          "53灵峰\n一优先击杀龙毒草。打完后远程点掉途中的毒粉块。吃到爆炸会中毒\n老一破锁花王 直接打BOSS，无视蜜蜂。\n沿途会有大龙突然降落。冰柱和冰元精都可以无视。\n老二迈斯龙，隔一段时间会出现一大堆粘液，红色分摊蓝色单吃，绿色粘液读条会对全团造成大伤害。\n老三刁曼 头顶出现绿色彗星之后，被点彗星的玩家远离人群放下彗星，然后迅速返回。打到一半后，BOSS会停在场中央不断放AOE，全员攻击两个翅膀。",
      },
    ],
    "1066": [
      {
        "Name": "圣教中枢伊修加德教皇厅",
        "Type": "macro",
        "Text":
          "55教皇厅\n老一光辉剑 阿代尔斐尔 满场乱窜留下光球，光球过一会就会炸开\n老二战争狂 格里诺 正面有顺劈，要注意。T把BOSS放中场，BOSS会点名一名玩家方向放黑洞，接近黑洞就会被连线并持续掉血。当BOSS气泡说要把你们都吹飞时，玩家会被击飞。\n老三圣骑士沙里贝尔 被连线的两名玩家需要向相反方向移动扯断(只有一个人跑是扯不断的)，场地北边会刷新棋子士兵，注意溜缝躲避。当BOSS消失之后所有人一起输出场上刷出来的“圣火”。",
      },
    ],
    "1065": [
      {
        "Name": "邪龙王座龙巢神殿",
        "Type": "macro",
        "Text":
          "55龙巢\n老一琅妲巫龙 当发现自己被BOSS连线时，跑到石柱附近，把线传递给石柱即可。\n沿途会遇到大龙+两只小龙，T只把小龙带走就行了，大龙不必招惹。\n老二格亚斯库图斯 爆弹怪吃掉两三层气体后，注意转火打掉爆弹怪。\n老三尼德霍格，BOSS会转身向玩家吐火球，注意发现BOSS面冲自己就要及时躲闪(不会有提示)，BOSS偶尔会点名玩家“漆黑之珠”，因为BOSS会顺劈，所以请T不要乱动，由另一名DPS和奶妈打掉珠子解救。BOSS上天后，所有小龙都要及时击杀。如果DPS太慢，奶妈酌情给大师兄(NPC)加一加血。最后一条小龙击杀后，大师兄会开启一个罩子，躲里面等BOSS回来即可。",
      },
    ],
    "416": [
      {
        "Name": "学识宝库迦巴勒幻想图书馆",
        "Type": "macro",
        "Text":
          "59图书馆\n老一恶魔书墙 注意躲开地上黑色的伤害。当BOSS合上之后，跑到书背后去。\n沿途会遇到64页优先击杀。\n老二比布鲁斯 BOSS回到场地中央后，打落在场上的书，打掉之后书会与一名玩家连线，这名玩家带着线穿过BOSS，让连线的球与BOSS相撞，就可以解除BOSS的无敌。\n老三永世珍本 点名跑到场边放球，当BOSS回到场中央并开始读条时，场地四周的圆阵也会发光，需要所有人去踩灭光点。每个阵N个点，所以需要N名玩家同时去踩才行。",
      },
    ],
    "430": [
      {
        "Name": "博物战舰无限回廊",
        "Type": "macro",
        "Text":
          "60战舰\n老一 幻影光 出啥躲啥。BOSS会释放连续1/4场面积的AOE，建议远程职业也接近BOSS，方便躲避。\n沿途大鸟人会AOE旋风比较疼，奇美拉冰远离雷接近优先击杀。\n老二 弥诺陶洛斯 横扫绕背侧，回转远离。当BOSS开始横冲直撞之后，注意关注BOSS最后停下的位置和面向，它会立刻使用正面小扇形巨疼AOE，需要绕侧背躲避。当BOSS读条全屏AOE时(场地变蓝)，随手开一个培养皿打断读条…DPS击杀小怪。\n老三 博物总管 远离地上的红圈地雷不要碰到。BOSS会给玩家身上挂炸弹buff，需要奶妈驱散，否则会炸到队友。场边出现警报小怪时，需要转火击杀。",
      },
    ],
    "511": [
      {
        "Name": "草木庭园圣茉夏娜植物园",
        "Type": "macro",
        "Text":
          "60植物园舰\n老一玫瑰园 这个BOSS会放出几个小魔界花苗，然后大大小小一家子一起喷，BOSS会一边喷一边转，但是不会喷满一圈，所以找到BOSS的方向，转到它喷的末点就不用跑了。场上出现名为果实的气球的时候，注意转火击杀(不打的话会炸掉，不过也没有很疼)。\n老二鹰蜂女王，平时场边会有很多蜜蜂飞来飞去打人也挺疼。BOSS读攻击指令时，出啥躲啥即可。BOSS读防御指令时，周围的蜜蜂会来到场地中央与BOSS连线，此时要打掉所有蜜蜂。BOSS读协作指令时，场周围的蜜蜂会4只一组并排，此时要离开蜜蜂连面对的方向，它们会向场地内放无提醒的十字或X形的AOE，所有人贴场边站在两组蜜蜂中间即可回避。\n老三剧毒美人 没啥特别的，出啥躲啥，有啥躲啥，眼睛记得背对",
      },
    ],
    "557": [
      {
        "Name": "黑涡传说破舰岛",
        "Type": "macro",
        "Text":
          "60EX破舰岛\n牛和长须豹会在脚下放buff圈，所有人优先击杀，T注意把怪带出buff圈。\n老一红血圣女团 一堆小怪，长须豹请优先击杀。其他出啥躲啥。\n老二尤弥尔，被点名一万伏特的玩家踩水，连线扯断。\n老三爱因扎尔·斯拉菲尔辛正漩将 变身后会在场周围的宝箱里放入药和炸弹，注意观察哪些是解药，并在箱子关闭后走到那个箱子附近解毒。BOSS还会点名一名玩家并读条，这名玩家需要远离其他人，治疗注意准备驱散这名玩家身上的减速buff。",
      },
    ],
    "615": [
      {
        "Name": "坚牢铁壁巴埃萨长城",
        "Type": "macro",
        "Text":
          "60长城\n浮空装甲会随机连线并持续攻击，弓箭手小怪会无视仇恨给玩家上毒，拉多了非常容易团灭。\n老一魔导猎手 出啥打啥出啥躲啥。\n老二武装重甲，BOSS会隔一段时间读条“运动物体探知干扰器”，读条结束后会给所有玩家上buff“慎行警告”，所有人立刻停手，不要移动、转视角，近战和物远请按ESC直到弹出系统对话框。等buff倒计时结束后就可以移。\n老三铁面公卿，他会突然跑到场地一边对大半场放AOE，所以所有人尽量接近中场站以方便躲避。当天降一堆刀并出现满场AOE时，所有人打中间那把刀即可制造躲避的空间。其他的出啥打啥有啥躲啥。",
      },
    ],
    "420": [
      {
        "Name": "空中神域不获岛",
        "Type": "macro",
        "Text":
          "60不获岛\n进门跟NPC拿东西开传送点\n老一奴涅努克怪鸟 出啥打啥，出啥躲啥。BOSS消失需要玩家找到“奴涅努克之影”，站在怪圈里面才能攻击到它，打掉后浓雾就会散去。\n老二卡努瓦努 当发现黑圈里有图腾时，需要玩家把圈内的图腾搬出去。\n老三招雷巨蛇 场第四周会掉下去而且不能救。BOSS会点名一名玩家放一个水泡，被点名的人站到BOSS身下。出风元精尽快打掉，击杀后BOSS会立刻读条吹飞并且变得可以被攻击，不要被吹下去",
      },
    ],
    "578": [
      {
        "Name": "秘本宝库迦巴勒幻想图书馆",
        "Type": "macro",
        "Text":
          "60图书馆\n老一 书中恶魔 出啥躲啥。\n老二液态火焰 被连线冲锋的远离，BOSS变为火龙卷时会点名正负极，和BOSS同极接近，异极远离；变为手掌时攻击上升。头顶出现太阳月亮徽章，找同色地板躲避。\n老三博学林鸮 爆震之章→随便踩一本浮空；龙卷之章→踩黑色的圈；河童之章→变成河童之后踩绿色的圈。BOSS扔完一圈书之后会召唤贝爷，如果DPS不够的话记得注意在陨石后面躲噶哦哦。",
      },
    ],
    "519": [
      {
        "Name": "神圣遗迹无限城市街古迹",
        "Type": "macro",
        "Text":
          "60EX无限城\n老一阿卡莫特 BOSS读条“幻惑鳞粉”时，所有人都要转身面向场外，这个技能会制造玩家的幻象，并放出超大范围的AOE攻击\n沿途会遇到巨大的光圈照在地上，T注意把怪都放进去。\n老二双翼飞狮 出啥打啥，尤其BOSS身下的球，优先打掉。地上会出现土风圈，玩家会被上耐性降低的buff，土降低的踩风，风降低的踩土\n老三基路伯 死了还会复活的渣渣。第二次复活之后优先击杀连线小怪。它还会读条圣疗，并在脚下出个魔法阵，站进去的人越多，伤害越少。",
      },
    ],
    "555": [
      {
        "Name": "天龙宫殿忆罪宫",
        "Type": "macro",
        "Text":
          "60忆罪宫\n老一长老莫古灵 优先击杀即可护卫团长莫古森。如果团队DPS较高，可以无视剩下两个小怪。另外BOSS也会召唤复活圈，注意把小怪推出去。\n老二卜奇喇吉 T把BOSS放在场地一头，BOSS过一会就会起飞，记得找墙做掩护。BOSS读条类星射电源和雷云都是会破坏墙的，发现这两个技能的时候尽量找没墙的地方站。\n老三圣龙子嗣 场地是一个3X3的石台，有小旋风作为传送点。有单点一名玩家的连续攻击，预兆大概是全屏白光一闪，当你发现自己身上有白色光柱哐哐哐砸的时候，就是被点名了，注意换个地方。BOSS隔一段时间会起飞并俯冲，当出现俯冲的黑绿光之后，离开台子即可。台子上的圣元精可以提供大量LB，如果台子上有记得顺手击杀。",
      },
    ],
    "617": [
      {
        "Name": "天山深境索姆阿尔灵峰",
        "Type": "macro",
        "Text":
          "60EX灵峰\n地上会喷气儿，把怪放在那个喷气孔附近可以获得易伤buff。\n老一莱顿瓦德 它会在地上扔孢囊，躲开即可，大号的孢囊是全屏伤害距离衰减。\n老二高牢怪龙 抬手是打T，抬尾巴可能是扫尾，也有可能扫一圈(没事不要站屁股后)，侧身单肩下垂是冲刺，双手抱胸是吐火球或喷火(躲开正面)。BOSS血量下降到一定程度后，BOSS会变红，抬手横扫一片带旋风，扫尾变大回旋，并附带承疗减低效果，注意躲避。\n第一时间击杀圣山之血，如果有两只就由T标号依序集火击杀，这个读条可以击晕打断。治疗注意抬血。\n老三熔岩蝎 “飞跃重压”会让场上出现巨大的熔岩地带，被点名的玩家注意尽量站到场边。BOSS读条“呼唤”会召唤小怪，优先打红的，第二次呼唤时会召唤4只小怪，远程DPS可以预读LB",
      },
    ],
    "572": [
      {
        "Name": "险峻峡谷塞尔法特尔溪谷",
        "Type": "macro",
        "Text":
          "60溪谷\n地上的AOE圈对小怪同样有伤害，但不必强求\n老一飞天枪 奴扎尔·怀罗克，BOSS升天后，会出现小怪和气球炮塔，打掉气球炮塔后需要到BOSS身下，等着气球爆炸。气球的气浪会帮你把BOSS戳下来。然后出啥打啥，有啥躲啥。\n猩猩会120°AOE…注意不要站太远，地刺是有伤害的。沿途有猪笼\n老二旋风扇 德托里·西罗克，被点名的玩家尽量把点名的风放在两个挡板之间，BOSS读条“大扇风”的时候，自己找有挡板的位置站好等着被吹飞 。BOSS读条“身轻如燕”后使用的技能非常快。\n沿途会看到气球载着一大堆鸟人飘过来，气球要第一优先击杀，如果没有打掉，它就会回去载第二批鸟人。\n老三晴天霹雳 托佐尔·法托特尔，出啥躲啥，分散集合。",
      },
    ],
    "516": [
      {
        "Name": "星海空间颠倒塔",
        "Type": "macro",
        "Text":
          "60颠倒塔\n老一歌圣 兹罗·罗格，呱呱爱唱歌，眩晕可驱散，解救T爱他，水泡要躲开，变呱打呱呱。\n老二瑞吉 场地上出现大石头和不断扩大的AOE圈时，不要害怕，赶紧打掉石头然后再找安全的地方躲避即可。被连线的玩家要躲在石头后面，并与石头保持一段距离防止受伤。\n老三卡尔克布莉娜 进门6个娃娃都没仇恨，快速抽掉即可。合体后变成一个大娃娃。当玩家被点名大眼睛技能时，BOSS会对这名玩家施加扇形AOE，背对即可。当它读条抱头防御后，所有人(包括法系)都只能站在它正面输出，否则就会被弹飞。当有人变成娃娃后，记得及时解救(尤其记得救奶妈…)",
      },
    ],
    "438": [
      {
        "Name": "血战苍穹魔科学研究所",
        "Type": "macro",
        "Text":
          "60研究所\n老一 雷古拉·范·休著斯 出啥打啥，出啥躲啥\n沿途路上会遇到一个球卡在台子上的怪，会放全场AOE电疗，DPS优先击杀，四周的培养皿会刷新小怪，T注意拉住小怪\n老二 赫鲁玛奇斯 蛇就是疼，奶妈注意抬血。第二个会读条石化需要背对，另外会随机点名扔火圈。脚下出现一个金色小圈圈需要另外一个人站在里面(一共2个人)，否则被定身的人会受到高额伤害。头顶出现红色细线需要分摊。\n老三 拉哈布雷亚和以格约姆 随便先打哪个都行。冰球一炸，就往原来冰球的地方跑…BOSS血量下降到一定程度后，会合体来到场中央，并连线一冰一火两个球，优先打冰球。当BOSS读条“法则改变”的时候，所有人躲到黑洞里躲避即可(黑洞只能容纳1人)。",
      },
    ],
    "626": [
      {
        "Name": "漂流海域妖歌海",
        "Type": "macro",
        "Text":
          "61妖歌海\n一波小怪拉到右舷莉塞的位置，她会帮你放一些AOE。\n老一 卢加特 出啥躲啥，记得分摊。\n老二 狱长 出啥躲啥。DPS被抓后立刻远离BOSS扯断身上的影子。\nBOSS前的守门怪读条“诱惑啸声”时，请使用眩晕打断，否则接下来会容易受到大量伤害。\n老三罗蕾莱，它会读条让玩家强制前进或后退，当发现BOSS读条时，看清方向，调整面向，避免自己走进蓝圈里即可。",
      },
    ],
    "616": [
      {
        "Name": "海底宫殿紫水宫",
        "Type": "macro",
        "Text":
          "63紫水宫\n老一切网虾蛄 打掉切网虾蛄的脚，BOSS就会肚肚向上…出现小怪后优先击杀小怪，头顶蓝色圆球时跟其他人分散。\n老二红玉公主 当BOSS读条诱惑时，前往BOSS四个角落的箱子里变成老朽…就不会被诱惑了。BOSS使用海底火山后，会有大伤害技能追着被点名玩家跑，请狂奔回避。\n老三紫水妖妃 BOSS下水之后会出现3个祸泡，为玩家叠3层掉血buff，打掉一个减一层。打掉泡泡之后，注意水面的波纹，躲开BOSS即将出现的地方。",
      },
    ],
    "623": [
      {
        "Name": "试炼行路巴儿达木霸道",
        "Type": "macro",
        "Text":
          "65霸道\n熊和牛打人都非常疼，建议慎重拉怪。\n老一加鲁拉 冲锋伤害为距离衰减\n老二巴儿达木巨像 真·出啥躲啥\n老三胡鹰 出啥躲啥，大眼睛背对。小怪阶段，BOSS会出现在场外并向场内冲锋，小怪出现在哪，冲锋就从哪里开始，注意躲避。BOSS第二次上天并落地后，所有人集火双翼。",
      },
    ],
    "660": [
      {
        "Name": "解放决战多玛王城",
        "Type": "macro",
        "Text":
          "67多玛\n小怪很疼。\n老一 魔导后卫 出啥躲啥\n老二魔导六轮装甲 注意踩塔，不要撞电网，宁可炸塔也不要变成弹珠。\n老三强化格林瓦特 BOSS读条“链锯”后，T挪一步离开原位即可躲避。当发现自己成为落点中心的时候，远离人群找个角落，等落点确认后返回人群集合即可。BOSS扫射是单独点一名玩家支线AOE，不可回避，尽量不要牵连到其他人。",
      },
    ],
    "661": [
      {
        "Name": "巨炮要塞帝国白山堡",
        "Type": "macro",
        "Text":
          "69白山堡\n老一魔导机车大魔 当BOSS开始冲锋时，打掉炮塔旁边的帝国兵，并趁BOSS规划路径时开炮即可\n老二024号 踩完塔后BOSS会读条“护盾转换”，并喊话“XX属性以太充能中……护盾转换！”，未被充能的属性即是它的弱点，去踩对应颜色的圈再攻击BOSS即可，如果属性不对，对BOSS的攻击就会被反弹。\n老三炼狱炎魔 基本上是出啥躲啥有啥打啥，但是在战斗中BOSS会经过强化，被强化后的BOSS打人更疼。发现流血buff记得及时驱散。",
      },
    ],
    "689": [
      {
        "Name": "鏖战红莲阿拉米格",
        "Type": "macro",
        "Text":
          "70阿拉米格\n老一守卫机蝎 出啥躲啥\n老二奥卢斯·玛尔·亚希纳 BOSS核心技能会让你灵魂出窍，需要找回身体。碰到激光会被眩晕，而碰到浮游爪会被推远\n老三 芝诺斯·耶·加尔乌斯 和BOSS连线的人接近BOSS，并向场外或无人的方向引导BOSS的扇形AOE。风断一闪接近风球等待被吹飞，雷切一闪远离，妖刀一闪分散引导直线AOE。偶尔会有连线+风闪的情况，请保持站在风球与被连线NPC之间，接近风球的位置引导躲避。打到一定程度后，BOSS会拔出3把妖刀，DPS请火力全开集火妖刀，打的越快，接下来AOE伤害越低。另外打刀的同事，BOSS还会释放3种一闪，注意应对。",
      },
    ],
    "731": [
      {
        "Name": "沉没神殿斯卡拉遗迹",
        "Type": "macro",
        "Text":
          "70斯卡拉\n老一 凯尔派 开打后场边会变红，不能踩进去。“鱼雷”是死刑。“水平面上升”是AOE，BOSS会读条“水力吸引”或“水力推行”，所有人吸引远离推行接近。另外BOSS还会点名一个红圈，需要玩家把它放在场边，放下后立刻远离，这个球会跟着玩家走(如果撞上被连线玩家则会持续掉血)。\n老二 旧日灵偶 BOSS隔一段时间会无敌并连线若干个灵偶分身，第一次需要玩家打掉，第二次开始，玩家会被变身为魔石精，技能栏变为放炸弹。需要用炸弹把分身都炸死\n沿途平台之间有深沟，需要击倒所有小怪后，站在魔法阵上，就会获得一个变身buff，并变成赞比托飘过去。\n老三 直言不讳 赫罗德里克 抬手/抬起尾巴，则需要躲开正面/背面。当BOSS出现抱胸蓄力的动作时，注意躲开BOSS正面",
      },
    ],
    "662": [
      {
        "Name": "恶党孤城黄金阁",
        "Type": "macro",
        "Text":
          "70黄金阁\n老一瑞光丸 被小怪连线的玩家接近场边，或与另一只小怪接近击杀，方便躲避小怪自爆。别的没啥要注意的。\n沿途遇到会通灵术的忍者请第一时间击杀。\n老二道顺丸 出啥躲啥\n老三 保镖 打到一半，场外老板就开始撒钱，在BOSS的狗捡完钱之前把钱捡完即可，否则剩的钱越多，AOE越疼。天上落下蝴蝶之后，先站外侧躲避，再前往内场躲避即可。龙头不打也没事，但会妨碍捡钱。",
      },
    ],
    "768": [
      {
        "Name": "风水灵庙岩燕庙",
        "Type": "macro",
        "Text":
          "70岩燕庙\n老一 大天狗 BOSS会召唤全场火球，撞上一次火球会叠一层易伤。看到BOSS身上有个大眼睛的话记得转身。\n老二 大太法师 推荐所有人接近BOSS站位，当BOSS抬手时，立刻到反方向躲避。DPS发现自己身上出现点名时，注意保持移动(会连续5次从地下扎出石柱)。当BOSS把场中央砸出一滩水之后，所有人注意尽量在前半场活动，防止扇形AOE无处可躲，那一滩水会逐渐扩大，不要踩进去。\n老三 齐天大圣 当BOSS读条如意大旋风并伸长金箍棒时，所有人注意观察棒子，若棒子巨长而且带火花闪电，则接近BOSS；如果棒子不是特别长并且没有特效，则远离BOSS。后半场BOSS会一分为二并同时使用这个技能，注意找棒子带有电光的大圣身下躲避。",
      },
    ],
    "743": [
      {
        "Name": "疯狂战舰无限回廊",
        "Type": "macro",
        "Text":
          "70EX战舰\n米诺陶回转攻击(读条远离)，奇美拉的冰雷(冰远离雷接近，可以打断)需要注意。\n老一浮游炮主板 大部分时候是出什么躲什么，当魔导浮游炮并列一列的时候，注意要躲到炮筒后面去。\n老二究极战士 平时会有蓄力正面直线AOE，有读条和非常明显的蓄力绿球。女神的技能是黑白圈，需要被点名黑白圈的人重叠站位。鬼神的技能则是冰焰之纹，踩颜色相同的圈。魔神的技能是点名玩家到场边放点名，点名的球会慢慢变大，注意不要踩到。其他出啥打啥\n沿途会有米诺陶撞墙\n老三究极神兽 BOSS抬手远离BOSS，BOSS起立到身下躲避。BOSS会随机点名一名玩家释放8方向箭头的波动炮攻击，其他人注意远离。当T身上出现白色向外的箭头时，其他人要注意远离T(伤害随距离衰减)。",
      },
    ],
    "742": [
      {
        "Name": "红玉火山狱之盖",
        "Type": "macro",
        "Text":
          "70红玉火山\n老一 大岳丸 经典技能百吨回转注意远离BOSS。BOSS会把自己手中的武器丢到场上，然后点名一名玩家追着他吐岩浆，被点名玩家注意绕场奔跑，不要被呕吐物砸到。另外所有人也要注意远离BOSS丢在地上的武器，BOSS吐完会捡起武器接着打。\n老二镰鼬，远程也稍微接近BOSS站，BOSS会使用半屏AOE，如果站的太远可能来不及躲避。BOSS上天之后注意一边躲避场上的各种风、线一边打小怪，BOSS会沿着连线的顺序冲刺，务必当心。\n老三玄武，基本上是出啥躲啥，有圈分散。特殊的技能是迷潮，场地上的六边形地砖会出现箭头的形状，并且其中一块地砖上有一个水球，水球会按照地砖上的箭头所指的方向前进。观察水球的位置和地砖上的箭头来回避水球的行进路线。",
      },
    ],
    "789": [
      {
        "Name": "死亡大地终末焦土",
        "Type": "macro",
        "Text":
          "70终末焦土\n道中会有落石\n老一 赫德提特 被点名的玩家要躲到柱子后面，全屏AOE也要躲到柱子后面；点名所有玩家不要让圈罩上柱子\n老二 次品无人机 被点名的玩家去场边放毒，当BOSS从侧面消失后，冒着烟那条跑道就是安全的。\n老三雾龙 被蓝色标记点名的玩家注意尽可能往场边站，治疗准备驱散+抬血，非常疼。BOSS雾散之后会出现3只小怪，此时攻击BOSS就会直接被冻住。\nBOSS使用浓雾之后会消失，玩家开启疾跑沿场边奔跑寻找雾龙",
      },
    ],
    "788": [
      {
        "Name": "污染庭园圣茉夏娜植物园",
        "Type": "macro",
        "Text":
          "70EX植物园\n老一 泥口花 放180°范围的AOE是多次判定的，不要提早回去。\n老二 拉哈穆 核心技能滑坡，场地上会出现箭头传送带，读条结束后击退。\n沿途有水闸，可以放水洗怪\n老三 枯腐泥妖 当地面下污泥涌动时，所有人站在绿色实地板上。当BOSS读条污泥并出现点名范围圈时，所有人站在网格地板上。BOSS召唤泥丸子小怪，这个小怪会被玩家的任意有初始伤害的技能击飞，需要由玩家把它打到绿色实地板上，不要让下面喷出来的泥，或者上面点名掉下来的泥碰到它，也不要让BOSS或者小怪的攻击打到它。",
      },
    ],
    "663": [
      {
        "Name": "修行古刹星导寺",
        "Type": "macro",
        "Text":
          "70星导寺\n老一凶豹所闻，凶豹所忆，刚开场的时候只有一只，在打到一定程度后第二只才会登场，T注意及时拉怪。后出现的红豹子会用扇形AOE，比较麻烦，需要关注。\n沿途小怪不要放在机关上打，近战会感谢你。\n老二额部陀，BOSS会使用“前后双斩”和“左右双斩”，斩前后躲两侧，斩两侧躲前后即可。BOSS读条“预判”后，会立刻出现动画效果，3面护盾，只有一面可以攻击，注意方向(法系也要注意)。头顶太阳月亮标记时，找同色发光地板即可。\n老三双豹伊沃恩，被点名的玩家会遭到一次巨大伤害，奶妈注意抬血，由于固定点名距离最远的玩家，所以如果有远程DPS的话可以适当引导。当BOSS与场上斗气连线时，所有玩家去撞球，全部撞掉则AOE伤害较小。",
      },
    ],
    "885": [
      {
        "Name": "哈迪斯孤念歼灭战",
        "Type": "macro",
        "Text":
          "极哈迪斯\n■P1散开　　 　　　■陨石(塔)処理\nD3　MT　D4　　　北→东：MT　南→西：ST\nST　◎　　D2　　 　■牢狱\nH1　D1　H2　　　西北H1　东南H2\n■分摊 ←MT/D1/D3/H1 　ST/D2/D4/H2→\n■接线 北：T 南：H\n■法则改变　　　 　■殉教者的记忆\n　　D4/MT　　　　　　D1　D2\nD3H1 ◎ H2D2　　 ST/H1 ◎  H2/MT\n　　D1/ST　　　　　 　D3　D4\n(※TH站点上（地标线○的交点）)\n■魔法记述阵 圆：没有的缺口\n镜子：没有的缺口对向的缺口/中央镜子背面的缺口\n■深淵　←ST/D1/H1| ↑ | ↑ | MT/D2/H2→ (分摊)\n　　　　　　　  ← D3 (放球) D4 → ",
      },
    ],
    "373": [
      {
        "Name": "惨剧灵殿塔姆·塔拉墓园",
        "Type": "macro",
        "Text":
          "EX墓园\n老一证婚人，不要打任何小怪，不要用任何AOE技能，站在一起等BOSS放技能打掉小怪即可。\n沿途要把的怪都打掉才行。调查棺材会眩晕开棺材的人并读条AOE，需要眩晕打断\n老二备用的躯体，黑洞需要玩家去撞掉，无减伤裸吃的话最多吃2个，奶妈要注意加血。大球建议2~3名玩家一起去撞。BOSS会点名淤泥，T注意带位，自己不要站进去，给DPS留出输出空间。中间的NPC不能死，如果血量过低可以考虑奶妈加血。\n老三雄壮的OOO，中央发黑的区域不要去，会持续掉血。过一段时间场周围会出现一堆小怪，需要所有人迅速击杀，小怪爬到场中央后会点亮符文，一般点亮4~5个之后就很容易团灭了。",
      },
    ],
    "362": [
      {
        "Name": "纷争要地布雷福洛克斯野营地",
        "Type": "macro",
        "Text":
          "EX野营地\n老一青蓝之手指挥官 连线可以传递 注意躲好十字雷 \n老二3号哥布林装甲 出啥躲啥 有随机点名冲锋 躲开路径即可 \n老三6号哥布林坦克 BOSS打一会就会绕场旋转 转火小怪 \n接下来BOSS会往场里扔炸弹 需要用技能把炸弹打到场边去",
      },
    ],
    "363": [
      {
        "Name": "腐坏遗迹无限城市街古迹",
        "Type": "macro",
        "Text":
          "EX无限城\n老一腐坏贪吃鬼 BOSS每过一段时间会吞下一名玩家 需要剩下的人集火贪婪大口\n老二阿里奥克 开场只有小怪 需要由T独自击杀小怪 DPS尽量不要碰小怪\n老三迪亚波罗斯 开场场边会有8个门 开怪之后门上会出现标记 相同图案两两一组 一共4组 \n门上的图案过几秒就会消失 正攻需要除了T的3名玩家使用游戏的目标标点功能 对门做标记以作应对 \n“噩梦”需要打断 “破灭预兆”需要打开图案相同的两扇门 以躲避接下来的巨大伤害 ",
      },
    ],
    "365": [
      {
        "Name": "激战城塞石卫塔",
        "Type": "macro",
        "Text":
          "EX石卫塔\n老一格里尼奇恶龙，当BOSS跑到场边的时候，立刻到身后\n沿途“激昂异端者”会读条“龙血”，需要使用眩晕打断\n老二库卡龙龟 当BOSS读条变硬时，会反弹弩炮的攻击。当BOSS读条全场AOE的时候，需要使用弩炮的第二个技能“雷弹”打断(平时不要使用)。\n老三吉鲁维伽诺斯。BOSS抬手是正面顺劈，抬屁股是背面顺劈，双手抱胸离开正面方向，单手护胸侧身是直线冲刺，还会无提示喷火。",
      },
    ],
    "360": [
      {
        "Name": "剑斗领域日影地修炼所",
        "Type": "macro",
        "Text":
          "EX修炼所\n老一皮拉刻蒙 BOSS读条百吨横扫时 T穿背躲避 百吨回转所有人远离BOSS\n当场地变蓝时 点BOSS身后的装置 所有人去吃魔法人偶身边的buff\n老二卡托布莱帕斯 当BOSS读条“恶魔之瞳” 吃场边的幽暗珠 出现“不净的魔眼”需尽快击杀魔眼\n老三退位主教 穆穆埃珀 T拉好开场小怪 主教会随机定身2名玩家 需要自由的玩家触摸咒具解开束缚\n请务必去救人",
      },
    ],
    "387": [
      {
        "Name": "逆转要害沙斯塔夏溶洞",
        "Type": "macro",
        "Text":
          "EX溶洞\n老一真红龙虾 所有人稍微分散一些站位，被吐痰的玩家需要奶妈驱散。BOSS还会读条螺旋尾对目标玩家造成巨大伤害(大约90%)，可以打断。\n沿途 水泡接触到XX怪会给XX怪加很多血。\n老二麦迪逊原船长 当BOSS标记一名玩家并射击的时候，需要集火BOSS打断。召唤的小怪打人并不疼，注意先打地上爬的就可以了(它会定身)。\n沿途的大怪会召唤一大堆小怪\n老三克拉肯 打腕足，腕足都打掉之后再打本体即可，触手可以不打。",
      },
    ],
    "188": [
      {
        "Name": "武装圣域放浪神古神殿",
        "Type": "macro",
        "Text":
          "EX冬贝利\n老一折角骑士 寇黑加 老一每隔一会就会往地上扔一把标枪 注意及时转火打掉标枪 \n老二湿皮妖师 佐尔加 会满地插图腾 图腾有4个效果：变蛙、伤害增加、火耐性降低和加重\n颜色和效果的对应每次进本都是随机的 需要找到伤害图腾且踩掉\n老三光鳞兄弟 莫拉加加 当BOSS插战旗时 T要带着BOSS离开战旗范围 而插祭器时 需要DPS集火打掉祭器 \nBOSS会随机点名玩家死亡宣告 需要奶妈为该玩家加满血",
      },
    ],
    "159": [
      {
        "Name": "神灵圣域放浪神古神殿",
        "Type": "macro",
        "Text":
          "PT冬贝利\n老一圣地守护者 出啥躲啥 \n打倒冬贝利之后 拾取灯油 开机关用 第四个机关一般由T开疾跑冲过去引怪/冬贝利 奶妈开疾跑跟着过去开\n老二巨大奶冻怪 小怪及时转火清理即可 \n老三冬贝利王 无视小怪直接打BOSS即可 ",
      },
    ],
    "167": [
      {
        "Name": "邪教驻地无限城古堡",
        "Type": "macro",
        "Text":
          "PT无限城\n小怪会读条召唤妖异 眩晕/沉默打断即\n老一夺神魔  出啥打啥\n老二恶魔墙 地板变黑请立刻躲避 躲完黑地板后移动到中央 BOSS会读条击退\n老三阿难塔波嘉 这个BOSS有超巨大范围的扫尾技能 T请侧过来拉\nBOSS读条“天灾降临”时 需要所有玩家躲避到石像之后躲避 ",
      },
    ],
    "142": [
      {
        "Name": "艾玛吉娜杯斗技大会决赛",
        "Type": "macro",
        "Text":
          "艾玛吉娜杯斗技大会决赛\nBOSS各种吹飞，所有人别被吹下去\n拉提丰的T，不要离场边太近\n提丰和章鱼一人一个背对背拉好，先打章鱼\n被变河童之后，去章鱼正面吃泡泡\n会获得湿润，当提丰去场中央放超鼻息的时候\n河童对着老师用河童拳，1层愉悦打一层buff\n打掉8层就能打断BOSS读条\n第二次BOSS会旋转喷气，注意躲避\n拉章鱼的T不要乱跑，继续让河童被洗\n不要被BOSS喷气喷到，会直接掉下台子\n没有河童以后，鼻息所有人往场中央的BOSS跑\n其他的出啥躲啥",
      },
    ],
    "394": [
      {
        "Name": "奥丁歼灭战",
        "Type": "macro",
        "Text":
          "奥丁歼灭战\n出啥打啥，有啥躲啥，解限不躲也死\n减速圈治疗注意驱散\nBOSS 15%以下血读条斩铁剑，LB大招死劲撸",
      },
    ],
    "189": [
      {
        "Name": "邪念妖地无限城古堡",
        "Type": "macro",
        "Text":
          "炒冷饭无限城\n老一安可哈格 T开场注意不要让BOSS面对任何一个石像 当某名玩家被点名时 请立刻躲到石像后 等BOSS伤害连线消失后再出来 \n老二夜魔人 当BOSS隐身时 攻击场上的“幻光球” 踩一下留下光圈获得含光的buff 带有这个buff玩家去找隐身的BOSS 把BOSS炸出来 \n老三弗迪亚 当BOSS回到中场并有小怪连线时 要注意迅速击杀小怪 当玩家被一个粘液胶一样的玩意儿定身时 也请注意解救",
      },
    ],
    "366": [
      {
        "Name": "大桥上的决斗",
        "Type": "macro",
        "Text":
          "大桥上的决斗\n变成青蛙的绕着场边跑，出啥躲啥\n第二阶段某人逃跑后，BOSS会随机点名混乱\n治疗加满血，即可驱散",
      },
    ],
    "369": [
      {
        "Name": "海德拉讨伐战",
        "Type": "macro",
        "Text":
          "海德拉讨伐战\nT别拉在中场，所有人远离中场\nBOSS放恐惧迷雾，所有人去BOSS圈内躲避即可\n小怪ST拉住，打不打都行，小怪远离BOSS\n如果打的慢，小龙记得转火，近战DPS远离正面",
      },
    ],
    "758": [
      {
        "Name": "白虎诗魂战",
        "Type": "macro",
        "Text": "极白虎\n[紫圈]\n　　　     Aー坦克\n　Bー治疗　    CーDPS",
      },
    ],
    "378": [
      {
        "Name": "希瓦歼殛战",
        "Type": "macro",
        "Text":
          "极冰神\n场上结冰请不要进行任何移动！真的会死！\n剑分摊,杖分散,弓背后集合\nST拉小怪,转场完换T\n九连环当前MT开减伤硬吃,不要动！\n分散时,T和近战去前半场,奶妈远程去后半场\n冰河怒击全体远离正面,冰弓点名全体背后集合",
      },
    ],
    "297": [
      {
        "Name": "迦楼罗歼殛战",
        "Type": "macro",
        "Text":
          "极风神\n螺旋气流躲背后,寒风之歌躲石柱后\n羽毛击杀顺序:柔羽—>刚羽,刺羽St挑衅走,请不要打\n分身处理方法:MT拉美翼本体去最北面,ST拉妙翅去最南面\n击杀顺序:妙翅->美翼",
      },
    ],
    "638": [
      {
        "Name": "祖尔宛歼殛战",
        "Type": "macro",
        "Text":
          "极鬼神\n                 ■飞翔一■                                    ■飞翔二■\n                   |      T                                     \\    T\n       D1       |                                     D1     \\                D2\n                   |                 D2                             )一一一一一一\n      D3         |  \\                              D3      /              D4\n                      |     \\      D4                   /      奶妈\n       奶妈       |      \\\n【小怪阶段】读条陨石快速击杀 注意回避恐惧\n【南十字座】人群[除了MT]→右   MT→左\n【蓝色点名】BOSS左侧 右侧打身位",
      },
    ],
    "677": [
      {
        "Name": "须佐之男歼殛战",
        "Type": "macro",
        "Text":
          "极豪神\n■强袭:死刑 ■祸泡:停手\n■八尺镜+晴岚+断海:击退后回来分摊\n■雷云出现后断海不要形成三点一线\n■P2 一T接刀，另一T开减伤撞球，其余人打罩子\n■海岚斩:死刑换T\n■闪电:被点名者跑到场地另一侧\n■石牢点名:集火攻击仇恨列表BOSS上一个的石牢",
      },
    ],
    "295": [
      {
        "Name": "伊弗利特歼殛战",
        "Type": "macro",
        "Text":
          "极火神\n奶妈:灼热咆哮注意点名,灼热去场边,无事站中间\nT:BOSS拉东边,三灼伤快换T\nDPS:先打柱子后打怪,三层易伤快停手\n全体:链子接近,远离灼热奶妈,炎柱至多吃一片",
      },
    ],
    "375": [
      {
        "Name": "拉姆歼殛战",
        "Type": "macro",
        "Text":
          "极雷神\n吃三个电球后扛BOSS,buff到时间补一红,另一个T找机会吃三个电球换T\n被点名混乱去A点集合,其他人分一个人去用电圈电醒\n场上留三个电球,多余的由奶和st收取(每人每次最多两个)\n被连线不要放技能,吃三个电球解除连线\n出小怪集火小怪\n不要和MT站 不要站水里",
      },
    ],
    "720": [
      {
        "Name": "吉祥天女歼殛战",
        "Type": "macro",
        "Text":
          "极美神\n■ 开场先杀左侧小怪\n■ 死刑: 光之奔流  ■ 蓝球: 点名二仇波动炮\n■ 诱惑之腕: 场边放置\n■ 完全拒绝: 接近BOSS ■完全引诱: 远离BOSS\n■ P2小怪需均匀削血，留一点HP\n等待小怪开启以太后立即击杀\n击杀小怪后开启以太防护\n■P3后吃地面球可以增加一次以太使用机会",
      },
    ],
    "524": [
      {
        "Name": "萨菲洛特歼殛战",
        "Type": "macro",
        "Text":
          "极魔神\n【P1分摊】\n左ST治疗　右DPS \n单绿圈接近诱导\n【绿紫圈、巨人化后散开位置共通】\n　 　　BOSS\n　　　  紫(orA标记)\n近1　MT　ST　近2\n　远1　　　　远2\n　 　学　　 白\n小怪大MT　小ST　顺序→小大小小大小\n【巨人化】\n塔(Debuff有)　左坦克治疗　右DPS\n塔(Debuff无)　左MT　右ST\n撼地　左TH　右DPS\nLB（物理远程＞法系）",
      },
    ],
    "364": [
      {
        "Name": "莫古力贤王歼殛战",
        "Type": "macro",
        "Text":
          "极莫古力\n奶妈关注全队状态栏,及时驱散怒发冲冠debuff和莫古乱乱乱debuff\nMT拉壁去左下角,ST拉斧去右下角,小怪3层buff挑衅BOSS换T\n全体小怪平均削血,没事别站中间",
      },
    ],
    "577": [
      {
        "Name": "索菲娅歼殛战",
        "Type": "macro",
        "Text":
          "极女神\n信徒阶段2→3→1。魔枪背对人群. 猛突进一人承伤。\n▼▼　不平衡之罚散开　▼▼\n　　　 　MT/D1\nH1/D2　▲女神▲ H2/D3\n　　　 　ST/D4\n两边连线相差0条去蓝色对面+大倾斜\n两边连线相差1条去线多那边+小倾斜\n两边连线相差2条去线多那边+大倾斜\n睿智之秤(绿色的气息预兆)时换T。",
      },
    ],
    "448": [
      {
        "Name": "圆桌骑士幻想歼灭战",
        "Type": "macro",
        "Text":
          "极骑神\nP1龙眼之邪背对\n天踵 死刑减伤\nP2冲刺和人群站场边花纹根部\np2小怪: MT右 ST左 先打剑姿\n穿天 南→北→南\n龙眼之光后MT将BOSS拉到龙眼处\n圣盾猛击 被点名的奶站最后面,ST最前面,除MT其他人站中间 MT不参与",
      },
    ],
    "825": [
      {
        "Name": "青龙诗魂战",
        "Type": "macro",
        "Text":
          "极青龙\n《菓子系列》极青龙专用宏\n——————————————\n◆ 升龙踩塔\n——————————————\n　　 　　 \ue071\n　MT/D1　ST/D2\n\ue074　 　 　\ue0bf　 　 　\ue072\n H1/D3 H2/D4\n　　 　　 \ue073\n——————————————\n◆ 截线：MT左、ST右\n◆ 沉默：MT → ST\n◆ 顺序：小大小大小\n◆ 分摊：A方向H1、坦克\n　　 　　C方向H2、DPS",
      },
    ],
    // "1048": [
    //   {
    //     "Name": "究极神兵破坏作战",
    //     "Type": "macro",
    //     "Text": "极神兵\nT:三层炸弹debuff换T,第三次以太波动读条开LB\n全体:以太波动集体撞球,分摊伤害,必要时开疾跑",
    //   },
    // ],
    "730": [
      {
        "Name": "神龙梦幻歼灭战",
        "Type": "macro",
        "Text":
          "极神龙\n《菓子系列》极神龙专用宏\n——————————————————\n　　MT ST　　　|■ 连线+分摊\nD1　　　　D2　| MT/D1　ST/D2\n　D3　　D4　　| 　　 　 A\n H1　 H2　　| H1/D3 H2/D4\n——————————————————\n■ 放尾巴\n【奶右下 → DPS左下 → T左上or中间】\n■ 死亡轮回\n【分摊 → MT无敌 → ST无敌 → 分摊】\n■ 钻石星辰：H2滑冰\n■ 大地吐息：奶妈=左、DPS=右\n■ 小怪阶段：MT=中间大龙、ST=其他",
      },
    ],
    "359": [
      {
        "Name": "利维亚桑歼殛战",
        "Type": "macro",
        "Text":
          "极水神\n奶妈驱散减速,多用再生和能力,少叠水镜\nT头尾各一人拉,魔法鱼人记得下踢,不要站在人群方向\nDPS远敏近战打尾巴,法师打头\n全体出泡泡集火泡泡,BOSS下水迅速开以太防护罩,拍地板开防击退",
      },
    ],
    "296": [
      {
        "Name": "泰坦歼殛战",
        "Type": "macro",
        "Text":
          "极泰坦\n躲冲拳 躲冲拳 躲冲拳\n石牢:dps场中,H→南\n先打场中,击退后等冲拳结束打奶\nMT将BOSS拉最北侧,ST→小怪→东\n炸弹岩石尽量躲,如果躲不掉站石头上,不要吃两次爆炸\n3层易伤换T",
      },
    ],
    "848": [
      {
        "Name": "无瑕灵君歼殛战",
        "Type": "macro",
        "Text": "极完美神\n◆ 中场小怪： \n　ＭT - 西（9点） \n　ST - 东（3点） \n◆ 晶石引爆安全点：场地4点方向",
      },
    ],
    "446": [
      {
        "Name": "罗波那歼殛战",
        "Type": "macro",
        "Text": "极武神\n光焰序远离,光焰破去背后\n突进找第一个分身,按分身出现方向走\n冲天击找栅栏,白圈来分摊",
      },
    ],
    "566": [
      {
        "Name": "尼德霍格传奇征龙战",
        "Type": "macro",
        "Text":
          "极邪龙\n小怪击杀顺序法拉克ＳＴ→布罗宾雅克ＭＴ→变种龙(学诱导)\nＳＴ远离贴边处理线伤害\n          塔散开\n　｜   Ａ 　 ↑　    　↑   H2 Ｂ\n　｜  　   [D1]  　  [D2] MT ↓\n  ｜　\n　｜　  ST [D3]  Ｃ  [D4]\n　｜    ↑H1   ↓　   　↓　\n      燃烧之翼后散开\n　｜ＡSt　　　　　　 MtＢ\n　｜D1　　　　　　　　 D2\n　｜\n　｜D3　　　 Ｃ　       D4\n　｜ H1　　　　　　 H2\n燃烧之翼\n不可视AOE,以BOSS为中心直线范围安全,两侧伤害\n燃烧之尾\n不可视AOE,以BOSS为中心直线范围伤害,两侧安全",
      },
    ],
    "858": [
      {
        "Name": "缇坦妮雅歼殛战",
        "Type": "macro",
        "Text":
          "极妖灵王\n◆ 踩水圈 \nH1　MT      H2 \n 　 ST    D2 \nD3    D1      D4  \n◆ 火分摊\n西1点：ST  H1 D1 D3\n东2点：MT H2 D2 D4 \n◆ 荆棘扯线\n西北：TH     东南：D    ※顺时针旋转\n◆ 雷截线\n西1点：D1→D2→D3→D4→H1→ST\n◆ 小怪\n西：ST     北：MT",
      },
    ],
    "779": [
      {
        "Name": "月读幽夜歼灭战",
        "Type": "macro",
        "Text":
          "极月读\n《菓子系列》极月读专用宏\n—————————————————\n■ 铳弹分摊：BOSS背后\n■ 长矛分散：BOSS面向为基准\n　　　 T\n　   H  ●\n　　　 D\n—————————————————\n■ 月读陨石\n坦克：A（月牙角上）\n奶妈：B或D（月牙对面）\nDPS：C（月牙角上）",
      },
    ],
    "447": [
      {
        "Name": "俾斯麦歼殛战",
        "Type": "macro",
        "Text":
          "极云神\n打BOSS的壳和核心时记得上背！\nMT拉左侧蛇,ST拉右侧蛇\n雷雨天不打水泡分散站位,其他天气打水泡中间集合",
      },
    ],
    "811": [
      {
        "Name": "朱雀诗魂战",
        "Type": "macro",
        "Text":
          "极朱雀\n《菓子系列》极朱雀专用宏\n———————————————————————\n◆羽毛X型/小鸟复活｜◆羽毛十型/P3踩塔\n———————————————————————\n　MT/D1　ST/D2　 ｜　 　　MT/D1\n　　　 　　　 　　 　 ｜H1/D3　　　ST/D2\n H1/D3 H2/D4　｜　 　 H2/D4",
      },
    ],
    "294": [
      {
        "Name": "迦楼罗歼灭战",
        "Type": "macro",
        "Text":
          "PT迦楼罗\n开场拉在12点背对人群，其他人远离4个柱子\nBOSS 读条螺旋气流，MT穿过BOSS躲避\nBOSS第一次上天，所有人柱子后面躲避\nBOSS读完寒风啸后，就可以出来了\nBOSS召唤小羽毛，第一时间打掉，会炸掉柱子\nBOSS喊话四分五裂，根据柱子剩余情况掉血，注意抬血\n爆炸后MT前往7-8点方向等BOSS（可以事先提前标记位置）\n旋风躲好，小怪杀掉，先杀绿色的，红的ST拉住，打不打随意\n打的慢的话，出现柔羽及时打掉，MT暴风技能一步一步的躲好",
      },
    ],
    "374": [
      {
        "Name": "拉姆歼灭战",
        "Type": "macro",
        "Text":
          "PT拉姆\n进门陆地6点方向标A，核心技能混乱冲击\n尽量去A点集合用电击圈电醒。电圈躲好\n留下的电球回收好，电球越多AOE越疼\n开场电球MT可以考虑吃3个获得BUFF，其他人随时注意远离MT\n小怪阶段一定先打小怪，打BOSS太多血，会团灭\nP3阶段读条滚雷，并且连线两名玩家\n这个阶段的电球尽量留下3个以上，被连线的任意玩家连吃3个即可解除\n",
      },
    ],
    "281": [
      {
        "Name": "利维亚桑歼灭战",
        "Type": "macro",
        "Text":
          "PT利维亚桑\n开场左侧（长边）中央标A，头尾有仇恨，分别拉\nDPS法系打头，物理打尾\n治疗站中央，彼此适度分开\n真神跳水不会掉下去，但建议掌握观察方法\n（第一次下潜，观察长边即A点，出水柱往反方向跑\n之后下潜，看短边，如果短边出水柱，就往没水柱的半场跑\n如果长边（甲板两侧）出水柱，就转身往后面跑\n如果有声音但没水柱，往前跑到甲板边）\n吹水泡，第一时间击杀。提示可以使用魔法壁障，BOSS下潜后\n打开壁障抵御巨浪，不然会团灭\n要注意BOSS血量30%，如果属性转换以太不足30，则无法打开壁障\n小怪波齿鱼人不能打断，优先击杀",
      },
    ],
    "1067": [
      {
        "Name": "莫古力贤王歼灭战",
        "Type": "macro",
        "Text":
          "PT莫古力\nP1 出啥打啥，P2 背口诀 “力音愈壁斧弓障”\nP2BOSS出现，MT带到场边，ST带力和斧去另外一边\n其他不管，按照口诀快速击杀\n小怪不死别碰BOSS！注意！",
      },
    ],
    "426": [
      {
        "Name": "那布里亚勒斯讨伐战",
        "Type": "macro",
        "Text":
          "那布里亚勒斯\nBOSS读条二重/三重之后，会接电火花\n治疗注意提前预读加血，T在三重接电火花的时候记得开减伤\nBOSS之后去中央，所有人撞球，一红一黑的撞\n不要撞到同一颜色，撞多了会死，尽量把球撞光\n出现的小怪顺路打掉即可\nBOSS20%血后，会去中央放裂缝\n所有人先远离，上好各种BUFF，比如骑士可以开无敌\nDPS开爆发，开好后进入裂缝，BUFF会延时10倍时间\n进去后会掉陨石，注意踩圈\n打完裂缝，直接撸",
      },
    ],
    "368": [
      {
        "Name": "死化奇美拉讨伐战",
        "Type": "macro",
        "Text": "死化奇美拉讨伐战\nT把奇美拉拉出洞，拉到山顶\n寒冰咆哮打断，其他出啥躲啥\n不拉出山洞，治疗压力大\n",
      },
    ],
    "293": [
      {
        "Name": "泰坦歼灭战",
        "Type": "macro",
        "Text":
          "PT泰坦\n躲好直线技能，躲好流沙，不要太分散\n雷分两种，圆圈雷和川字雷\n圆圈雷中央集合，等外圈第一个炸了以后立刻跑过去躲\n川字雷先去旁边，中央炸了后去中央躲避\n场地会越来越小，注意别掉下去\nBOSS随机点名花刚牢狱，建议走到BOSS附近方便集火打掉\n打掉后治疗注意驱散他的debuff\nMT注意BOSS用另外的手打你，之后就是掀桌\n掀桌要开减伤！",
      },
    ],
    "396": [
      {
        "Name": "无限城的死斗",
        "Type": "macro",
        "Text":
          "无限城的死斗\n两个怪拉开先打鸟人，这个副本的连线是靠近，是靠近，是靠近！\n被变鸡的人去踩风，其他人注意躲开风\nP2点名一个治疗，读条捕获，发现读条时，治疗远离BOSS\nDPS解救治疗，如果治疗和BOSS太近，会越难打，T注意太近拉开\n其他出啥打啥，出啥躲啥",
      },
    ],
    "377": [
      {
        "Name": "希瓦歼灭战",
        "Type": "macro",
        "Text":
          "PT希瓦\nMT穿越BOSS躲好冰河怒击技能\nBOSS说严冰之刃将守护我的兄弟，MT开好减伤\n地上的圈尽力躲，躲不开硬吃一个，别多吃\n小怪不及时打会团灭，但小怪刚出BOSS就起飞了\n说明打BOSS太快，下次慢点打",
      },
    ],
    "292": [
      {
        "Name": "伊弗利特歼灭战",
        "Type": "macro",
        "Text":
          "PT伊芙利特\n一定转火契，BOSS冲锋时，3只12点顺时针方向依次冲锋，尽力躲\n别慌张，实在不行吃一个，1个不会死，3个必死\n三阶段BOSS读条光辉炎柱，T注意打断，掉血很多",
      },
    ],
    "837": [
      {
        "Name": "遇袭集落水滩村",
        "Type": "macro",
        "Text":
          "71水滩村\n老一 会在场地上召唤一些光球，光球会使用十字AOE，蓝色方形AOE是冲锋，后面会接扇形AOE。“颈手枷”注意减伤和回复。\n老一到老二\n路上的小怪会给MT上减速，注意驱散。\n老二 头顶出现1~4饼的图案，所有人4方向分散围住BOSS即可。处理完分摊之后，地面会出现冰圈\n老三 斐利亚 “钟摆”是双重距离衰减伤害，T贴场边放点名，其他人反方躲避。BOSS会随机捆绑一名玩家，其他人注意转火解救队友，“左/右鞭打”是左右连续施放的(均有读条)，要注意。最后的“激烈捶打”，BOSS会按照箭头方向使用技能并旋转，只有在BOSS两侧是安全的。它会旋转使用多次，注意躲避。",
      },
    ],
    "821": [
      {
        "Name": "水妖幻园多恩美格禁园",
        "Type": "macro",
        "Text":
          "73水妖本\n老一之前：注意打断“浇水”。\n老一美眼 因克·佐恩，“水脉乱打”水塘砸一次会变成小喷泉，第三次就会喷发，注意回避。\n老一到老二，注意打断“浇水”。\n老二格里奥勒，需要所有人一人挡住一根线，拦截营养。剩下的出啥躲啥有啥打啥。\n老三乐圣 因克·佐恩，“痛打”对MT死刑，残酷狂想曲”是全屏AOE。\n“青蛙歌唱队”正面施放120°变呱光线，穿背躲避。\n “独木桥幻想曲”，会把所有玩家击退到场边，并在场地中央出现一个独木桥，如果掉下去的话就会回到起点重来，前进到BOSS身下，打掉梦幻的弦乐器就可以阻止“终章”的咏唱，终章咏唱结束就会团灭。\nBOSS使用自身变异幻想曲之后，会变为另一种形态，如果发现BOSS突然转身，注意躲避正面；发现BOSS四只触脚抬起，注意躲开触脚下方。",
      },
    ],
    "823": [
      {
        "Name": "文明古迹奇坦那神影洞",
        "Type": "macro",
        "Text":
          "75神影洞\n老一之前：被连线的石像会发出激光，需要所有人找石板躲避。\n老一洛查特尔洛查特尔，读条“洛查特尔的骂声”，场地北面的石像会发动半场AOE，所有人躲避到没发光半场。“赤热化”BOSS会随机转向并使用半场AOE，所有人注意躲避。这两个技能同时出现时，必定会有1/4场地是安全的，冷静观察躲避即可。\n老二大脚野蝠，“亚音速”全场AOE附带天上掉石头AOE，最后天上会掉下来两根大钟乳石，BOSS的“声波”读条会推到这些钟乳石，往场边躲避是比较安全的(石柱一定会倒向场内)。\n老三艾洛斯，被连线的玩家需要远离BOSS。BOSS使用吸气+吐息时，会先把玩家吸引过去，然后沿场地箭头方向击退，注意避开场地上的毒潭。BOSS读条“信仰宣言”之后，如果是分摊，请在BOSS正中央分摊，如果是红圈点名，请分散到BOSS两侧躲避。",
      },
    ],
    "836": [
      {
        "Name": "避暑离宫马利卡大井",
        "Type": "macro",
        "Text":
          "77大井\n老一 大犰狳，“大回旋”是近身360度回转攻击。“重锤碎击”需要先远离，再靠近，同时伴有小AOE，冷静躲避即可。\n老二 水陆两用塔罗斯，技能“钻井”，先远离躲避AOE，之后场地会出现喷泉，紧接着“高压”全屏击退(防击退有效)，不要被击退到水里。\n“强制排水”，周身出现旋转箭头，一边使用范围技能一边旋转，躲在BOSS身后跟着它转即可安全回避。\n老三 斯托尔戈BOSS读条“异端十字叉”，同时身边出现4个三角形白光，站在三角底边交点处的地方即安全。“碎轮”站在BOSS圈内安全。召唤的4个羽毛和BOSS本体会轮流发动上述两个技能，注意观察，冷静寻找安全点。",
      },
    ],
    "822": [
      {
        "Name": "伪造天界格鲁格火山",
        "Type": "macro",
        "Text":
          "79火山\n老一得到宽恕的残忍，“流明无限”躲开正面。“台风之翼”，同时身下出现3个风球，需要站在2个风球之间躲避。\n第三次台风之翼开始，所有人需要远离BOSS同时远离场边的风球。\n老二得到宽恕的无常，当BOSS转完了之后，有脸的格子对应我方场地上就会出现AOE。在后半程除了有脸之外，场地上还会出现2个光球，光球会用环形AOE。\n“审判日”是场地上出现光圈，需要有玩家站在里面，直到天上的球落下。\n老三得到宽恕的猥亵读条“神削弱”，同时出现自身脚下范围AOE，躲避时请紧贴范围圈躲避，BOSS强化之后的这个技能在外圈会再多加一层AOE。\nBOSS周身出现金色圆形，需要躲开BOSS正面及金色圆形正面。BOSS使用“羽制傀儡”会召唤4个傀儡，本体头顶会有金光，同时会复读上述2个技能。",
      },
    ],
    "912": [
      {
        "Name": "红宝石神兵狂想作战",
        "Type": "macro",
        "Text":
          "极红玉神兵\n《地面液化》\n　　 　　ST\n　　 D1　　　D2\n　 H1　　　　 H2\n　　 D3　　　D4\n　　　　 MT\n☆掘地雷：顺时针方向放置\n《利爪突进》\n　　 D1　　　D2\n　 H1　　　　 H2\n　 D3　　　　　D4\n　　 MT　　　ST\n☆陨石1：以北为起始点，顺时针放置\n☆陨石2：MT西南/ST东北",
      },
    ],
    "923": [
      {
        "Name": "光之战士幻耀歼灭战",
        "Type": "macro",
        "Text":
          "极光战\n■基本站位　　 　　　　■LB3/塔8连/战士引导/忍者(防击退)\nD3　MT　 D4　　　　　　 　MT/D3\n H1　 ★ 　 H2　　　　　H1/D1 ★ H2/D4\n D1　 ST 　D2　　　 　　　　ST/D2\n―――――――――――――――――――\n■巴哈线/暗四角　 　　■LB1/诗人距离衰减(中央分摊)\n MT/D3　　H2/D4　　　　　   T\n　　　　　　　　　　　　　  H　　 H\n H1/D1 　　ST/D2　　　　　 DPS\n―――――――――――――――――――\n■LB2/小怪(线TH塔DPS)\n　西：MTH1D1D3　　东：STH2D2D4\n―――――――――――――――――――\n※※【陨石十字】【忍者防击退】※※",
      },
    ],
    "913": [
      {
        "Name": "博兹雅堡垒追忆战",
        "Type": "macro",
        "Text":
          "极老屁股\n    【基本分散】       I           【分摊】\n  H1　MT　D4       I\n                             　  I MT/H1          ST/H2　\n  D1　　  　D2       I D1/D3          D2/D4\n 　　　        　     　 I\n  D3　 ST  H2　  I  ※南北(顺时针转)\n ーーーーーーーーーーーーーーーーーーーー\n    【魔导电火花】   I           【更强】 \n  MT                   ST   I   ①基本分散\n    H1               H2    |   ②内侧移动\n       D1         D2       I   ③顺时针移动\n            D3 D4          I   ④逆时针移动",
      },
    ],
    "930": [
      {
        "Name": "希瓦幻巧战",
        "Type": "macro",
        "Text":
          "幻希瓦\n◆ X型分散　｜◆ 十型分散\n———————————————————\nD3　　　D4  ｜　 　 D3\n 　MT　ST　 ｜　 　 MT\n 　 　　 　 ｜H1 D1　　ST D4\n 　D1　D2　 ｜　 　 D2\nH1　　　H2  ｜　 　 H2\n———————————————————",
      },
    ],
    "436": [
      {
        "Name": "俾斯麦歼灭战",
        "Type": "macro",
        "Text":
          "PT云神\n打BOSS的壳和核心时记得上背！\n一蓝一绿两只小怪记得拉开\n胖鸟的aoe会把人推下平台\n掉下去无法复活！",
      },
    ],
    "437": [
      {
        "Name": "圆桌骑士歼灭战",
        "Type": "macro",
        "Text":
          "PT骑神\n出啥躲啥，P1“龙眼之邪”需要转身背对\n中间有一个阶段会从地面冒出塔来，记得踩塔。\nP2结束之后转场记得往BOSS方向移动，会有一个持续击退",
      },
    ],
    "559": [
      {
        "Name": "尼德霍格征龙战",
        "Type": "macro",
        "Text": "PT邪龙\n出啥躲啥，被点名不要重合\n小怪按“四腿蜥蜴龙→蛇形龙→变种龙”的顺序打",
      },
    ],
    "637": [
      {
        "Name": "祖尔宛歼灭战",
        "Type": "macro",
        "Text": "PT鬼神\n出啥躲啥\n小怪先打“智慧”，然后“意志”然后其他\n踩同属性的塔，冰踩冰，火踩火",
      },
    ],
    "576": [
      {
        "Name": "索菲娅歼灭战",
        "Type": "macro",
        "Text":
          "PT女神\n暴风(钢铁)后接暴雷(月环)\n小怪尽快打掉，不然会团灭，顺序231\n倾斜天平之前向线少,或没线的方向移动，以免掉下去\nP2后会有随机四名成员被点黑白圈，2黑2白，黑+白靠近即可解除",
      },
    ],
    "719": [
      {
        "Name": "吉祥天女歼灭战",
        "Type": "macro",
        "Text":
          "PT美神\n核心机制“元气”，在你的技能栏上方会有一个小技能栏，蓝色的图标\n可以通过场上出现的蓝色小球补充\n转阶段时使用的“”魅惑拥抱”请开启“元气”处理",
      },
    ],
    "679": [
      {
        "Name": "神龙歼灭战",
        "Type": "macro",
        "Text":
          "PT神龙\n神龙普攻会同时打两个T\n场地随机一个方向出现水柱，迅速靠近水柱，或者防击退以免被冲下平台死亡。\n巨浪之后，会出现几个水圈，踩上去减少所受火属性伤害，增加所受雷属性伤害",
      },
    ],
    "778": [
      {
        "Name": "月读歼灭战",
        "Type": "macro",
        "Text":
          "PT月读\n黄泉的铁尖：读条技能，BOSS前方的可见范围的扇形Aoe，走位回避\n黄泉的铳弹：读条技能，点名随机1人释放的直线分摊，请集合分摊\nP1会出现两团互相连线的烟雾，请集火打掉\nP3场地会变成黑白两色区域，长时间在一个颜色的区域站着会直接死亡\nP4读条“月刀左斩&月刀右斩”去相反方向躲避",
      },
    ],
    "838": [
      {
        "Name": "末日暗影亚马乌罗提",
        "Type": "macro",
        "Text":
          "80末日暗影\n沿途会有小怪给队友连线，被连线的玩家会中火属性耐性降低或治疗魔法效果降低的debuff，建议优先击杀。\n老一第一之兽，“流星群”会点名DPS玩家一个巨大的黑圈和红色点名，请互相分散(但不要过于贴边)，点名消失后离开原位，在原位会有陨石落下(附带范围AOE)，之后BOSS读条“末日流星”的时候，需要躲在陨石后才能回避。其他的出啥躲啥就行。\n老二到老三 和前面一样，有连线的小怪需要打掉。\n老二终末的指引，都是小怪。\n老三至大灾兽，读条“启示录”，需要到场地两侧的耳台躲避，注意发紫光的耳台会碎，不能站人，激光时间很长。距离衰减AOE“灾兽冲锋”会伴随BOSS向前挺进。场地两侧出现人头时，会随机一侧发出激光，激光是持续伤害，一侧结束后另一侧发出激光。另外BOSS还会单点1名玩家发射直线激光，注意躲避。",
      },
    ],
    "840": [
      {
        "Name": "异界遗构希尔科斯孪晶塔",
        "Type": "macro",
        "Text":
          "80孪晶塔\n老一扎戈斧龙：“预兆”是一个无范围预警扇形AOE。玩家头顶出现刀形状的点名时，BOSS会按照刀数量的顺序使用直线AOE，互相不要重叠，不要打到两侧的罩子。巨大绿色圆圈点名分散以及集合分摊同理，如果小怪被打出来了，记得优先处理小怪。\n老二米特里达梯，场地上出现的雷球需要适当远离，其他的出啥躲啥。\n老三泰空，读条“魔导交叉激光”时，身体前后左右会出现一个光点，远离光点，这里会发射激光，站在两个光点之间略靠外躲避。激光发射出来之后，会出现暂停的紫粉色伤害区域，不要撞进去，时间结束后会发展为直线AOE。\n另外还有从场边发射激光的“魔导防护激光”，和前面同理，会有激光炮蓄力的光点。\n“人造重力”读条后，地上出现红黑色的小圆点，这个小圆点会扩大，注意寻找安全区。",
      },
    ],
    "841": [
      {
        "Name": "创造机构阿尼德罗学院",
        "Type": "macro",
        "Text":
          "80创造机构\n老一之前：没什么特别的\n老一裂口鲨 和 原祖鲨，蓝色的鲨鱼会释放近身圆形AOE，红的会释放扇形AOE。当一只鲨鱼跳下水后，另外一个颜色的鲨鱼会来到台上挨揍，水下的鲨鱼会绕着台子游，当它停下的时候，会在原位向场内放自己的AOE(蓝色是圆形AOE，红的是扇形AOE)，如果水下是蓝色鲨鱼，只要远离蓝鲨鱼所在半场即可，如果水下是红鲨鱼，则需要靠近鲨鱼并贴场地两侧躲避扇形AOE。双方会不断交换，直到结束。\n老一到老二 没什么特别的\n老二侯爵魔界花，出啥躲啥，当魔界花4只脚抬起的时候，需要站在两只脚之间躲避，它会一边转一边抬脚砸地5次，在最后一次砸地后，还会释放正面AOE，因此所有人需要在BOSS的侧面/背面躲避跺脚。在后半程战斗中，还有部分草地场地会变紫，远程可以站在环形无毒地板上输出，需要同时注意紫色有毒地板和BOSS抬脚砸地。\n老二到老三 恶魔装甲会读条“新烈光”(全屏AOE)，可打断。\n老三克察尔科亚特尔，出啥躲啥，BOSS会点名玩家和场地随机放雷圈，场地雷圈在点名之后会留下一个电球，撞球吃球可以获得伤害提高的buff，不吃球的话会导致BOSS伤害提高，因此玩家需要尽可能回收场地上的雷球。另外BOSS还会跳到场边并击飞玩家，AOE后T尽可能把BOSS带回场地中央，以便处理后续机制。",
      },
    ],
    "884": [
      {
        "Name": "魔法宫殿宇宙宫",
        "Type": "macro",
        "Text":
          "80宇宙宫\n老一之前：小怪会从周围的墙上、画上跑下来。T注意不要闷头跑过头了。\n老一宫殿的隐者，碰到扫帚会被击飞，并获得1层受伤加重，注意不要吃太多层。\n老二凉南希，玩家需要在“育芽之谣”读条结束之前，把种子从草地方块搬到荒地方块上，否则种子就会发芽变成小怪。第二次播种之后会吹风，吹风会把种子按照箭头方向吹1格距离。\n老三卢格斯，“左/右炎狱斩”，BOSS会转身，注意看好BOSS面向再躲。“鬼炎斩”，玩家头顶会出现红色点名，会留下一个中等范围的十字AOE，切记不要让十字AOE打到场边的家具。“必灭之炎”，玩家需要把蓝点名的火焰传递给场边的家具。“炎狱杀”，会依次点名4名玩家并出现连线，玩家需要远离到连线变为紫色，BOSS会按顺序冲向玩家，并立刻使用扇形顺劈AOE，所有人远离的同时身后不要有家具。",
      },
    ],
    "845": [
      {
        "Name": "缇坦妮雅歼灭战",
        "Type": "macro",
        "Text":
          "PT妖精王\n“幻之符文”根据AOE范围提示决定靠近还是远离\n“魔之符文”对MT扇形AOE+大伤害。\n“水之符文”水圈需要一人站一个\n“火之符文”水塘里分摊即可\n“根之符文”植物的根会沿着预警方向伸长。\n“冰之符文”和冰神希瓦的九连环是完全一样的，如果实在不会就原地硬吃一层。\n小怪阶段，2个T分别拉住西场的豌豆花和北场的帕克，其他人全力进攻3点的芥子，由于T负责的小怪有正面顺劈死刑，所以推荐原地拉住即可，不要带着跑来跑去。打掉芥子之后再转火另外2只小怪。\n全部打掉小怪复活变大，再来一次。\n小怪全部打掉之后会进入转场动画，可以适当布置减伤，动画结束之后进入P3。P3的基本技能在P1都见过了。",
      },
    ],
    "846": [
      {
        "Name": "无瑕灵君歼灭战",
        "Type": "macro",
        "Text":
          "PT无瑕灵君\n开场后不久BOSS就会召唤小怪，T全部拉住即可，小怪会读条AOE。小怪打掉之后场上会出现4个圈，需要踩圈+背对BOSS处理。\n“断罪飞翔”有两种效果，一个是召唤2根雷柱，释放3根AOE伤害，需要钻缝隙躲避；一种是召唤电风扇AOE，需要顺着AOE弯曲的方向前进。\n“断罪回旋”BOSS放出的剑会停留在场地外缘，翻转180°再飞回来，因此不要急于移动位置，否则有可能吃到第二次伤害。\n小怪阶段请按照蓝色连线的顺序击杀，打掉所有小怪之后，BOSS会发动转场技能，如果身上叠了超过1层的斩击耐性降低debuff，请务必大量布置减伤，否则极易团灭。\n接下来就是各种躲AOE，当BOSS前往场边的时候，需要按照AOE范围预警提示的流动方向，尽可能往远离BOSS的两侧躲避。重复几次就过了。",
      },
    ],
    "847": [
      {
        "Name": "哈迪斯歼灭战",
        "Type": "macro",
        "Text":
          "PT哈迪斯\n死刑是范围AOE，不要随便靠近MT\n“失信”，在没有箭头的方向躲避\n天上会掉下蓝色发光的魔法阵，注意远离\n小怪阶段中途会出现分摊+圆圈点名的标记，被点名圆圈的玩家注意远离，剩下的玩家场中分摊\n“暗影流”，向场地两侧躲避。“双重强袭”是对当前仇恨前2的玩家点名大伤害，ST注意保持二仇\n当BOSS伸出1只手，需要走到手臂外侧\n当BOSS伸出2只手，需要停留在场地中央\n“囚禁”被点名的玩家需要远离其他人\n场地变黑并所有人附加死亡宣告时，需要所有人踩亮地上的光环\n场地上出现箭头流动的时候，需要走到箭头起源的方向\n头顶出现金色点名的玩家，BOSS会向该方向释放扇形AOE，引导到场边。\n锁链捆绑之后提示“动态演练”，脸滚键盘即可解除\n最后BOSS会使用“黑暗侵蚀”造成全场AOE，每5次是一次大伤害，同时场地外周会被侵蚀。",
      },
    ],
    "174": [
      {
        "Name": "水晶塔 古代人迷宫",
        "Type": "macro",
        "Text":
          "50水晶塔1\nBOSS1 骸骨龙 出啥躲啥和人群站一起\n道中 三个岔路口从左到右分别对应ABC三队，等人齐了再进！等人齐了再进！等人齐了再进！\nBOSS2 塔纳托斯 身上有星极体buff的才能攻击BOSS，其他没被连线的人可以打小怪 连线顺序是A队-B队-C队\n道中 三个沙瓦克一队负责一个，沙瓦克打完再击杀中间的爆弹怪。\nBOSS3 贝希摩斯王 铁巨人由DPS尽快击杀。绿色点名的放在场地内。  BOSS 读条黄道陨石的时候躲到彗星背面。\nBOSS4 提坦 T拉到中央偏六点方向，BOSS回场中读条古代核爆时所有人立刻回到本队标点的台子上。",
      },
    ],
    "372": [
      {
        "Name": "水晶塔 希尔科斯塔",
        "Type": "macro",
        "Text":
          "50水晶塔2\nBOSS1 妖艳无比的六兽妖 连线紫球撞场边柱子。蓝色连线不用管被冻住后等红色连线的人撞你。boss读条古代核爆就站在解冻后的水里\nBOSS2 金刚不坏的守护者，打就行。\nBOSS3 才思敏捷的亚蒙 第一时间击杀魔科学物质66，被紫球连线的去撞库姆库姆使他变小，变小后击杀，变青蛙的注意躲蛇，青蛙可以救解冻的人但记得留点冰块躲后面的核爆\nBOSS4 始皇帝赞德 黑圈需要分摊 所有人都集中在boss身下就行，别一个人跑出去",
      },
    ],
    "144": [
      {
        Name: "喷风相对安全点",
        Type: "place",
        Place: {
          A: { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 0, "Active": false },
          B: { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 1, "Active": false },
          C: { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 2, "Active": false },
          D: { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 3, "Active": false },
          One: { "X": 67.3074951, "Y": -4.4768095, "Z": -24.3381348, "ID": 4, "Active": true },
          Two: { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
          Three: { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 3, "Active": false },
          Four: { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 3, "Active": false },
        },
      },
    ],
  },
};
nextTick(() => {
  (
    [
      [
        "亚历山大绝境战",
        {
          "Name": "亚历山大绝境战",
          "MapID": 694,
          "A": { "X": 100.003, "Y": 0.0, "Z": 80.801, "ID": 0, "Active": true },
          "B": { "X": 119.115, "Y": 0.0, "Z": 99.922, "ID": 1, "Active": true },
          "C": { "X": 99.995, "Y": 0.0, "Z": 113.659, "ID": 2, "Active": true },
          "D": { "X": 86.131, "Y": 0.0, "Z": 99.805, "ID": 3, "Active": true },
          "One": { "X": 106.833, "Y": 0.0, "Z": 99.988, "ID": 4, "Active": true },
          "Two": { "X": 100.026, "Y": 0.0, "Z": 111.451, "ID": 5, "Active": true },
          "Three": { "X": 116.01, "Y": 0.0, "Z": 98.394, "ID": 6, "Active": true },
          "Four": { "X": 116.008, "Y": 0.0, "Z": 101.664, "ID": 7, "Active": true },
        },
      ],
      [
        "究极神兵绝境战",
        {
          "Name": "绝神兵",
          "MapID": 539,
          "A": { "X": 100.8771, "Y": 9.536743e-7, "Z": 82.41628, "ID": 0, "Active": true },
          "B": { "X": 118.813377, "Y": 9.536743e-7, "Z": 98.87351, "ID": 1, "Active": true },
          "C": { "X": 99.95222, "Y": 0.0, "Z": 118.287018, "ID": 2, "Active": true },
          "D": { "X": 82.2875, "Y": 0.0, "Z": 99.7309647, "ID": 3, "Active": true },
          "One": { "X": 100.186066, "Y": 0.0, "Z": 99.2162247, "ID": 4, "Active": true },
          "Two": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
          "Three": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 6, "Active": false },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      ],
      [
        "究极神兵绝境战",
        {
          "Name": "绝神兵三连桶",
          "MapID": 539,
          "A": { "X": 100.563751, "Y": -1.90734863e-6, "Z": 93.5459, "ID": 0, "Active": true },
          "B": { "X": 106.757942, "Y": -3.81469727e-6, "Z": 99.5804443, "ID": 1, "Active": true },
          "C": { "X": 100.4052, "Y": -3.81469727e-6, "Z": 105.739433, "ID": 2, "Active": true },
          "D": { "X": 92.96501, "Y": 7.62939453e-6, "Z": 99.20858, "ID": 3, "Active": true },
          "One": { "X": 100.186066, "Y": 0.0, "Z": 99.2162247, "ID": 4, "Active": true },
          "Two": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
          "Three": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 6, "Active": false },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      ],
      [
        "巴哈姆特绝境战",
        {
          "Name": "巴哈P1",
          "MapID": 280,
          "A": { "X": -0.211925328, "Y": 0.0, "Z": -23.8155136, "ID": 0, "Active": true },
          "B": { "X": -0.0276765823, "Y": -9.536743e-7, "Z": -7.898926, "ID": 1, "Active": true },
          "C": { "X": -7.373253, "Y": 0.0, "Z": 3.969863, "ID": 2, "Active": true },
          "D": { "X": 8.005841, "Y": -1.90734863e-6, "Z": 4.147682, "ID": 3, "Active": true },
          "One": { "X": 0.07961208, "Y": -1.90734863e-6, "Z": 0.0431003571, "ID": 4, "Active": true },
          "Two": { "X": 0.072705254, "Y": -4.76837158e-7, "Z": 9.053114, "ID": 5, "Active": true },
        },
      ],
      [
        "巴哈姆特绝境战",
        {
          "Name": "巴哈p3+p5",
          "MapID": 280,
          "A": { "X": -0.07233447, "Y": -9.536743e-7, "Z": -22.2067833, "ID": 0, "Active": true },
          "B": { "X": 21.9503174, "Y": -9.536743e-7, "Z": 0.206903815, "ID": 1, "Active": true },
          "C": { "X": 0.0709118545, "Y": 4.76837158e-7, "Z": 22.0522575, "ID": 2, "Active": true },
          "D": { "X": -21.9782677, "Y": 0.0, "Z": -0.287322283, "ID": 3, "Active": true },
          "One": { "X": 0.07961208, "Y": -1.90734863e-6, "Z": 0.0431003571, "ID": 4, "Active": true },
          "Two": { "X": 0.01625178, "Y": 9.536743e-7, "Z": 8.986297, "ID": 5, "Active": true },
        },
      ],
      [
        "巴哈姆特绝境战",
        {
          "Name": "巴哈p4",
          "MapID": 280,
          "A": { "X": -0.186353147, "Y": -9.536743e-7, "Z": -23.1870365, "ID": 0, "Active": true },
          "B": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 1, "Active": false },
          "C": { "X": 9.838067, "Y": -1.90734863e-6, "Z": -6.76200962, "ID": 2, "Active": true },
          "D": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 3, "Active": false },
          "One": { "X": 0.07961208, "Y": -1.90734863e-6, "Z": 0.0431003571, "ID": 4, "Active": true },
          "Two": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
        },
      ],
      [
        "巴哈姆特绝境战",
        {
          "Name": "倒三角",
          "MapID": 280,
          "A": { "X": -0.07233447, "Y": -9.536743e-7, "Z": -22.2067833, "ID": 0, "Active": true },
          "B": { "X": 8.039988, "Y": 1.90734863e-6, "Z": -3.37868881, "ID": 1, "Active": true },
          "C": { "X": 0.290453434, "Y": -3.81469727e-6, "Z": 9.521973, "ID": 2, "Active": true },
          "D": { "X": -7.49105072, "Y": -1.90734863e-6, "Z": -3.033144, "ID": 3, "Active": true },
          "One": { "X": 0.07961208, "Y": -1.90734863e-6, "Z": 0.0431003571, "ID": 4, "Active": true },
          "Two": { "X": 0.104299545, "Y": 0.0, "Z": -9.92495, "ID": 5, "Active": true },
        },
      ],
      [
        "巴哈姆特绝境战",
        {
          "Name": "绝巴哈倒三角p3+p5",
          "MapID": 280,
          "C": { "X": 0.0709118545, "Y": 4.76837158e-7, "Z": 22.0522575, "ID": 0, "Active": true },
          "D": { "X": -21.9782677, "Y": 0.0, "Z": -0.287322283, "ID": 1, "Active": true },
          "A": { "X": -0.07233447, "Y": -9.536743e-7, "Z": -22.2067833, "ID": 2, "Active": true },
          "B": { "X": 21.9503174, "Y": -9.536743e-7, "Z": 0.206903815, "ID": 3, "Active": true },
          "One": { "X": 0.07961208, "Y": -1.90734863e-6, "Z": 0.0431003571, "ID": 4, "Active": true },
          "Two": { "X": 0.104299545, "Y": 0.0, "Z": -9.92495, "ID": 5, "Active": true },
        },
      ],
      [
        "伊甸零式希望乐园 再生之章4",
        {
          "Name": "E12S",
          "MapID": 759,
          "A": { "X": -0.051, "Y": 75.0, "Z": -84.346, "ID": 0, "Active": true },
          "B": { "X": 9.639, "Y": 75.0, "Z": -75.061, "ID": 1, "Active": true },
          "C": { "X": -0.019, "Y": 75.0, "Z": -65.039, "ID": 2, "Active": true },
          "D": { "X": -9.623, "Y": 75.0, "Z": -75.007, "ID": 3, "Active": true },
          "One": { "X": 7.124, "Y": 75.0, "Z": -82.047, "ID": 4, "Active": true },
          "Two": { "X": 7.079, "Y": 75.0, "Z": -68.021, "ID": 5, "Active": true },
          "Three": { "X": -7.198, "Y": 75.0, "Z": -68.006, "ID": 6, "Active": true },
          "Four": { "X": -7.006, "Y": 75.0, "Z": -82.012, "ID": 7, "Active": true },
        },
      ],
      [
        "伊甸零式希望乐园 再生之章3",
        {
          "Name": "E11S",
          "MapID": 752,
          "A": { "X": 100.022, "Y": 0.0, "Z": 90.173, "ID": 0, "Active": true },
          "B": { "X": 109.805, "Y": 0.0, "Z": 99.85, "ID": 1, "Active": true },
          "C": { "X": 100.064, "Y": 0.0, "Z": 110.009, "ID": 2, "Active": true },
          "D": { "X": 90.066, "Y": 0.0, "Z": 100.047, "ID": 3, "Active": true },
          "One": { "X": 106.875, "Y": 0.0, "Z": 92.82, "ID": 4, "Active": true },
          "Two": { "X": 106.885, "Y": 0.0, "Z": 106.837, "ID": 5, "Active": true },
          "Three": { "X": 93.119, "Y": 0.0, "Z": 107.076, "ID": 6, "Active": true },
          "Four": { "X": 93.154, "Y": 0.0, "Z": 92.941, "ID": 7, "Active": true },
        },
      ],
      [
        "伊甸零式希望乐园 再生之章2",
        {
          "Name": "E10S",
          "MapID": 748,
          "A": { "X": 99.951, "Y": 0.0, "Z": 85.696, "ID": 0, "Active": true },
          "B": { "X": 114.055, "Y": 0.0, "Z": 99.873, "ID": 1, "Active": true },
          "C": { "X": 100.035, "Y": 0.0, "Z": 113.913, "ID": 2, "Active": true },
          "D": { "X": 85.976, "Y": 0.0, "Z": 100.091, "ID": 3, "Active": true },
          "One": { "X": 114.408, "Y": 0.0, "Z": 85.232, "ID": 4, "Active": true },
          "Two": { "X": 114.333, "Y": 0.0, "Z": 114.398, "ID": 5, "Active": true },
          "Three": { "X": 85.747, "Y": 0.0, "Z": 114.304, "ID": 6, "Active": true },
          "Four": { "X": 86.266, "Y": 0.0, "Z": 86.21, "ID": 7, "Active": true },
        },
      ],
      [
        "伊甸零式希望乐园 再生之章1",
        {
          "Name": "E9S",
          "MapID": 750,
          "A": { "X": 99.848, "Y": 0.0, "Z": 81.259, "ID": 0, "Active": true },
          "B": { "X": 118.795, "Y": 0.0, "Z": 99.783, "ID": 1, "Active": true },
          "C": { "X": 99.984, "Y": 0.0, "Z": 118.863, "ID": 2, "Active": true },
          "D": { "X": 81.267, "Y": 0.0, "Z": 100.201, "ID": 3, "Active": true },
          "One": { "X": 111.671, "Y": 0.0, "Z": 87.924, "ID": 4, "Active": true },
          "Two": { "X": 111.868, "Y": 0.0, "Z": 111.561, "ID": 5, "Active": true },
          "Three": { "X": 88.489, "Y": 0.0, "Z": 111.755, "ID": 6, "Active": true },
          "Four": { "X": 88.4, "Y": 0.0, "Z": 87.633, "ID": 7, "Active": true },
        },
      ],
      [
        "伊甸零式希望乐园 共鸣之章4",
        {
          "Name": "E8S内DD",
          "MapID": 729,
          "A": { "X": 99.982, "Y": 0.0, "Z": 83.858, "ID": 0, "Active": true },
          "B": { "X": 116.107, "Y": 0.0, "Z": 100.05, "ID": 1, "Active": true },
          "C": { "X": 99.849, "Y": 0.0, "Z": 115.99, "ID": 2, "Active": true },
          "D": { "X": 83.868, "Y": 0.0, "Z": 100.243, "ID": 3, "Active": true },
          "One": { "X": 94.216, "Y": 0.0, "Z": 105.596, "ID": 4, "Active": true },
          "Two": { "X": 105.674, "Y": 0.0, "Z": 105.697, "ID": 5, "Active": true },
          "Three": { "X": 94.392, "Y": 0.0, "Z": 94.402, "ID": 6, "Active": true },
          "Four": { "X": 105.68, "Y": 0.0, "Z": 94.413, "ID": 7, "Active": true },
        },
      ],
      [
        "伊甸零式希望乐园 共鸣之章4",
        {
          "Name": "E8S",
          "MapID": 729,
          "A": { "X": 99.982, "Y": 0.0, "Z": 83.858, "ID": 0, "Active": true },
          "B": { "X": 116.107, "Y": 0.0, "Z": 100.05, "ID": 1, "Active": true },
          "C": { "X": 99.849, "Y": 0.0, "Z": 115.99, "ID": 2, "Active": true },
          "D": { "X": 83.868, "Y": 0.0, "Z": 100.243, "ID": 3, "Active": true },
          "One": { "X": 88.461, "Y": 0.0, "Z": 111.284, "ID": 4, "Active": true },
          "Two": { "X": 111.292, "Y": 0.0, "Z": 111.234, "ID": 5, "Active": true },
          "Three": { "X": 88.517, "Y": 0.0, "Z": 88.768, "ID": 6, "Active": true },
          "Four": { "X": 111.538, "Y": 0.0, "Z": 88.907, "ID": 7, "Active": true },
        },
      ],
      [
        "伊甸零式希望乐园 共鸣之章3",
        {
          "Name": "E7S",
          "MapID": 727,
          "A": { "X": 94.971, "Y": 0.0, "Z": 81.107, "ID": 0, "Active": true },
          "B": { "X": 119.297, "Y": 0.0, "Z": 94.201, "ID": 1, "Active": true },
          "C": { "X": 105.09, "Y": 0.0, "Z": 118.921, "ID": 2, "Active": true },
          "D": { "X": 80.79, "Y": 0.0, "Z": 104.581, "ID": 3, "Active": true },
          "One": { "X": 98.935, "Y": 0.0, "Z": 98.541, "ID": 4, "Active": true },
          "Two": { "X": 101.153, "Y": 0.0, "Z": 101.152, "ID": 5, "Active": true },
          "Three": { "X": 108.988, "Y": 0.0, "Z": 91.111, "ID": 6, "Active": true },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      ],
      [
        "伊甸零式希望乐园 共鸣之章2",
        {
          "Name": "E6S",
          "MapID": 720,
          "A": { "X": 100.34, "Y": 0.0, "Z": 87.646, "ID": 0, "Active": true },
          "B": { "X": 113.004, "Y": 0.0, "Z": 100.46, "ID": 1, "Active": true },
          "C": { "X": 99.54, "Y": 0.0, "Z": 113.13, "ID": 2, "Active": true },
          "D": { "X": 86.71, "Y": 0.0, "Z": 99.536, "ID": 3, "Active": true },
          "One": { "X": 95.152, "Y": 0.0, "Z": 95.508, "ID": 4, "Active": true },
          "Two": { "X": 105.858, "Y": 0.0, "Z": 95.713, "ID": 5, "Active": true },
          "Three": { "X": 105.54, "Y": 0.0, "Z": 106.498, "ID": 6, "Active": true },
          "Four": { "X": 95.513, "Y": 0.0, "Z": 106.422, "ID": 7, "Active": true },
        },
      ],
      [
        "伊甸零式希望乐园 共鸣之章1",
        {
          "Name": "E5S",
          "MapID": 716,
          "A": { "X": 89.901, "Y": 0.0, "Z": 89.616, "ID": 0, "Active": true },
          "B": { "X": 109.807, "Y": 0.0, "Z": 89.888, "ID": 1, "Active": true },
          "C": { "X": 109.872, "Y": 0.0, "Z": 109.909, "ID": 2, "Active": true },
          "D": { "X": 90.357, "Y": 0.0, "Z": 109.704, "ID": 3, "Active": true },
          "One": { "X": 95.97, "Y": 0.0, "Z": 94.666, "ID": 4, "Active": true },
          "Two": { "X": 104.077, "Y": 0.0, "Z": 94.714, "ID": 5, "Active": true },
          "Three": { "X": 104.035, "Y": 0.0, "Z": 104.712, "ID": 6, "Active": true },
          "Four": { "X": 96.008, "Y": 0.0, "Z": 104.818, "ID": 7, "Active": true },
        },
      ],
      [
        "伊甸零式希望乐园 觉醒之章4",
        {
          "Name": "E4S",
          "MapID": 0,
          "A": { "X": 89.25536, "Y": 0.0, "Z": 88.5073242, "ID": 0, "Active": true },
          "B": { "X": 110.960938, "Y": 1.90734863e-6, "Z": 88.38228, "ID": 1, "Active": true },
          "C": { "X": 89.05167, "Y": 9.536743e-7, "Z": 111.250984, "ID": 2, "Active": true },
          "D": { "X": 110.799, "Y": 9.536743e-7, "Z": 111.164795, "ID": 3, "Active": true },
          "One": { "X": 91.20058, "Y": 1.90734863e-6, "Z": 93.7162552, "ID": 4, "Active": true },
          "Two": { "X": 90.92575, "Y": 9.536743e-7, "Z": 107.869553, "ID": 5, "Active": true },
        },
      ],
      [
        "伊甸零式希望乐园 觉醒之章3",
        {
          "Name": "E3S",
          "MapID": 683,
          "A": { "X": 90.69979, "Y": 0.0, "Z": 81.42189, "ID": 0, "Active": true },
          "B": { "X": 108.98317, "Y": 9.536743e-7, "Z": 81.5657349, "ID": 1, "Active": true },
          "C": { "X": 81.33156, "Y": 0.0, "Z": 104.841118, "ID": 2, "Active": true },
          "D": { "X": 118.817116, "Y": 0.0, "Z": 104.770538, "ID": 3, "Active": true },
          "One": { "X": 95.10125, "Y": -9.536743e-7, "Z": 99.67487, "ID": 4, "Active": true },
          "Two": { "X": 105.042946, "Y": 0.0, "Z": 99.52861, "ID": 5, "Active": true },
          "Three": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 6, "Active": false },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      ],
      [
        "伊甸零式希望乐园 觉醒之章2",
        {
          "Name": "E2S",
          "MapID": 685,
          "A": { "X": 99.9372559, "Y": 0.0, "Z": 102.468506, "ID": 0, "Active": true },
          "B": { "X": 86.2714844, "Y": 0.0, "Z": 81.48967, "ID": 1, "Active": true },
          "C": { "X": 86.9898148, "Y": 0.0, "Z": 118.055969, "ID": 2, "Active": true },
          "D": { "X": 113.07515, "Y": 3.81469727e-6, "Z": 117.857727, "ID": 3, "Active": true },
          "One": { "X": 86.9008942, "Y": -9.536743e-7, "Z": 100.3936, "ID": 4, "Active": true },
          "Two": { "X": 113.457932, "Y": -9.536743e-7, "Z": 100.293045, "ID": 5, "Active": true },
          "Three": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 6, "Active": false },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      ],
      [
        "伊甸零式希望乐园 觉醒之章1",
        {
          "Name": "E1S",
          "MapID": 654,
          "A": { "X": 91.13257, "Y": 0.0, "Z": 91.52951, "ID": 0, "Active": true },
          "B": { "X": 108.877335, "Y": 9.536743e-7, "Z": 92.16696, "ID": 1, "Active": true },
          "C": { "X": 91.39729, "Y": 0.0, "Z": 108.440056, "ID": 2, "Active": true },
          "D": { "X": 108.298889, "Y": 0.0, "Z": 108.410675, "ID": 3, "Active": true },
          "One": { "X": 99.81162, "Y": 4.76837158e-7, "Z": 82.28877, "ID": 4, "Active": true },
          "Two": { "X": 100.027077, "Y": 4.76837158e-7, "Z": 118.3746, "ID": 5, "Active": true },
          "Three": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 6, "Active": false },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      ],
      [
        "欧米茄零式时空狭缝 阿尔法幻境4",
        {
          "Name": "O12S门神",
          "MapID": 594,
          "A": { "X": 99.83304, "Y": 9.536743e-7, "Z": 80.21912, "ID": 0, "Active": true },
          "B": { "X": 118.769211, "Y": 4.76837158e-7, "Z": 100.394394, "ID": 1, "Active": true },
          "C": { "X": 100.046577, "Y": 9.536743e-7, "Z": 119.10936, "ID": 2, "Active": true },
          "D": { "X": 80.58852, "Y": 4.76837158e-7, "Z": 99.97452, "ID": 3, "Active": true },
          "One": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 4, "Active": false },
          "Two": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
        },
      ],
      [
        "欧米茄零式时空狭缝 阿尔法幻境4",
        {
          "Name": "O12S本体",
          "MapID": 594,
          "A": { "X": 99.83304, "Y": 9.536743e-7, "Z": 80.21912, "ID": 0, "Active": true },
          "B": { "X": 118.453392, "Y": -9.536743e-7, "Z": 93.64815, "ID": 1, "Active": true },
          "C": { "X": 100.046577, "Y": 9.536743e-7, "Z": 119.10936, "ID": 2, "Active": true },
          "D": { "X": 81.26986, "Y": 9.536743e-7, "Z": 93.63288, "ID": 3, "Active": true },
          "One": { "X": 100.116158, "Y": 0.0, "Z": 103.755928, "ID": 4, "Active": true },
          "Two": { "X": 100.007416, "Y": -9.536743e-7, "Z": 111.029564, "ID": 5, "Active": true },
        },
      ],
      [
        "欧米茄零式时空狭缝 阿尔法幻境3",
        {
          "Name": "O11S",
          "MapID": 593,
          "A": { "X": 90.0306549, "Y": 0.0, "Z": 80.07129, "ID": 0, "Active": true },
          "B": { "X": 119.689781, "Y": 0.0, "Z": 89.95763, "ID": 1, "Active": true },
          "C": { "X": 109.997, "Y": 0.0, "Z": 119.707291, "ID": 2, "Active": true },
          "D": { "X": 80.1643448, "Y": 0.0, "Z": 109.9063, "ID": 3, "Active": true },
          "One": { "X": 100.026291, "Y": 0.0, "Z": 100.218727, "ID": 4, "Active": true },
          "Two": { "X": 99.95635, "Y": 0.0, "Z": 109.840851, "ID": 5, "Active": true },
        },
      ],
      [
        "欧米茄零式时空狭缝 阿尔法幻境2",
        {
          "Name": "O10S",
          "MapID": 592,
          "A": { "X": 100.036873, "Y": -9.536743e-7, "Z": 80.13774, "ID": 0, "Active": true },
          "B": { "X": 119.288452, "Y": -9.536743e-7, "Z": 99.52209, "ID": 1, "Active": true },
          "C": { "X": 99.83287, "Y": 0.0, "Z": 119.035995, "ID": 2, "Active": true },
          "D": { "X": 80.38637, "Y": 0.0, "Z": 99.80568, "ID": 3, "Active": true },
          "One": { "X": 100.236496, "Y": 0.0, "Z": 106.1256, "ID": 4, "Active": true },
          "Two": { "X": 104.780678, "Y": 9.536743e-7, "Z": 101.296326, "ID": 5, "Active": true },
        },
      ],
      [
        "欧米茄零式时空狭缝 阿尔法幻境1",
        {
          "Name": "O9SX字",
          "MapID": 591,
          "A": { "X": 96.32393, "Y": -1.90734863e-6, "Z": 95.60237, "ID": 0, "Active": true },
          "B": { "X": 103.289055, "Y": -9.536743e-7, "Z": 96.70901, "ID": 1, "Active": true },
          "C": { "X": 103.600288, "Y": 0.0, "Z": 103.315353, "ID": 2, "Active": true },
          "D": { "X": 96.48285, "Y": 0.0, "Z": 103.007729, "ID": 3, "Active": true },
          "One": { "X": 99.68421, "Y": 9.536743e-7, "Z": 87.40692, "ID": 4, "Active": true },
          "Two": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
        },
      ],
      [
        "欧米茄零式时空狭缝 西格玛幻境4",
        {
          "Name": "O8S门神",
          "MapID": 69,
          "A": { "X": 0.0896936655, "Y": -9.536743e-7, "Z": -4.80771637, "ID": 0, "Active": true },
          "B": { "X": 4.37434959, "Y": 0.0, "Z": 0.428713232, "ID": 1, "Active": true },
          "C": { "X": -0.00514018536, "Y": 0.0, "Z": 4.85788536, "ID": 2, "Active": true },
          "D": { "X": -4.363811, "Y": 0.0, "Z": 0.404521555, "ID": 3, "Active": true },
          "One": { "X": 1.05671811, "Y": -9.536743e-7, "Z": -18.2012253, "ID": 4, "Active": true },
          "Two": { "X": -0.34018302, "Y": 9.536743e-7, "Z": 18.8458672, "ID": 5, "Active": true },
          "Three": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 6, "Active": false },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      ],
      [
        "欧米茄零式时空狭缝 西格玛幻境4",
        {
          "Name": "O8s本体",
          "MapID": 295,
          "A": { "X": 0.6233097, "Y": 1.90734863e-6, "Z": -18.5594025, "ID": 0, "Active": true },
          "B": { "X": 19.2229443, "Y": 0.0, "Z": -1.67351913, "ID": 1, "Active": true },
          "C": { "X": -0.2087488, "Y": 0.0, "Z": 19.4362221, "ID": 2, "Active": true },
          "D": { "X": -19.0983086, "Y": 1.90734863e-6, "Z": -0.507885, "ID": 3, "Active": true },
          "One": { "X": -12.9519014, "Y": 0.0, "Z": 14.4428806, "ID": 4, "Active": true },
          "Two": { "X": 13.9547405, "Y": 0.0, "Z": 13.1799335, "ID": 5, "Active": true },
          "Three": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 6, "Active": false },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      ],
      [
        "欧米茄零式时空狭缝 德尔塔幻境4",
        {
          "Name": "O4S",
          "MapID": 259,
          "A": { "X": -0.191439867, "Y": 0.0, "Z": -19.5519123, "ID": 0, "Active": true },
          "B": { "X": 19.8772144, "Y": -9.536743e-7, "Z": -0.1288662, "ID": 1, "Active": true },
          "C": { "X": -0.017939806, "Y": 0.0, "Z": 19.6729469, "ID": 2, "Active": true },
          "D": { "X": -19.79152, "Y": -1.90734863e-6, "Z": 0.098944664, "ID": 3, "Active": true },
          "One": { "X": 0.00287008286, "Y": 9.536743e-7, "Z": 0.0327014923, "ID": 4, "Active": true },
          "Two": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
          "Three": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 6, "Active": false },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      ],
      [
        "亚历山大零式机神城 天动之章4",
        {
          "Name": "A12S",
          "MapID": 193,
          "A": { "X": 11.8757782, "Y": 400.0, "Z": -20.3100662, "ID": 0, "Active": true },
          "B": { "X": 21.2444363, "Y": 400.0, "Z": 11.8267078, "ID": 1, "Active": true },
          "C": { "X": -12.1610489, "Y": 400.0, "Z": 21.08806, "ID": 2, "Active": true },
          "D": { "X": -19.8631439, "Y": 400.0, "Z": -11.9138031, "ID": 3, "Active": true },
          "One": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 4, "Active": false },
          "Two": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
        },
      ],
      [
        "亚历山大零式机神城 律动之章4",
        {
          "Name": "A8S",
          "MapID": 150,
          "A": { "X": 0.236430019, "Y": 10.5000019, "Z": -22.8561821, "ID": 0, "Active": true },
          "B": { "X": 23.0866966, "Y": 10.5, "Z": -0.236469269, "ID": 1, "Active": true },
          "C": { "X": -0.0179607868, "Y": 10.5000019, "Z": 21.8828621, "ID": 2, "Active": true },
          "D": { "X": -22.583107, "Y": 10.5, "Z": -0.3021698, "ID": 3, "Active": true },
          "One": { "X": 10.8583527, "Y": 10.4999981, "Z": -0.397441864, "ID": 4, "Active": true },
          "Two": { "X": 0.111641228, "Y": 10.5000038, "Z": 9.996191, "ID": 5, "Active": true },
        },
      ],
      [
        "钻石神兵狂想作战",
        {
          "Name": "钻石神兵狂想作战",
          "MapID": 782,
          "A": { "X": 80.008, "Y": 0.0, "Z": 100.076, "ID": 0, "Active": true },
          "B": { "X": 120.034, "Y": 0.0, "Z": 99.897, "ID": 1, "Active": true },
          "C": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 2, "Active": false },
          "D": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 3, "Active": false },
          "One": { "X": 88.626, "Y": 0.0, "Z": 81.626, "ID": 4, "Active": true },
          "Two": { "X": 111.198, "Y": 0.0, "Z": 81.499, "ID": 5, "Active": true },
          "Three": { "X": 88.771, "Y": 0.0, "Z": 118.481, "ID": 6, "Active": true },
          "Four": { "X": 111.349, "Y": 0.0, "Z": 118.481, "ID": 7, "Active": true },
        },
      ],
      [
        "红宝石神兵破坏作战",
        {
          "Name": "极红兵",
          "MapID": 718,
          "A": { "X": 99.719, "Y": 0.0, "Z": 118.477, "ID": 0, "Active": true },
          "B": { "X": 88.42, "Y": 0.0, "Z": 114.409, "ID": 1, "Active": true },
          "C": { "X": 81.484, "Y": 0.0, "Z": 96.386, "ID": 2, "Active": true },
          "D": { "X": 89.63, "Y": 0.0, "Z": 85.026, "ID": 3, "Active": true },
          "One": { "X": 101.501, "Y": 0.0, "Z": 81.279, "ID": 4, "Active": true },
          "Two": { "X": 114.05, "Y": 0.0, "Z": 85.897, "ID": 5, "Active": true },
          "Three": { "X": 118.882, "Y": 0.0, "Z": 99.233, "ID": 6, "Active": true },
          "Four": { "X": 111.467, "Y": 0.0, "Z": 115.661, "ID": 7, "Active": true },
        },
      ],
      [
        "绿宝石神兵狂想作战",
        {
          "Name": "绿宝石神兵狂想作战",
          "MapID": 763,
          "A": { "X": 108.435, "Y": 0.0, "Z": 82.009, "ID": 0, "Active": true },
          "B": { "X": 118.916, "Y": 0.0, "Z": 86.765, "ID": 1, "Active": true },
          "C": { "X": 94.038, "Y": 0.0, "Z": 118.32, "ID": 2, "Active": true },
          "D": { "X": 82.407, "Y": 0.0, "Z": 112.211, "ID": 3, "Active": true },
          "One": { "X": 112.197, "Y": 0.0, "Z": 81.463, "ID": 4, "Active": true },
          "Two": { "X": 118.671, "Y": 0.0, "Z": 91.679, "ID": 5, "Active": true },
          "Three": { "X": 89.665, "Y": 0.0, "Z": 118.247, "ID": 6, "Active": true },
          "Four": { "X": 82.778, "Y": 0.0, "Z": 108.454, "ID": 7, "Active": true },
        },
      ],
      [
        "哈迪斯孤念歼灭战",
        {
          "Name": "极哈安全点",
          "MapID": 693,
          "A": { "X": 100.11734, "Y": -9.536743e-7, "Z": 95.47624, "ID": 0, "Active": true },
          "B": { "X": 104.621529, "Y": 0.0, "Z": 99.83995, "ID": 1, "Active": true },
          "C": { "X": 100.047348, "Y": 1.90734863e-6, "Z": 104.507813, "ID": 2, "Active": true },
          "D": { "X": 95.30611, "Y": 0.0, "Z": 99.79571, "ID": 3, "Active": true },
          "One": { "X": 94.99098, "Y": 9.536743e-7, "Z": 95.6959839, "ID": 4, "Active": true },
          "Two": { "X": 104.888252, "Y": 0.0, "Z": 96.08912, "ID": 5, "Active": true },
          "Three": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 6, "Active": false },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      ],
      [
        "缇坦妮雅歼殛战",
        {
          "Name": "妖灵王",
          "MapID": 658,
          "A": { "X": 100.002243, "Y": -1.96695328e-6, "Z": 81.3506546, "ID": 0, "Active": true },
          "B": { "X": 118.654472, "Y": -1.96695328e-6, "Z": 100.006805, "ID": 1, "Active": true },
          "C": { "X": 100.023895, "Y": -5.960464e-8, "Z": 118.626984, "ID": 2, "Active": true },
          "D": { "X": 81.3446045, "Y": -1.96695328e-6, "Z": 99.9919739, "ID": 3, "Active": true },
          "One": { "X": 93.317215, "Y": -5.960464e-8, "Z": 100.022911, "ID": 4, "Active": true },
          "Two": { "X": 106.674713, "Y": 1.847744e-6, "Z": 100.017967, "ID": 5, "Active": true },
          "Three": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 6, "Active": false },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      ],
      [
        "无瑕灵君歼殛战",
        {
          "Name": "肥宅",
          "MapID": 667,
          "A": { "X": 100.137268, "Y": 0.0038394928, "Z": 81.16358, "ID": 0, "Active": true },
          "B": { "X": 117.04, "Y": 0.006846428, "Z": 100.089066, "ID": 1, "Active": true },
          "C": { "X": 99.9696655, "Y": 0.00439071655, "Z": 118.513931, "ID": 2, "Active": true },
          "D": { "X": 82.58859, "Y": 0.006201744, "Z": 99.69995, "ID": 3, "Active": true },
          "One": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 4, "Active": false },
          "Two": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
          "Three": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 6, "Active": false },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
      ],
      [
        "月读幽夜歼灭战",
        {
          "Name": "月读",
          "MapID": 538,
          "A": { "X": 99.60663, "Y": 0.0, "Z": 82.8387451, "ID": 0, "Active": true },
          "B": { "X": 117.821754, "Y": 0.0, "Z": 99.82191, "ID": 1, "Active": true },
          "C": { "X": 100.040916, "Y": -9.536743e-7, "Z": 117.491928, "ID": 2, "Active": true },
          "D": { "X": 82.4726257, "Y": -9.536743e-7, "Z": 99.78953, "ID": 3, "Active": true },
          "One": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 4, "Active": false },
          "Two": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
        },
      ],
      [
        "朱雀诗魂战",
        {
          "Name": "朱雀",
          "MapID": 597,
          "A": { "X": 100.426468, "Y": 0.0, "Z": 82.81605, "ID": 0, "Active": true },
          "B": { "X": 118.567696, "Y": 1.90734863e-6, "Z": 99.98941, "ID": 1, "Active": true },
          "C": { "X": 99.9193344, "Y": -9.536743e-7, "Z": 118.764473, "ID": 2, "Active": true },
          "D": { "X": 81.94909, "Y": 1.90734863e-6, "Z": 99.9024048, "ID": 3, "Active": true },
          "One": { "X": 99.96159, "Y": 0.0, "Z": 106.399796, "ID": 4, "Active": true },
          "Two": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
        },
      ],
      [
        "青龙诗魂战",
        {
          "Name": "青龙",
          "MapID": 638,
          "A": { "X": 100.356552, "Y": -6.700576e-6, "Z": 81.95613, "ID": 0, "Active": true },
          "B": { "X": 119.661438, "Y": -9.25636868e-7, "Z": 100.777023, "ID": 1, "Active": true },
          "C": { "X": 100.057991, "Y": -8.440299e-6, "Z": 118.584145, "ID": 2, "Active": true },
          "D": { "X": 80.47084, "Y": -5.249853e-5, "Z": 100.648651, "ID": 3, "Active": true },
          "One": { "X": 99.91794, "Y": -7.4129357e-6, "Z": 94.52867, "ID": 4, "Active": true },
          "Two": { "X": 100.070107, "Y": -8.775128e-6, "Z": 104.833641, "ID": 5, "Active": true },
        },
      ],
      [
        "无尽寒夜",
        {
          "Name": "任务目标(只能本地标点)",
          "A": { "X": 124.824, "Y": 10.5, "Z": -226.483, "ID": 0, "Active": true },
          "B": { "X": 296.918, "Y": 10.799, "Z": -397.124, "ID": 1, "Active": true },
        },
      ],
      [
        "终极之战",
        `/p 分摊站位\n/p MT H1 D1 D2左上\n/p ST  H2 D3 D4 右下\n/p 踩塔站位\n/p  MT   D1\n/p  ST    D2\n/p  H1   D3 \n/p  H2   D4\n/p 三连点名基础分散站位\n/p D1 MT D2\n/p H1  ○  ST　\n/p D3  H2 D4\n/p 三连点名最终站位\n/p          核爆t\n/p 大圈    ○   核爆d\n/p          核爆n`,
        "子言评论区 @辅助不萌" +
          getSource("https://www.bilibili.com/video/BV1PU4y1e72C/?vd_source=583984e97858d637c7db9eb92b042c91"),
      ],
      [
        "终极之战",
        {
          "Name": "小鸟",
          "MapID": 4130,
          "A": { "X": 100.0, "Y": 0.0, "Z": 83.0, "ID": 0, "Active": true },
          "B": { "X": 117.0, "Y": 0.0, "Z": 100.0, "ID": 1, "Active": true },
          "C": { "X": 100.0, "Y": 0.0, "Z": 100.0, "ID": 2, "Active": true },
          "D": { "X": 83.0, "Y": 0.0, "Z": 100.0, "ID": 3, "Active": true },
          "One": { "X": 88.0, "Y": 0.0, "Z": 88.0, "ID": 4, "Active": true },
          "Two": { "X": 112.0, "Y": 0.0, "Z": 88.0, "ID": 5, "Active": true },
          "Three": { "X": 88.0, "Y": 0.0, "Z": 112.0, "ID": 6, "Active": true },
          "Four": { "X": 112.0, "Y": 0.0, "Z": 112.0, "ID": 7, "Active": true },
        },
        "斜点角尖击退点 @竹取辉夜姬" + getSource("https://nga.178.com/read.php?tid=33015568"),
      ],
      [
        "异形楼阁佐特塔",
        `Boss1：三妹拉格\n人趣毒菌：读条对MT释放的单体大伤害，附加13秒中毒Debuff，注意减伤，驱散和回复。\n人趣冰封：读条释放的射线状AoE，在缝隙处回避。\n人趣爆炎：读条释放的环形AoE，靠近BOSS回避。\n人趣暴雷 ：读条释放的步进式圆形AoE，在缝隙处回避。\n人趣剧毒菌：读条对正前方释放的半场AoE，远离BOSS正面回避。\n人趣火炎/冰结/闪雷：：读条点名随机非T玩家释放的单体伤害，注意回复。\n德鲁帕德：点名3位非T玩家分别释放一次附加“火伤”“冻伤”“感电”的12秒DoT伤害，请注意回复。\n魔力操纵：冰封/暴雷/爆炎/剧毒菌：战斗后半BOSS会发射四种属性的球，冰火雷毒，可以根据读条来判断球的属性，球碰到场地内的发光点就会以发光点为起点释放对应属性的魔法攻击(冰封/爆炎/暴雷/剧毒菌)，相当于BOSS制作了一个放技能的分身，我们正常处理即可。\n\nBoss2：二姐多格\n物创灭：读条对MT释放的单体大伤害，注意减伤和回复。\n身所达：读条释放的直线AoE，走位回避。\n人趣狂暴：读条后场地会出现5个球。\n起爆：读条后刚刚出现的5个球会爆炸，我们需要提前前往没球的角落回避，没躲开球爆炸的玩家会陷入7秒的狂暴Debuff，Debuff期间角色会变得无法控制，会自动靠近BOSS。\n大愿成：读条释放以BOSS为圆心的圆形AoE，如果角色中了之前的人趣狂暴就会无法回避。\n人趣停止：读条后我方会依次陷入5秒的停止Debuff，Debuff期间BOSS会依次对我方释放直线AoE身所达，无法回避，需要分散站位处理，避免伤害重叠。\n人趣混乱：BOSS第二次释放5个球的机制(人趣狂暴+起爆)时会先读条使用人趣混乱把球伪装成自己的样子混淆视听，此时我方队友也会变成BOSS的样子，球变成的BOSS幻影会摆出各种情感动作，我们靠近没有做出任何动作的BOSS本体即可躲开球的爆炸。\n\nBoss3：梅加斯三姐妹\n轮回：大姐马格读条释放的全屏AoE，请注意回复。当二姐拉格和三妹多格先于大姐马格被击杀时，此技能会复活另外两体BOSS，所以我们必须先击杀大姐马格。\n人趣闪耀：大姐马格频繁对MT释放的无读条单体伤害，请注意回复。\n物创灭：二姐多格读条对MT释放的单体大伤害，注意减伤和回复。\n身所达：二姐多格读条释放的直线AoE，走位回避。\n德鲁帕德：三妹拉格读条对3位非T玩家分别释放一次附加“火伤”“冻伤”“感电”的12秒DoT伤害，请注意回复。\n人道火炎/冰结/闪雷：三妹拉格读条点名随机非T玩家释放的单体伤害，注意回复。\n三角攻击+人趣信仰+人趣反射：三体BOSS释放的组合技，根据属性有三种不同效果，可以根据BOSS的台词以及技能特效来判断是哪种属性。\n1.冰属性-三角冰封：2次距离衰减伤害和若干直线和射线AoE的组合，请远离距离衰减伤害的落点以降低吃到的伤害，同时不停走位躲避即可。距离衰减伤害的落点必定第一次在12点，第二次在6点。\n2.雷属性-三角暴雷：若干可回避的圆形AoE和直线AoE后，接一个圆形分摊伤害点名，在躲避AoE后要迅速集中站位进行分摊。\n3.火属性-三角爆炎：两次环形AoE和若干直线AoE后，接一个需要分散的圆形点名伤害，最后记得散开即可。\n注意：消灭三姐妹的大姐马格(最胖的那位)后，BOSS们就无法使用组合技了，后续战斗则会变成和之前的两场BOSS战类似的模式，她们的技能也会变成前两场BOSS战时的配置。在击杀大姐马格后，二姐多格会释放人趣狂暴，此时为三个狂暴球，安全点依旧为狂暴球之间的场边。三体BOSS的推荐击杀顺序为：马格→多格→拉格。`,
      ],
      [
        "魔导神门巴别塔",
        `BOSS1 巴尔纳伯\n地面重击：读条对前方释放的直线AoE，远离正面回避。\n超电磁回转碎颈臂：BOSS读条释放周身圆形AoE，同时BOSS和我们身上会出现磁极，场外生成电流陷阱，同极相斥需要靠近BOSS，异极相吸需要远离BOSS，不要被BOSS的周身圆形AoE打到或者被磁极弹到电流陷阱里。\n超电磁地面重击：BOSS走到场边后会发动磁极和直线AoE的组合机制，直线AoE固定打中间，同时直线AoE和我们身上会出现磁极，我们和直线AoE的磁极相同就靠近，不同就远离，不要让自己的角色被吸到场中的直线AoE里或者被弹到外场的电流陷阱里。\n高压放电：读条点名随机1人释放的圆形分摊伤害，集合分摊处理。\n招雷：读条后会令场内出现造成圆形爆炸的雷球，同时BOSS使用周身圆形AoE回转碎颈臂，我们同时远离BOSS和雷球回避。\n\nBOSS2 卢格\n火力压制：读条释放的全屏伤害，注意回复。\n魔导飞弹：读条释放的圆形AoE，请走位回避。\n魔导激光：转向随机玩家释放的直线激光攻击，请远离BOSS正面回避。\n水刑：读条后场地内会被毒水充满，我方全体会不停叠加窒息Debuff，积累8层窒息Debuff后我方就会被憋死，此时需要我们踩一下青蛙图案的地砖，成功后就会变成青蛙，如此一来就不会被憋死了。在此期间BOSS会释放3波圆形AoE魔导飞弹，需要走位回避。注意变成青蛙的倒计时期间如果角色再次踩到青蛙地砖上就会解除青蛙状态，有自信的話也可以自行缩短变青蛙的时间，比如在故意等窒息Debuff累计6~7层时去变成青蛙，然后再马上变回来，如此操作就可以保证角色能在尽量多地攻击BOSS的同时不会被憋死，但需要注意的是角色不变成青蛙时在水中的移动速度会变慢，在回避魔导飞弹时需要更加小心。\n魔导炸弹：读条后场内会出现三个造成十字爆炸的炸弹，我们找缝隙回避即可。诀窍是先找没有炸弹的那一排，然后尽可能远离炸弹即可。\n魔导轮：读条后场内会出现两波全屏AoE，我们需要踩一下缩小图案的地砖，成功后就会变小，这样就可以躲开战轮的攻击了，注意期间如果角色再次踩缩小地砖也会变回来。\n\nBOSS3 阿尼玛\n攻击：频繁对MT释放的无读条单体伤害，注意减伤和回复。\n异形之楔：读条后后场地会出现若干楔子，楔子之间会连线并对框起来的区域造成AoE伤害，需要我们观察场地四角，没有楔子的角落就是安全区。\n百万重力：读条释放的全屏伤害，同时场地四角会出现黑洞，黑洞会连线我方，需要我们远离连线自己的黑洞并将粉刺连线拉成黄色连线，成功后就不会被黑洞伤到了。\n祖国之父：读条释放的直线AoE，走位回避。\n无际痛苦：读条后会将我方强制吸到场地中间，同时场中会生成持续判定的圆形AoE，并且AoE区域还会扩大，我们直接往四角跑来处理，治疗要及时回复。\n英白拉多：读条后会将我们拉到它自己的空间内，我们需要和它的下半部分战斗。此时会进入输出检测环节，我们需要在屏幕上出现的计量表到达100前将其血量清空，否则会强制团灭。\n忘却之爪：同一种读条，有两种攻击模式。\n1.BOSS在场地两边以先后顺序放置两波爪子，爪子会对所在的横排造成直线AoE，我们先去后出现的那波爪子所在的横排待机，等第一波爪子判定后去空地即可。\n2.BOSS点名随机2人释放跟踪型圆形AoE，请被点名者不停跑动回避。\n混沌次元：在计量表累计满或BOSS下半身的血量清零后，它就会释放这招造成全屏伤害，只要计量表不到100我们就不会被秒杀，治疗注意回复即可。此时我们再次回到一开始的战斗场地，直到战斗结束。\n痛苦喷发：读条点名我方全体释放的圆形AoE，请分散处理。`,
      ],
      [
        "佐迪亚克歼灭战",
        `P1\n悲痛：读条让我方全体HP归1，治疗迅速回复。\n外纹：BOSS读条在场边制造纹章，分为2种攻击类型。\n1.紫色的三角纹章代表即将对场中释放扇形AoE神秘切割，我们需要靠近该纹章的两侧来躲避。\n2.红色的方块纹章代表即将对场中释放半场范围的矩形AoE神秘二分，我们需要远离该纹章所在的半场来躲避\n悲伤：读条对MT释放的高伤害圆形AoE，请MT出人群开减伤处理。\n范式：读条后，BOSS会在场内将魔物的概念实体化，分为2种攻击类型。\n1.当出现四足猛兽贝希摩斯时，代表会造成圆形AoE，我们去空地躲避。\n2.当出现蛇状魔物巨蟒时，代表会造成直线AoE，需要我们离开蛇所在的那一排来回避。\n冥火：读条释放的3连圆形AoE，走位回避。\n仇恨：读条点名随机玩家释放需要分摊的多段圆形AoE，集合分摊，注意回复。\n完全控制：演出技能，进入P2。\n\nP2\n范式+星极超流：P2 BOSS会召唤贝希摩斯或巨蟒，接着读条星极超流将场地连同AoE范围一起按照场边箭头的方向旋转90度，这里需要一点空间想象力，我们要提前判断出旋转后的安全区来回避，在场地旋转期间我们是无法移动的，我们必须在BOSS的星极超流读条结束前就到达安全区。\n不义：读条用双拳砸地造成圆形AoE，去12点或6点回避。\n痛苦：BOSS随机飞到左上角或右上角读条对正前方释放的矩形冲击波，附带击退效果，我们跑去另一组对角回避。\n三重神秘光线：BOSS会以先后顺序制造2波绿色纹章发射直线激光，我们先去后出现的纹章前待机，等第1波纹章的伤害判定后，去空地回避。\n星蚀：读条后BOSS会固定沿逆时针飞行一周，途中会在三边方向以先后顺序各生成一组星星图样(先后顺序固定为9点边→6点边→3点边)，等BOSS绕圈结束后，三组图样会根据生成顺序依次扣在场地上造成对应图案的圆形AoE，我们连续走位回避。这里请把每组图案都当成一个印章，想象一下这个印章扣在场地上的样子。第一组图案出现后先别着急转视角，先去第一组图案的安全区，然后再看第二组图案和第三组图案，在心里默念后两组图案的安全区，等第一组流星落下后，立刻去刚刚默念的后两组安全区回避。`,
      ],
      [
        "末日树海万相森国",
        `BOSS1 终末的掠夺\n绝望的叫声：读条释放的全屏伤害，请注意回复。\n空口白话：BOSS读条后会在场地内生成若干嘴巴，张开的嘴会释放圆形AoE，闭合的嘴巴则什么都不会做，所以我们只要靠近闭合的嘴巴就安全了。\n哀诉：读条对MT释放的单体大伤害，请注意减伤和回复。\n污秽的左手/右手：BOSS读条对左侧或右侧释放的半场AoE，需要我们根据读条进行判断，然后前往安全的半场回避。\n恍惚的叫声：BOSS读条后会赋予我方全体14秒的精神失常DeBuff，效果期间我方角色头上会出现旋转的手指图标，此时我方无法自由行进，当按下任意方向的位移键时都只能朝着此时头顶的手指图标所指向的方向前进，松开按键时可以停止移动。该技能会和空口白话组合使用，我们需要在精神失常的状态下来到闭合的嘴巴处，比较推荐的处理方式是不停按移动键来试错，直到选到了自己想要的方向为止，在Debuff消失后距嘴巴的伤害判定前大约还有1秒多的时间来调整自己的位置。\n呜咽：BOSS点名我方全体释放的圆形AoE，分散处理。\n\nBOSS2 终末的破坏\n绝望中的狂乱：读条释放的全屏伤害，同时场外出现火焰陷阱区。\n水牢弹：BOSS读条后场边会出现若干水球，角色靠近水球后会被吸入，不要随便靠近。\n属性吸收：BOSS读条随机吸收场外的水或火，请把属性记在心里。\n属性放出：根据BOSS吸入的属性不同有两种攻击效果：\n1.水属性，BOSS释放以场中为起点的全屏击退攻击，请靠近场中，并且调整角度让角色不会被击退到水球里。\n2.火属性，BOSS释放全屏伤害，请主动靠近水球被水球吸入，以大幅降低角色受到的火焰伤害。\n极尽破坏：读条对MT释放的单体大伤害，注意减伤和回复。\n毒液块：读条点名随机1人释放的圆形分摊伤害，集合分摊处理。\n\nBOSS3 斯伐婆奴\n绝望之炎：读条释放的全屏伤害，请注意回复。\n地脉失控：读条后场地会被划分成标着两种图案的区域，三角和圆形，同时我们的屏幕上会随机出现一个大三角或大圆，这代表着BOSS即将对和屏幕上的图案相同的地板发动攻击，我们去和屏幕上的图案不同的地板上即可安全回避。\n召唤流星：同一种读条，分为三种攻击模式。\n1.BOSS点名我方全员释放的圆形AoE，分散处理。\n2.BOSS释放以场地中心为起点的全屏击退攻击，会和地脉失控组合使用，需要我们调整位置主动被击退到安全的地板处理，或者直接站在安全的地板开防击退处理。\n3.BOSS飞上天在自己身边生出三组陨石，需要我们调整视角进行观察，每组陨石只会有3颗并且只会呈横向排列，陨石的攻击范围对应场地的4排方格，由于场地方格有3格，且每组陨石都只有3颗，则每组陨石都有一个空位，空位所对应的那排方格就是安全的，我们需要迅速来到那里进行回避。陨石一共有三波，同时场内还会有黄圈AoE进行干扰，需要我们同时躲避这些攻击。\n啃咬：读条对T释放的单体大伤害，注意减伤和回复。`,
      ],
      [
        "创造环境极北造物院",
        `BOSS1 吕萨\n铁颅猛击：读条对MT释放的单体大伤害，注意减伤和回复。\n寒霜寻影：BOSS读条后会消失，场地内会出现BOSS的脚印轨迹，BOSS会在脚印的终点处跳出并攻击内场造成AoE伤害，我们跟着脚印来到终点的场边处即可安全回避。\n召唤冰柱：BOSS读条召唤冰柱释放米字型或三角形的直线AoE，走位回避。\n严寒踏压：读条释放的全屏伤害，请注意回复。\n重挥碎击：读条点名随机玩家释放的需要分摊的圆形伤害，请集合分摊，注意回复。\n\nBOSS2 拉冬之王\n抓击：读条对MT释放的单体大伤害，注意减伤和回复。\n吸气+燃烧吐息：BOSS读条后会用三颗头中的一颗或两颗吸入以太，吸入以太的头会发光，随后BOSS读条燃烧吐息让吸入以太的头释放扇形AoE，左侧头打左边，右侧头打右边，中间头打前边，请走位回避。比如中间的头发光了，那我们就远离BOSS的前方就行了。\n燃烧晶球：读条召唤若干火球造成直线AoE，请寻找缝隙回避。\n恐吓：读条释放的全屏伤害，请注意回复。\n燃烧爆发：读条点名随机玩家释放的需要分摊的圆形伤害，请集合分摊，注意回复。\n\nBOSS3 赫尔墨斯\n三重伟大：读条释放的全屏伤害，请注意回复，同时场地外周变成陷阱区。\n赫尔墨斯文集：BOSS读条在外场制造矩形魔法阵释放直线AoE，分为两种攻击模式。\n1.四边出现大型魔法阵，四角安全。\n2.四角出现小型魔法阵，场中安全。\n纯正龙卷：读条对MT释放的大伤害圆形AoE，注意减伤和面向。\n陨石流星+赫尔墨斯文集：BOSS读条在外场释放4枚陨石造成距离衰减伤害，请来到场中站位降低受到的伤害，4枚陨石落地后会有3颗发光，1颗不发光。接着BOSS读条双重和赫尔墨斯文集制造2波全屏AoE，发光的陨石只能帮我们抵挡1次伤害，不光的陨石能帮我们抵挡2次伤害，所以我们必须来到没发光的陨石背后连续回避这2波全屏AoE。\n双重+纯正疾风：BOSS读条后会点名全体释放不可回避的直线AoE，请分散站位处理，AoE生效后会生出第二段可以回避的伤害，请走位回避。\n纯正勇气：BOSS读条强化自身攻击，请T使用“插言”打断此技能。\n四重+赫尔墨斯文集：BOSS读条后在外场制造4个矩形魔法阵连续释放4波半场AoE，我们需要根据连线激活魔法阵的顺序依次回避四次。\n纯正烈风：读条点名全员释放的圆形AoE，分散站位处理。\n双重+纯正龙卷：读条对MT释放的大伤害圆形AoE，注意减伤和面向。随后MT脚下会出现二段圆形AoE伤害，请MT走位回避。`,
      ],
      [
        "星海深幽寻因星晶镜",
        `BOSS1 迷执爱恋的莉维亚\n挫败：读条释放的全屏伤害，请注意回复。\n典雅女神枪：读条对MT释放的大伤害AoE，请注意减伤和面向。\n典雅女神连枪：BOSS读条对发光触手所在的方向释放的扇形AoE，请来到不发光的触手所在的方向回避。\n恨且爱：读条释放的圆形AoE，请走位回避。\n恨之火：无读条点名随机玩家释放的需要分摊的圆形伤害，请集合分摊，注意回复。\n蔑视：BOSS转向随机玩家读条释放的扇形AoE，请走位回避。\n典雅女神射击：BOSS读条发射子弹释放的米字型AoE，子弹的直线伤害会原地判定两次，需要注意不要被第二次判定打到，子弹之间的缝隙处就是安全区。此技能会和典雅女神连枪组合使用，需要找到能同时躲避这两个技能的安全区回避。\n\nBOSS2 强执忠义的里塔提恩\n冥狱冲击：读条释放的全屏伤害，请注意回复。\n冥狱火花：读条释放的直线伤害，请走位回避。\n榴散弹： 读条对随机一组对角方向释放若干圆形AoE轰炸，我们来到另一组对角方向回避即可。\n冥狱铁砧：读条对MT释放的单体大伤害，注意减伤和回复。\n布旗+盾牌穿刺：BOSS强制跑到场边，读条后会将战斗场地改造成长方形，随后BOSS会全屏高伤害AoE盾牌穿刺，此时场地内会出现4个水晶，每个水晶上面都有一个耐久度提示槽，其中会有2个水晶的耐久度下降得最快且水晶的颜色会逐渐变黑，不久后这2枚水晶就会破碎并形成一个缺口，我们只要躲进这个缺口就能躲避掉BOSS的全屏攻击。该技能会和榴散弹组合使用，此时榴散弹的攻击范围会覆盖其中一个安全区，我们去另一个安全区即可。\n\nBOSS3 邪执外道的亚蒙\n暗强音：读条对MT释放的单体大伤害，注意减伤和回复。\n强音暴雷：BOSS读条释放以场中为源点的距离衰减伤害，请先前往场边以降低受到的伤害。接着场地会被分割成8块，每一块都会有雷光不停贴近场边，当雷光到达场边后就会对该1/8区域造成AoE伤害，我们先去雷光较为靠近场中的区域待机，等雷光较为靠近场边的区域伤害判定后，去伤害已经判断过的空地回避。\n正旋舞歌+回舞歌：BOSS读条制造圆形魔法阵，随后BOSS读条回舞歌让魔法阵浮空，浮空的魔法阵会对着其前后方向释放直线激光，请来到魔法阵侧面回避。战斗后半会让魔法阵的数量变成2个。\n左/右侧强音爆炎：BOSS读条对随机左侧或右侧半场释放的AoE攻击，请根据读条判断安全区进行回避。\n间歇：读条释放的全屏伤害，注意回复。\n强音喷发：圆形AoE，请走位回避。\n谢幕的疯狂：BOSS读条释放的全屏秒杀伤害，请躲在希瓦制造的冰柱后面回避。`,
      ],
      [
        "海德林歼灭战",
        `P1\n职责更换：BOSS会切换自己手里的武器发动没有范围提示的攻击，共三种类型。\n1.当BOSS切换成法杖，周身浮现出绿色法杖纹章时，说明马上会释放近身圆形AoE至高神圣，我们需要迅速远离BOSS来回避。\n2.当BOSS切换成环刃，周身浮现出红色环刃纹章时，说明马上会释放环形AoE反假日，我们需要迅速靠近BOSS来回避。\n3.当BOSS切换成单手剑，周身浮现出蓝色长剑纹章时，说明马上会释放十字AoE昼夜二分，我们需要来到BOSS的四角方向回避。\n魔法师的光辉：读条释放的全屏伤害，注意回复。\n演艺家的蔑视：读条对MT释放的需要双T分摊的圆形AoE，请双T去BOSS面前开减伤分摊，注意回复。\n守护者的光辉：读条释放的全屏伤害，注意回复。\n守护者的斩断：读条对MT释放的高伤害扇形AoE，注意减伤和面向。\n\nP2\n光之水晶：P2 BOSS会进入无敌状态，场地内会出现6颗光之水晶，我们必须尽快打破全部的水晶，如果计量表到达了100就会被秒杀。\n海德林光线：BOSS会生出分身释放直线形状的距离衰减伤害，请尽量远离发光的直线以降低吃到的伤害。\n水晶冰封：点名全员释放的圆形AoE，分散处理。\n水晶垒石：点名随机玩家释放的分摊伤害，集合分摊处理。\n众生离绝：击破所有水晶后BOSS会释放全屏AoE“离乡远行”，如果此时计量表到达了100就会被秒杀。\n\nP3\n结晶：读条后BOSS身边会浮现特效，分为两种攻击模式。\n1.当出现冰晶特效时说明10秒后即将发动需要分散的圆形AoE点名水晶冰封。\n2.当出现土块特效说明10秒后即将点名需要分摊的圆形AoE水晶垒石。\n幻日环+幻闪光：BOSS读条幻日环后场内会出现发光的线条并造成圆形AoE幻闪光，我们去没线的空地回避。\n幻日+映幻日：BOSS读条幻日后，会依次对三个方向射出三组环刃，我们直接去第三组环刃的对侧方向集合站位。不久后BOSS会读条映幻日让三组环刃远路飞回，我们需要看好第一组范围提示在我们左侧还是右侧，等第一组环刃飞回后，我们直接三穿一去空地回避即可。\n\nP4\n明辉光环：读条释放的全屏高伤害，注意减伤和回复。\n光波：读条后外场会出现4个波浪，波浪会沿直线前进造成伤害，请迅速环顾场地四周寻找4个波浪之间最大的那个缝隙回避。\n回声：读条点名随机玩家释放需要分摊的5连圆形AoE，集合分摊，注意回复。`,
      ],
      [
        "最终幻想末世终迹",
        `BOSS1 变异的格雷布洛弗\n腐烂毒素飞散：BOSS读条释放的全屏伤害，同时场内出现若干毒球。此时场地会吹风，毒球会被风吹的方向吹出步进式圆形AoE，请先靠近风吹来的方向，然后寻找毒球的空隙躲避。如果角色中招就会被附加12秒的“致死腐烂毒素”Debuff，如果治疗不驱散的话倒计时结束时该角色就会死亡。\n咳出：读条后生出3波圆形AoE，走位回避。最后会点名全员释放名为孤独的预感的Debuff，在Debuff倒计时结束前需要我方集合站位处理，如果不集合站位就会陷入恐慌状态，角色会不受控制地满地乱走。\n痘疮之拳：读条对MT释放的单体大伤害，注意减伤和回复。\n腐水块：读条点名随机玩家释放的需要分摊的圆形伤害，请集合分摊，注意回复。\n脓液弹：读条点名全员释放的圆形AoE，请分散站位处理。\n疾病激流：条释放的环形AoE，请靠近回避。如果角色中招就会被附加12秒的“致死腐烂毒素”Debuff，如果治疗不驱散的话倒计时结束时该角色就会死亡。\n\nBOSS2 和平捍卫者\n烧却光线：读条释放的全屏伤害，注意回复。\n超电磁放射：读条释放的周身圆形伤害，请远离回避，同时BOSS脚下变成危险区域，不要踩进去。\n攻击命令：读条让浮游炮发射直线激光，请站在浮游炮之间回避。同时BOSS点名我方全体释放圆形AoE，需要分散处理。\n未来不再：读条释放的多重圆形AoE轰炸，请不停寻找缝隙走位回避。同时BOSS点名我方全体释放圆形AoE，最后需要分散处理。\n和平炮：读条释放沿外场不停顺时针旋转的圆形AoE，请在AoE的缝隙处跟着旋转方向移动进行回避。\n大喷射：读条释放大范围轰炸，同时BOSS会释放以自己为中心的全屏击退伤害，请让角色靠近BOSS被击退到安全区，或者直接站在安全区里开防击退处理。\n对人光线：读条对MT释放的大伤害直线AoE，注意减伤和回复。\n\nBOSS3 拉啦\n慈光：读条释放的全屏伤害，注意回复。\n慈悲：读条对MT释放的单体大伤害，注意减伤和回复。\n跃动：读条后BOSS会依次释放5个大圆AoE，请来到第2个或第3个之后出现大圆处，等第1个大圆判定后直接走到空地躲避。\n生息：读条对前方释放的直线AoE，远离正面回避。直线AoE判定后场内出现若干蝴蝶，蝴蝶会对着其正前方释放直线AoE，此伤害附加10秒的死亡宣告Debuff，请来到蝴蝶背后回避，如果角色中了死亡宣告10秒后就会死亡，治疗可以通过奶满该角色来解除死亡宣告。\n博爱：读条点名随机玩家释放的需要分摊的圆形伤害，集合分摊，注意回复。\n安宁之翼：读条点名全员释放的圆形AoE，分散站位处理。\n慈爱之翼：读条对发光翅膀所在的半场释放的AoE，请来到不发光的翅膀所在的半场回避。`,
      ],
      [
        "终结之战",
        `P1\n哀歌：读条后会先造成1次全屏伤害，然后场外会出现两个逆时针转动的星球，一快一慢，球的刷新位置固定为左上、右上、左下、右下这4个点，并且两个球一开始固定呈对角分布。快球会固定转动270度，慢球会固定转动90度，最终两个球会在终点相撞造成大范围圆形AoE，需要我们提前判断出相撞点来回避。口诀“快左慢右”，我们只关注一开始刷新在上半场的球，并且将我们自己的移动范围也只限定在上半场。等上半场的球出现后，我们立刻观察其速度，判断出它是快球还是慢球，以快球为例，那么根据口诀“快左慢右”，我们去左上角就能安全回避，以慢球为例，那么根据口诀“快左慢右”，我们去右上角就能安全回避。\n银河：读条释放的全屏击退，靠近场中处理，或者开防击退。\n反诘：读条释放的矩形AoE，分为两种模式。\n1.BOSS嘴部发光时代表对中间释放的直线攻击，我们去两侧回避。\n2.BOSS流泪时代表对两侧释放的直线攻击，我们去中间回避。\n死亡拥抱+药毒：读条点名全员释放的射线AoE，分散站位处理，随后场地落下多干羽毛，羽毛会产生圆形AoE，远离回避。\n流溢：读条召唤若干分身释放直线AoE，站在分身之间回避。\n傲慢：读条对双T释放的高伤害圆形AoE，双T出人群开减伤处理。\n哀歌：记录事件+宿命：读条后会先造成1次全屏伤害，然后场外会出现两个顺时针转动的星球，一快一慢，最终相撞造成AoE，我们根据口诀“快左慢右”回避，在相撞产生的AoE判定后，BOSS会回溯时间，接着读条宿命与行星的碎片连线，让AoE在原地再判定一次，我们也在原地远离碎片即可。\n恍惚：读条后场内会出现若干分身释放不断扩大的圆形黑泥AoE，必须来到场边空地的边缘回避。\n星际穿越+复仇：读条后BOSS会上天发动直线俯冲，同时点名4人释放圆形AoE，我们去两侧回避俯冲，同时分散站位不要让伤害重叠即可。\n\nP2\n恶灵魔：BOSS进入无敌状态，需要尽快击杀BOSS分裂出的恶灵魔，如果计量表积累到100还没有完成击杀的话就会被强制灭团。\n陨石辐射点：读条后会有若干行星对连线位置造成圆形AoE，需要我们远离连线的区域来回避。\n陨石爆发：读条释放的圆形AoE点名，分散处理。\n灾崇：读条释放全屏形AoE，注意回复。\n终极命运：击杀恶灵魔后BOSS会释放终极命运秒杀我方，此时我方的LB槽也会直接蓄满，需要由T职等屏幕上出现5秒倒计提示时开启三段LB进行减伤，成功后我们才能存活下来。\n\nP3\n终末：读条释放全屏形AoE，注意回复。\n终末狂热：读条释放的全屏AoE 5连击，注意减伤和回复，第5下判定后会出现3连圆形AoE，建议在中间集合诱导然后再走位回避。`,
      ],
      [
        "伊甸零式希望乐园 觉醒之章1",
        `/p 《三角攻击》 　　 ¦　 《8人光球》
        /p D3　　　　　 D4　 ¦　D3　MT　 D4
        /p 　 ST　　 　MT　　 ¦
        /p 　　　　◎　　　　　 ¦　ST　 ◎ 　D2
        /p 　 D1　　　D2　　 ¦
        /p H1　　　　　 H2　 ¦　H1　D1 　H2
        /p 　 《2人分摊》 　 ¦　《旋转光球引导》
        /p ST/D3　　 MT/D4　 ¦　　　　 D4
        /p 　　　 ◎　　　　　 ¦　　H1　◎　H2
        /p H1/D1　　H2/D2　 ¦　　　　 D3
        /p 《十字陷阱》D1南 D2东 D3西 D4北
        /p 《8人光球》远程治疗外侧诱导
        /p 《小怪》西MT 东ST　※ST侧优先打`,
      ],
      [
        "伊甸零式希望乐园 觉醒之章2",
        `/p 　 《八方散開》 　 ¦ 　《踩光柱》
        /p 　 　　MT　 ¦ 　D3　　D4
        /p 　　D3　 D4 ¦ 　　　MT
        /p 　ST 　 ◎ D2　 ¦ 　ST ◎ D2
        /p 　　H1　 H2 　 ¦ 　　 D1
        /p 　 　 　D1　 　　 ¦ 　H1　　H2
        /p 　 《黑白配》　 ¦ 《核爆》
        /p MT/D4 ¦ T
        /p ST/D3 ◎ H2/D2 ¦　　 ◎
        /p H1/D1 ¦ 　D　　　 H`,
      ],
      [
        "伊甸零式希望乐园 觉醒之章3",
        `/p 《分散》 | 《暴风雨运动会》
    /p MT ST | 左上集合沿着Boss圈放置
    /p D1 D2 | 《觉醒大海嘯》
    /p D3 D4 | 左：治疗、强压D、MT
    /p H1 H2 | 右：其他DPS、ST
    /p 灵泉处理顺序：治疗->近->治疗->远`,
      ],
      [
        "伊甸零式希望乐园 觉醒之章4",
        `/p -------------------------↓P1↓-------------------------
    /p 【三连踩】MT无敌→ST无敌
    /p 【分散散开】
    /p 《起始阶段》 | 《车阶段》
    /p D3　ST　MT　D4 | D3 MT D4
    /p 　 D1 D2 | ST ◎ D2
    /p H1 H2 | H1 D1 H2
    /p 【变形阶段】
    /p 　　分摊：Boss最近一格
    /p 　　分散：Boss从近到远 D→T→H
    /p 　　停车：当前一仇停车
    /p 【陨石阶段】
    /p 陨石： 西→东/TH:北/DPS:南
    /p 躲雷： 三穿一/二穿一（协商调整）`,
        "P1",
      ],
      [
        "伊甸零式希望乐园 觉醒之章4",
        `/p -------------------------↓P2↓-------------------------
  /p 【大地双拳】死刑：MT西 / ST:西北角落
  /p 　　　　　　蓝标：东北
  /p 【高低地】
  /p 　■第1次：DPS北/TH南
  /p 　■第2次：分摊北 / 其他南
  /p 【石牢】H1南 / H2北
  /p 【长方形地板】
  /p 　摊 D　　　　　　　　　　
  /p 　 T H 摊 D□□　　　
  /p 　□□　　T H □蓝　　　
  /p 　□蓝`,
        "P2",
      ],
      [
        "伊甸零式希望乐园 共鸣之章1",
        `/p ■雷云和雷暴　　　　　　¦■撞柱
      /p 　　Ｄ３　　　　Ｄ４　　 ¦  BOSS
      /p 　　　ＭＴ　　ＳＴ　　　 ¦　D1
      /p 　　　　　 ●　　　　 　  ¦　D2
      /p 　　　Ｄ１　　Ｄ２　　　 ¦   坦克
      /p 　　Ｈ１　　　　Ｈ２　　 ¦　D3
      /p -- -- -- -- -- -- -- -- -- -- -- -- -- ¦　D4
      /p ■链雷远程传　　　　　　¦　H1
      /p 　　　MT  　ＳＴ　　　　¦　H2
      /p 　　　　　●　　　　　　¦■T挡冲锋
      /p 　　　Ｄ１　  D２　　　　¦　MT＞ST
      /p  　Ｄ３Ｈ１　  Ｈ２Ｄ４    　¦
      /p ■奶>远>近>奶　　　　 　¦`,
      ],
      [
        "伊甸零式希望乐园 共鸣之章2",
        `/p ■基本站位
      /p 　MT/D3　　ST/D4
      /p 　H1/D1　　H2/D2
      /p ■火接线　远程双H 
      /p ■双体　　左：STH1D3D4 / 右：MTH2D1D2
      /p ■切割　　死刑１点 　　※切割左/上集合
      /p ■火龙卷(同向式)TH→西、DPS→东
      /p            MT/H
      /p 　D1D3　D2D4
      /p             ST/H　　　※同侧D3D2换
      /p ■合体接线
      /p 　先H1MTSTH2 / 后D3D1D2D4
      /p 　※四角分摊后TH不动，D顺时针移动45度 `,
        "6s宏-坦远同向",
      ],
      [
        "伊甸零式希望乐园 共鸣之章2",
        `/p ┌【双人分摊及扇形】┬【火神业火拳接线】┐
      /p │││第一次远程双　│
      /p │││第二次点名远程　│
      /p ├─────────┼─────────┤
      /p ├【双体阶段分组】─┼【火龙卷：同向式】┤
      /p │││　　连线　　│
      /p │││││
      /p │在标点处理死刑│　　连线　　│
      /p │场地切割左或上集合│同侧双圈换│
      /p ├─────────┼─────────┤
      /p ├【合体业火拳引导】┼【分摊后接业火拳】┤
      /p │先│四角分摊后不动│
      /p │后│顺时针移动度│
      /p └─────────┴─────────┘`,
        "子言6s宏-坦远同向",
      ],
      [
        "伊甸零式希望乐园 共鸣之章2",
        `/p ■基本站位
      /p 　MT/D1　　ST/D2
      /p 　H1/D3　　H2/D4
      /p ■火接线　远程双H 
      /p ■双体　　左：STH1D3D4 / 右：MTH2D1D2
      /p ■切割　　死刑１点 　　※切割左/上集合
      /p ■火龙卷(徘徊式)TH→西、DPS→东
      /p            MT/H
      /p 　D1D3　D2D4
      /p             ST/H　　　※同侧D3D2换
      /p ■合体接线
      /p 　先H1MTSTH2 / 后D3D1D2D4
      /p 　※四角分摊后TH不动，D顺时针移动45度`,
        "6s宏-坦近徘徊",
      ],
      [
        "伊甸零式希望乐园 共鸣之章2",
        `/p ┌【双人分摊及扇形】┬【火神业火拳接线】┐
      /p │││第一次远程双　│
      /p │││第二次点名远程　│
      /p ├─────────┼─────────┤
      /p ├【双体阶段分组】─┼【火龙卷：徘徊式】┤
      /p │││　　连线　　│
      /p │││││
      /p │在标点处理死刑│　　连线　　│
      /p │场地切割左或上集合│同侧双圈换│
      /p ├─────────┼─────────┤
      /p ├【合体业火拳引导】┼【分摊后接业火拳】┤
      /p │先│四角分摊后不动│
      /p │后│顺时针移动度│
      /p └─────────┴─────────┘`,
        "子言6s宏-坦近徘徊",
      ],
      [
        "伊甸零式希望乐园 共鸣之章3",
        `/p ■基本/小怪/夜袭　¦■极夜机动
      /p 　　　●　　　　　¦　　　　ＭＴ
      /p 　MT　　S T　　　¦　　　　ＳＴ
      /p 　D1　　D2　　　¦　　　DPS分摊
      /p 　D3　　D4　　　¦　　　　Ｈ１
      /p 　H1　　H2　　　¦　　　　Ｈ２
      /p -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
      /p ■中央左右分摊　　¦■包围号令　※近战同色D2D3互换
      /p 　ＭＴ　ＳＴ　　　 ¦　北/东：Ｔ　　　   南/西：H
      /p 　Ｈ１　Ｈ２ 　　　¦　　  北：D1D2 　　　南：D3D4
      /p -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
      /p ■夜袭号令（集合式）
      /p ■乱舞号令  (吃球：H>D1>D2>D3>D4)
      /p 　吹飞:东北　东北:暗　西北:光　南:T`,
        "7s宏-集合式",
      ],
      [
        "伊甸零式希望乐园 共鸣之章3",
        `/p ┌─球连线传送─┬─传送门─┬极夜机动┐
      /p │　　　│红动　蓝停│　　│
      /p ├─┬────┬─┼白夜机动┤　　│
      /p │４│　　　　│１ │　││
      /p │３││２ │　││
      /p │　││　│　│　　│
      /p ├─┴────┴─┤　│　　│
      /p ├─包围号令─┬─┴──┬──┴────┤
      /p │　　●　　　├夜袭号令┼─鸽龙卷站位─┤
      /p │　　　│集合式│　　  │　　  　│
      /p │　　　　●│左下右上│白色／＼黑色　│
      /p │●　　　　│红动蓝停│　／　　＼　　│ 
      /p │　　　│左侧放圈│／　坦克　＼　│ 
      /p │　　　●　　└────┼─撞球优先级─┤
      /p └近战同色交换踩塔┴》小》大┘`,
        "子言7s宏-集合式",
      ],
      [
        "伊甸零式希望乐园 共鸣之章3",
        `/p ■基本/小怪/夜袭　¦■极夜机动
      /p 　　　●　　　　　¦　　　　ＭＴ
      /p 　MT　　S T　　　¦　　　　ＳＴ
      /p 　D1　　D2　　　¦　　　DPS分摊
      /p 　D3　　D4　　　¦　　　　Ｈ１
      /p 　H1　　H2　　　¦　　　　Ｈ２
      /p -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
      /p ■中央左右分摊　　¦■包围号令　※近战同色D2D3互换
      /p 　ＭＴ　ＳＴ　　　 ¦　北/东：Ｔ　　　   南/西：H
      /p 　Ｈ１　Ｈ２ 　　　¦　　  北：D1D2 　　　南：D3D4
      /p -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
      /p ■夜袭号令（分散式）
      /p ■乱舞号令（吃球：H>D1>D2>D3>D4)
      /p 　吹飞:东北　东北:暗　西北:光　南:T`,
        "7s宏-分散式",
      ],
      [
        "伊甸零式希望乐园 共鸣之章3",
        `/p ┌─球连线传送─┬─传送门─┬极夜机动┐
      /p │　　　│红动　蓝停│　　│
      /p ├─┬────┬─┼白夜机动┤　　│
      /p │４│　　　　│１ │　││
      /p │３││２ │　││
      /p │　││　│　│　　│
      /p ├─┴────┴─┤　│　　│
      /p ├─包围号令─┬─┴──┬──┴────┤
      /p │　　●　　　├夜袭号令┼─鸽龙卷站位─┤
      /p │　　　│分散式│　　  │　　  　│
      /p │　　　　●│左下右上│白色／＼黑色　│
      /p │●　　　　│红动蓝停│　／　　＼　　│ 
      /p │　　　│内侧放圈│／　坦克　＼　│ 
      /p │　　　●　　└────┼─撞球优先级─┤`,
        "子言7s宏-分散式",
      ],
      [
        "伊甸零式希望乐园 共鸣之章4",
        `/p 《菓子系列》E8S专用宏
      /p —————————————————————
      /p ◆钻石星尘/光之失控
      /p —————————————————————
      /p T　　 　　　H｜驱散：H1=T、H2=H
      /p D1 D2 D3 D4｜三角：T西北、H东南
      /p —————————————————————
      /p 正方形连线：左D与T换位
      /p 沙漏形连线：左D与H换位
      /p —————————————————————
      /p ◆钢铁月环"X"型 ｜◆钢铁月环"十"型
      /p —————————————————————
      /p MT/D3　ST/D4 ｜　 　　MT/D3
      /p 　　 　　　 　 　 ｜H1/D1　　　ST/D4
      /p H1/D1　H2/D2｜　 　　H2/D2`,
        "果子E8S宏前半",
      ],
      [
        "伊甸零式希望乐园 共鸣之章4",
        `/p —————————————————————
      /p ◆默认分组
      /p 左：MT H1 D1 D3、右：ST H2 D2 D4
      /p —————————————————————
      /p ◆小怪阶段
      /p 截线：H→T→远→近
      /p 沉默：左边远→T、右边T两次
      /p —————————————————————
      /p ◆冰光龙诗
      /p —————————————————————
      /p D3　 MT 　D4 ｜ H1驱散DPS↓
      /p 　 H1 ▼ H2 　 ｜
      /p D1 　 ST 　 D2 ｜ H2驱散DPS↑
      /p —————————————————————
      /p ◆红蓝调整：D2D3换位`,
        "果子E8S宏后半",
      ],
      [
        "伊甸零式希望乐园 再生之章1",
        `/p ===========9s==============
      /p 【暗之战技：散开】【暗之战技：分摊】
      /p D3　 MT　D4　 ｜ 　 　 MTD3
      /p H1 　 ■ 　 H2　 ｜H1D1 　 　D4H2
      /p D1 　 ST 　D2　｜ 　 　 STD2
      /p 　　　【广角：高射】
      /p ←左 MTD1D3H1　STD2D4H2 右→
      /p ------十字荆棘AOE-------------波动球(踩塔)-----
      /p ｜        MT  D2            ｜ D3           H2
      /p ｜H1        　       D4   ｜ 　D1    ST
      /p ｜H2       　        D3   ｜ 　D2    MT
      /p ｜         ST  D1            ｜ D4             H1
      /p ●放下荆棘后向踩塔方向散开
      /p ●暗之浸蚀 1MT无敌　2ST无敌　3换T　4MT无敌
      /p 【暗黑天空】　|　【云十字站位】
      /p 　　　|　　　 D3
      /p 　MTD3D2 　 |　　　 MT
      /p 　H1 ■ H2 　 | H1D1 ■ D2H2
      /p 　D1 D4ST 　 |　 　　 ST
      /p 　　　|　 　　D4
      /p 【暗黑天空中暗之战技】
      /p 　　　D3　｜　 D3
      /p 　 MT D2　｜　 H1MT
      /p H1D1 ■ 　｜　 ■ D2 H2
      /p 　 ST H2　｜　 D1 ST
      /p 　　　D4　｜　 D4
      `,
      ],
      [
        "伊甸零式希望乐园 再生之章2",
        `/p 伊甸零式希望乐园 再生之章2  
      /p 【基本散开】 ｜ 【虚无之门】
      /p 　D3MTD4　　｜　　D3MT
      /p 　H1 ■ H2　　｜　H1　　D4
      /p 　D1 STD2　　｜　D1　　H2
      /p 　　　 　             ｜ 　　STD2
      /p 【暗影珠】12点1点分
      /p  H1D1D3逆时针撞1橙      H2D2D4顺时针撞2橙
      /p  MT逆时针撞1紫      ST顺时针撞2紫
      /p 【暗影召唤+暗影珠】
      /p ※从安全区域面朝场中判断暗影珠来球方向
      /p  左：MTH1D1D3↑STH2D2D4：右
      /p 【离别之锁】
      /p  TN：北　DPS：南`,
      ],
      [
        "伊甸零式希望乐园 再生之章3",
        `
      /p     【八方散开】                                【点名】
      /p 　　D3MTD4　 　　　            雷：光→北
      /p 　　H1 ■ H2　 　　 　                   炎→南
      /p 　　D1ST D2 　　 　                   【至天绝技】
      /p ※炎(分摊)→DPS顺时针旋转　　雷→北　炎→南
      /p              【光分摊】
      /p 　 　　　MTST
      /p 　H1D1D3 ■H2D2D4
      /p 【第二次转轮召唤：固定位置】
      /p 　　 D3　MT
      /p 　H1　 　 　D4
      /p 　D1　 　 　H2
      /p 　　 ST　D2
      /p 【雾龙】背后BOSS举起手的人、以及对面的人，走向场中`,
      ],
      [
        "伊甸零式希望乐园 再生之章4",
        `/p 《菓子系列》E12S专用宏
      /p ————————————————————————
      /p ◆希瓦分散　|  ◆分组方法
      /p D3 MT D4　|  MT组：MT、H1、D1、D3（A-1）
      /p H1  ▲  H2　|   ST组 ：ST、H2、D2、D4（4-C）
      /p D1 ST  D2　|   (兄贵分组D3D4前 、D1D2背)
      /p ————————————————————————
      /p 　◆泰坦1 　 |   　 ◆泰坦2　　| 　   ◆泰坦3
      /p 　    蓝D 　    |   　      蓝1　  　 |   蓝TH 　   蓝D
      /p 橙TH　  橙D |   橙TH 　   橙D   |
      /p 黄H 黄T 黄D |   　　  蓝2      　 |   黄TH  橙  黄D
      /p 　（蓝1←MTSTH1H2D4D3D2D1→蓝2）　
      /p ◆狮子(AkitoTT)
      /p 北：H1→MT→H1 / D3→D1→D3
      /p 南：H2→ST→H2  / D4→D2→D4`,
        "门神",
      ],
      [
        "伊甸零式希望乐园 再生之章4",
        `/p ——————————————————————————
      /p ◆开场先分散　　　|　◆开场后分散　　　　|　◆二运分散
      /p 　D3 MT D4  　 　 |　 　 　 　MT 　　　　 |　　D3 MT D4
      /p 　D1  ▲  D2 　 　  |　　 D1 　▲ 　D2　　 |　　H1  ▲  H2
      /p 　H1  ST  H2 　 　 | 　 D3　　ST　　D4 　 |　　D1 ST  D2
      /p 　 　 　 　 　 　 　  | 　 　 H1　 　 H2　 　  |
      /p ——————————————————————————
      /p ◆第一次地火后分散|　◆第二次地火后分散　|　◆一运优先级
      /p 　D1　D2　 　 　  |　　　D1　　D2　　　|　西←D1D2D3D4→东
      /p 　MT　ST　  　 　  |　　　MT　　ST　　 　|　◆三运分组
      /p 　H1　H2　D4 　 |　D3  H1　　H2　D4  |　北：MT、H1、D1、D3
      /p 　 　　 D3　 　  　 |　 　 　 　　 　 　  　 　|　南：ST、H2、D2、D4
      /p ↑左半场安全则D3D4镜像翻转 　 　 　 　 　|　(同BUFF时D2D3互换)`,
        "本体",
      ],
      [
        "绿宝石神兵狂想作战",
        `/p      【生成炸弹】　　　　【第二次】
      /p  　　 MT/D3　　　　　　确认北边球的颜色
      /p H1/D1　　 H2/D4　　　橙色→顺时针
      /p 　  　 ST/D2　　　　　　 蓝色→逆时针
      /p ――――――――――――――――――――
      /p      【分而治之】　　　　【坦核爆处理】
      /p 　　　MT/ST　　　　　　　MT　　　　ST
      /p H1　　　■　　　H2　　　　　　〇
      /p 　D1  D3   D4  D2　　 　        　〇　〇　　
      /p 　　　　　　　　　　　　　　（其他人）`,
      ],
      [
        "水晶塔 暗之世界",
        `BOSS 1 安哥拉・曼纽
      MT把BOSS放在场地中央。核心技能俗称鸳鸯锅，BOSS会以自身为轴下鸳鸯锅，前半场为一个颜色，后半场为一个颜色。这一轮吃红汤的，下一轮就要去吃清汤，如此反复（去BOSS正面的注意不要被BOSS对MT的直线AOE扫到。）
      BOSS 读条死亡视线需要背对，如果不慎中了 buff 可以去场地四周找发白光的地板解除 死亡宣告buff。
      场地四周出现沙漏时注意及时击杀，最后中央的手指光标停在哪，人群就要远离那块地板（地板边缘有高亮），不及时打掉手指就会随机炸一块。
      其他的出啥躲啥即可。`,
      ],
      [
        "水晶塔 暗之世界",
        `BOSS 2 五头巨龙
      大原则出啥躲啥，冰圈和沙圈会扩大，日珥及时转火打掉，红色的连线会对被连线者造成持续伤害，但是连线可传递（击鼓传花玩过没，治疗也记得关爱一下被连线的小可怜）。
      被紫色点名的人需要分摊伤害，钻人堆里即可。
      天上掉下来一滩绿色的需要有人踩，刷出来的绿 shi 要及时转火打掉，否则会造成巨量伤害全屏 AOE，非常容易团灭。
      被黄色点名的人会被吹上天，迅速远离人群即可。
      热浪不必停手，治疗群抬就行了（如果你们治疗是个新手就记得停手，否则会一直掉血）。
      最后龙头五重奏，打掉一个头就会重新读条，远程可以 AOE，近战请单点。`,
      ],
      [
        "水晶塔 暗之世界",
        `BOSS 3 刻耳柏洛斯
      俗称 A 喂狗 (B 队 BOSS，C 小怪) 如果 B 队 T 不想做 MT，请整队交换职能。
      BOSS 有读条冲锋技能注意躲开正面，过一阵子它就会吐口水（一滩紫色的）和胃液（一个黑球隐约发光），A 队所有人先踩胃液，发现自己有 缩小buff 后再去踩口水，就会被 BOSS 吃到肚子里（没有缩小直接踩口水的话，会被 BOSS 直接咬死）。在肚子里的 A 队需要打胃壁，小怪无视即可（T 拉住小怪保护队友）。
      在外面的口水会不断刷出小怪，C 队需要集火击杀小怪（B 队继续打 BOSS）。当 A 队击溃狗肚子并被排泄出来之后，B 队需要派两名玩家前往场地尽头取狗链，然后把狗链拴在 BOSS 两侧的系绳点上即可。`,
      ],
      [
        "水晶塔 暗之世界",
        `BOSS 4 暗黑之云
      进门场地 8、12、4 点方向标 ABC，点不要标在白色地板上 (如果有老司机标一次基本就知道位置了)。BOSS 消失再出现时会使用横穿中场的波动炮，注意躲开。
      被点名潜地式波动炮的玩家自己远离大团绕场一周奔跑即可（千万不要带着点名来人群）。
      场地出现暗云（还有小暗云）时及时转火打掉，站在暗云行进路线前面可以把它踩减速。同时场地上出现的图腾一定要有人站。
      封锁阶段（ABC 三个点附近出现六边形结界）所有人立刻找到自己的队伍站进去输出小怪即可。`,
      ],
      ["巴哈姆特大迷宫 真源之章4", `https://moeshen.cn/ffxiv/t13/`],
      [
        "巴哈姆特大迷宫 邂逅之章3",
        `该副本没有 BOSS，也没有通关成就。
      进本后地面上会有弹射圆盘，6 个方向中会有 2 个方向发光，玩家踩上任意一个光点，圆盘就会出现指向该方向的红色箭头，此时踩圆盘中央即可被弹射到指示方向。
      副本空中有巨大的金属环状拘束器，只要踩亮指向最近的环状拘束器的方向箭头，即为正确方向。`,
      ],
      ["巴哈姆特大迷宫 邂逅之章5", `https://moeshen.cn/ffxiv/t5/`],
      // [
      //   "究极神兵假想作战",
      //   `出啥躲啥有啥打啥。BOSS 会给当前 MT 上 吸附式炸弹的 debuff，5 层就会炸 (10000 左右的伤害)，通常会在 3 层左右换 T，换 T 之前请务必注意观察自己身上的 debuff 是否已经消除。
      // 场地上会刷 3 次连线的黑绿色的球，球会彼此接近，需要玩家撞球。连线的球只要撞掉一边，另一边就会消失。不撞基本就团灭。
      // 前两次都很好撞，第 3 次需要T 开启 LB 去撞 (因为球很近外加场面相当混乱，不开的话治疗可以准备开 LB……)，治疗可以考虑在看到球的时候套盾并集中刷团血。
      // 一个人不要撞太多球流，很疼。`,
      // ],
      ["巴哈姆特大迷宫 入侵之章4", `https://moeshen.cn/ffxiv/t9/`],
      [
        "罗波那歼灭战",
        `MT开怪拉到场地中央，BOSS读条各种躲好就行。
      BOSS 会读条前后防御 / 左右防御，读条结束后会出现护盾一样的特效（持续 5s）和 招架buff，如果防御前后则打左右，防御左右打前后，否则会被击飞，MT 注意，如果是前后防御请停手 （千万不要转，转了会弹飞你全队队友） 。
      当 BOSS 对MT 使用使用耙子一样并且小距离击退的技能之后，MT 需要绕到 BOSS 身旁躲避接下来的两次耙子，治疗如果发现 MT 没躲，记得多奶两口。
      （解限应该会跳过蝴蝶阶段）当天上开始掉蝴蝶的时候，所有人转火蝴蝶（尽可能打掉一个再打下一个，蝴蝶受到攻击就会读条，读条结束后若还没打掉，就会掉下来一把剑），MT 打自己身边的就行了，不要转 BOSS（因为 BOSS 仍然有各种花样 AOE），实在打不到发呆也可以（或者可以把 BOSS 拉到场边，但要当心别被击退下台）。蝴蝶阶段有一个无读条钉耙状的技能打MT，击退一小段距离后，会锁定方向再打一次，MT 发现自己被小击退后，立刻上前绕到 BOSS 侧面躲避第二次攻击。
      蝴蝶打完之后转阶段神通力强多撸哈（如果场上蝴蝶剑超过 4 把，你们就离团灭不远了），此时周围的挡板会碎掉，注意一会不要被吹下去。
      下来之后就是一个吹飞，当心身后一定要有挡板。然后是点名ST 的半场连续直线 AOE，ST 跑到 MT 位置引导，MT 注意让开正面 (不需要换嘲)，ST 适当开减伤即可。如果 ST 在人群里，其他人注意避让，治疗注意抬血。
      如果发现 BOSS 读条时头上出现蓝色的剑形点名，在读条结束前远离中场并不要与他人重合即可（BOSS 会从自己所在的位置依次冲向 1、2、3、4，被冲多次就有可能挂）。`,
      ],
      [
        "亚历山大机神城 启动之章1",
        `门神
      开场后MT 把 BOSS 拉背对人群，有无提示的正面扇形 AOE。随着战斗进行，会不断刷新出小怪，ST 注意接怪，或直接保护 1 仇的治疗（MT 承伤较重，治疗需要注意抬血）。DPS 无视小怪，直接快速击杀 BOSS 即可。`,
      ],
      [
        "亚历山大机神城 启动之章1",
        `本体
      MT把BOSS拉北场背对人群，BOSS有正面扇形AOE。
      基本上出啥躲啥即可，如果 DPS 过慢可能会刷出小怪，DPS 直接拉走在红线正下方快速击杀，注意小怪击杀后会留下一个缩小圈（用来缩小红线下坠的导弹），玩家不要踩进去。
      一定时间后 BOSS 会召唤分身，分身复制本体血量从场地北侧入场，DPS 需要尽可能同时击杀。2 个 BOSS 一边死亡后，另一边会开始读条自爆，若在读条结束前未能完成击杀，则会团灭失败。`,
      ],
      [
        "亚历山大机神城 启动之章2",
        `没有 BOSS，只有大量小怪的战斗。入场后先是一波波小怪，按地图指引逐批击杀即可。最终场地是一个长方形场地，西北角有 2 辆小坦克车，需要有 1 名DPS 驾驶，通常推荐 AOE 能力较弱的职业开车。
      2 名T 都需要开盾姿拉怪（因为小怪乱七八糟的），需要注意的小怪有：
      狩猎人偶 ： 会给它周围的小怪上防御增加 buff，同时有非常疼的正面扇形顺劈，一旦发现最优先击杀。
      9 号哥布林黑寡妇：会给 T 上 受伤加重debuff，同时出现黑寡妇和其他小怪时，建议一个 T 拉黑寡妇，另一个 T 拉剩下的小怪；出现 2 只黑寡妇的时候，一人一只。
      爆破型 7 号哥布林战车：会上 受伤加重debuff，但是伤害低血量低，所以开一些小减伤基本都能处理掉。
      另外战斗中第三波开始会出现炸弹，由小车车驾驶员处理，T 通常把小怪聚在场地左下角。
      治疗和T的注意要点接近，即狩猎人偶、黑寡妇及哥布林战车会对T玩家造成较大伤害，另外出现炸弹之后，如果驾驶员没有及时处理，会对团队造成较大伤害和 火属性耐性降低，注意及时回复。`,
      ],
      [
        "亚历山大机神城 启动之章2",
        `坦克车驾驶员参考要点
前两波小怪可以不上车，最晚要在第三波（也就是第一次出现爆破型 7 号哥布林战车）的时候上车，因为从这里开始会出现必须由驾驶员处理的机制。
小车一共有 5 个技能，说明如下：
重压弹：对范围内敌人减速，对大型敌人无效。没什么用的技能。
电压弹：对正面敌人眩晕，对机械兵器无效。当黑寡妇和戈耳狄士兵同时出现时，需要眩晕戈耳狄士兵并快速击杀（第 8 波出现）。
强酸弹：给目标上易伤，最高 5 层。通常用来瞄准寡妇和人偶。
电磁石：吸引炸弹。核心技能
充电：对血量低于 20% 的哥布林战车使用，可以恢复电量。
由于普通本击杀速度较快，小车基本不需要充电（也充不上），没电了弃车即可。
驾驶员主要工作是把炸弹拉到不会影响团队的角落。当有炸弹落下时（通常会出现在敌对列表中，推荐使用敌对列表选择），驾驶员使用电磁石技能将炸弹吸引到自己身边，目标是拉到场地东北角（右上角），注意电磁石的技能范围是 15m，如果炸弹太远可能需要分 2 次拉。另外炸弹从落下到爆炸的时间，基本上也只够小车使用 2 次电磁石的，所以驾驶员要注意自己的位置，并且时刻关注敌对列表中的敌人刷新情况。
另外驾驶员还需要注意，戈耳狄士兵和黑寡妇同时出现时，可使用电压弹眩晕戈尔狄士兵。出现黑寡妇或人偶时，可以给它们上易伤（最高 5 层，不要多上，同时注意电量剩余）。这些工作均是在没有炸弹需要处理时方可进行。
小车全部都是一次性的，一旦下车，小车就会在一定时间后自爆，驾驶员注意若没有特殊需求不要随意跳车。`,
      ],
      [
        "亚历山大机神城 启动之章3",
        `进场小怪可以拉一波处理，到巨钳虾为止（场地上有粘液）。
所有人头上出现蓝色点名的人互相远离。
BOSS 变为手形之后，ST 也到正面来，手的扇巴掌是可以被分摊的，单吃会非常疼，治疗注意若 ST 没有去参与分摊平 A，则需要注意为 MT 抬血。手的血量下降到一定程度之后，会出现分身，必须由ST 拉住仇恨，由于本体和分身都有正面顺劈，建议 MT 和 ST 呈 90 度站位（即一人在 12 点方向，一人在 3、9 点方向，剩下的人在两个手背后）。手会给它扇到的人上 打击耐性降低，因此会越来越疼，T 注意开好减伤，治疗注意抬血。
另外手会读条冲净，建议在场地中央集合，或开启防击退技能处理。（由于击退方向是随机的，所以只有场地中央是比较安全的）。
由于现在 DPS 较高，基本见不到小怪阶段了，但若手回到中场变为大漩涡，则为小怪阶段。小怪阶段有 2 个主要机制，机制 1 是连线漩涡，需要T 开减伤去接被连线的队友，否则若队友装备不足很容易阵亡。另一个机制是磁石，会有多名玩家被点名 磁力（+）或 磁力（-）（头顶同时会出现正负极的大标记），到时间后，被连线的 2 人会本着同性相吸，异性相斥的原则互相靠近或远离，因此需要观察与自己连线队友的磁极，相同靠近（以能看到线的方向为宜），不同远离（超过半场距离即可）。处理失败则会获得 基础降低debuff。
最后 BOSS 会回归人形态，同时在场地上召唤 3 个水毒圈，有手形态的 打击耐性降低debuff，也有小怪阶段的磁石机制。在处理各个机制时注意尽量不要踩圈，MT 带位时注意不要波及人群。`,
      ],
      [
        "亚历山大机神城 启动之章4",
        `进场后选 1 只脚开始殴打，另一只脚会自动回血，所以 AOE 不要考虑了，推荐 MT 标号。
虽然两只脚没有身位，但 BOSS 有对 MT 的小范围 AOE，近战注意不要靠近 MT。
BOSS 读条圆盘后，会点名一名玩家头顶黑色球，同时场边会出现金色的小球，向被点名玩家飘过去。推荐ST 和治疗去撞金色的小球，金色小球会从随机 2 个方向刷新 3 次，注意每撞完一个球都要奶一下（尤其是治疗），血量太低也有可能出危险。
打掉第一只脚后，本体会露出，打十几秒后本体会读条 AOE 然后不可选中，此时开始打第二只脚。
第二只脚有 2 个新机制，其 1 是随机一名玩家被 3 条金色的线连线，需要有至少2 名玩家帮他接线，并注意稍微远离接线的人，判定时会对被连线的人产生小范围 AOE 伤害。一开始被连线的玩家注意找好位置站定，方便其他队友接线。
另外一个机制是小怪，会在场地 2、6、10 点各刷新一直小怪，对初次对其造成伤害的人产生仇恨，小怪每隔一段时间会使用范围 AOE 光性爆雷，对范围内玩家追加 光性爆雷debuff，当 光性爆雷到达 4 层时就会自爆团灭。DPS 务必注意快速转火击杀。
两条腿都破坏后就可以正式进攻本体，注意本体是有身位的，MT 在正面处理仇恨，近战在背面（12 点）输出，并注意互相保持距离。
BOSS 读条零式灭绝是随机点名小范围 AOE，注意互相保持距离。另外 BOSS 还会点名 2 名治疗 最终判决α和 最终判决β，这两个 debuff 会带有持续掉血效果，如果和其他玩家靠近则会以 5 层的状态传染。只要治疗保持远离他人，等待 debuff 时间结束自动消退即可，若发生传染，则务必注意不要让 α 和 β 传染到同一个人身上，同时拥有 α 和 β 就会原地阵亡。
本体还有前述的撞球和接线机制，适当小心即可通关。`,
      ],
      ["亚历山大零式机神城 启动之章4", `https://moeshen.cn/ffxiv/a4s/`],
      [
        "魔航船虚无方舟",
        `BOSS 1 刻托
出啥躲啥有啥打啥，包括那些看起来很危险的没危险的 (。BOSS 会点名一个人追着放水球 (被点名人头上一团绿)，被点名玩家注意自己靠边引导，其他人注意避让。
BOSS 会随机点名一名玩家砸过去 (地面一个 AOE 预警圈)，看到那个预警圈，要尽量靠近 AOE 圈，因为 BOSS 砸完立刻衔接的技能，可能仅有脚下是安全的，腿短的职业要尤其注意。`,
      ],
      [
        "魔航船虚无方舟",
        `BOSS 1 ~ BOSS 2
一个圈型场地，一般是左 A 中 B (就是最里面的那波) 右 C。己方 2 只小怪打完之后会在相邻的大平台上刷出一只魔界花，三队魔界花都击杀就结束。击杀过程中，小怪的位置可能会刷出瘤子，要么集火打掉，要么当屏幕提示 “妖毒浓度变高了” 的时候，每队各出一个人去踩地上发光的机关，3 个机关同时打开就可以清洁空气。`,
      ],
      [
        "魔航船虚无方舟",
        `BOSS 2 天柱树，锯齿花
需要分 T，一人拉树，一人拉花，花拉到场边面向场外即可。开场随便打，但是开场后没多久，树和花会分别上一个 远程物理攻击无效化和 魔法攻击无效化的 buff，远程职业注意选择进攻目标，近战打树没身位但是会吃到树的 AOE 伤害，打花有点远，都随意。屎黄色点名一个大圈，如果圈里有超过一人（或圆圈重叠）被砸中的人会被粘液连线，需要自由的玩家撞断连线，否则被连线玩家将无法移动或使用技能。刷出的小苍蝇要及时打掉（否则会被 BOSS 吸收造成全屏 AOE），打苍蝇的时候地面可能会出现流沙地震似的变化，注意躲开。
当树无敌，花读条踩塔怒震的时候，所有人站在树后躲避。`,
      ],
      [
        "魔航船虚无方舟",
        `BOSS 3 丘库雷因
这个 BOSS 会给所有玩家全程掉血 debuff，治疗时不时就要抬团血。BOSS 随机点名一人，转身释放扇形呕吐 AOE 腐蚀咬 ，被喷三下就升天，当 BOSS 转身的时候就要注意躲避，治疗注意照顾你们队里的小笨蛋。BOSS 回到场地中央抬起四爪读条触手轰击时，注意找两条触手之间的空隙躲避，否则就会被轰杀至渣。
塔需要集火点掉，但是现在的 DPS 可以通过强撸 BOSS 方式强制跳过塔阶段。
四个台子上刷出小黑洞一样的东西，BOSS 变为无敌，黑洞里会刷出粘液胶，谁拉着都无所谓，但是当 BOSS 使用扇形 AOE 吸收的时候，拉着小怪的人一定要将小怪拉出吸收范围 (否则接下来的 AOE 会变疼)。
接下来的阶段出啥躲啥（小怪阶段之后非躲技能不要站在台子上，BOSS 会随机点名玩家吐粘痰，吐在台子上你们就少了一个安全点）。场地四周出现的球要去撞，如果没有奶妈支援撞一个就行了 (两个就血皮，3 个就死了)。`,
      ],
      [
        "魔航船虚无方舟",
        `OSS 4 艾奇德娜
基本有啥躲啥，记得分摊。当 BOSS 分列成 3 个小怪时，需要3 队 T 第一时间立刻接小怪拉走（A 左 9 点，B 中 12 点，C 右 3 点），建议优先击杀中间的（因为它会读石化）。
随时注意 BOSS 读条石化（背对可破）。`,
      ],
      [
        "地脉灵灯天狼星灯塔",
        `BOSS 1 流光晶片
初见玩家注意一下场地里不可选中的鸟、蜘蛛，场景比较暗，不容易发现。当玩家被连线时，优先找场地里的鸟，把线给鸟，如果实在没有鸟或来不及，那么把线给蜘蛛。连线过一会会召出被连线的怪，鸟直接打掉即可，蜘蛛会在地上放一滩毒 (也要打掉)，如果有人没有传线而召出了人形怪，治疗优先看好 T 血，其他人集火人形怪。人形怪打人极疼，而且会给 boss 增益…`,
      ],
      [
        "地脉灵灯天狼星灯塔",
        `BOSS 2 第 8 团高级教士 孛 (bèi) 罟 (gǔ)
会经常给地板捅个洞，由远程 DPS 打一下出现的凝胶怪，并带到以太喷发的洞口上打掉，凝胶怪死后会堵住洞口。如果队伍中没有远程 DPS，而治疗觉得自己有能力处理，也可以由治疗负责处理，否则请出一名近战 DPS 来处理… 然后天上会掉下来俩锅炉工俩引擎，优先打掉跟 BOSS 连线的引擎，然后再回头处理锅炉工即可。`,
      ],
      [
        "地脉灵灯天狼星灯塔",
        `BOSS 3 爆弹之母和爆弹之父
爆弹之母和爆弹之父，前半段出啥打啥，后半段会出现名为治疗爆弹怪的蓝色爆弹怪，它会向另外的红色小爆弹怪慢慢前进，需要治疗或者其他人，站在红色爆弹怪这边用远程技能打一下治疗爆弹怪，把它推开 (不要让它碰到红色爆弹怪)，否则就会引发全屏 AOE 大掉血。`,
      ],
      [
        "萨菲洛特歼灭战",
        `T开场把BOSS定在场中央，背对人群。大部分都是以前见过的机制，集合分摊还有躲圈圈。当MT看到BOSS有明显的握拳蓄力动作时，注意开启减伤。当BOSS突然转身并且不知道正在干嘛时，立刻躲到BOSS身后，接下来会是一个半场范围的AOE(无读条无范围提示，所有人都要注意)。
当 BOSS 血量下降到一定程度之后，BOSS 会走向 12 点并不可选中，场地上刷出小石头人，T 拉住其他人击杀小怪即可。小怪打人比较疼，T 尽快拉全。
打完小怪之后巨大化转阶段 (治疗群抬一口即可)，进入巨大魔神阶段。首先地上会出现蓝圈（BOSS 的拳头会砸在蓝圈上并击退玩家），靠近蓝圈不要被击退到场下即可，BOSS 会正面、左侧、右侧连砸三拳（人称农夫三拳），接下来会随机点名1 治疗和1DPS，BOSS 会向这两名玩家使用直线 AOE，需要治疗向左 DPS 向右跑到场边引导 AOE 方向（不重叠、不砸到人群即可）。
当 BOSS 蹲下（头部与平台平齐）时，所有人向前走到 BOSS 圈里，BOSS 会使用吹飞击退玩家，并召唤 3 个小怪。T 拉住前半场刷新的小怪带到 6 点，DPS 首先集火 6 点的小怪，若未能在该小怪读条结束前击杀它，直接团灭。
当 BOSS 微微侧身举起单手（并且被轻轻击飞了一小段距离），6 点旋风出现集合图标时，所有人立刻转身站到旋风里，旋风会把所有玩家吹到天上，回避 BOSS 的胡撸。
BOSS 胸口发光需要所有人分散（随机点名小范围 AOE），踩塔只需要两名 T 分别踩左右塔即可（T 没踩其他人也可以帮忙）。接下来回到农夫三拳阶段重复。如果 DPS 比较快的话，应该在第一次上天下来就可以打掉，稍慢点的，在第二次农夫三拳也可以打掉。`,
      ],
      [
        "亚历山大机神城 律动之章1",
        `开场MT 把 BOSS 定到场地西北（左上）角，所有人不要踩场地中央的雷塔圈。
开场 BOSS 上 3 层 冲击后会变为 脑震荡debuff，需要大减伤或读条时换 T 处理（目前 DPS 较快，貌似已经可以跳过这个机制了）。
被红色点名的玩家注意务必把点名放到场地角落远离人群的地方，也不要盖到场地中央及 3、9 点的机器（会影响到机制处理）。
当 BOSS 读条投放炸弹时，需要一名治疗踩中间电圈激活两侧机关，然后踩红色毒变成大猩猩，大猩猩可以对炸弹使用技能将其击飞。人群在西北角，将炸弹打到东南（右下）角即可安全回避，若人群位置不好，找一个离大部分人最远的地方击飞，并注意准备抬血。
当 BOSS 再次变大，并开始读条蓄力，立刻去踩中间电圈激活机关，并踩紫色的毒变成鸟，变鸟途中可以使用技能继续打 BOSS，BOSS 会用力锤几次地板，当 BOSS 停止砸地开始继续普攻，就可以点掉 哥布林药剂：速度buff（或等它自行消退）恢复正常。
之后会出现 2 个炸弹，推荐 2 人变猩猩处理。`,
      ],
      [
        "亚历山大机神城 律动之章2",
        `是 4 个 BOSS 组成的车轮战，每个 BOSS 提供 1 个机制。
爆破者
地上的炸弹无论如何不要碰，会有 4 名玩家被点名，每名玩家位置会落下一个幻影，并向该玩家方向冲锋。被点名的人可以先向场边移动放幻影，幻影落下后再向场外移动一步，让幻影冲向场外。若幻影冲锋方向为场内，所有人注意回避幻影冲锋路线。
争斗者
BOSS 会对当前 MT 附加 魔法受伤加重，如果 3 层还没打掉 BOSS 注意换 T。
这个 BOSS 不会读条，所有的机制需要观察 BOSS 的手臂，当它两手侧平举的时候，手会随机变成炮或钻的形状，根据形状和数量处理：
单手炮：对 MT 直线大伤害，开大减伤处理。在侧面的玩家注意不要踩进目标圈，否则有可能被波及。
双手炮：对 MT 方向可分摊的直线大伤害，MT 带 BOSS 转头分摊。
单手钻：随机点名距离衰减伤害，所有人远离 BOSS，MT 不想走的话可以开启大减伤看脸。
双手钻：普通难度无该组合。
欺诈者
BOSS 会对所有玩家附加 算术：高度1或 算术：高度2，同时地板出现高低差。按红高紫低站位即可安全，在高地板上会同时附加 磁悬浮buff，可据此判断自己站位是否正确。每次地板高低差的时候地板都会重新升降，注意观察。
生命计算法是全体大 AOE，治疗注意抬血。
会有 1 名玩家被点名黄圈，同时头顶飘着几个球，正确处理方法是根据球的数量在圈里站相应的人数（包括被点名的人）；如果队伍中队友不会处理，可被点名玩家远离人群单吃。
环旋者
BOSS 会对当前 MT 附加 物理受伤加重，如果 3 层还没打掉 BOSS 注意换 T。
超级气旋是一个集体吹飞的技能，可以在 BOSS 正面躲避。
被点名 水属性压缩压缩的玩家，在倒计时结束时会产生一个较大范围的 AOE 伤害，并在原地留下一个水龙卷。被点名玩家在倒计时快结束时，找一个没人的空场放置点名，出现水龙卷后远离。之后 BOSS 会立刻点名 4 名玩家冰圈，需要有 1 名冰圈玩家带冰冻水，把水龙卷冻成冰坨（其他人适当散开即可）。
最后当 BOSS 读条究极闪光时，所有玩家需要躲在之前的冰块背后，若没有冰块或没能躲在冰块后就会直接阵亡。`,
      ],
      [
        "亚历山大机神城 律动之章3",
        `降落之后场地中央的圆形区域是主要战斗区，四个角用于机制处理，剩下的地方会根据战斗阶段竖起倒刺，踩上去会有 刺伤，不能长时间逗留。
开场后 BOSS 随机点名非 MT 玩家发射直线 AOE，被紫色点名玩家需要注意避让人群。
之后 BOSS 会随机点名一人（头顶红球），并把他抓到场地角落的笼子里。被点名玩家注意远离其他人，BOSS 抓人时会使用范围眩晕技能，若距离过近可能会被连带抓紧去。
第一次抓一名DPS，被抓的人在笼里不要移动，否则会持续掉血，其他远程攻击牢门的锁解救队友。T 和近战处理场内小怪。
第二次抓一名DPS，打掉里面的小怪即可。
中途小怪阶段 BOSS 会对MT 使用齐射技能，会对 MT 多次叠加 物理受伤加重debuff，注意最多 5 层换 T（骑士和枪刃可以分别通过 神圣领域和 超火流星阻止叠 buff）。
另外小怪阶段的风暴人偶会读条球状闪电，注意打断（否则全体伤害 + 麻痹，会影响笼子里的队友处理机制）。
之后场地内倒刺消失，可全场移动。同时场内出现一只小黑猫，喵喵几次之后会放出真心，真心会飘向 BOSS 所在的方向，MT 带 BOSS 远离真心，其他所有人立刻转火真心。与此同时场上还会出现之前出现过的紫色点名直线 AOE、齐射换 T 等技能，治疗注意关照团血。
第三次抓一名T，打掉小怪即可，注意小怪平 A 带小距离击退，不要被击退到笼子边缘，否则会被冻住。
第四次抓一名治疗，笼子里会有一个洞冒毒气，需要被点名玩家站在洞上阻止毒气喷发（并注意奶好自己）。
最后如果 DPS 特别慢的话，场地上会出现炸弹连线，玩家可以拖着炸弹走，原则上四个角一块 1 人，最后一人带炸弹在中场远离人群。只要不站在刺上或吃到 2 个炸弹就没事。`,
      ],
      [
        "亚历山大机神城 律动之章4",
        `开场后先随机瞄准一名玩家读条巨型光束炮，所有人注意躲开正面方向。接下来读条永恒射线，会对当前 MT 附加 魔法受伤加重后进行魔法攻击，可以开大减伤或换 T 处理。
接下来场地四角会出现 4 个小怪，DPS 优先处理小怪。若 DPS 较慢还会出现连线球，只要不是连线自己的球随便撞，撞到与自己连线的球就即死。
争斗者＆环旋者
3、9 点落下，2 个 T 一人拉一个，现在 DPS 比较高，也可以拉在一起处理。
建议先打 3 点的争斗者，它会和 A6 一样使用拳组合，需要T 注意应对。
爆破者＆欺诈者
前俩天王打完之后会在 12 点和 6 点落下另外 2 王，同样一人拉一个。
由于欺诈者的机制比较麻烦，也是推荐优先处理 12 点的欺诈者。
残暴正义号
4 天王处理结束之后会合体击飞，比较疼可以适当布置减伤。
合体后第一个技能双重火箭飞拳，需要ST 靠近 MT 参与分摊，如果 ST 不来的话，MT 注意开好大减伤。另外如果有其他人离 MT 较近的话，也会被自动算入分摊（按距离计算和 MT 最近的 1 人），请注意。
接下来是一串机制组合，地面黄圈 + MT 喷火 + 分摊 + 弹幕 + 超级跳（苏帕酱）+MT 喷火。喷火和弹幕都是正面扇形 AOE，所有人注意时刻远离 MT，躲开地面黄圈提示后立刻找没有 MT 的地方集合分摊，然后弹幕是随机点名 AOE，因此看到读条末世宣言时要注意回避 BOSS 方向。接下来超级跳是随机点名一名玩家跳跃过去，同时击飞并眩晕范围内的其他人，所以看到 BOSS 读条超级跳跃时要注意互相保持距离。
BOSS 血量 50% 时会上天，治疗看到 BOSS 上天后布置好全团减伤并远离中场，接下来是运动会阶段。之前的 4 天王会再次出现，施放各自的标志技能。基本上出啥躲啥，唯一要注意的是 9 点出现的争斗者会使用双炮（即多人分摊），如果队友跑的太散实在串不出一条直线，MT 可以考虑开无敌硬抗。
之后天王们再次合体，重复机制组合直到击杀。`,
      ],
      [
        "禁忌城邦玛哈",
        `BOSS 1 阿剌克涅
BOSS 会扫尾，站在后面的玩家（尤其远程）要注意。BOSS 会随机点名三名玩家吐蜘蛛网（头顶红色点名标记），建议往场边放置，踩上去会有减速效果，对近战输出不利，但可以应对特殊机制。
屎黄色点名和方舟的那个一样，圈里有多人或重叠的话，在圈里的所有玩家都会被粘液连线定身，需要自由玩家撞线解除。注意撞线会有可能跟 BOSS 场地机制重合，优先救人。
打一会 BOSS 会带着全体玩家上天，天上会出现酸液蜘蛛，打掉这个蜘蛛之后，脚下的蛛网会出现空洞，从空洞跳下去就可以回到下场。留在上半场的玩家需要击杀其他小怪，并挡住从场边飞往场中央的球（否则会造成巨大的 AOE 伤害），下场的玩家需要打掉蛛丝结扣。原则上要求上半场留 2 队，下去 1 队（至少包括 1T1 奶，拉住下场的小怪），由于现在输出较高，不用特别强制规划（除非队伍输出较差或严重失误）。
打掉所有结扣之后，所有玩家返回地面击杀 BOSS。如果队伍输出较慢的话，可能会出现新的流沙机制，BOSS 下潜之后出现流沙，需要站在远离中场的蛛网上防止被吸入。`,
      ],
      [
        "禁忌城邦玛哈",
        `BOSS 2 弗加尔
场地上的绿球周围会现绿圈，踩 1 个绿圈会获得 渐渐僵尸化，踩 2 个以上绿圈（重叠的）就会变 僵尸。
地面上出现红色圆圈接天黑色光柱，需要玩家踩上去，如果同时出现其它 AOE 技能，请优先躲避其它 AOE 再迅速归位，由于踩光柱会获得流血 debuff，因此不要多踩（一人一个，没的踩的安心挂 BOSS）。太多人不踩的话，接下来的 AOE 会伤害会直接团灭。
被点名红色倒三角的玩家集合，原则上 BOSS 身下集合，如果太远赶不过去，（同是倒三角点名的）两三人抱团也是可以的，否则会变呱，而且受到巨量伤害。被红色箭头（比较长条的，不是倒三角）点名的玩家远离人群，会被连续点名 AOE。
小怪阶段从左到右分别是被召唤出的扎哈克 （9 点，A 队）， 被召唤出的梦魔 （12 点，B 队）， 被召唤出的哈加提 （3 点，C 队）。扎哈克会超大范围喷吐扫尾，注意横拉，头尾都不要面向中场；梦魇会读条欺瞒雾，注意打断（眩晕打断）；哈加提读条致命射线，注意背对，没有背对的会获得 死亡宣告，治疗可驱散。原则上推荐先处理梦魇和哈加提，最后处理扎哈克。
打完小怪转场之后，再出现绿球必须靠近（但注意区分，不要踩在两个绿球的交界处），BOSS 会读条超即死，需要玩家身上带有 渐渐僵尸化debuff 才能平安（否则直接扑街），只要记住每次出现绿球都靠近吃绿圈即可。`,
      ],
      [
        "禁忌城邦玛哈",
        `BOSS 2 ~ BOSS 3
道中会遇到石面，这是一个糖葫芦形的场地，左 A 右 C，开怪后不久，左右两边圆形场地里就会出现小怪，需要 AC 队前往各自的圆台处理（远程注意站进圆台里面，会锁门的），打完各自小怪之后回到中场，BOSS 会读条碑文魔法，所有人站在石面面前的圆圈里，可以竖起防护罩，近战可以继续输出（原则上可以在读条结束之前打完），读条结束之前进入防护罩躲避 AOE 即可。`,
      ],
      [
        "禁忌城邦玛哈",
        `BOSS 3 奥兹玛
ABC 为实际标点位置，红黄蓝三色为分别对应队伍的站位，蓝色圆点是 ABC 各队 T 的位置，红点是放陨石的位置。其他人原则上站在 T 右侧（图中未标出），不与 T 重叠即可。
场地会掉下去，要注意（有突进和后跳的职业尤其注意）。进场长方形平台是 B 队，左侧长方形平台是 A 队，右侧是 C 队。按各队顺时针方向标 ABC（参见示意图）。
战斗中会随机点名玩家放巨大黑圈陨石点名（第一次是每队 1 人，之后每队点名 2 人），被点名黑圈的玩家需要放在自家平台右后角（示意图中红点）或对应队伍标点位置放陨石，万不可重叠（重叠基本上即死）。黑圈消失后立刻回人群，陨石掉下来会出现小怪，需要立刻击杀，否则会造成全场 AOE。
在战斗中，奥兹玛会变形为三角锥或立方体：
三角锥：所有人离开本队平台到走廊上，奥兹玛会对平台发动直线 AOE，AOE 结束后可以回来。同时奥兹玛点名玩家一个小范围 AOE，会对范围里的玩家造成 出血，可驱散，治疗注意抬血。另外还会点名玩家 加速度炸弹，加速度炸弹倒计时到 0 的时候，如果玩家仍在行动（自动攻击也算）则会造成巨大伤害，被点名的玩家（尤其是近战和远敏）注意停手（背对疯狂 ESC 到弹出系统菜单即可）。
立方体：所有人在本队平台靠近奥兹玛，奥兹玛会发动覆盖整个走廊范围的圆形 AOE。同时奥兹玛会对 3 个队的 T 释放直线 AOE，T 注意开启减伤，治疗注意抬血。另外走廊上还会出现蓝色的球顺时针移动，需要玩家去撞球（推荐奶去，1 人的血量只够撞 1 个球的，奶可以一边撞球一边给自己加血）。最后 BOSS 还会有小击退，撞完球的玩家注意及时回到平台上。
中间 BOSS 会读条黑洞，把玩家吸入压缩世界。首先是 3 个队的长条形平台，需要每队至少有 4 人踩台子，解除邻队大怪的无敌状态，击杀完毕后跳下台子打奥兹玛之影。如果 DPS 较慢的话，会遇到 BOSS 读条融合，需要背对回避，否则会获得 渐渐浸蚀，并不断加深，4 层之后会变为 浸蚀，并出现压缩块小怪，需要打掉解救。打掉之后跳入场中央就回到原本的场地里，继续循环奥兹玛圆球方块三角，就过了。`,
      ],
      [
        "禁忌城邦玛哈",
        `BOSS 4 卡洛菲斯提莉
BOSS 喊话我的魔发，是斩肉的刃、吸血的根！ ，会让自己一侧的头发变成刀刃（发黑）（提示卡洛菲斯提莉的魔发完成了变异…… ），此时向另一侧走位躲避即可（技能非常快，看到场地预警再躲基本来不及），另外有一些 MT 会选择旋转 BOSS 来让队友半场全部安全（如果你是 MT，而你不会拉，就不要动，让大家自己躲）。治疗注意抬血。
BOSS 读条接发后，场地上会出现紫色的圈，千万不要站进去，踩到的话会出现一个三倍于紫圈范围的巨大陷阱，把玩家吃掉，如果不及时打掉陷阱，就会被绞杀。
小怪阶段会同时有潜地式波动炮点名，被点名的玩家注意贴边绕场狂奔，不要带到人。
最后一个阶段，BOSS 读条接发后，会出现规整的黄色 AOE 范围预警，注意圈里弹出来的东西的模型，站在双刃斧形怪发的正下方（远离圆球种子形的怪发），否则会被击飞 + 易伤，非常疼。BOSS 读条透耳尖啸后，场地中央会出现 3 个圈，玩家需要背对 BOSS（推荐面向门口）被击退，面向 BOSS 的话就会被吸入（然后 + 易伤）。
最后 BOSS 读条蓄力冲击时，注意 BOSS 的面向和它的头发，尤其建议 MT 提前走位拉好面向，它冲击后会立刻使用魔发斩，如果面向不对就会变成 24 人斩。`,
      ],
      [
        "死者宫殿 地下1～10层",
        `BOSS：地宫死亡凝视
这个boss很简单，但是在单挑时也不能低估他的伤害(注意在战斗中需要时刻保持移动)。
技能顺序如下：
爆裂尾：在普攻中夹杂的一次对T大伤害。
风暴：地面AOE。
杂音：以BOSS为圆心的AOE，附加降低攻击速度的DEBUFF。
光球：以指定玩家为圆心的AOE。
疾风爆发：一个附加少量DOT伤害的全场AOE技能。
总体策略：使用魔陶器 梦魔化在低层可以造成巨量伤害，这是因为易伤的潜在价值比大部分低级技能都要高。如果你的职业可以风筝BOSS，那你可以绕着场地边缘跑来躲掉的爆裂尾。
https://nga.178.com/read.php?&tid=14509371&pid=285726504&to=1`,
      ],
      [
        "死者宫殿 地下11～20层",
        `BOSS: 大口花
这个BOSS也很简单，攻击模式类似于10层。但是请不要低估它的大伤害技能，血腥的爱抚。
技能顺序大致为血腥的爱抚-以自身为圆心的AOE-点名圆形AOE-全场AOE。
全场AOE之后，它将会去场地最北边同时召唤两个地宫黄蜂。必须第一时间击杀小怪否则他们将会读条终极针让某位玩家当场去世。同时，BOSS会读条使用一个伤害极高的直线AOE腐烂恶臭。
总体策略：使用魔陶器 梦魔化来击杀BOSS和他召唤出的小怪(在它召唤时对着BOSS使用，可以通过AOE同时打到BOSS和小怪)。需要注意的是单人时可以使用生者秘药，它的伤害还是很高的。`,
      ],
      [
        "死者宫殿 地下21～30层",
        `BOSS:宁吉兹济达
一句话攻略:站在场边，引导火球-冰球-火球-冰球，走到场地中央`,
      ],
      [
        "死者宫殿 地下31～40层",
        `BOSS：伊休妲
一句话攻略：杀完小怪`,
      ],
      [
        "死者宫殿 地下41～50层",
        `BOSS：漆黑的艾达
一句话攻略：贴紧boss来躲环形AOE身体健康。`,
      ],
      [
        "亚历山大机神城 天动之章1",
        `平台门神小怪正面平 A 可以被分摊，推荐2T 开启减伤正面一起吃平 A。
以 BOSS 所在位置为中心，场地被分为 4 块，以进场时东南（右下）角标 A。MT 保持 BOSS 面向不动拉怪，其他人绕到 BOSS 背后进攻，BOSS 正面有顺劈，无论如何不要去。
开场后不久，东北角的场地会发亮，同时掉下一堆小怪尸体和动力发生器，需要一名玩家（通常是治疗）把动力发生器捡起来，放到小怪身上使之复活，然后拉到发亮的场地上击杀（小怪仇恨以复活后第一个攻击它的人为准）。到一定时间后，发光场地会出现岩浆，吞没小怪尸体。否则 BOSS 在使用吸收技能之后，会附加 左臂再生及 右臂再生buff，最严重时会导致后续技能无法处理而团灭。
第一波小怪分别落在东北场和西北场，而东北场将会出现岩浆，所以东北场的小怪不用复活，只要复活西北场的小怪即可。
第二波小怪刷在西北场，岩浆在西南场，MT 注意避让位置。怪很多，可以拉近 BOSS 一起 AOE。
每波小怪中途或结束后，会有若干名玩家被点红色点名，被点名的玩家靠近 BOSS 放置废料堆（类似陨石），然后当 BOSS 咏唱废料爆发时，在废料堆后躲避即可。
第二波小怪结束后会有一次 270 度 AOE 范围攻击，MT 自己开大减伤硬吃，其他人在 BOSS 背后躲避即可。如果之前 BOSS 吃了废料导致手臂再生层数增加，MT 可能需要开启无敌或想办法躲避。如果吃的太多导致手臂完成，这里会出现无法回避的 360 度 AOE，既告团灭。
270 度 AOE 后，会在西北场出现距离衰减 AOE 提示，同时落下一只全装甲浮士德，ST 拉好浮士德前往 A 点（东南角）面向场外，所有人优先击杀浮士德。地板会按照西北→西南→东南→东北的顺序依次发亮，一般在第二块地板（也就是东南角）时都可以完成击杀（若出现岩浆时小怪仍存活，则会造成全屏 AOE）。所有人注意浮士德有正面 AOE，同时注意避让 MT 那边的 BOSS 顺劈。
之后再重复几次搬垃圾→击杀→岩浆吞没即可。`,
      ],
      [
        "亚历山大机神城 天动之章2",
        `前面小怪没什么特别的。
BOSS 场地上有 3 个按钮，无论什么时候都不要去碰，建议把技能特效关掉以便观察位置。最深处的水晶形状的按钮会让场地两侧出现直线 AOE，中央的铁锤按钮会让 3 个按钮的正上方落下大铁锤，门口的钉子按钮会让场地上出现地钉，令所有玩家被止步。
当玩家被红色点名加连线的时候，注意远离 BOSS，其他人回避连线路径直线，否则会被击杀。
接下来 BOSS 会跳向水晶按钮（所有人靠近场地中央），然后跳向铁锤按钮（所有人靠近场地边缘）。
然后 BOSS 会跳向场地一侧并无敌，在场地另一侧出现 6 号哥布林压路机，压路机会不断读条蒸汽滚轮，在读条结束时会有个向前压路砸的动作，近战最晚在读到 “滚” 字的时候就要远离压路机，否则会被压扁。
压路机结束后，BOSS 读条哥布流哥布林冲锋，MT 注意开启大减伤，治疗注意抬血。
最后 BOSS 读条单发填充后，头顶会出现红色或绿色的标记，红色远离，绿色靠近即可处理。`,
      ],
      [
        "亚历山大机神城 天动之章3",
        `开场都没什么要注意的，出啥躲啥，第二次制导是中央大范围 AOE，注意提前靠边。小怪注意及时转火击杀。
读条百式聚能炮时，ST 头顶会出现向外扩的白色三角标记，ST 自己开启大减伤到场地边缘放置，其他人尽可能远离 ST。
BOSS 回到场中之后，四周会出现跳上敌机的交互点，要点击交互点才能跳上敌机，要注意。BOSS 轰炸完场地之后，会回到场地上空，同时出现 QTE 按钮，按任意键脸滚键盘即可跳下飞机（否则就会掉下去摔死）。
回到场地上会出现 4 个天青石（若 DPS 较快则可跳过），打掉后 BOSS 会读条黑暗命运，非常疼的全屏 AOE 带 DOT，治疗注意抬血。
读条限制器减档后会突然消失，并重新出现在中场，并出现等离子护盾，所有人需要集中在 BOSS 正面才能对护盾造成伤害。
打掉护盾之后 BOSS 读条摧毁者冲击同时点名 MT，MT 开启大减伤离开队友所在方向，BOSS 会向 MT 方向冲锋，并击杀沿途的其他玩家。考虑到刚大家都在打护盾，MT 自己穿过 BOSS 前往后场是相对安全的（总之注意找没人的地方）。
当 BOSS 读条螺旋桨强风时，需要在天上掉落的巨大物体之后挡住强风攻击，否则会被 混乱。
最后出场的小怪会对T 造成直线击退，ST 在中场接小怪之后注意让怪背对人群，打掉即可。`,
      ],
      [
        "亚历山大机神城 天动之章4",
        `开场时MT 尽量把 BOSS 定在场中。正面有无预警扇形 AOE，其他人注意时刻躲避 MT。
读条十字圣礼时，所有人后退到没有连线的两个小点中间后方躲避（有连线的方向会发射矩形激光，必死）。
被红色点名的人注意远离人群，注意抬血。
之后是小怪战，T 注意及时拉好仇恨，第三波会在场地四周刷出 4 个位置固定的小怪，并隔一段时间读条全屏 AOE，记得迅速逐个击杀这 4 只小怪后再处理剩下的小怪。
打完小怪后，BOSS 会从北边出来并预警神圣审判，在提示 ++ 距神圣审判还有 5 秒！++ 时，T 放 3 格 LB 即可，其他减伤随意，不放 LB 必死。
回来后 BOSS 会读条时间停止，被绿色点名的人远离他人，剩下的人在 BOSS 背后集中分摊。伤害判定后 BOSS 会出现在场地边缘并读条十字圣礼，注意向 BOSS 两侧方向躲避（有连线的方向都会有矩形激光）。
重复两次时间停止后，BOSS 会瞬移回到场中，然后出现 4 个黑球，需要进入黑球击杀里面的小怪，如果 DPS 没进的话，TN 可以考虑补位，但无论如何 MT 都不要进。外面会继续有白光之鞭（红色点名需要远离并带有大伤害）、十字圣礼之类的技能。
击杀完小怪的队友返回后，BOSS 会出现新的技能重力异常，场地上会出现黑圈，找缝隙躲避即可。
接下来的时间停止是复合技能，先处理分摊远离→重力异常→十字圣礼，重力异常的黑圈变白之后就可以踩了，
最后会 BOSS 会召唤一个巨大的神圣亚历山大，对场内 4 名玩家连线，被连线玩家需要互相远离放圈，一共放 4 次，然后返回处理时间停止即可。`,
      ],
      [
        "死者宫殿 地下51～60层",
        `BOSS:深黑骑士
一句话攻略：记得卡位，保证被点名击退后不要飞进持续地板AOE。`,
      ],
      [
        "死者宫殿 地下61～70层",
        `BOSS: 水虎龙亚夸虏
当boss吟唱浸泡时，把他完全拉出范围，否则他会得到加速BUFF。`,
      ],
      [
        "死者宫殿 地下71～80层",
        `BOSS：古丹纳
远离boss施放的旋风，他们会将略大于他们视觉范围的人吸入并造成伤害。他会在边缘施放会施加易伤的大伤害AOE呵斥，所以当他跑去边缘时，一起跟着跑过去。他的HP在18%之后就会不断吟唱黄道陨石，一发就能造成你最大血量80%的伤害。因此，把爆发留到这个时候并尽快RUSH掉它。`,
      ],
      [
        "死者宫殿 地下81～90层",
        `BOSS:爆弹怪教母
一句话攻略：把橘色小怪直接打死，把蓝色小怪推到boss边(所有技能都能推走它)。`,
      ],
      [
        "死者宫殿 地下91～100层",
        `BOSS：死灵术士尼博斯
+ BOSS长这样 ...
这个BOSS对大部分团队都很简单，大部分情况你甚至不需要用魔陶器 基路伯化，下面我会对这个boss给出一些单人和团队的建议
单人
用魔陶器 强化自身、魔陶器 强化防御、生者秘药和魔陶器 梦魔化，大胆的用虚空烈焰怼boss吧，他会小怪焚化殆尽。
变身时间结束后，再用一个生者秘药和魔陶器 基路伯化，用天罚怼爆BOSS和地上的小怪。
团队
一个人使用魔陶器 梦魔化，其余人集火BOSS，虚空烈焰杀死小怪后，boss也应该奄奄一息了。
https://nga.178.com/read.php?&tid=14509371&pid=285727338&to=1`,
      ],
      [
        "死者宫殿 地下101～110层",
        `BOSS：阿利坎托
这个boss的技巧和10层的相似，但是锤人更疼了，好好分工吧。`,
      ],
      [
        "死者宫殿 地下111～120层",
        `BOSS:荣光魔花
一句话攻略:躲开AOE，杀死小蜜蜂`,
      ],
      [
        "死者宫殿 地下121～130层",
        `BOSS：埃尔法德
一句话攻略：站在场边，引导火球-冰球-火球-冰球，跑到中间。`,
      ],
      [
        "死者宫殿 地下131～140层",
        `BOSS:阿普切
魔陶器 基路伯化对这个BOSS有奇效(用了魔陶器 强化自身之后可以一发3w)。如果单挑的话，推荐你用魔陶器 强化自身+魔陶器 强化防御+魔陶器 基路伯化套餐。你也可以不用魔陶器 强化防御，那你可能就需要手动解除基路伯状态，吃个生者秘药，再用另一个魔陶器 基路伯化。`,
      ],
      [
        "死者宫殿 地下141～150层",
        `BOSS: 提西福涅[单挑视频]
这个BOSS对远程还算友好，但是对近战尤其困难。
一句话攻略：风筝并杀死僵尸小怪(不要让他们摸到你)，梦魔小怪不是必须杀死的。`,
      ],
      [
        "死者宫殿 地下151～160层",
        `BOSS: 非生骑士
尽管长得像是个60层BOSS的换色版，现在这个可以把你顶上天。虽然你不用魔陶器 强化防御也可以单打的过(至少赤魔打的过)我还是十分建议你提前用一个。你一旦踩进由悔恨殿制作出的流血区域，就是一跳5k的大伤害。除此之外，确定你不会被顶到爆炸球AOE中，否则BOSS紧接一刀你就死了。`,
      ],
      [
        "死者宫殿 地下161～170层",
        `BOSS:虹蛇
这个BOSS和70层的很相似，但现在他的水塘还会额外提供一个物理伤害上升BUFF。此时T需要拉着BOSS绕着场地跑，以确保他一直不在水池里。
单人：
在第一个沉重效果慢慢衰减时预留一个疾跑或打断，这是因为你需要用这个来逃过随之而来的生物电AOE(在沉重还有7秒时用疾跑)。`,
      ],
      [
        "死者宫殿 地下171～180层",
        `BOSS:丹代恩索涅
这个BOSS和80层的那个很类似，但也有一些很重要的区别。首先，他会连续吟唱两次大漩涡，所以会出现满地旋风的情况。呵斥虽然不是一击必杀的，但在没有魔陶器 强化防御的情况下一下是13k的伤害(注意！有可能暴击！)注意落雷(正面直线AOE)对DPS的伤害，这个技能一下就可以打死一个没有使用魔陶器 强化防御的DPS，不过话说回来，一个不用魔陶器 强化防御的DPS站在BOSS正面是在干嘛？
这个BOSS最难的地方在于，一旦他的HP到了17%以下，他就会不断的咏唱黄道陨石，这次可比上次快多了，大概每9秒造成一次每人HP80%的伤害。因此，在它50%HP时使用魔陶器 梦魔化，来确保易伤DEBUFF可以持续到RUSH阶段(单人时30%再用)，记得最后甩两段LB。(不要用T的LB！因为是无效的！！！)
如果你对你的团队没有信心，那赤魔和奶妈也可以准备单挑了。在两次黄道陨石之间用一次生者秘药并不断治疗自己以维持血线，期间想办法偷输出。
注意：不要在陨石阶段站在boss面前的近战范围里，两次陨石中间的普攻会一下打死你的。[视频演示]
单人：
如果你要单挑他，那我就先默认你是个赤魔了。要打这个BOSS很有套路，当BOSS血量降低时，你可以用赤治疗触发赤闪雷，赤治疗触发赤疾风的手法，大概就这样一直打下去。如果你有时间的话最好不要用魔陶器 梦魔化，带三个魔陶器 梦魔化打190层boss可以节约你一个在高层很宝贵的魔陶器 强化防御。
https://nga.178.com/read.php?&tid=14509371&pid=285728216&to=1`,
      ],
      [
        "死者宫殿 地下181～190层",
        `BOSS: 爆弹怪教父
这个BOSS和90层的类似，但是颜色是相反的。这也意味着你要杀死蓝色爆弹怪(治疗爆弹怪)并把红色爆弹怪(熔岩爆弹怪)打到boss边。注意如果你被地面爆破打到或蓝色爆弹怪炸到，你会被冻住，你没有
魔陶器 强化防御的话基本就死了。这个BOSS的顺劈烈火怒骂超级疼，没有魔陶器 强化防御就是一下12k。所以你们不带T或你是单人的话一定要在下一个顺劈之前稳定好血线。
单人：
你没用魔陶器 强化防御就打过189层了？那可太秀了！如果你有三个魔陶器 梦魔化，那就现在都用了吧。顺利的话，一个魔陶器 强化防御就可以打死它。然而不要开着魔陶器 梦魔化开怪，你可能会正好吃到个顺劈然后死掉。在BOSS连续两次释放地面爆破时会有短暂的窗口期 好机会！小杜！ ，就在这时使用吧。`,
      ],
      [
        "死者宫殿 地下191～200层",
        `最后的冲刺阶段了。希望你预留了足够多的魔陶器 视野和魔陶器 咒印解除来淌过这最后几层，或者有足够的魔陶器 重生来处理诱饵陷阱。这些怪物不如180层的那些有威胁，但这并不是说他们打人不疼，因为他们大多数还是"一拳超人"。然而你使用魔陶器 基路伯化后，三下可以打死大多数小怪。注意这层大多数怪物都是靠近感知的，所以你不能溜过他们。深宫守卫(巡逻怪)是声音感知的，所以你可以站着不动或走着绕过他们。一定要躲开他们，因为他打人太疼了。再重复一遍，这里的怪打他们不需要技巧，但是他们打人很疼。你需要时刻注意不要引到巡逻怪来保证你不会一打二。(除了深宫幽灵)大多数都处于中等+的难度，你不用魔陶器 强化防御根本打不过。`,
      ],
      [
        "死者宫殿 地下191～200层",
        `单人：
如果你有魔陶器 宝箱增加，早敲早好。大致思路如下：
191-193层：不用任何道具，杀深宫木乃伊、深宫寒冰陷阱草和奥尼克斯龙。
注意：如果没有可以风筝的房间，那么和深宫木乃伊或奥尼克斯龙战斗时要尤其尤其尤其小心。你如果必须站定着和他们打，那一定要小心自己的血线。(如，深宫铁面腐尸在附近遛弯时)
多注意在附近巡逻的深宫铁面腐尸，你引到了，他们就会一下杀死你。如果你还是不小心引到了，你就必须要用魔陶器 强化防御/魔陶器 形态变化或向随机数生成器之神祈祷他不暴击。
194-196层：打奥尼克斯龙和深宫幽鬼之眼，可能会有些你溜不过去的怪，你如果一定要打的话，用魔陶器 强化自身和魔陶器 强化防御。为了最大化魔陶器 强化防御的效果，你最好始终一起使用。这几层的速度和你有多少魔陶器 强化防御。
197+：如果你有减少敌人，那就在进入这几层之前使用。你用魔陶器 基路伯化可以轻而易举的杀死这些小怪(大概三下，深宫贪吃鬼和深宫幽灵还会被眩晕)，但你没有魔陶器 强化防御的话，这还是有些危险的。用魔陶器 基路伯化杀小怪可以节约你宝贵的魔陶器 强化防御的时间，当然，也别忘了任务时间。
https://nga.178.com/read.php?&tid=14509371&pid=285728311&to=1`,
      ],
      [
        "影之国",
        `BOSS 1 虚空死亡凝视
长方形场地前后（船头船尾）是安全的，两侧会掉下去（有 BOSS 的方向）。
BOSS 读条虚空即死，同时场中央会出现红黑色的圈，把玩家往中间吸，所有人要尽全力向外跑，一共会吸 2 次，第二次吸完立刻判定，所以第一次跑慢的人就跑不出去了。
读条虚空暴风同时场地中央出现旋风圈，所有玩家站在旋风边上，判定时旋风内的玩家即死，其余玩家被吹飞，要保证自己能被吹到船头船尾，否则就会掉下去。
虚空冰澈 + 虚空飙风，场地上出现距离衰减提示，玩家需要向距离衰减的落点对侧方向移动（比如衰减落点在左舷，那么玩家需要去到对应方向右舷位置），落点会落下大冰块，冰块落下后 BOSS 会开始读条吹风，需要让冰块挡住玩家，否则就掉下去了。
其他的出啥打啥有啥躲啥，BOSS 读条死亡宣告会随机点名 2 名玩家上 死亡宣告，需要治疗驱散（诗人也可以用 光阴神的礼赞凯歌驱散）。场地上会逐块变黑，当场地全部变黑并最后一次判定虚空极死时就是团灭。
BOSS 1 ~ BOSS 2`,
      ],
      [
        "影之国",
        `BOSS 2 虚空弗迪亚
蓝色阿托莫斯连线环，黄色阿托莫斯连线球。无连线的蓝色阿托莫斯脚下安全。
核心机制 1 虫洞，BOSS 会放出若干个阿托莫斯（场边的怪），并且有跟它连线的球或环。球或环表示近身 AOE（远离安全）或周身 AOE（脚下安全），而实际 AOE 出现的位置是没有连线的同色阿托莫斯。因此如果有环，则先看与环连线的阿托莫斯颜色，然后去没有连线的同色阿托莫斯脚下；如果没有环，远离没有连线的阿托莫斯；如果两个都是环，随便去哪个没连线的脚下。
核心机制 2，弱点生成，所有玩家会获得 火属性耐性大幅降低或者 水属性耐性大幅降低，同时场地上出现水 / 火的机关，需要把机关踩成与自己耐性相反的属性：如果是火耐性降低，那么需要把所有机关都踩成水；如果是水耐性降低，则需要都踩成火。远位通常由远程负责，近战注意打身位的时候不要反复踩机关。AOE 伤害与机关错误数量成正比，如果错的太多就会团灭。
其他的出啥躲啥有啥打啥。`,
      ],
      [
        "影之国",
        `BOSS 3 斯卡哈
BOSS 伸出两条丝带并读条阴影回旋时，注意向没有丝带的方向躲避。
有两个比较难躲的技能：阴影重击读条后会随机跳跃一个地方，不要追，会立刻有近身范围 AOE。 阴影直刺随机点名一名玩家放直线 AOE，注意看面相躲避。
手形小怪会随机连线 2 名玩家，只要面对小怪（连线变为白色），小怪就会停止移动，其他玩家趁此机会击杀。如果连线玩家背对小怪，小怪就会不断接近玩家，撞上之后玩家即死。
场地变红的时候不要移动，否则会中 debuff 影之脚镣，移动速度大幅降低，很难躲避后续机制。
当出现距离衰减 AOE 时，MT 带 BOSS 远离落点，落点会出现小怪康拉，需要有一名 T 拉住康拉，远离 BOSS，其他人转火击杀（康拉与 BOSS 距离过近会给 BOSS 上增强 buff，非常危险）。
被红黑色大饼点名，同时周身出现黑圈的玩家，需要带球向后场躲避（其他人注意避让），这个技能范围极大，伤害也比较高，要注意。
场地上出现图腾时注意需要有人去踩（图腾边缘发光证明踩上了），中央的大图腾伤害比较高，建议由 T 去踩，但无论如何每个图腾里都必须有人，否则极易团灭。`,
      ],
      [
        "影之国",
        `BOSS 4 迪亚波罗斯
分为两段，基本上出啥躲啥，场地上会召唤门，注意及时转火打掉。
后半段和斯卡哈很像，暗影直刺是无范围预警直线 AOE，同时还有大饼追踪点名（这次是 3 个人），也需要踩图腾。
需要注意的是紫色带眼睛标记的分摊，需要玩家帮助分摊的同时背对，所以被点名的玩家注意不要太过靠近人群，防止误伤友军。
后半段场中央会出现一个带特效的门，这个门不可打掉，需要进去把里面的怪打掉（进去一个队就行，外面还有其他门需要打）。
最后一个团灭点是场地上会出现红色的晶球，要么大家都躲开（但基本不太可能），要么去把球撞掉，撞球会产生一个中等范围的 AOE 伤害，而且比较疼，如果两三个球撞在一起就极有可能团灭，要注意。`,
      ],
      [
        "须佐之男歼灭战",
        `开场 BOSS 放场地中央，BOSS 会有无预警超高伤害死刑，开场 1~2 个 GCD 后MT 开大减伤，之后请治疗全程注意 T 血，应尽可能维持在 80% 以上。ST 在仇恨稳固后可以开启盾姿，以便倒 T 后第一时间接仇恨。
所有人在打BOSS的时候尽量不要离BOSS太远。BOSS会随机点名一名玩家，并吹飞他，然后他身上还会出一个分摊。
建议是被点名的玩家到 BOSS 侧面或者正面 (吹飞距离比较短，容易回来) 等着被吹飞，吹飞之后第一时间回来跟大家分摊（你要愿意死在外面也是可以的（
另外如果被点名的玩家发现自己，BOSS 和场边的雷云在一条线上，请注意转个位置被吹飞，否则请治疗开始抬血（
P2 是挡刀阶段，MT 在场地中央等着接刀的点刷出后，右键上前挡刀（这里是 QTE 玩法，只要脸滚键盘就行了，注意不要按到 Ctrl、Shift、ALt、Win、回车等功能键（否则后果自负……（如果 MT 不会挡刀，只要是高等级同步下来的，过去挡也没事）ST 在场地 2 点边缘等着撞球，按顺时针方向依次是 2 点、4 点和 9 点三个球都要撞掉。其他人在 MT 身后输出大刀就可以了～挡刀要进行两次。
挡完刀之后离开中场（小岛被一刀两断），和一开始一样继续输出即可。中间会有玩家被点名石牢，石牢变为可攻击之后，所有人转火仇恨列表 BOSS 之上的那个石牢（如果 BOSS 在列表第一个，就打列表最后一个），如果在石牢读条结束后仍没有救出你们的队友，你们就会永远失去他。`,
      ],
      [
        "欧米茄时空狭缝 德尔塔幻境1",
        `BOSS 会全程使用名为太古龙尾的无读条扇形顺劈，对MT 造成大伤害，开怪后可立刻开启小减伤，治疗时刻关注 T 血。其他人注意远离 MT。
这个 BOSS 主要会在场地中放置火球，火球过一段时间之后会变大，形成范围 AOE。
第一次火球是场地中央 4 个，读条咆哮时远离火球即可。
第二次是场地周围，然后 BOSS 消失并出现在场边，读条风息之翼；这个技能会把火球吹飞，BOSS 出现在场边时贴近 BOSS 即可。
双重落雷是对 MT 及距离 MT 最近的一名玩家释放的双人大伤害，ST 请主动靠近 MT 分摊，避免劈到其他队友。
冰冻场地 + 雷圈 + 分摊，场地出现寒气时请互相远离，完全冻结后会变成滑冰状态，很难控制位置，放置完雷圈后滑回 BOSS 身后，从冰冻场地解除到分摊伤害判定还有一点时间以供调整位置。
之后 BOSS 会瞬移回到场中，读条经典元素，会把之前的火风雷冰技能挨个用一遍。按顺序是中央出现火球→火球被吹飞（所有人在场地中央集合回避火球）→出现电圈（所有人等周围火球爆炸后立刻贴边放置电圈）。
接下来火球是先内场后外场（带吹飞），BOSS 出现到场边后立刻靠近 BOSS。
大漩涡，会将全体成员血量将至 1，治疗注意立刻为团队抬血，接下来是一个全屏 AOE。
第二次经典元素的顺序是场边出现火球→中央出现火球（所有人观察中央的 4 个球，站在相邻两球之间）→吹飞 + 场外火球爆 + 场地冰冻（如果之前站位不好的人注意调整位置）→被吹飞的内场火球爆→分摊（所有人回到 BOSS 身后准备分摊）。
之后基本都是重复之前见过的技能组合，冷静应对见招拆招即可。`,
      ],
      [
        "欧米茄时空狭缝 德尔塔幻境2",
        `进本后有个专属任务技能反重力装置，在战斗中会经常使用，所有人开怪前先使用一次， 浮空。
BOSS 会对 MT 有无预警正面扇形顺劈诅咒波，所有人不要到 MT 正面来。只要是 浮空状态就可以无伤应对大地震，反之有可能阵亡，要注意。另外发生 下陷的时候，也可以用空反重力装置浮解决。
BOSS 的邪球是对 MT 死刑伤害，注意开好减伤和回复。
当 BOSS 读条重力操纵后，会有一名玩家被附加 固定高位或 固定低位，同时出现分摊标记，当发现分摊标记在高位时，就需要使用反重力装置浮空才能参与分摊。
核心机制触手乱舞，场地四周会出现 4 个红色的标记，过一会会钻出触手来，并且触手上方出现蓝眼睛标记。部分触手上方的眼睛标记过一会会消失，此时远离仍然有眼睛的触手即可。眼睛触手的 AOE 范围非常大，最后一次会只有 1 根安全触手，在安全触手外侧躲避才能躲开。
核心机制 2 暗黑光，场地上会出现若干个黑 / 黄球，同时 BOSS 会有背对机制。黑球在地面上，对应普通高度，黄球在半空中，对应浮空时的高度。
4 个黑球：使用反重力装置并背对 BOSS。
4 黑 4 黄：在场地正中央黑球的缝隙之间安全，不要使用反重力装置（浮起来会被黄球炸到），同时注意背对 BOSS。
3 黑 3 黄呈一条线：无球地方都安全，但接下来是一组击飞 + AOE 的 combo，治疗注意落地及时回血。
4 个黄球：会同时出现 下陷或读条大地震，等光球判定结束（动画出现）后立刻使用反重力装置躲避接下来的技能。`,
      ],
      [
        "欧米茄时空狭缝 德尔塔幻境3",
        `开场后 BOSS 立刻转身读条呱呱呱呱呱！，读条结束后会把正面扇形 150° 范围内的玩家变成呱（请绕背侧躲避）。
在一段技能演示后（出啥躲啥），BOSS 读条游戏盘面，场地中的地砖会变为不同的图案，第一次是职能图标，按职能站（有 2 个 DPS 格子，里面都要有DPS）。
场地翻为蓝色盘面后，观察有一条对角线上的地板与其他地板不同。玩家需要站在这条对角线上的格子里躲避女王之舞（尽可能一直在安全格子里）。之后场地东北角会刷出一只小怪，ST 去把小怪拉住，由于小怪会正面扇形 AOE，ST 注意不要让小怪脸朝人群。DPS 优先集火击杀小怪，同时注意躲避 BOSS 技能。
速度正常的话，BOSS 会在小怪击杀完毕后读条精神控制：左转／右转／前进／后退，读条结束后全员会被强制移动，玩家尽可能控制自己在安全地带移动，并在强制移动结束后立刻移动到安全地区。
之后 BOSS 瞬移到场外，场地出现次元裂缝，玩家被吸进一个流沙迷宫。玩家踩进流沙后，会按流沙方向强制移动，第一步向远离终点的格子走（比如左手边正对终点，那就走右手边）。如果迷宫走得快，会获得 伤害提高和 加速作为奖励。走得太慢就会被流沙杀死（之后可复活）。
流沙出来后基本都是见过的技能，但都会组合出现。
神圣 + 强制移动：分摊的同时强制移动，所有人提前站在一起，就可以向同一个方向移动。
蓝线 + 冰封：躲蓝线的时候MT 不要带的太靠里，否则冰封的 AOE 范围会把安全格完全覆盖。
盘面 + 呱呱呱呱：场地出现青蛙格子，玩家需要去找 BOSS 正面变青蛙。`,
      ],
      [
        "欧米茄时空狭缝 德尔塔幻境4",
        `开场点名 2 人可驱散的 死亡宣告，治疗注意使用 康复。
BOSS 会使用 3 个属性技能：
冰封：AOE，躲开即可
暴雷：对 MT 的范围死刑，MT 注意开好减伤，其他人注意不要离 MT 太近。由于会附加 雷属性耐性低下debuff，超过 2 层之后建议换 T。
爆炎：随机点名圆形 AOE，被点名玩家注意互相远离
然后 BOSS 会抬手与场边的黑洞连线，连线后属性技能会被强化：
冰封：暴风雪，保持移动，否则会被冻住
暴雷：近身 AOE，所有人远离 BOSS
爆炎：全屏 AOE 附带 热病，不停手就会掉血，等热病时间结束之后再抬血。
之后判断属性技能的类型仅看读条时，BOSS 与黑洞是否有连线。
真空波：读条结束后击退，可防击退处理。
神圣：分摊
BOSS 读条决战后，玩家先前往场边回避距离衰减，然后躲开场中央冒出来的脑袋（绕背侧）。同时场地的围栏炸碎，注意别掉下去了。
核爆：3 名玩家被点名头顶白色三角箭头，互相远离（同时远离人群）
陨石：做好减伤
黑洞：场地上出现黑球，不要碰到。
同时照 P1 处理 3 种属性的技能即可。`,
      ],
      [
        "失落之都拉巴纳斯塔",
        `BOSS 1 背德皇帝马提乌斯
场地上出现冰环地面之后，玩家需要打掉冰块，撞掉小水球，踩掉喷泉环（需要至少 3 人踩，不踩的话会变为冰块并连线玩家，如果冰块不及时打掉，被连线的玩家就会被冻住）。撞过水球的人记得不要被冰环地面上滑冰的小怪碰到，否则也会被冻住。
场地上出现一堆蛤蟆的同时，玩家身上出现 呼吸困难debuff 并不断增加层数，当 呼吸困难时就会窒息而亡。打掉蛤蟆会出现水泡，进入水泡可以清空层数，注意时不时去碰一下泡泡。中途有可引导方向的 AOE 提示，注意引导不要让 AOE 穿过泡泡。
如果打的慢还会出现 3 只小怪，各队T 注意把小怪拉开（太近会有连线同时有全场 AOE 无法击杀）。`,
      ],
      [
        "失落之都拉巴纳斯塔",
        `BOSS 2 统治者哈修马利姆
进门南场标 A，左上（西北）标 B，右上（东北）标 C 用于分队站位。这个 BOSS 伤害较高，治疗优先保证队友存活。
石刃是对MT 的正面扇形顺劈 AOE，非常疼，MT 自己要开好减伤，其他人注意不要被扫到。
地面出现黑色圆形之后升起一个石塔，BOSS 会将其切断并按断面方向倒下。注意不要踩黑圈，并躲开塔倒下的方向（与金碟机遇活动快刀一闪类似）。
BOSS 跳到场边之后，一侧手会带有火焰特效，着火一侧的半场都是危险的，去另外半场躲避（BOSS 本身也是危险的，所以实际安全区域只有大约 1/3 场）。
中央出现大塔之后，所有人按 ABC 方向移动，会出现沙球小怪，需要集火击杀。
如果打得慢还会出现石头人小怪，需要集火击杀，推荐远程放 LB 解决。`,
      ],
      [
        "失落之都拉巴纳斯塔",
        `BOSS 3 人马王洛弗卡勒
进场按北、东南、西南标 ABC，用于分队站位。后半段会有满地的 AOE，所有人优先跑位处理机制。
星天暴击打：会给 MT 上 物理受伤加重，然后接一个大伤害，注意开好减伤。
人马战车：点名一名玩家冲锋，建议被点名玩家靠近 BOSS，伤害不会很疼，接下来会有个很恐怖的半场 AOE，跑太远容易 23 杀。
蹂躏：BOSS 延 8 字形环绕，推荐站在 BOSS 侧面靠外一些（读条快结束时才会出现 8 字轨道范围提示，很容易被撞上）。
小怪阶段各队按标点进圈（有结界，需要站在结界里）打小怪，BOSS 同时会沿外场转圈（并撞飞玩家），T 尽可能让小怪面向场外，其他人尽快击杀小怪。
小怪击杀结束后，BOSS 会螺旋上升，到最高点时会开始蓄力冲锋，观察 BOSS 位置向左右两侧跑到场边可无伤处理。也可以在场地中央放减伤硬吃（没减伤必死）。
后半段战斗与前半段相似，只是多了拥抱，场地上会出现若干个蓝色陷阱，踩上陷阱之后，陷阱会扩大为 BOSS 圈那么大的爪子，并把范围内的玩家禁足，如果其他人不及时打掉爪子解救他们，他们就会被绞杀。在躲避机制时务必不要踩到。
全场变黑并出现暗黑魔法阵时，需要鼠标右键关闭魔法阵（踩圈是没用的）。`,
      ],
      [
        "失落之都拉巴纳斯塔",
        `BOSS 4 冷血剑阿加斯
核心机制处理错误会被附加 惊慌失措debuff，积累 3 层 惊慌失措之后会变为 弱鸡，不受控制满地乱跑的同时受伤加重（很容易暴毙）。
核心机制 1：神之启示。屏幕上会出现天使（白色）或恶魔（青黑红眼）的脸，BOSS 身上有白色或黑色的假面环绕，并自身附加 真神面具或 伪神面具buff，同时玩家会被赋予 不可直视或 持续行动的 buff。如果是白色天使表示与要求一致，而黑色恶魔表示需要反其道而行之。也可以记口诀天使背对移动、恶魔面对停手。
连线小怪推荐全堆在一起 AOE，会比较好打。
核心机制 2：丧失之痛。玩家头顶会出现旋转的手指光标，并附有 精神失常debuff，此时玩家按下任何方向键，都只能按照头顶手指的方向移动。可以观察头顶手指方向按键控制移动，也可以连续按下方向键来微调移动方向。
其他尽可能出啥躲啥即可。`,
      ],
      [
        "白虎镇魂战",
        `DPS只需要出啥躲啥即可，BOSS召唤小老虎之后，会点当前T一个距离衰减AOE（T身上有个巨大的白色向外指的箭头）注意远离即可。 治疗注意==风雷波动==是AOE，而==天雷掌==是对T死刑，如果T没有及时开出减伤需要多加注意。另外小老虎的顺劈很疼，治疗可以稍微多奶两口。小老虎最后的长读条是一个血量衰减AOE（即怪所剩血量越高，伤害越高），因此如果发现你们的DPS不给力，小老虎血量比较高，在读条结束前多做一些减伤。 MT开场BOSS拉场中背对人群，天雷掌读条注意开减伤。P1中途BOSS会召唤小老虎，这里在极白虎中需要ST拉住带走的，不过真白虎没有这个需求，2T可自行协商。但要注意，拉小老虎的T要开启减伤，万不可裸吃，裸吃治疗会报警。 所有人看到分摊标记务必去分摊，地上红的黄的黑的一概不要踩。
P2 全体飞上天空，是一个带 ACT 特性的弹幕躲避小游戏，躲开下方的球（推荐视角调高俯视观察）、BOSS 的旋踢（BOSS 近身安全）和横向的直线俯冲即可，另外此时场地边缘是即死线，撞线即死，请注意。
在 P3 会出一种米字扩散雷，表现为先出 4 个圈（排成十字），然后再出 4 个圈（是个 X 字，合起来看起来是个米字），破解方法是先在 X 字的 4 个圈外面等着，等十字的圈炸完第二下（炸表现是个电圈）向左右两侧移动，即走到十字圈的后方（说起来很复杂实际进去看一下就懂了）。
其他没什么要注意的了。
◀ 返回
为`,
      ],
      [
        "欧米茄时空狭缝 西格玛幻境1",
        `BOSS 无面向，近战可随便打。
距离衰退伤害基本上超过半场就安全了，不用非得跑到底（除非你装备特别差）。
追光灯（地上巨大的白光）会把场地上的幽灵打掉，另外聚光灯本身的伤害也会对玩家造成伤害，当看到聚光灯固定且出现魔法阵后，应及时离开魔法阵区域：
四方块幽灵：推荐照前场的幽灵，幽灵打掉之后活动空间会宽裕一些。
连线幽灵：被连线玩家围着幽灵绕圈（稍微大一点圈，让幽灵保持接近不动的状态），被点追光灯的玩家把灯放在幽灵脚下（未被连线的玩家可以碰这个幽灵）
列车左右出现幽灵时，需要走位躲避，不要被幽灵撞上，否则会被传送进小黑屋，打掉里面的幽灵才能出来（DPS 损失）。
随机点名 2 名玩家带距离衰减特效时，被点名玩家将点名放在车尾最远处（点名消失后立刻返回前场），其他人正常输出。
小怪阶段，车板旁边会追上来一节车厢，跳下来一堆小怪，打掉后出现传送点，从传送点跳上去一路跑向车头，会看到魔烟囱。打掉魔烟囱后弹回车板，场边再次出现幽灵，此时一人撞一个幽灵进入车厢（如果不进去会 窒息而亡）。
从小黑屋出来后，BOSS 会清仇，MT 注意重新建立仇恨。同时 BOSS 会开始出现复合机制：
酸雨 + 连线幽灵：正常处理，治疗关照一下被追光灯打到的玩家。
幽灵 + 追尾：提前后撤，防止击飞时撞进幽灵怀里。`,
      ],
      [
        "欧米茄时空狭缝 西格玛幻境2",
        `场地四角立有 4 副画，每幅画前面的地上还有另外一幅画，同时玩家会有任务技能。站在画上使用任务技能，可以获得各种各样的效果，用来处理机制。
开战后过一小会 BOSS 才会出现（有倒计时开爆发需求的玩家要注意），BOSS 无身位，可随便打。
第一幅画连线火焰：踩火焰前方的画，使用任务技能，获得 火属性耐性提升效果（BOSS 要读条结束→飞到画前喊话，喊完话才会出伤害，不要过早去涂）
第二幅画连线岩石：踩岩石前方的话，使用任务技能，玩家会骑上小飞机，躲避接下来的地震（这次 BOSS 飞过去就判定了）。另外 BOSS 还会点名 2 名玩家放追踪型 AOE，被点名玩家注意离开人群在外场兜圈子。
第三幅画连线水：只要有 1 名玩家涂水前方的画，就可以立起岩石，阻挡海啸（注意海啸来的也比较晚，不要过早立岩石），其他人注意躲在石头后方输出。
第四幅画连线风：所有人到风画所在的场地角落，1 名玩家（通常是治疗）踩风前面的画，变为提丰老师，可以使用提丰的鼻息技能，将场地上的风球吹走，注意只吹团队附近的 2、3 枚就可以了（时间上最多允许吹 3 枚）。之后会出现连线（远离）和分摊（靠近）。
第五次同时连线水 + 火：先涂火的，再去水前面立石头。
第六次同时连线火 + 岩：先涂火，再去岩石前面上飞机。
每次进画前后都有 AOE 恶魔啸和对 T 死刑恶魔斩，T 注意开好减伤，治疗注意回复即可。`,
      ],
      [
        "欧米茄时空狭缝 西格玛幻境3",
        `机制核心是背景板上的显示器。另外还有常见的死刑（臂锤）和 AOE（扩散离子）
开场魔导激光，无预警正面直线 AOE，看到读条后躲开 BOSS 正面。
玩家头顶红色点名：有减伤可以自己开，不用特地回避人群，注意抬血。
BOSS 读条加载并连线场外显示器时，证明开始出现特殊机制：
武僧怪（达达鲁玛）：
全场 AOE + 击退（可开技能防击退）
8 个斗气圈（需要 1 人踩 1 个，建议MT 在击退后将 BOSS 放在场中央，4 名近战踩中央的圈，4 名远程踩场边的圈）
达达本体出现（ST 拉住）
BOSS 会读条正面激光，打达达的时候要注意。
图书怪（永世珍本）：
和图书馆一样，出现圆形法阵，按 3 人一圈依次踩灭即可
图书本体出现（ST 拉住），注意躲避 BOSS 激光击杀图书（治疗注意抬血）。
章鱼（奥尔特罗斯）：
点名玩家脚下出现 AOE 圈
全屏 AOE
点名玩家出现章鱼脚（并释放直线 AOE）
章鱼本体出现（ST 拉住）
BOSS 起飞并随机点名玩家位置进行扫射（ST 观察空中 BOSS 的面向，将章鱼带到不会被波及的方向击杀）。
小飞机（空军装甲）：
BOSS 脚下 AOE（远离 BOSS）
【（不一定每次都有）出现小飞机（ST 拉住，带到 BOSS 脚下击杀）】
场外出现小飞弹（观察飞弹方向并找缝隙躲避，虽然它飞的很慢但总是能撞上）
拆弹（天上掉下来两个定时炸弹，等 3s 后炸弹上方出现倒计时，同时与倒计时同色的引线开始发光，踩进同色 / 发光引线就能顺利解除，不会处理的玩家不要乱踩。如果炸弹掉到人群附近，T 可以适当调整位置）。`,
      ],
      [
        "欧米茄时空狭缝 西格玛幻境4",
        `建议北场标 A 分辨方向。场地没有护栏，当心跌落。
开场超驱动对MT 范围死刑，范围不大，但是也别太近。
BOSS 的核心技能都有 2 种模式，在 BOSS 读条时身边会围绕的球球，蓝球球（ 真实的小丑）表示范围提示是真的，按提示躲避；红球球带问号（ 虚伪的小丑）表示提示是假的，紫红色地板上也会画满了问号，踩上去就对了！另外呼啦啦爆炎（头顶红色点名 / 分摊）的处理方式是真的按标记分散 / 抱团，假的则要翻过来抱团 / 分散。
核心机制 2：众神之像，读条后北场会升起巨大的神像，每个神像机制一致，BOSS 打到一定血量后，玩家会向上升，进入下一个神像的机制（BOSS 每次读条众神之像之后，石像就会放对应的机制）：
场地左 / 右会出现一个风球，在看到条形 AOE 预警后找风球脚下等待被吹飞（可开防击退），风球有可能会中途换手，不要提前跑。
石像上会出现黄色 / 黑色的球：向无球一侧（半场）躲避。
石像上方会出现大眼睛标记：紫色眼睛需要背对石像，黄色眼睛红问号需要面对石像，同时需要处理对 BOSS 的机制。
其他机制：
场地出现 2 个黑圈，读条跳蹦蹦传送：去场边黑圈靠近场外的一侧，BOSS 会传送到场边黑圈上，并向场内放 150° 范围 AOE（不一定每次都放）。黑圈和传送光柱特效都可以踩，无伤害。
读条疼飕飕暴风：以 BOSS 为中心击退，可以开防击退技能处理（副本击退频繁，请关注好技能 CD）。`,
      ],
      [
        "火龙狩猎战",
        `火龙是联动 MH（怪物猎人）的副本，BOSS 是 MH 非著名劳模雄火龙，打法与普通副本有所区别，还请多加注意。
火龙没有读条，所有的技能需要由火龙的动作判断，同时进入 P3 之后，将无法接受治疗，只能通过使用回复药：大来回血，由于联动活动同样移植了喝药的动作，因此使用这个回复药所需要的时间，比我们通常使用道具所花的时间要多一些，需要注意。
火龙没有仇恨，因此谁来开怪都可以，他的主要攻击模式有：
吼叫 + 龙车：火龙会先向某名玩家伸头吼叫，然后立刻冲向该玩家，如果发现龙吼了自己的方向，注意两侧躲避。
撕咬 + 甩尾：侧身歪脖，前咬甩尾。
喷火：仰脖，会有一名玩家被点名火圈，这个火圈可以用来砸小怪。
原则上近战只要站在火龙左脚后跟输出即可。
小怪阶段T 拉住小怪仇恨，可以一起带到 BOSS 身下，被 BOSS 点名的玩家可以把点名带到怪堆里，让 BOSS 的 AOE 帮忙打小怪。
小怪阶段结束后，会有一头牛撞晕火龙，需要有一名玩家上龙（点击龙头前方的骑乘攻防即可），剩下的玩家攻击巨牛，需要有T 拉住牛的仇恨（有正面顺劈，注意面向），在时间结束内打掉巨牛，用牛的尸体挡住接下来转场 BOSS 的喷火。注意关注一下上龙玩家的血量，如果龙背上的玩家没血也是会出事的。
BOSS 喷火之后进入 P3，所有人获得 火龙领域buff，此时治疗将无法治疗队友。
此时 BOSS 变成飞行姿态，龙车不再有预警，受到的伤害降低，另外 BOSS 还有正面扇形喷火，因此无论何时都要躲开 BOSS 正面方向。
火龙受到一定伤害后，会从天上掉下来，此时火龙受到的伤害增加，同时可以进攻火龙的尾巴，打掉尾巴会对火龙造成巨大伤害。推荐先打本体，等倒地时间快结束的时候打掉尾巴。
打完后需要手动从火龙身上剥鳞片，注意不要手快出本。`,
      ],
      [
        "火龙上位狩猎战",
        `和普通火龙一样，除了人数减为 4 人，机制上唯一不同是有 3 猫灭的机制（就是全团不可战斗人数超过 3 人则视为战斗失败，需要从头开始）。
其中动作组比普通火龙多了周身甩尾，动作为抬屁股低头，右侧 180 度 AOE，同时这个技能会连放 2 次，需要注意躲避。另外还有后跳喷火，注意躲开正面。原则上左脚后跟永远是安全的。
小怪需要MT 拉住仇恨打掉，否则会对团队造成威胁（可以拉到 BOSS 身下，被点名玩家靠近怪群，让 BOSS 的点名 AOE 去打）。
中场巨牛要注意面向，顺劈很疼。注意关注一下上龙玩家的血量。
P3 集中在火龙身后输出，分摊技能只要有 2 人分摊即可，分摊会留下一滩火球，尽可能贴边放置。治疗虽然不能加血，但是可以积极驱散各种 debuff。
火龙落下后会自带易伤，推荐此时交各种爆发，同时由于这个易伤的存在，建议略微延后尾巴的击杀时间（或者等火龙第二次落地之后再打掉尾巴），因为尾巴被打掉后火龙就会立刻起飞，浪费易伤输出窗口期。`,
      ],
      [
        "天之御柱 1～10层",
        `亡者船
回到场中并使用全屏击退(无法用沉稳躲避)，紧跟一次半场aoe。`,
      ],
      [
        "天之御柱 11～20层",
        `别蝶
会使用各种技能来使你恐慌，同时在场地边缘召唤蝴蝶。蝴蝶会使用无范围提示自爆，恐惧会让你往墙上走，务必躲开。`,
      ],
      [
        "天之御柱 21～30层",
        `蛭子
召唤雷云并在一段时间后爆炸，同时在中心吟唱远离aoe。跑到边缘并避免被多个雷云劈中。如果你被击飞上天，雷云就会消失。他也会释放半场aoe，所以要保持一个始终的安全距离。`,
      ],
      [
        "天之御柱 41～50层",
        `牛头
有一个无范围，无读条有前摇横扫和直线攻击，如果你看到它突然转向T，请远离这条连线。他还有一个邪眼技能，并在召唤黑色aoe球时吟唱距离衰减aoe。单人时，恐惧必定死亡，所以不要贪。
技能时间轴
无范围提示横扫
无范围提示直线(对随机目标)
恐惧
召唤黑球、距离衰减
重复`,
      ],
      [
        "天之御柱 61～70层",
        `犬蛊
每隔一段时间就会对一个玩家使用缩小球，并在地板上留下一滩口水。踩进口水会有缩小debuff，你需要用这个debuff来躲避他的地狱冲。如果你没有这个buff，那就会被秒杀。在boss撕咬完你之后，务必走出这摊口水，否则之后的aoe会很疼。同时，坦克也要注意无范围提示的前方顺劈，这个技能是循环的第一个技能。Boss如果咬死一个人，它就会有伤害提升buff并回复较多血量。`,
      ],
      [
        "天之御柱 81～90层",
        `温罗
Dps和奶妈裸吃boss平a伤害为10k。
起初会有几个aoe，血量到85%时会开始以下列顺序使用技能
古代爆震：全屏最大hp50%伤害
地图随机出现爆炸岩石，过于接近会受到10k伤害并被附加沉重debuff
陨石冲击：在boss位置召唤一个陨石(距离衰减伤害)
斗气炮：直线aoe
燃烧咆哮：点名一个人的圆形aoe
指压：boss为圆心的aoe
在场地的东北角有一个安全点，因此坦克需要将boss拉在西南侧。当你看到古代爆震读条时，迅速跑到东北侧，那里永远不会有爆炸岩石。由于boss在西南侧，所以距离衰减aoe陨石冲击只会造成10k左右的伤害。 `,
      ],
      [
        "封闭圣塔黎铎拉纳大灯塔",
        `BOSS 1 暗黑之云法姆弗里特
      这个 BOSS 要关注它头顶上的水瓶（平时是扛在肩上的，当它要使用技能时，会把水瓶举到头顶），BOSS 会向水瓶瓶口方向释放扇形 AOE，被冲到就很容易凉。治疗可以多关照一下跑错的队友（或者营救）。
      喊话 “水瓶啊，一路前行降下大雨吧！” 时，场边会出现 3 个水瓶，沿场地直径横穿场地。喊话 “水瓶啊，描绘圆弧降下大雨吧！” 时，场地内会出现 3 个水瓶，分别按顺时针、逆时针、顺时针旋转，注意躲避。
      头顶出现红色倒三角点名时，务必互相靠近（最少俩人抱一起），判定时若是孤身一人则会被击飞并获得 受伤加重debuff。
      基本上完全是出啥躲啥（躲不躲得开就另说了……`,
      ],
      [
        "封闭圣塔黎铎拉纳大灯塔",
        `BOSS 2 魔人贝利亚斯
      场地上出现旋转的钟表时，站在转的慢的钟上，等转得快的炸了之后过去，转的慢的再炸。
      BOSS 去场地一角准备冲锋时，冲锋路径上会有一个格子里有箭头，BOSS 会在箭头格子转身，向箭头方向再冲一次，观察好路径冷静躲避。
      钟表指针和玩家连线时，被连线玩家靠场边并不要乱动，连线穿过其他玩家会导致石化。
      小怪阶段三只拉开即可（太近会连线）。
      打完小怪后会出最后一种机制，场地落下 4 个指针，指针接触地面的圆形圈里还有个小指针，踩一次圈会让小指针转 90°，踩圈让所有小指针均指向场外即可。`,
      ],
      [
        "封闭圣塔黎铎拉纳大灯塔",
        `BOSS 3 劳动七号
      部分技能没有范围提示，需要熟练掌握 13 以内加法。
      执行粉碎：BOSS 近身范围 AOE，看到读条就远离 BOSS。
      执行清理：正面扇形扫射，而且会随周身箭头指示方向连续扫射，速度较快，建议贴紧 BOSS 跟着跑。
      数学题时间：BOSS 读条执行减法后，玩家的血量会被压缩为 10 以内的自然数，同时场地上出现 4 个圈，玩家需要观察读条，并站在对应的圆圈里处理（比如读条算术：4 的倍数，若此时玩家血量为 3，那么站在 1 点的圆圈里；若玩家血量为 8，那么站在所有圆圈外即可）。判答案时间以读条结束为准，就是因为有连这么单纯的数学计算都会出错的家伙设计守护者，守护者才会马上就失去控制的！ 答对可以获得 回答正确，答错则会获得 回答错误，答 错 可 是 公 开 处 刑 哦。
      算术结束后血量会恢复正常，治疗注意立刻抬满团血，马上会有 AOE。
      小怪阶段 3 个场地机制不同：
      A 队磁极：被连线两人互相远离即可
      B 队小飞弹：注意躲开场边飘进来的小飞弹（飞的很慢，但就是撞得上）
      C 队加速度炸弹：倒计时结束时必须停手，否则会被炸（平 A、移动也视为未停手）
      小怪结束后，BOSS 会读条上 灭绝芯片buff，全身通红，读条速度变快、点名人数变多等等，冷静处理即可。执行清理建议开疾跑，否则很容易被扫到。`,
      ],
      [
        "封闭圣塔黎铎拉纳大灯塔",
        `BOSS 4 鬼龙雅兹玛特
      进场在 2、6、10 点分别标 ABC，用于后面接小怪。
      推荐MT 把 BOSS 定在中场方便处理机制，对 T 死刑是以 T 为中心的圆形 AOE，其他人注意不要靠近。
      BOSS 抬起前脚蓄力，会向其面对方向使用扇形石化 AOE，注意躲避。
      读条磁场崩坏之后，场地会分为正负二极，玩家也会获得 磁场崩坏 正极或 磁场崩坏 负极buff，需要找与自己磁极相反的地面，把自己吸在地上，由于同时还有其他机制需要处理，因此记得优先处理机制，处理结束后回到正确的地面上。地面上的磁极图标开始上浮表示磁场马上开始判定了，站错场地会被接下来的机制秒杀（丢出场外）。治疗注意回复团血。
      其他出啥躲啥有啥打啥即可，利爪是多段式突进，带拐弯的，注意追车。小怪连线会无敌，各队T 注意拉怪。`,
      ],
      [
        "天之御柱 31～40层",
        `[怖军]
      在场地边缘生成风时，他会回到中间使用击退aoe，把所有人推开，注意不要被推到aoe中。沉稳和亲疏自行无效。`,
      ],
      [
        "天之御柱 51～60层",
        `[忍冬]
      范围提示，范围提示，各种范围提示。直线，圆形，甜甜圈形，随便你怎么叫吧！见招拆招就行。Boss读条全屏伤害后，法杖会向多个方向发射直线aoe。
      单人
      对全屏伤害前的法杖环形aoe来说，中间大多数时候安全，但需要注意先在别处引导烈焰再回到中间。躲在中间对于躲避后续八个方向的直线aoe也很简单。`,
      ],
      [
        "天之御柱 71～80层",
        `[锻冶媪]
      会召唤冰球，冰球在一段时间后无范围提示爆炸。与此同时，还会出现一根冰锥，刺向房间中央。被刺中的球会爆炸，爆炸的球又会带动周围的球爆炸。冰柱出现时，一定要远离这些球。Boss吟唱月下咆哮时，会引爆其余冰球，单人时如果不慎被命中，就会被冻住然后死掉。月下咆哮之后会跳向一个目标，造成8k的伤害(冻住时秒杀)。除了以上这些，都很简单。`,
      ],
      [
        "国境防线基姆利特暗区",
        `BOSS 1 魔导巨兵三型 B 式
      出啥躲啥，T 注意死刑是正面顺劈，不要带到人了。打到一半，魔导巨兵三型 B 式会回到场地中央读条魔导斩，并出现扇形 AOE 标记和旋转箭头，箭头旋转的方向表示 BOSS 接下来要砍的方向，所有人站到扇形反箭头一边，BOSS 劈下扇形攻击后，会在地面上留下火焰区域，踩上去会有火伤。推荐看到读条魔导斩之后靠近 boss，这样就算跑错了也容易纠正。`,
      ],
      [
        "国境防线基姆利特暗区",
        `BOSS 2 普罗米修斯
      所有人开场后接近**普罗米修斯**站，开始没多久就会有一个超大范围AOE。BOSS潜入地下之后，所有人看场外的岩壁，会有一块岩壁发红发亮，BOSS会从那个方向发射直线AOE，以发亮岩石为正点，向左右两侧回避(激光炮会持续几秒，不要急着回场中)。后半段会有距离衰减AOE+激光炮的组合攻击，优先躲避激光炮。`,
      ],
      [
        "国境防线基姆利特暗区",
        `BOSS 3 安妮亚和茱莉亚
      安妮亚和茱莉亚，随便先打哪个都行，出啥躲啥，不能回避的技能请注意互相避让 (不要重叠)。每打掉一个 boss 会出一次合体技，场地上会有非常细的黄色亮光线 提示 Boss 轨迹，贴边躲避会比较安全。最后两个 BOSS 同时登场并读条灭团技，法系 / 物远可以在这里开 LB。`,
      ],
      [
        "欧米茄时空狭缝 阿尔法幻境1",
        `开场 BOSS 放中央处理机制，躲过几个 AOE 后会开始读条大海啸或炎爆，进入核心机制：
      大海啸：场地左右两侧出现水，所有人 BOSS 脚下放月环（不要乱跑，会导致没有安全区），2 次判定后会有 2 人被点名白色三角远离箭头，分别贴场地两边放置，最后放点名的地方出现水球和连线，2T 一前一后把线接走，开减伤。
      地震：T 把 BOSS 拉到最北端，治疗读条时尽可能布置一些减伤，伤害比较大。会有 2 次吹飞（可开防击退处理），然后是 2 组分摊，推荐在 BOSS 左右，分摊会出 2 次伤害，只要 1 个人不同时吃 2 个分摊就没问题。最后是出啥躲啥时间。
      炎爆：只有场地中央安全，先是点名单人小圈（被点名靠外放），2 次点名后 2 组分摊（在 BOSS 两侧），最后出啥躲啥。
      气旋：场地中央出现旋风，T 尽早把 BOSS 拉到西北角，其他人跟 BOSS 走，先是一次击退（可开防击退处理，也可以贴着旋风站，注意要沿场地对角线方向站），然后立刻接一个巨大 AOE（去 BOSS 身后躲避）。第二次吹飞后，点名2 名治疗白色远离街头，治疗分别一左一右放点名，最后 2T 接线即可。
      打完一波火风 / 水土之后，BOSS 会跳回场地中央读条深层痛楚，读条结束后全员 1 血（治疗注意抬血）。之后出啥躲啥（月环建议集中站），同时击杀掉场地中央的黑水晶，击杀结束后 BOSS 释放转场 AOE 进入下半场。下半场为上半场未出现的属性，比如上半场是水土，下半场则为火风。目前的 DPS 应该可以跳过最后一个属性的机制。`,
      ],
      [
        "欧米茄时空狭缝 阿尔法幻境2",
        `开场 BOSS 放场地中央。
      图片来自 Chariflame @Reddit(opens new window)
      玩家需要通过观察 BOSS 的旋转方式判断接下来的 AOE 形状 / 范围：
      横→横：远离
      横→竖：靠近（目标圈下）
      竖→竖：四角（BOSS 释放以自身为中心，面向前后左右的十字 AOE，如果 BOSS 歪 / 转了，那么 AOE 也会跟着歪 / 转）
      （零式难度有竖→横的组合，普通难度没有）
      随机点名 4 人：互相散开不要重叠，未被点名玩家不要站在 BOSS 与点名的连线上。
      死亡轮回：点名 1 人连续 4 次大伤害，集合刷血（点 T 可无敌单吃）。
      天光轮回：随机点名玩家放原地 AOE，看到读条结束立刻移动即可。
      转场后 BOSS 会有一次从北场来的俯冲 + 地上一堆火球，注意回避。之后刷新一只小龙和一堆柱子，MT 带小龙去场边面向场外，其他人集火输出柱子，打掉所有柱子后可解除小龙的无敌，击杀小龙。小龙有大量正面扇形 AOE，MT 以外的人不要去正面，治疗注意 T 血。
      其他出啥躲啥即可。`,
      ],
      [
        "欧米茄时空狭缝 阿尔法幻境3",
        `开场 BOSS 放在场中。
      核心机制：左 / 右舷齐射・波动炮，读条结束后会向对应方向发射 AOE，然后转 180° 再次读条，放完 AOE 再转回来。这里第二次 BOSS 转了 180° 所以很多人容易弄反，可以简单记成同穿异留（第二次和第一次读条一样，就穿过 BOSS，不同就留在原地）。
      红色点名圈会在原地留下岩浆，同时 BOSS 有射线 AOE，尽量散开贴边防。
      读条外设生成：场边出现一排小拳头，向场中飘，选中小拳头使用 欧米茄干扰器即可。
      转场后场地中央和外圈出现蓝色地板（不要踩，踩了即死），在一边打中央的监视器的同时，处理踩圈（第一次是 8 个圈，T 和近战负责内场 4 个，奶和远程负责外场 4 个；第二次 4 个圈，保证每个圈里至少 1 人即可）；第一次踩圈之后会赠送大量 LB，推荐近战把 LB 放了，之后还会再送。打完转场模拟器后，对场地中央出现的雷力投射点疯狂使用 欧米茄干扰器竖起防护罩。
      下半场的外设生成可能会召唤一个大拳头，大拳头会向其正面发射直线 AOE，注意躲避。之后可能会出现大大拳、大小拳的组合技，注意区分。
      随机点名 1 名玩家连线，被连线玩家要尽可能远离团队，线可以被传递，其他人注意不要抢线（零式难度需要固定 T 去处理）。线的伤害判定范围极大，很容易波及队友。技能判定后，被判定到的人会获得 麻痹，治疗注意驱散。`,
      ],
      [
        "欧米茄时空狭缝 阿尔法幻境4",
        `开场 BOSS 放在场中。
      开场有若干点名 AOE 之后接分摊，注意不要跑太远。
      BOSS 第一次变身后有击退，可以开防击退技能处理。这次点名后接十字 AOE，注意尽可能分散。
      BOSS 再次变身后有近身范围 AOE（大约有半场那么大），所有人先远离。之后和开场一样点名接分摊，同时有月环，要去 BOSS 脚下。
      之后 BOSS 再次溶解，点名 2 人，1 人分摊，1 人粉色圈点名。单人圈前往场边放点名，分摊人在场地中央分摊，之后中央落点出现击退，单人圈位置出现近身 AOE，推荐开防击退处理。
      接下来中央的 BOSS 举盾（大翅膀状）保护背后的 BOSS 读条，玩家应先打掉举盾的 BOSS，然后打倒另一个读条 BOSS（如果击杀失败就会团灭）。
      之后再来一次点名放圈，BOSS 出场后给玩家附加 或 ，其中带有 防护程序M的玩家留在原地打，有 防护程序F的去场边打（打错了伤害无效，要注意）。2T 注意把 BOSS 拉开，后半段 BOSS 会附加 共鸣程序：近buff，如果 2 个 BOSS 靠太近会连线超神。
      接下来基本出啥躲啥，有大量各类 AOE，治疗注意维持团队血线，另外也有对 T 的大伤害。打倒其中一个 BOSS 后，另一个 BOSS 会一直读条放 AOE，尽全力击杀即可。`,
      ],
      [
        "保镖歼灭战",
        `BOSS 的死刑都是正面扇形 AOE，T 注意面向和减伤。开场读条猪鹿蝶所有人集合，待有蝴蝶落下时离开原地（会有巨大 AOE 范围圈）。
      转场后会出现直线（冰雪棋盘格）、点名和月环，在有盾减的前提下推荐2~3 名近战重叠放置点名（2T 亦可重叠），其他远程远离 BOSS 放置点名，点名结束后会以点名位置为中央出现月环。实在无法回避月环伤害时，满血可吃下 1 层伤害。
      读条缩小旋律时，部分玩家头顶出现红色倒三角标记，被标记玩家在 BOSS 背后集合即可处理（不落单即可）。
      一段时间后 BOSS 会点名 2T 距离衰减标记，2T 前往场地角落，BOSS 会一分为二，T 各自拉住面朝场外开好减伤。治疗注意抬血，DPS 推荐优先击杀 MT 那边的分身（因为 MT 减伤可能不太够用）。
      全屏 AOE 后点名 MT 距离衰减，之后 BOSS 跳 MT，所有人去 MT 处输出（场地其他位置会被稍后出现的电球覆盖）。电球爆炸后，BOSS 读条捕获并点名 4 人，被点名的玩家注意远离 BOSS，其他人击破被点名的锁链（被点名玩家可以集合远离，然后由远敏放 LB 击破），狱门读条结束时若仍有未被救出的玩家，则会被秒杀。
      最后机制斩魔三昧，会将全队血量降为 1，所有人注意靠近 BOSS（治疗）抬血。我流破浪斩需要先在两侧躲避，等中间 AOE 判定后前往中间缝隙躲避。之后的机制为之前见过的组合技，建议 MT 把 BOSS 带在场地中央，方便机制处理。`,
      ],
      [
        "朱雀镇魂战",
        `开场T 把 BOSS 放在中场，很快就有对 T 大伤害技能赤热击，可以开个小减伤。
      打一小会 BOSS 会召唤几只小鸟，所有人需要把小鸟放在 BOSS 身下（场地中央）打死，被连线的远程注意靠近 BOSS。
      接下来一个 AOE 之后，BOSS 会召唤苏生之羽，所有人立刻转火场地中央的羽毛，苏生之羽如果炸到小鸟的尸体，小鸟就会满血加 buff 复活，而如果小鸟没有被及时打死，就会自爆 (…) 打羽毛时会同时有对 T 大伤害，治疗注意加血。
      进入 P2 之后，场地上会出现莲花宝座的图案，莲花外有 8 个小圆，每个玩家找一个圆圈站，圆圈中会出现箭头，玩家需要调整自身面向，与箭头所指方向一致（记得是角色的面向，不是你镜头的方向，面向正确的话会有光效 + 声音提示）。推荐把视角拉高（上帝视角），此时场边会出现小球向中间移动，面向正确 + 撞球就可以获得 1 层伤害增加的 buff（反之面向错误，球就会被朱雀吃掉，她的伤害增加）。
      吃完球进入动画，放 AOE 转场。所有人注意不要站在场地中央朱雀脚下红色的地板，这里在转场 AOE 之后会镂空，会掉下去的。
      核心技能 1，引诱旋律和拒绝旋律，BOSS 读条时会带有笛子的音效，不习惯看读条的玩家可以注意听。引诱会把玩家往里吸，所以要远离；拒绝会把玩家向外推，所以要靠近。这两个技能都可以用防击退技能抵挡。
      核心技能 2，醒夫十八踢 鬼宿脚，台词是请你清醒过来吧！ … 对 MT 的多段大伤害之后，接 180 度 AOE。T 看到读条鬼宿脚的时候，开启大减伤，然后向 BOSS 侧面移动。治疗注意做好抬血准备。
      核心技能 3，朱雀跳楼机，在朱雀喊话之后，场地会被分成 4 块，每块地板上会有一个 “字”，场外会有跟地板字色相同的球，同时场边会出现一只和 BOSS 连线的鸟。这只鸟会随机选择顺时针或逆时针绕场飞行，当鸟撞到球的时候，它所对应的地板就会炸（在这块地板上的玩家就会被炸的飞起）)。
      第一次跳楼机，地板和球是一一对应的，第二次开始，场边会一口气出 4 个球，4 块地板连炸（但其实只有 2 种模式，顺 / 逆时针或者又字形炸），如果不会躲的话可以去看一眼极神攻略，或者跟着其他玩家躲。实在不行可以硬吃一个地板等着奶妈抬血。
      另外还有全场 AOE、分散踩塔（踩圈）和各种直线。由于朱雀老婆的几个技能会一起放形成组合技（比如跳楼机 + 引诱 / 拒绝旋律；跳楼机 + 十八踢；跳楼机 + 分散等等），所以对初见来说可能有一定困难，注意不要慌张，冷静应对。`,
      ],
      [
        "青龙镇魂战",
        `开场 AOE 后虚证弹是对 MT 大伤害，这里开减伤即可。BOSS 跳走后观察 BOSS 身上的图案，太极图案远离，环形龙图案靠近。
      九字切是青龙的招牌技能，需要插缝躲避（以后会有九字切二连放，需要斜角走位躲避）。
      出现小怪后，红色小怪各自连线一名DPS，需要两人向外引导连线。中央的青色小怪连线 1 人，除了红色连线外的其他人全部站在 6 点方向引导青色小怪俯冲 + 分摊。分摊和圆形 AOE 结束后，两边的小怪会随机连线 2 人，被连线的人把线引导到没人的方向（通常是 6 点或者 12 点），大式鬼会向连线方向放扇形 AOE，不要打到队友。
      之后进入小怪阶段，由于打掉小怪之后会自爆，治疗注意观察小怪血量并准备抬血，真神一起爆问题不太大。
      小怪全部打完之后，青龙会把所有玩家击退到场边并转场，转场动画结束后开启疾跑迅速回到场地上。
      之后的招式以前基本都见过，击退、分摊、虚证弹、九字切、太极 / 环龙的远离靠近。唯独 BOSS 会在 12 点方向召唤一只巨大的式鬼，这只式鬼会抬起一侧的胳膊，砸下来对半场造成 AOE 伤害，当场边出现式鬼时，要注意躲避，每次式鬼出现会砸三次。第三次之后会砸一次带击退的。
      另外这个阶段会再来一次 P2 的引导，这次先是 T 接线并引导大锤（注意队友位置，不要砸到队友），然后是红蓝车轮，红车轮连线的玩家要尽量靠近车轮，防止被击退到水中。这是一连串大伤害技能，T 可以适当开大减伤，治疗注意抬血。`,
      ],
      [
        "乐欲之所瓯博讷修道院",
        `BOSS 1 机工士姆斯塔迪奥
      场地大体上被分为 4x4 的 16 个格子，场地机制基本按格子处理。
      当 BOSS 与场外小怪连线时（黄线），小怪会被激活，其对应的行 / 列会发生 AOE。BOSS 与场内小怪连线时（蓝线），小怪会被激活，自身下方的 2x2 的格子会发生 AOE。
      BOSS 使用分析后，会跳到场外的高台上，同时玩家会被随机赋予 右侧未解析、 左侧未解析或 背面未解析的 debuff，玩家脚下也会出现一个 C 形的金色圆环。玩家需要将自己未解析的一侧 / C 形环缺口对准 BOSS 方向，否则会被秒杀。BOSS 第一次必跳到东北方的台子上，之后方向随机。玩家尽可能互相远离，这样比较容易分清自己的豁口方向。`,
      ],
      [
        "乐欲之所瓯博讷修道院",
        `BOSS 2 圣骑士阿格莉亚丝
      场地上会出现剑盾标记的圈，踩圈可以激活特殊技能，部分技能需要用特殊技能来处理。
      不动无名剑：玩家踩盾圈，面向 BOSS 使用特殊技能圣盾，保持不动维持 圣盾防御buff。面向不对或使用技能后移动都会使防御无效。
      小黑屋：无特殊标记的小怪直接打，有盾标记的小怪捡圈用圣剑打。打完出门后有短暂无敌，就算遇到 AOE 也不用害怕。
      点名：推荐站一起放置。
      小怪阶段：北场 2 只小怪 AC 队分别拉住，捡盾吃 AOE；南场小怪 B 怪拉走，打到一半场地上会出现剑的标记，需要用剑打掉连线的小怪才能继续打。
      最后圣光爆裂破是连线 + 点名，可以举盾免疫，也可以硬吃（硬吃的话治疗注意抬血）。`,
      ],
      [
        "乐欲之所瓯博讷修道院",
        `BOSS 3 雷神西德
      入场位置为 B，左上 10 点方向为 A，右上 2 点方向为 C，各队先自行前往（注意不要手贱提前开怪）。
      乱命割杀打：开场第一个技能，全体 HP 降为 1 并附加 死亡宣告，必须奶满才能解 debuff，治疗们加油，其他人注意靠近治疗吃奶。
      雷神式圣剑技：根据 BOSS 动作有多种效果：
      剑放平向外指：躲开被指的圆形区域
      剑插进地面：靠近 BOSS（站在目标圈内）
      把剑举起来（手抬起来）：远离 BOSS（圆形台的外侧）
      暗影剑：点名 1 人产生巨大红黑色范围，被点名玩家放到自己队伍场地一侧。
      星天暴击打：对各队的 T 放 4 层 物理受伤加重，读条结束后放一个大伤害。T 开好减伤，治疗可以看到 4 层易伤后驱散，这样最后一下伤害就不疼了。
      幽暗剑：队伍两侧圆形平台靠近 BOSS 的地方出现黑色魔法阵，每个阵里至少需要站进 3 个人才能免疫接下来的伤害，每个队伍需要进自己原本位置左右的两个阵。
      冥界恐叫打：头顶红黑色点名，被点的玩家看到点名消失并出现橙色圈之后一路狂奔就行了，会有追踪型 AOE 一直戳过来，被戳 2 下基本必死（注意不要跑到别人的圈里）。
      小怪阶段T 拉住仇恨后面向场外，被点名的玩家，推荐将点名放在自己小怪靠场外方向（T 所在方向）
      雷神式圣剑技：小怪结束后第一个剑技必是圣光爆裂破，特点为三连平台 AOE，回避完这个技能后立刻归位，接下来是全团 1 血 + 死宣抬血的机制。
      强甲破点突：连线 1 名玩家，打一下并附加 物理受伤加重debuff，需要队友帮忙接线，一共会打 4 次，挨 2 次必死。T 不要去接，其他 7 人处理。`,
      ],
      [
        "乐欲之所瓯博讷修道院",
        `BOSS 4 圣天使阿尔蒂玛
      基本出啥躲啥，还有之前的 BOSS 友情登场（带着标志性技能）。
      读条大十字，场地上会依序落下 3 颗大水晶，水晶会向其东西南北方向发射激光，注意观察躲避。
      三兄弟标志技能：
      场地出现飞速旋转的钟表：先慢后快
      塔：躲开塔倒下的方向
      红色倒三角点名：互相靠近
      BOSS 场边蓄力带半侧火焰：躲到无火焰半侧
      之后 BOSS 暂时不会攻击，趁机赶紧救人，友方 NPC 会为玩家撑起防护罩，在罩子里仍然会掉血，请所有人多开减伤，治疗疯狂抬血，其他人集火堕天之证。
      之后的 AOE 会附带横风（可观察场地特效），注意提前躲避。大十字的横风是在第二颗大水晶落下后发生的。
      地板上出现黄色小圈的时候，跟着跑，最后一个小圈会落下小怪，需要 1 名玩家顶住小怪，其他人集火击杀。
      连线小怪需要非当前 MT 去接线。
      最后 BOSS 会把所有玩家吹飞到南侧，场地变黑，玩家需要沿着黑色场地跑到 BOSS 脚下。中途有加速度炸弹注意停车，另外还有各种 AOE 小怪注意躲避。到达 BOSS 脚下后还会有粉拳点名、白色三角远离点名，请被点名的玩家向两侧远离人群方向躲避（打不了就不打了，别炸人群）。`,
      ],
      [
        "伊甸希望乐园 觉醒之章1",
        `基本上出啥躲啥，场地边缘的黄线撞上去就会死（请不要随意尝试）。
      BOSS 跳到场边读条净土之光时，需要绕到 BOSS 身后躲避。
      点名DPS 黑圈时，需要散开放置，紧接着会出全场 AOE（仅 BOSS 脚下安全），若黑圈放在 BOSS 脚下，则黑洞会吸入玩家爆炸。
      点名2T 时，需要分开方向引导直线 AOE，其他人注意避让。
      场地转换后，BOSS 会使用技能净土射线，场地上的白球会放 4 轮射线，同时点 3 次随机 AOE，然后 BOSS 跳到场边读条净土之光，场面会非常混乱，同时一个人连续吃两下就会暴毙，建议不熟练的玩家停手专心躲技能，另外 BOSS 跳到场边之后不要急着过去，因为还会再有一轮 AOE，自己被封路就糟了。
      小怪阶段可以把小怪拉到一起，但注意小怪的平 A 是正面扇形 AOE，双 T 不要重叠。小怪没打掉则会狂暴。`,
      ],
      [
        "伊甸希望乐园 觉醒之章2",
        `BOSS 以自身和 T 为直线的五花肉色直线 AOE 之后，会出现 8 只小怪（大眼怪同模），交替向两侧慢慢飞行，注意不要撞上。
      月环之后会出现 4 只小怪向 BOSS 慢慢飞行，注意也不要撞上。
      核心技能是黑暗爆炎和黑暗神圣，配合延迟咏唱，没有延迟咏唱的黑暗爆炎和黑暗神圣分别是分散和分摊，加上延迟咏唱之后，头顶会出现紫色或黄色巨大倒计时标记，和 延迟咏唱：黑暗爆炎或 延迟咏唱：黑暗神圣buff，buff 会带有不同的时间，在倒计时结束后生效。第一次延迟咏唱的黑暗爆炎和黑暗神圣会同时爆炸（需要黑暗神圣玩家远离），之后的延迟咏唱都是先生效分摊，后分散，注意不要提前走。
      打到后半截，场边会出现一个巨手，会向场地一侧吹飞，可以开启防击退技能躲避，或站到巨手一侧等待被吹飞。吹飞可能会与踩塔一起出现：地面出现黑圈和连天的光柱，需要每个黑圈都有人踩（不踩则会出现全团 AOE 及 虚无的诅咒）。`,
      ],
      [
        "伊甸希望乐园 觉醒之章3",
        `MT 被红色点名时去场边引导直线 AOE，记得开减伤。
      BOSS 会有很多斜向 AOE，尽量不要站在场地中央，可能会比较难躲。读条巨浪时，场边会出现一个水柱，注意向水柱方向移动，或开启防击退技能。巨浪之后会紧跟海底地震，需要观察 BOSS 头的发光位置（普通难度这个副本固定第一次两边场地掉落，第二次中央掉落），由于 AOE 提醒时间非常短，需要提前走位回避（固定第一次场地中央躲避，第二次两边躲避）。
      其他的基本出啥躲啥，中间 BOSS 会消失，场地上留 3 个水圈，同时场边出现一个水圈，场地上的水圈会扩大，BOSS 会从场边的水圈冲出来，如果不会跑就跟着人群。
      最后 BOSS 读条大海啸，会给玩家上一大堆乱七八糟的 buff，其中被点名击退（角色周围出现放射状菊花动效）的玩家需要向前走到 BOSS 脚下击退队友（其他队友需要注意与他的方向距离），其他的都不用管。获得 涡动之兆buff 的人周围会出现一个黑圈，这名玩家原地不动，其他人躲他（同时会有粉色点名的小圈分散）。`,
      ],
      [
        "伊甸希望乐园 觉醒之章4",
        `场地是 4x4 的方格，技能基本上都以这些方格为单位进行结算。
      崩岩是对当前 MT 大伤害，附带 物理受伤加重效果，不过其实基本是奶的起来的，所以建议进本后双 T 交流是否换 T。
      邪土是扩散型 AOE，先一块地板亮起，然后它周围的 8 块地板亮起，然后是再外围的地板亮起，需要玩家在外围等待，里面的地板炸了之后立刻向里移动。
      BOSS 喊话覆于我身的坚硬地壳啊！的第二行，若是化为手甲碾碎敌人！，则 BOSS 背上的齿轮甲会跑到 BOSS 手上，玩家需要先在 BOSS 正面一排岩石躲避 AOE，然后脚下会变蓝，向两侧躲避即可；若第二行是化为车轮驰骋大地！，BOSS 会变为摩托车形态，需要在 BOSS 两侧相对较宽的一侧躲避（然后被击退，同时出现需要躲避的蓝色地板）。
      落石有几种模式：
      两块石头带衰减 AOE 提示：先在场边躲避衰减型 AOE，落下的两块岩石会有一块爆炸（发黄），玩家需要在另一块岩石背后躲避 BOSS 接下来的全屏 AOE。
      四角雷：落下 4 块岩石，其中一块会与 BOSS 连线变大，在没有大石头的两侧贴边躲避（比如左下角的石头变大了，则在右边或上边的中间点躲避）。
      三排雷：会在 4x4 方格的交点处依次落下 3 排雷，BOSS 会跟其中一个雷连线使之变大，玩家需要避开大雷的同时，前往第三排雷的位置，等第一排雷炸了之后，向第一排雷移动。每个小雷的爆炸范围是 2x2 方砖的内接正圆就，因此可以躲避的位置还是比较多的，如果实在不会躲可以跟着人群走。
      米字雷：会先落下十字型的雷，再落下四角雷，需要先在四角躲避，十字雷炸了之后去中间躲四角炸。
      由于两块落岩和米字雷有可能与邪土同时出现，二雷的时候先处理邪土；米字雷四角躲避后观察邪土方向躲避（冷静应对）。
      BOSS 读条大地之怒会给全团上 污泥debuff，需要治疗注意抬血。`,
      ],
      [
        "复制工厂废墟",
        `BOSS 1 多关节型：司令机
      基本上出啥躲啥，有一些需要注意的读条技能：
      连续能量弹：随机点名译名玩家施放正面扇形弹幕球，很容易暴毙，发现 BOSS 突然转身时要提高警惕。站在 BOSS 两侧及身后可回避。
      制导阵型：点名并有连线，被点名玩家注意把线引导向场外，并且不要跟其他线重合。
      侧方 / 中央旋转攻击：读条结束后时有不足 1s 的 AOE 范围提示，所以要提前躲避，侧方往中间躲，中央往两侧躲。
      空袭阵型：空中出现小飞机人并不断移动、制造圆形 AOE，参照左图确认安全点（或跑步躲避）；第二次 BOSS 会出现冲击波读条，可以开启防击退技能处理。
      - 安全点说明：小飞机刷出来的位置内侧，地板下方两根水管的交叉处（红色表示小飞机的出现位置，绿色表示对应的安全点）。
      其他的努力躲好就行了！`,
      ],
      [
        "复制工厂废墟",
        `BOSS 2 霍布斯
      玩家会根据 ABC 队被自动丢到不同的场地中，除了场地本身有机关之外，场地周围的墙壁也会旋转切换机关。屏幕中央会有各种提示台词提示机制。推荐所有人在场地右前方集合输出。
      共通机制：
      耐激光测试：全场 AOE，有点疼，推荐做一些减伤，注意抬血。
      环形激光：步进式环形 AOE，有提示但和常见 AOE 提示不同，速度很慢，推荐躲完第一个之后去场外回避剩下的 AOE。
      墙面的火炎放射器开始运作……：回头看墙壁，找没有点燃的放射器方向躲避（放射器方向略有点斜，两侧放射的话是∧形状的火焰。。
      墙面的右臂开始运作……：场地中央出现一个蓝圈，然后会出现大量 AOE 范围提示，AOE 会连续放 3 次，按中央箭头旋转方向旋转。
      墙面的左臂开始运作……：场地中央出现一个集装箱，集装箱四面壁会向外倒下，所有人在场地右前方躲避倒下的集装箱壁之后，一人接两根线远离人群吃小爆炸。如果没有 T 处理，请其他队友灵性带位。
      各队机制（地板机制）：3 个队伍所在地板会出现机关，出啥躲啥即可。B 队机关为强制移动，注意不要被移动到场边即可。`,
      ],
      [
        "复制工厂废墟",
        `BOSS 3 昂格士
      基本全场都需要观察 BOSS 胳膊，注意经常抬头。
      BOSS 举单臂的时候，注意向没有抬手的一侧躲避。举双臂时参见左图安全区说明（第一次必为情况①，第二次为情况②，之后随机）。
      各种点名基本上离开人群都没错，其中有一种黄色箭头跟踪尾巴的点名是跟踪式 AOE，会有多次 AOE 判定，不要急着回人群。
      读条能量弹幕，BOSS 胸口出现激光蓄力，同时地面出现 12 个塔，激光会覆盖住中间的 6 个塔，等激光结束后立刻去踩（每个塔里都要有人）。
      小怪阶段各队T 注意拉好大个的面向场外，小个的 2P 会帮我们轰掉，不用管。
      小怪阶段结束后，所有人南场集合，玩家会被崩到另一个台子上。（如果不在南半场的话基本上必死，要么被砸死要么掉下去摔死）
      新台子上开场两侧会出现机械臂向中央碾过，一共碾 3 次，注意观察机械臂位置躲避。之后出啥躲啥即可。`,
      ],
      [
        "复制工厂废墟",
        `BOSS 4 〇〇
      基本上出啥躲啥即可，也可以选择跟着其他人跑，如果实在不行可以考虑硬吃 1 个技能（别四处乱跑吃个饱，治疗会生气的）。
      主炮激光：随机点名正面激光，注意躲开正面。
      前后 / 左右齐射：前后躲两侧，左右躲前后。
      对接解除：〇〇离开战车变为小飞机，会从场地某一侧按 1/3 场地宽度轰炸场地。2P 会提前飞到轰炸末端（比如〇〇由北向南轰炸，那么 2P 会提前移动到南场），可以给她标记方便找位置。
      轰炸伤害判定以烟雾特效为准，不要提前移动。
      场地边上出现大齿轮：会有 1/4 场地面积的大 AOE，向没有齿轮的地方躲避。
      场地 2 角掉下来 2 辆战车：BOSS 会无敌，T 注意拉好战车仇恨。打完后 BOSS 会连线其中一辆战车，所有人去另一辆战车背后躲避 AOE，结束后立刻远离这辆战车。
      最后一波小怪跟 BOSS 1 很像，同样会读条中央 / 侧方旋转攻击，注意向两侧 / 中央躲避。`,
      ],
      [
        "黑风海底阿尼德罗追忆馆",
        `BOSS 1 不明物体
      核心技能全场圆形 AOE，同时 BOSS 脚下出现轮盘箭头，注意箭头当时停下的方向并非 AOE 区域，而是在 BOSS 观察读条结束时，箭头所指的方向才有 AOE，注意不要过早判断安全区范围。
      第二次观察读条时会出现另一只分身，同时有分摊，先处理完分摊再找安全区是来得及的。
      BOSS 和分身都会读条正面直线 AOE（头口部有红色蓄力能量球），注意避让。`,
      ],
      [
        "黑风海底阿尼德罗追忆馆",
        `BOSS 2 克琉普斯
      BOSS 趴下读条二千迈纳回转需要远离，抬手读条二千迈纳横扫躲开正面即可，趴下读条旋风眼则是要靠近。
      组合技恐怖的战锤 + 恐怖的大剑，地板上会依次出现锤子和剑的标记，先出现标记的先伤害，因此如果先出锤子，就站在剑的格子里等一下，等锤子格子出伤害动画了，再走到锤的格子里就行，反之亦然。第二次战锤 + 大剑会附带一次分摊 / 分散，先处理分摊 / 分散即可。`,
      ],
      [
        "黑风海底阿尼德罗追忆馆",
        `BOSS 3 鲁克嘶・蒂母
      BOSS 跳到场边，读条水底仪式之后，场地中央会出现一条水带，接着会有手从水里伸出来，手会向前使用 AOE，站在手背的位置就可以躲开 AOE。
      场边 8 个井盖中 4 个冒泡，BOSS 同时会跳回场中读条水底仪式，读条结束后冒泡的井盖里会蹦出小怪并连线 BOSS 无敌，因此玩家应该在水底仪式读条结束之前去踩住井盖，推荐T 和近战踩靠近中场比较近的井盖，远程职业去踩角落里较远的井盖。
      第三种水底仪式是场地长边依次出现手，先出现的先判定，在南北场空隙处等单侧手动画结束之后，向对面跑去，如果减伤做的足够的话也可以考虑硬吃一只手的伤害（需要一定装备支撑）。
      最后一种是 8 个井盖都冒水，同时场地两侧出现 4 只手，离手较近的井盖会被手扑灭，因此去踩离手较远的井盖即可。同样近战负责场中央的，远程负责场地角落的。如果没踩好井盖出现小怪，则 BOSS 变为无敌，必须先击杀小怪才行，要注意。`,
      ],
      [
        "伊甸希望乐园 共鸣之章1",
        `经过场地上的雷球后，会获得 避雷buff，叠加到 3 层之后再吃雷球会变为 蓄电，此时收到治疗量会下降，请务必避免蓄电。当 BOSS 读条蓄雷时（BOSS 会转花手并在周身出现雷电特效），去撞球保证身上至少有 1 层 避雷即可（如果实在反应不过来，可以一直保持自己身上在 1~2 层）。
      核心技能 1：武具生成，会在场地上生成 2 根或 4 根雷柱，其中长柱子会造成范围巨大的圆形伤害，短柱子什么都不会发生。因此所有人在看到场上出现柱子之后，需要在短柱子后侧躲避 AOE（4 柱时需要躲到场地角落。
      核心技能 2：幻影生成，BOSS 连线场外生成幻影，有 2 种模式，无论哪种都要躲开。中场 1 只幻影时，靠近中场实线（会有很大的向外的特效，表示会被击退，所以要尽可能靠中间，但是不能踩到中央的车道里（否则会被冲死）。场边 3 只幻影时，看地上花纹，找没有幻影的跑道即可。
      核心技能 2：雷云，点名 2 名玩家头顶紫色标记，2 人要把点名尽可能靠边放，而且两个人互相也要远离（否则生成雷云之后，雷云会互相吸引变成巨大的雷暴）。点名消失后，被点名玩家离开原位，同时在点名消失的地方出现巨大的雷云，会不断施放范围 AOE（没有范围提示，但出现伤害时会有明显的电圈特效），在雷云消失之前不要靠近。
      这个副本的几个技能会组合形成 Combo，所以治疗尽可能多关照一下团血。`,
      ],
      [
        "伊甸希望乐园 共鸣之章2",
        `P1
      BOSS 开场读条凶猛风暴，双方向 90 度扇形 AOE，特效很淡不容易看清楚，推荐把视角抬高从上往下看。
      蓝色分摊圈，点名 2 名玩家，圈里只要有超过 2 人即可顺利分摊（否则被点名的玩家会被顶上天空然后被剑一把戳死）。
      场地中央蓝色大圈，站在蓝圈边缘击退，或开防击退技能处理，不要踩进去。
      近身 AOE + 蓝色连线暴怒风暴，BOSS 会对被连线玩家释放 30 度左右范围的 AOE，被连线的人互相不要重叠，其他人也尽可能远离连线。
      核心机制：真空斩，场地会被红色 AOE 分为两半，分开后中央红黑色区域不可再踏入，场地两边会各出现 3 个风球，其中会有 2 个风球离得格外远（或者是风球与场边格外远），站在空隙中等着被吹飞即可。`,
      ],
      [
        "伊甸希望乐园 共鸣之章2",
        `P2
      BOSS 读条火焰拳，会对 1 仇MT 连线并冲锋释放技能，在连线上的所有玩家都会被附加 头晕debuff，再被连线打到一次就会变为 脑震荡，MT 注意靠近 BOSS 缩短连线，其他人注意躲开 MT。结束后需要换 T。
      读条业火拳，有 1 名玩家会被连 3 根线，需要有另外两名玩家帮忙去接线，并把线分开，同样会有 头晕debuff，注意互相保持距离（没有线的玩家也要稍微远离 BOSS，不要吃到 2 层冲锋伤害。
      读条爆裂炎，对MT 大伤害，如果带 头晕debuff 会被打上天，因此之前的火焰拳务必换 T（尽量保证接爆裂炎的 T 身上不要带有 头晕debuff）
      读条火花爆然后飞走，所有人直接追到 BOSS 脚下继续输出。`,
      ],
      [
        "伊甸希望乐园 共鸣之章2",
        `P3
      2 个 BOSS 同时出现后再次分场（P1 机制），出现风球的同时红 BOSS 会飞到一个风球脚下，有红 BOSS 那边的玩家站 BOSS 脚下，没红 BOSS 那边的玩家正常处理。其他的就是 P1P2 机制组合一遍。
      然后 BOSS 合体，多放一些减伤，否则 DPS 有可能扛不住。
      之后所有的机制都是复读，除了凶猛风暴的特效不清晰要注意之外，其他的都没什么难点。`,
      ],
      [
        "伊甸希望乐园 共鸣之章3",
        `P1
      开场 AOE 后 BOSS 读条暗光钉，会对MT 连线并施放直线大伤害技能，MT 横向移动离开人群并开好减伤，其他人注意不要跟 MT 站在一起。（之后还会多次出现）
      核心技能 1：波状号令，正面会按顺序出现球，先出现的球先冲锋，在后出现的球处躲避，等第一波球冲出去之后移动到无球的位置（比如左边先出，右边后出，那就站在右半场，等左半场的球冲出去了，向左移动躲开右半场的球）。
      第二次波状号令会带传送门，不过这次是演示，无脑在前半场处理即可。
      第三次波状号令会带完整传送门，处理方式是，看先出的球所在的位置，左右调整好后，回头看它所对应的传送门颜色（场地后方），然后心中默念这个颜色，再看左右侧的的传送门，前后移动找到异色格子站好。前方的球处理完之后，看左右侧的门，前后移动处理。`,
      ],
      [
        "伊甸希望乐园 共鸣之章3",
        `P2
      小怪阶段会有强制传送配合靠近、远离，在传送时务必注意传送方向，别掉下去了…`,
      ],
      [
        "伊甸希望乐园 共鸣之章3",
        `P3
      技能都见过，只是略有加强。强制传送会配合踩塔（在前后场），尽可能传送到场中前后方，要不然容易来不及回来。
      夜袭号令在判断横向门的时候，需要找异色的门（即如果自己初次站的那列背后是红门，那么前后移动找横向门的时候就要找蓝门）。
      号令是最容易站错 or 发生减员的地方，治疗要当心。`,
      ],
      [
        "伊甸希望乐园 共鸣之章4",
        `P1
      BOSS 读条换装，有 2 种模式，但第一次必定是背对（需要背对的换装在 BOSS 头顶有红色眼睛标识，但是 BOSS 太高了经常有人看不见……）。实在懒得看就每次靠近 BOSS 并背对就可以。
      镰形 / 阔斧回旋踢，镰形需要靠近，而阔斧需要远离 BOSS，这个技能最好看读条判断，看范围提示再跑通常来不及。
      冰霜斩 / 刺，斩为背后安全，刺为左右前安全，同上最好记名字看读条。
      核心技能：钻石星尘。被点名白色三角标记的玩家去场边找安全区放置 AOE，被点黄圈的人在中场适当互相远离即可。之后会有 4 人被点名追踪型 AOE，推荐互相远离到场边，并注意观察 AOE 提示并保持移动回避。
      读条天降一击，有击退，可以用防击退技能处理，没技能的注意不要靠场边。
      核心技能：镜中奇遇，场地上会出现镜子，镜子会复读 BOSS 的技能。第一次是冰霜斩 / 刺复读，如果是斩，则在 BOSS 身后躲完去南场（远离 2 个镜子）；如果是刺，则在 BOSS 正面躲完去北场（2 个镜子之间）。`,
      ],
      [
        "伊甸希望乐园 共鸣之章4",
        `P2
      小怪阶段。土元精会读条石肤，T 注意使用 插言打断。雷元精会反伤，治疗注意给队友抬血。水元精血厚，但可以被眩晕，尽可能集火处理它。
      场边还有一个元精会连线，需要玩家截断连线。
      包括连线在内，如果一共放跑 4 只小怪（小怪进入场地中央的水晶就算放跑），既告团灭。`,
      ],
      [
        "伊甸希望乐园 共鸣之章4",
        `P3
      BOSS 读条神圣的同时，头顶会有几个球，如果是 1 个球，就证明球砸中央，四周安全；如果是 4 个小球，那就是砸四周，中央安全。场地上特效也会发生变化。
      核心技能：光之波动，场地上会依次出现 4、2、1 个塔，而且每次会有 2 名玩家被点名，被点名的玩家不可以踩塔，需要找没人的方向引导光波，剩下塔依次需要 1、2、4 人站进去处理。节奏较快，需要冷静处理。
      核心技能：镜中奇遇，这次是镰形 / 阔斧复读，镰形先在 BOSS 脚下躲避，然后随便找个镜子底下躲避复读；阔斧需要先远离 BOSS 躲避，然后尽可能靠场地中央躲避复读。
      最后一次场地结冰会配合闲寂 / 静寂的双剑技组合，是冰霜斩 / 刺的二连组合拳，如果控制不好的话可以考虑硬吃一个。
      之后是多次 AOE，治疗注意抬血。转场动画，站撸 rush 结束。`,
      ],
      [
        "暗影决战诺弗兰特",
        `BOSS 1 幻光盗贼
      读条冲刺之后，BOSS 身上会同时出现 AOE 和连线，在 BOSS 周围的绿球全部消失时，BOSS 会瞬移到连线位置并释放对应 AOE，远离连线箭头位置即可。
      战斗后期会使用分身冲刺，BOSS 同时连线 2 个箭头，如果此时为圆形 AOE，远离箭头即可；如果是矩形 AOE，则要垂直于 AOE 方向找安全点（比如 AOE 是横条的，就纵向找没有箭头的一行）。`,
      ],
      [
        "暗影决战诺弗兰特",
        `BOSS 2 幻光亡灵法师
      开场 BOSS 会有随机扇形 AOE，所有人靠近 BOSS 以便躲避，如果中了 AOE 会附加 死亡宣告，请治疗驱散（诗人也可以用 光阴神的礼赞凯歌驱散）。
      场地四周出现黑洞，然后出现小怪连线玩家，建议所有人站在一起。小怪过一段时间后连线会消失，此时T 把 BOSS 带到没有小怪的地方，再过一会小怪会爆圆形 AOE。
      半场泥沼后，玩家脚底会出现黑圈，黑圈消失后出现小怪连线玩家，所有人分散站位，被小怪抓住后会被定身 + 小范围 AOE 伤害。
      如果打得较慢会出现第三次连线，同时连线两种小怪，先散开跑动放下第一个小怪（小怪有原地 AOE），再找一个互不干扰的地方吃第二个小怪的 AOE 即可。`,
      ],
      [
        "暗影决战诺弗兰特",
        `BOSS 3 幻光狂战士
      开场后没多久场地四角会发白，不要踏入。
      场地一侧出现巨大蓝圈的时候，所有人靠近蓝圈但不要踩进去，BOSS 会以蓝圈为中心击退玩家（防击退有效）。
      击退后会出现点名大圈，分开放置。之后身上立刻出现分摊标记，这个分摊需要和玩家之前放下的石块进行分摊。
      BOSS 跳往场边并出现覆盖全场的 AOE 范围提示时，玩家需要走进之前蓝圈留下的场地大坑内躲避（注意不要待太久，在坑里会获得 逐渐狂暴debuff，8 层之后会转为 纯正狂暴）
      当 BOSS 举起斧并有明显蓄力动作时，所有人注意躲开 BOSS 正面。`,
      ],
      [
        "人偶军事基地",
        `BOSS 1 813P：装备据点防卫装置
      红色点名T，远离人群开减伤。红色点其他人同样远离人群，出现光柱立刻离开原地回人群。
      场地出现黄色范围提示，攻击：收束粒子炮，找面积缩小较快的黄色区域躲避，实在不行跟人群。
      头顶深处的机械装置发生转向，攻击：偏向粒子炮，会向旋转一侧发射 AOE，躲到机械翼背面。
      BOSS 喊话执行 “终焉之歌” 程序……，身体上出现向外扩散的黄圈，圈上有缺口，在缺口处躲避 AOE，注意该技能为动画判定，要等地面上出现伤害动画后再前往下一个缺口安全点。
      其他出啥躲啥即可，小怪及时转火，会有一定的组合技（但及时回避就可以了）。`,
      ],
      [
        "人偶军事基地",
        `BOSS 2 724P：强化型飞行装置 [A-lpha]，767P：强化型飞行装置 [B-eta]，772P：强化型飞行装置 [C-hi]
      左中右分别是 ABC 队（系统会自动把队员踢到自己负责的 BOSS 面前），注意在击杀任意 BOSS 之前，小队队员是无法对其他队的 BOSS 造成伤害的。
      开场后不久的分摊注意面向场外，由于是直线分摊型技能，面向场内有可能会波及其他队伍。
      读条协作：回转斩击后，3 个 BOSS 会连成三角形，转向并伸出光刃。若发现己方的 BOSS 沿连线方向行进的光刃在三角外侧，则直接进入三角内侧躲避。若发现己方的 BOSS 沿连线方向行进的光刃在三角内测，则在三角形顶点正后方躲避。
      读条协作：突袭轰炸后，场地边会出现带箭头的步进式 AOE 提示，同时 BOSS 使用需要远离的 AOE。玩家需要先去远离 BOSS 反向躲避（比如步进式 AOE 指向左边，就去这个 AOE 的右边且远离 BOSS 的位置等待），BOSS 的 AOE 结束后立刻靠近 BOSS，即可躲避另一侧过来的 AOE。
      读条协作：冲锋斩击后，所有 BOSS 会前往场地北边排成一列，玩家需要注意 BOSS 伸出的光剑方向，在没有光剑一侧躲避（动画判定）。
      若打得比较慢，则会出现攻击：气浪效果弹头，场地掉落 2 枚炸弹，形成米字型 AOE，比较难回避，建议直接远离处理。`,
      ],
      [
        "人偶军事基地",
        `BOSS 3 905P：装备重型陆战装置
      BOSS 读条执行：启动激光炮台时，场地中央的装置出现高低不同的光点，所有人前往高点所在的扇形场边，等旁边场地的 AOE 结束后立刻移动到旁边即可。
      上个技能结束后立刻点名 2 名 T读条攻击：高功率激光，被点名的 T 不重叠将点名引向场外，所有人注意务必躲开这 2 人所在方向（有明显动画提示），被扫到必死。
      随机点名若干玩家攻击：收束伏特，被点名的人只要不重叠即可，不要乱跑，其他人酌情躲避。
      执行：辅助机程序时，场地外侧的屏幕会出现 R010 或 R030 的字样，R010 表示过中场直线 AOE，R030 表示自身为中心的圆形 AOE，均在 2 个辅助机中央靠场边躲避即可。
      执行：易爆型化合物时，场地上会出现若干黄圈，每个圈超过 3 人就会变蓝，如果缺人则会施放全场 AOE。（第二次施放时，每个圈只要有 2 人踩即会变色）
      第二次出现执行：辅助机程序时，场地外侧屏幕会出现 R010 和 R030 交替的字样。请找两个 R010 相邻的屏幕所连线的辅助机中央躲避（第一次屏幕连线自己前方的辅助机，第二次会连线屏幕斜向的辅助机，注意区分）`,
      ],
      [
        "人偶军事基地",
        `BOSS 4 〇〇〇〇〇〇
      BOSS 身边出现红色光点和连线时，到 BOSS 身下回避（月环）。BOSS 自身开始旋转，并出现红色直线时，躲开直线方向。之后 BOSS 消失出现在场边，到 BOSS 所对应行列的位置上回避伤害。
      BOSS 变形后读条斩机技：填充时，需要观察动作：
      半蹲举剑蓄力：大范围钢铁，远离 BOSS 回避。
      直立把剑举在脑后：正面扇形 AOE，在 BOSS 侧面 / 背后回避。
      直立把剑插在地上：月环，BOSS 脚下回避。
      BOSS 的该技能会与传送组合，当 BOSS 使用技能，同时身下出现连线时，连线上有光点的一端为 BOSS 传送后的真实位置。
      传送后，MT 注意把 BOSS 拉到场边，BOSS 读条三连冲击斩，向分摊人群连续释放 3 次带击退的分摊，分摊注意向场中方向击退，如果位置不好可能所有人都被击退到场边团灭。
      BOSS 读条四连断重击同时，有 4 名玩家头顶出现点状指示，BOSS 会跳向 1 点玩家，劈向 2 点玩家，然后跳向 3 点玩家，劈向 4 点玩家。被点 13 的人不要动，被点 24 的人不重叠即可。其他人注意回避。
      之后会有分身复读版斩机技：填充，中央 BOSS 使用一次，然后四角分身一起使用一次，注意回避。
      踩塔 + 传送，传送方式跟前面一样。
      传送 + 直线 AOE：场边出现光球，其中 2 个会发生传送，光球会向场内释放直线 AOE，观察后躲避。`,
      ],
      [
        "光之战士歼灭战",
        `P1
      开场大约 10s 时，BOSS 会使用技能降全体血量降为 1，并附加 纯正死而不僵debuff，需要治疗将所有人血量抬满，请所有人注意靠近治疗并确保自己吃到地面类治疗技能（推荐开怪后所有人站在 BOSS 目标圈内输出）。
      BOSS 读条光明利剑时，若手中举起的剑有光环特效则要靠近，若没有则需要远离（普通本会有范围提示，极神没有）。
      读条绝对爆炎时，头顶同时出现红色倒计时图标，所有人按 ESC 收武器，读条结束后会为玩家附加 3s 热病，此时任何行动都会导致大量掉血（包括移动、转身、自动攻击）。
      读条绝对冰封时，注意保持移动（一直原地跳跃亦可），否则会被暴风雪 冻结。
      之后为前三个技能的组合技，BOSS 先读条魔法剑・绝对爆炎或魔法剑・绝对冰封，然后再读条魔法剑技・光明利剑，魔法剑技・光明利剑读条结束之后，会同时判定绝对冰封 / 爆炎和光明利剑。因此先看冰封 / 爆炎决定接下来是停手还是保持移动，接下来看光明利剑的特效是靠近还是远离。
      之后场地出现一个光点，光点会在场地内画出一个三角形，三角形内为即死区域，看到光点划出的斜线后向场外躲避。同时关注北半场，三角形判定后，北半场立刻会降下一条巴哈姆特，此时向没有巴哈姆特的半场躲避俯冲。
      之后为一次对 T 死刑和一次全场 AOE。`,
      ],
      [
        "光之战士歼灭战",
        `P2
      P2 开场为 QTE，需要所有人保持连打到拘束消失，有任意一人失败则会团灭。键盘所有按键（含鼠标）、手柄所有按键均可触发连打，可以所有手指一起按键盘 / 搓手柄，一根手指连续按会有极大可能性失败。
      回到场上后 BOSS 会攒 4 格 LB 槽，在 BOSS 的 4 格 LB 攒满后（有音效）1s 使用 LB（极限技），否则会导致团灭。治疗可布置场地和盾减，LB 结束后记得抬血。`,
      ],
      [
        "光之战士歼灭战",
        `P3
      BOSS 会在 DPS 读条 LB 时立刻为自己附加 纯正神圣领域，DPS 务必要在 BOSS 读条时使用 LB，否则 LB 伤害无效。
      P3 开场会先来一次魔法剑・绝对爆炎或魔法剑・绝对冰封，需要记住并在之后处理。
      BOSS 动画召唤黑白魔，之后场地上依次出现塔（圈），需要有至少 2 名玩家踩塔才可保证团队安全。一共出现 4 个塔，第四个塔判定结束后，BOSS 读条魔法剑技・光明利剑，并与之前的冰封 / 爆炎一起判定。
      之后 BOSS 召唤黑骑诗人，场地出现 2 个黑点，同时场地北侧出现巴哈姆特。玩家需要在没有黑点且没有巴哈的 1/4c 场躲避 AOE，接下来会有一人被点名距离衰减 AOE（身上有白色向外的箭头），被点名的人前往角落放点名，剩下的人前往场地中央分摊。
      之后 BOSS 对 T 使用死刑，然后开始攒 LB，并按顺序使用。
      1 格 LB：随机点名 3 人放扇形 AOE，不重叠即可。
      2 格 LB：点名 2 治疗直线分摊，治疗在 BOSS 左右两侧，其他人分别去左右分摊即可。
      3 格 LB：点名 4 人巨大范围的 AOE，被点名的人去场地角落不重叠放置。
      之后场地再次出现两个光点画三角形，注意在两个三角外侧躲避。躲避完三角后立刻有一次冰封 / 爆炎，注意处理。
      AOE 后 BOSS 读条魔法剑・绝对爆炎或魔法剑・绝对冰封，需要先记住并在之后处理。
      BOSS 动画召唤忍者，忍者会在场地一侧召唤水柱击飞玩家（地面上会有明显的击退方向标记），可以在看到场地箭头时立刻开防击退技能，也可以走到水柱下方被击退。击退后立刻是全体分摊，推荐在场地中央处理。分摊后 BOSS 立刻读条魔法剑技・光明利剑，并与之前的冰封 / 爆炎一起判定。时间比较紧张，要注意。
      最后场地出现 4 只巴哈姆特并与 4 名玩家连线，被连线玩家注意把连线方向引导到场外，巴哈姆特会对连线方向 160 度范围喷火，范围非常大。
      对 T 死刑后场地出现扇形 AOE，第二波扇形会覆盖第一波扇形的安全区域，因此先在安全区域等待第一次扇形判定，立刻左右移动躲避第二次扇形，同时处理冰封 / 爆炎。第二波扇形与冰封 / 爆炎会同时判定。`,
      ],
      [
        "魔术工房玛托雅工作室",
        `BOSS 1 土泥人
      地面会出现泥球与玩家连线，场地四方向有 4 个流沙坑，玩家需要把自己放在球与流沙坑之间，球在经过一段时间后沿连线方向飞出去，泥球飞进坑里就会被流沙吸收掉，否则球会留在场地上继续飞。每飞一次会叠加一层易伤，所以尽可能争取一杆入洞。
      第二次会有两个沙坑被小怪挡住无法使用，要注意。`,
      ],
      [
        "魔术工房玛托雅工作室",
        `BOSS 2 水滴精
      BOSS 向场地一侧连线时，连线方向场外的水管会发亮，发亮的水管会流水出来造成直线伤害，选择没有发亮的水管方向躲避。
      BOSS 从北场跳到场外时，北场会出现一朵云，同时场地出现间歇泉，玩家需要找最靠北的间歇泉跳上云朵，击杀上面的小怪。`,
      ],
      [
        "魔术工房玛托雅工作室",
        `BOSS 3 仙子猪之母
      BOSS 跳到场边，场地出现箭头指示时，需要到场地边缘 BOSS 脚下，让 BOSS 把自己吹到中央的安全区（防击退无效）。
      距离衰减攻击之后，请继续贴远离 BOSS 的场边对着墙跑（近战尤其注意克制住自己），BOSS 会在场地另一侧吸气，在吸气结束时若被吸到 BOSS 脚下则必死。BOSS 中途会增加一次吸力（一开始是左右平移不会倒退，增加吸力之后左右平移也会有一些后退）。确保吸气机制完全结束之后再回头打 BOSS。
      场地中央出现风元精时，打掉后会被弹飞，此时可以在空中观察 BOSS 的位置和箭头方向，回到地面后向 “BOSS 方向” 跑过去等着被吹飞即可。`,
      ],
      [
        "绿宝石神兵破坏作战",
        `P1
      开场对 T 死刑后不久，场地依次出现扇形 AOE 提示和周身 AOE，同时 BOSS 身上出现箭头。扇形 AOE 会沿着 BOSS 身上的箭头方向旋转一周，周身 AOE 为步进式扩散 AOE，需要玩家贴着扇形边缘追着扇形跑，同时在扩散环两侧左右横跳（不会跑就跟着别人跑）。
      BOSS 召唤炸弹并连线，找同极的连线，并靠外侧躲避（不会跑就跟着别人跑）。
      BOSS 上下身分离后，有半场 AOE（观察 BOSS 发光侧即为 AOE 方向，场地也会有范围提示但时间比较短，建议观察 BOSS）。之后场地一侧出现蓝色圆圈，靠近圆圈等待被击退（防击退有效）
      第二次分离，BOSS 身边会出现大量的手，此时在 BOSS 圈下躲避。
      读条分而治之时，MT 开大减伤，其他人小范围分散（普通本为单体伤害，极神为范围伤害，推荐养成散开的习惯）。
      最后一次分离，有半场 AOE，同时场边出现手，手会放出光球，光球会沿直线穿过中场，站在两个光球之间即可躲避（近战可以最远距离输出）。躲完光球后还有一次击退。`,
      ],
      [
        "绿宝石神兵破坏作战",
        `P2
      随机点名三名玩家出现蓝色长条形击退，同时场地周围出现 AOE 范围提示。被点名的玩家需要沿着击退方向反向走到场地边缘，并左右移动保证自己不会被击退到 AOE 范围里（防击退无效），注意击退尽可能不要重叠。
      点名玩家脚下出现十字或叉字，如果是十字就贴场地角落放置，如果是叉字就贴场地边缘中央放置，有剑落下并出现 AOE 范围提示时就可以回到场地中央了。
      随机落下三波枪刃（圆形 AOE），并出现直线 AOE 提示。直线 AOE 遵循先出现先判定的原则，注意躲避（时间较长，不要急着动）。实在不行可以硬吃 1 个等治疗抬血，但千万不要多吃。
      BOSS 消失后会出现幻影，同时场地周围出现士兵。士兵们会集结到北场，玩家需要观察北场士兵行列之间的空缺，在空缺位置躲避 AOE，会连续释放 3 次。第二波士兵出现在场地西侧，躲避方法一样。`,
      ],
      [
        "黄金平原帕戈尔赞草原",
        `BOSS 1 阿姆鲁克
      场地四周有路灯一样的杆子，当自身被点名雷圈（附带 引雷）时，前往附近的路灯，屏幕提示 ++ 落雷的地点好像改变了！++ 远离回避雷圈即可。
      BOSS 会有大面积的前后方范围攻击，远程职业注意适当靠近 BOSS，以免来不及回避。`,
      ],
      [
        "黄金平原帕戈尔赞草原",
        `BOSS 2 魔导要塞
      屏幕提示 ++ 要塞炮开始充能！++ 时，场地北侧的 3 个炮孔中会有 2 个开始发光，所有人注意回避发光的炮孔。
      清理完小怪后，场地北边出现传送点，踩传送点到高台上输出 BOSS。打到一半会被强制送回去进第二轮小怪。
      第二轮场地边缘会出现横穿的小火箭，速度很慢冷静回避。第二轮炮孔激光会带有击退效果，可以垂直击退到安全区域，也可以直接开防击退技能躲避。`,
      ],
      [
        "黄金平原帕戈尔赞草原",
        `BOSS 3 真月巴哈姆特
      BOSS 读条异形咆哮后，场地会依序出现小的 AOE 圈，AOE 之后会变为巨大的 AOE 范围伤害。在最后出现的小 AOE 圈附近等待，第一个大 AOE 伤害出现后移动过去回避余下伤害。实在不行可以硬吃 1 个大圈的伤害。
      读条死亡轮回，是多次分摊伤害，所有人注意不要急着散开，适当交一些减伤。
      BOSS 使用真月核爆后，场地会出现黑色的圆圈，圆圈会逐步缩小。有中央安全和四角安全两种模式，注意判断。
      其他出啥躲啥即可。`,
      ],
      [
        "伊甸希望乐园 再生之章1",
        `场地边缘没有空气墙，失足会跌落要注意。
      核心机制 暗之战技：BOSS 读条同时一侧手发光，前往另一侧躲避。该机制会与后面各个机制组合反复出现，要注意。
      零式波动炮：对T 点名直线大伤害，T 开好减伤。其他人注意离开 MT，直线范围较宽，容易被扫到。
      读条暗黑天空之后，场地会变为格子的样子，稍后场地四角消失，BOSS 脚下为即死区。玩家在格子上停留一定时间后，脚下的格子会出现红色预警，此时要立刻离开该格子，否则格子会消失，玩家会掉下去。
      读条暗之泛滥：暗黑森林之后，场地四周会出现荆棘，玩家会与荆棘连线，注意一开始是发光指示线，当指示线变为不发光的荆棘时，才能扯断。
      读条广角式跳跃波动炮，同时 BOSS 与场边一侧连线。所有人需要立刻前往连线场地的边缘，躲避接下来的几乎全场范围的 AOE。
      之后出现活性弹，BOSS 与两侧连线，出现巨大范围的 AOE 提示，只有一个很小的区域安全，读条预警时间很长，细致走位即可。
      第二次暗黑天空场地变格子之后，BOSS 会在场边召唤 2 朵波动云，需要有人踩在云前面 加重并及时击杀。
      之后基本上是机制复读，出啥躲啥，由于全屏 AOe 较多，治疗注意保证团队血量。`,
      ],
      [
        "伊甸希望乐园 再生之章2",
        `场边红色区域为即死区，踩上就死，要注意。
      读条前向心聚爆并抬头时躲到 BOSS 身后。场地边出现影子，同时读条影・前向心聚爆时，躲到有影子的半场。
      读条后向心聚爆并撅尾巴时，躲到 BOSS 正面。场地边缘出现影子，同时读条影・后向心聚爆时，躲到没有影子的半场。
      读条影武者后，场地上出现 3 只大狗，其中有一只与 BOSS 有连线，只有这只是真的。大狗围着场地跳 5 次后，会使用前向心聚爆，所有人盯住真狗，当它开始读条时，跑到它身后（场边）躲避。
      读条潜影，同时 BOSS 连线场地两个角落，往没有连线的方向躲避。
      读条本影爆碎后，BOSS 会先对 T施放连续 4 次大伤害，并附带 斩击耐性降低。4 层后立刻使用影之斩击。4 层 斩击耐性降低吃影之斩击必死，推荐MT 看到 BOSS 读条影之斩击直接开无敌。若 ST 是骑士，也可以 保护MT 吃 4 层 斩击耐性降低，之后扯断保护让 MT 吃死刑。
      读条左 / 右十亿斩击时，BOSS 一侧抬手，躲到另一侧。场地边缘出现影子，同时读条影・左右十亿斩击时，躲到影子的安全侧。（以影子所在的位置为 “背”，场地中央为 “头”。比如影子出现在 3 点，使用影・左十亿斩击，那么影子面向 9 点，左侧（即 6 点钟方向）有 AOE，需要躲到右侧，即 12 点方向。如果判断有困难，可以跑到影子的位置并面对场地中央，此时面向的左右即为 BOSS 实际释放技能的左右）。
      踩塔需要至少 2 个人一起踩，注意确保所有塔上的连线都消失才算正确处理。治疗注意抬血，踩塔时会有 出血伤害。
      之后基本上是机制机制组合复读，影系列技能会连续释放两次，注意判断方向。`,
      ],
      [
        "伊甸希望乐园 再生之章3",
        `场地边缘没有空气墙，失足会跌落要注意。
      所有人需要注意，光焰圆光是大约半血伤害全屏 AOE，会在副本过程中反复出现。适当给予团队减伤，可以减轻治疗压力（尤其当团队残血时）。
      核心机制只有 2 个，但是要根据 BOSS 读条时身上的特效（火焰、雷电、金光）判断具体效果：
      燃烧击：直线 AOE
      火：第一次伤害后会发生击退，需要在第一次直线后立刻靠近 BOSS，或开启防击退技能。
      雷：会扩大一次，第二次直线宽度与场地内圆直径相同，注意远离 BOSS。
      光：会在玩家脚下留下 AOE，尽量集合躲避直线，看到 AOE 范围提示后离开即可。
      罪壤刺：点名一名玩家
      火：分摊，所有人在 BOSS 背后集合分摊。
      雷：冲向被点名玩家，并附加 DOT。在 BOSS 附近吃冲锋，注意抬血。
      光：冲向被点名玩家，并附加 大爆印。离开人群吃冲锋，大爆印倒计时结束后会发生全屏 AOE，注意布置减伤和抬血。
      读条爆印铭刻，对MT 释放大伤害，同时附加 爆印buff，倒计时结束时会释放全屏 AOE。注意为 MT 抬血，并做好全团减伤。
      读条光轮召唤，观察 BOSS 周身的特效，如果是雷，则去红色光轮那侧的安全区域，如果是火，则去蓝紫色那侧的安全区域（无视中间的光轮颜色）。与 BOSS 特效同色的光轮会扩大爆炸，范围参照地板上的花纹。
      至天绝技是一套组合机制，击退玩家后场地中央出现镰鼬并使用 270 度范围 AOE，所有人被击退后立刻回到场地中央躲避 AOE，然后观察场地边缘出现的 BOSS 分身，前往分身所在弧的中点，在第一个分身直线动画出现后按下防击退即可（若防击退技能在 CD，则需要远离雷分身所在的直线，并在火分身直线第一段伤害结束后向前走，防止被击退到场外）。
      BOSS 读条棱光幻影之后消失，玩家需要沿着场边奔跑才能看到场边的 BOSS 分身。若前往场边时没看到 BOSS，则一直跑到看到 BOSS 为止，并退回到没有 BOSS 的位置。若前往场边时看到 BOSS，则一直跑到看不到 BOSS 为止。推荐开启疾跑。
      最后为前述机制的随机组合，记住火雷的处理方法即可轻松通过。`,
      ],
      [
        "伊甸希望乐园 再生之章4",
        `场地边缘没有空气墙，失足会跌落要注意。
      有对 2 个 T 的死刑伤害，ST 注意在开怪后做二仇（开怪后打七八个技能之后开盾姿，或者让 MT 直接退避自己等等都可以）。
      开场 AOE 后，场地北边会出现 6 个蛮神水晶，BOSS 与水晶连线并读条释放，读条结束后，BOSS 会释放对应的蛮神技能：
      火：左右安全
      风：斜向安全
      水：脚下安全
      雷：远离安全
      BOSS 血量降低到一定程度之后，出现转场动画，场地北侧出现传送阵，所有人跳上去传送到小平台。
      第一波小怪打完后，有 2 名玩家被点名，被点名玩家到旁边放扇形 AOE，其他人站到 BOSS 与水晶中央的蓝色区域内（放完点名单的玩家也可以回来）参与分摊。
      第二个平台会分别点名 2 个治疗分摊，两名治疗远离中央水晶互不重叠，其他人均匀分组参与分摊即可。小怪快打完的时候会有场地击退（有明显提示），注意前往击退来源方向或开启防击退。
      第三个平台会有场地中央的击退，注意前往场地中央。小平台会被 BOSS 逐个击碎，所以打完小怪后切勿救人（救起来会立刻失去落脚点再次阵亡），打完 3 个小台子的小怪后回到大台子上再救人。BOSS 读条失乐园，所有人布置减伤。
      转场后MT 注意把 BOSS 拉面向北方。
      BOSS 会读条储存并连线 2 个蛮神水晶，玩家需要记住这两个水晶，然后当 BOSS 读条施放时，前往之前记忆的安全点躲避。
      水 + 风 / 火：BOSS 脚下斜向 / 左右安全。
      水 + 雷：远离 BOSS 前后安全
      雷 + 风 / 火：远离 BOSS 斜向 / 左右安全。（先看是否有雷，有雷远离 BOSS，水后风斜火侧；无雷靠近 BOSS，风斜火侧）
      第一次处理完成后再次储存，之后 BOSS 读条融合：泰坦，全屏 AOE 后出现机制：场地落下大小石头，先向最远离大石头的地方躲避，第一波石头爆炸后立刻离开原地，躲避第二波石头爆炸。
      读条愉悦之手时，向 BOSS 无发光一侧躲避并分摊。处理完这次半场后，BOSS 使用施放（为融合泰坦之前储存的那次）。
      之后连续 2 次释放（即时使用蛮神技能），再次储存，读条融合：希瓦，全屏 AOE 后出现机制：场地变为滑冰场，被点名玩家适当移动，互不重叠即可。之后点名分摊，可以等冰地板消失后再移动（大概有 2s 多的时间，比较充裕）。
      再次读条愉悦之手，之后分散。处理完分散后，BOSS 使用施放（为融合希瓦之前储存的那次）。`,
      ],
      [
        "钻石神兵捕获作战",
        `场地四周都会掉下去，要注意。BOSS 的平 A 是对仇恨最高的 2 人，2T 都要注意开盾（没有单人死刑，不用分 MT/ST）。另外平 A 为直线攻击，T 注意离开人群（通常在平台头尾），其他人也注意不要离 T 太近。
      开场 AOE 后不久，BOSS 另一侧出现二号机平台，可以通过平台上的圆点进行传送（普通难度传送有 3s CD，即 3 秒内不可再次传送）。
      读条装甲展开后，BOSS 身体一侧出现 3 道红色爪子一样的激光，有激光一侧为危险平台，需要到对侧平台躲避。
      点名 T 距离衰减 AOE，2 名 T 可以传送到对面平台躲避，本侧平台距离需要超过 3/4 场地距离为安全。
      第二次装甲展开为分摊（有提示），在平台中央集合分摊即可。
      BOSS 读条代号 666 后变身，场地一侧出现蓝色击退提示，靠近击退边缘等待被击飞。然后观察 AOE 提示前往安全半场。
      读条敖龙技巧时，场地周围会出现大量白球，BOSS 转向一侧。前往 BOSS 身后的场地边缘中点（有红色的范围提示，可以观察提示找到安全区）。若发现有横向红色提示覆盖该安全区，可以在 BOSS Z 形移动后前往场地对面躲避横向 AOE。其余机制均有范围提示，及时躲避即可。
      场地恢复后 BOSS 使用钻石爆发，并点名 2 人步进式 AOE，推荐被点名的人前往对侧平台，等身上的点名提示消失后，传送回本侧平台。步进式点名会横跨空中不造成伤害（如果在本场地移动会波及其他队友）。与此同时 BOSS 还会使用装甲展开，注意观察安全区。
      BOSS 使用飞手浮游炮后，场地边缘会出现 “小手手”，发射直线激光，在处理其他机制时要同时注意面前不要有小手手。
      后续的装甲展开还有分散式（BOSS 肩甲打开），会有范围提示，注意不要重叠。`,
      ],
      [
        "希望之炮台：“塔”",
        `BOSS 1 杰克
      BOSS 读条强攻击时，观察 BOSS 特效，张嘴发光为中央直线 AOE，两手握拳全身蓄力为两侧 AOE，这个技能会与之后的机制组成复合机制。
      技能魔法冲击弹 β 是点名的高伤害范围 AOE，注意远离人群开好减伤。
      BOSS 使用复制后，场地一侧会出现一个 BOSS 分身，然后两个 BOSS 身上会出现 1、2 点，会按标点顺序先后释放技能，依次观察 + 躲避即可。
      BOSS 使用跳跃后，场地会出现一些方台，BOSS 会使用击退技能，需要用方台挡住（否则会掉下去）。
      之后的复制会出现 2 个复制体，3 个 BOSS 轮流放技能。第二次跳跃后的复制体击退时，本体会同时使用强攻击，推荐在此时使用防击退技能，以便安全处理机制。`,
      ],
      [
        "希望之炮台：“塔”",
        `BOSS 2 格雷特，韩塞尔
      有 2 个 BOSS，需要 2 名T 分别拉住并保持一段距离，距离过近会导致 BOSS 连线超神。请提前协商好。
      开场后不久，BOSS 会分别读条强化：枪和强化：盾，其他人直接转火读条枪的 BOSS，拉 盾强化的 T 调整面向，让盾 BOSS 的头面向人群（面向枪 BOSS），盾 BOSS 会反弹正面以外的所有伤害，要注意。
      BOSS 跳到场边读条协作攻击：横扫时，注意 BOSS 手上的枪发光的位置，枪在外侧时，靠近两个 BOSS 中央安全；枪在内侧时，反过来远离两个 BOSS 最远的方向安全。
      同时点名一人分摊多人散开时，没有被点名的人在枪 BOSS 下方参与分摊，注意分辨。
      读条协作攻击：枪突进时，两个 BOSS 中央会出现一排红球，找没有红球的位置并贴场边即可。
      第二次使用协作攻击：横扫时，两个 BOSS 中间有连线，表示他们会交换位置，所以需要反过来处理。
      最后魔障轮会搭配 2 种攻击，第一次是搭配重突进，BOSS 会跳到场边，并把武器侧向一边发光蓄力。玩家找另一边没有魔障轮的位置回避。第二次是搭配枪扫击，玩家需要先到场地一侧回避魔障轮，然后找枪扫的安全区域回避。
      当击杀其中一个 BOSS 后，另一个 BOSS 会开始无限读条痛哭，随机使用点名 AOE 或全体不可回避 AOE，速度击杀即可。`,
      ],
      [
        "希望之炮台：“塔”",
        `BOSS 3 红衣少女
      开场后不久，场地周围和中央会变红，变红区域为秒杀区域，要注意。
      被点名白色圈的人可以消除黑色墙壁，黑色圈的可消除白色墙壁。消除墙壁后，场地一侧会出现黑色或白色的圆盘，并有对应颜色的线横穿场地，需要用同色的墙壁挡住自己与圆盘之间避免伤害。
      一段时间后，会有若干名玩家被吸入场地中央，同样用异色点名消除墙壁后，在同色墙壁外躲避场地中央坠落的陨石（陨石伤害为秒杀级）。
      对T 点名的红色预警集中能量弹是圆形范围伤害，注意远离人群。
      场地出现若干少女分身，分身出现扇形 AOE 预警和旋转提示。随便找一个少女下方，随着旋转提示旋转就可以（扇形 120 度攻击，每次旋转 120 度）。
      转场后变为骇客模式，玩家变成小飞机，只有 2 个技能。1 技能是伤害，2 技能是变色，可以对异色单位造成伤害，免疫同色单位伤害。打掉砖块和中央的球体后回到场地（打球体的时候场地上还会出现圆柱体，需要优先处理）。
      转场后的巨大化 BOSS 会连线若干名玩家，同时身上出现箭头，4 个箭头指向 BOSS 为强制向前，左 / 右箭头为强制向左 / 向右，移动距离大约有半场（一个地面黑圈直径距离），如果开了疾跑，移动距离会变为接近 2 倍。注意自己是否与 BOSS 连线，然后判断方向和安全区。
      再次出现圆盘 + 墙壁的组合，圆盘方向为交替出现，注意判断方向。需要自己与圆盘之间有同色墙壁。三次之后地面出现一黑一百 2 个陨石落点，需要找到能同时阻挡黑白陨石的墙壁位置。
      如果击杀速度较慢，之后还会出现复制 BOSS，分别使用狗链强制移动玩家还有少女分身，需要冷静判断连线和安全区。`,
      ],
      [
        "希望之炮台：“塔”",
        `BOSS 3.5 荀子 孟子
      核心机制只有 1 个，两侧盖板掀开为两侧 AOE（中央安全），中央盖板发光为中央 AOE（两侧安全）。
      从左上角往右下数第 9 个地板格子是 BOSS 激光所有 AOE 的重叠点，从这个格子往 4 个斜角方向移动一格就可以回避各个方向的 AOE（黑魔在这个重叠点放黑魔纹，可以在不离开黑魔纹的前提下回避所有的 BOSS AOE）。场地内小激光和球需要自行回避。`,
      ],
      [
        "希望之炮台：“塔”",
        `BOSS 4 伪造的神明
      BOSS 读条释放魔力时，面前出现一个圆环，圆环向左转（逆时针）为左半场 AOE，向右转（顺时针）为右半场 AOE。
      读条断唱：白同时点名 3 个人，被点名的玩家向场地左下角和右下角移动（点名重叠没关系），其他人注意躲避点名，点名圈结束后，会以它当前所在位置，沿箭头方向发射步进式 AOE，需要躲开整个箭头方向。
      BOSS 使用魔唱轮后，场面前方出现一些圆圈，同时天上会掉下红球，红球掉落到圆圈里会向场地发射直线 AOE。注意左右移动躲避。
      转场后 BOSS 使用穿透，场地变透明，场地下方会出现建筑物，需要从上往下看，前往建筑物短边所在场地边缘躲避。倒计时结束后，建筑物会从下方穿场而过。
      信号灯机制需要站在红灯所在的轨道上，绿灯轨道会有火车通过。
      BOSS 使用武装时，会有石头凝结在她身上，凝结在两手上是两侧 AOE（身下安全），凝结在身下是中央 AOE（两侧安全）。
      场地中央出现圆圈时，自己身上会同时出现黑白圈。中央圆圈落地的时候，需要让自己的同色半圈对着场地中央。
      读条崩落时，场地边缘会出现一个巨大的石柱，前往石柱附近被击退倒斜对角。两次击退后，石柱会倾斜，落下并形成 AOE 伤害，注意判断方向躲避（影子不指示方向），石柱伤害为秒杀伤害。
      其他为已有机制复读 / 组合。`,
      ],
      [
        "乐园都市笑笑镇",
        `BOSS 1 面像
      场地两侧有大板子，红色的攻击会赋予 躁怒的诅咒，蓝色的攻击会赋予 微笑的诅咒。
      BOSS 和哪侧连线，那侧的板子会进行攻击，自己身上带红色 buff，就去吃蓝色的，反之亦然。板子会上下翻转，同时可能会有分散、击退等机制，注意观察冷静处理。
      同色的 buff 吃 3 次就会暴毙，请勿这么做。两块板子之间的窄线区域切勿踩踏，吃到直接 999 万原地去世。`,
      ],
      [
        "乐园都市笑笑镇",
        `BOSS 2 框架工作员
      BOSS 读条前方跃进攻击后，会向自己面前方向跳跃 1 个 BOSS 圈的距离，躲开 BOSS 正面方向。
      BOSS 使用 = 生成工作员 == 后，场地上的 2 架无人机会生成 2 个小 BOSS 模型往前跳，可以通过无人机的方向预判小 BOSS 的跳跃方向，画面上也会有箭头提示，注意回避。`,
      ],
      [
        "乐园都市笑笑镇",
        `BOSS 3 大笑脸
核心机制是左右两侧的传送带会出现箭头，单个箭头的半侧场地会在前半场出现炸弹，三个箭头一组的半侧场地会在后半场出现炸弹。
通常默认情况下在有 3 个箭头一组的半侧场地，靠近 BOSS 处理。
当场地上出现采掘炸弹时，可以无视它，若左右半场的安全区正好在炸弹位置的话，T 也可以开好减伤去把炸弹踩掉（炸弹的爆炸范围比它本身的范围略大）。
读条左 / 右腕分解炮时，读哪边躲哪边，如果跟传送带炸弹机制同时出现，则先处理传送带炸弹，后处理左右炮。`,
      ],
      [
        "电脑梦境斯提格玛四",
        `BOSS 1 欧米茄原型
出啥躲啥。
读条前 / 后方迎击火箭时，会以 BOSS 前 / 后半场出 AOE，去另一侧躲避。
点名分散圈时会在地面上留下火圈，尽量把火圈放在场地边缘。
BOSS 读条欧米茄滑跃时，会随机点名一名玩家，同时出现分摊和击退标记，所有人尽量在中场靠近分摊，击退时小心不要被击退进火圈。
被连线火箭弹的玩家就躲开跑就行，注意尽量不要让连线横穿其他玩家。`,
      ],
      [
        "电脑梦境斯提格玛四",
        `BOSS 2 拉姆达总领
场地出现红色预警轨迹后，BOSS 会沿着轨迹在场地横冲直撞，最后到场边向场中发射半场 AOE。注意观察轨迹终点，在安全范围内向终点方向靠近。
读条狙击式波动炮时，场地中央出现 AOE 范围预警，并同时出现圆点标记（俗称麻将），有相同数量圆点的玩家在圆点附近等待引导 AOE。BOSS 读条结束后会激活场地中央的圆点，令 1 点发射直线 AOE 到头顶 1 点的玩家，2 点发射直线 AOE 到头顶 2 点的玩家，以此类推。`,
      ],
      [
        "电脑梦境斯提格玛四",
        `BOSS 3 斯提格玛四
BOSS 先在南场召唤小怪，放半场 AOE 后自爆，请在小怪自爆前击杀。
之后在西场召唤小怪，放正面扇形 AOE 后自爆，请靠近西场躲避 AOE，在小怪自爆前击杀。
BOSS 变身为螺旋柱体的时候，需要远离 BOSS；变身为圆环形时，需要靠近 BOSS。之后这个机制会与强制移动机制组合，注意自己的移动方向处理（移动距离大约是 1 个 BOSS 圈直径差一点）。`,
      ],
      [
        "海德林晖光歼灭战",
        `/p 【结晶 冰】
/p 　　D3 MT D4
/p 　　H1  ■  H2
/p 　　D1 ST D2
/p 【结晶 水】
/p 　    西：MTD1D3H1　东：STD2D4H2
/p 【结晶 土 / 光芒刃】
/p 　    boss背后
/p 【小怪阶段】
/p        dps从左侧开始先打发光水晶，t将小怪拉到不发光水晶一侧
/p 【第一轮光波】
/p        T：去对面　DPS：北边　H：原地
/p 【幻日】
/p        第三组对侧集合
/p        内侧：MTSTH1D1D2 外侧：H2D3D4`,
      ],
      [
        "万魔殿 边境之狱1",
        `场地边缘为即死圈，请注意。
      BOSS 读条惩罚抽击同时，甩出一侧锁链，该方向会有半场 AOE，注意躲避。
      读条惩罚连击随机点名一名玩家，击退后分摊，可以用防击退处理。
      读条冰火侵蚀后，场地被分为 4 块，并出现冰火块，玩家被随机赋予 寒冰侵蚀或 火焰侵蚀。场地的冰块会从下往上依次碎掉，并给场地内的玩家对应 buff，玩家需要找到与自己异色的元素块吃 buff（两次元素块碎裂的时间间隔很长，足够移动），不要站在场地分块的交界处，会直接暴毙。
      场地变为红绿相间的飞镖盘后，BOSS 读条爆锁时，身子周围会有光球浮现，白色的炸白绿地板，红色的炸红地板，注意躲避，这个机制会跟前面的锁链组成组合技。`,
      ],
      [
        "万魔殿 边境之狱2",
        `战斗开始后场地边缘出现即死圈，注意开场时不要过于靠边，会直接暴毙。这个 BOSS 没有身位，近战可以放心输出。
      开场先是点名 T 的双人分摊，然后 BOSS 使用核心机制吐息飞瀑，头和身子转向不同的方向，地面的黄色箭头表示这个方向的直线 AOE，头顶的红色箭头表示该方向的半场 AOE。可以无脑走向红箭头的背面并躲开黄色箭头前后，最近不能超过下水道的铁板（超过会吃到身体的直线 AOE）。
      下水道漫水后，只有下水道铁板和 4 个高台是安全区域，其他地方都不可以踩，后续机制都需要在这些安全区域里处理。后续机制包括分散、集合（头顶倒三角）、击退。
      水位退下后，BOSS 的头会飞到场边，进行半场 AOE。之后会点名一名T 角色距离衰减，另外随机点一名玩家直线分摊。被点名的 T 玩家远离人群去角落放技能，其他人集合分摊。
      之后全都是出啥躲啥和之前见过的机制组合，冷静应对即可。`,
      ],
      [
        "万魔殿 边境之狱3",
        `场地边缘为即死区。
      BOSS 读条魔力炼成：劫火焚天后，观察 BOSS 身上弹出的火球，如果是一个巨大的火球，立刻去场边躲避；如果是一圈小火球，就在场地中央观察，场地上会依次落下一些 AOE，前往第一个落下的 AOE 圈的右边（第二个圈的位置）躲避后续伤害。
      对 T 的死刑是范围伤害，无关人员请勿靠近 T。
      BOSS 读条暗之炎之后，场地上出现 4 个暗之炎小怪，同时有 4 名玩家被点名白圈，玩家需要用点名的白圈去砸暗炎。一个圈最多可以砸到 2 个暗炎，宁可多吃伤害也不要漏，如果漏砸了，暗炎会放出大炎上技能。
      左 / 右翼焚烧就是左右侧 AOE，注意躲避。
      BOSS 上天后会出现在场边，并从场中俯冲飞过，玩家需要在场地两侧躲避。后续还会加上分散，所以尽量不要在同一侧（单侧最多可以放下 5 名玩家），冷静分散即可。
      第一次俯冲后进入小怪阶段，需要 2 名T 都开启盾姿，把分别小鸟拉到场边，第一波小鸟击杀后还对再出现一波小鸟，这 2 波 4 只小鸟都不能在别的鸟的圈里，否则会导致后续 AOE 变得非常疼。
      之后小鸟会变成… 奇怪的样子攻击 ST，请ST 务必开启盾姿，另外需要同时关照两名 T 的血线。如果发生倒 T 的情况，请尽快复活并保持 2 仇（否则会有 DPS 吃伤害，务必注意）。
      十字地火是从场地四周出现细条地火，最终连在一起形成十字，并炸成一个比较宽的十字地火。这个机制在后面会和暗炎机制同时出现，等地火消失后立刻移动，宁可多吃伤害也不要漏。
      后续完全是出啥躲啥，前面机制组合复读。`,
      ],
      [
        "万魔殿 边境之狱4",
        `场地边缘为即死区，要注意。
      BOSS 读条布置剧场后，场地会落下幕布，幕布掀开后，会出现不同的场地。幕布中央的圆坑不能踩，踩了会中很疼很疼的 DOT（走出来就消失）。
      幕布会随着之后板画的读条造成不同的效果：
      雷板画：雷地板生成 AOE，同时场地中央距离衰减 AOE，需要在雷地板以外的场地贴边躲避。
      水板画：水地板生成 AOE，同时从场地中央击退，可以开防击退处理，否则需要站在场地中央躲开水地板方向击退。
      毒地板：单人点名 AOE，需要躲开毒地板的同时散开处理。
      火地板：分摊，注意躲开火地板，集合分摊即可。
      出现塔的时候，职能图标上标有禁止的叉子，表示该职能的人不能踩塔。请在保证所有塔都有人的前提下，正确踩塔。
      BOSS 回到场中读条换位强袭东 / 西 / 南 / 北时，场地对应一侧会出现剑或是斗篷的标记，如果是剑，需要在标记两侧躲避，如果是斗篷，需要在标记正面（击退）处理。
      BOSS 读条聚血后，场地四周出现 8 个球，并与玩家连线。球上会出现禁止的职能叉子，请在保证撞对的前提下处理，一个人最多可以撞 2 个球（撞 3 个会获得 死亡宣告debuff）。
      后续均为机制复读或组合机制。`,
      ],
      [
        "究极神兵幻巧战",
        `/p 究极神兵击退撞球
      /p 当前MT：向北击退（不撞球）
      /p 当前ST：向东击退/防击退（全减撞东）
      /p 人群：向南击退（南→西）
      /p 第三次（四组球）MT击退时开LB
      /p 如果ST减伤不够则跟人群一起撞
      /p 撞球伤害穿无敌！不要开无敌撞！`,
      ],
      [
        "神兵要塞帝国南方堡",
        `BOSS 1 魔导死神改
      会随机点名一人方向读条高功率魔导激光，没有范围提示，注意躲开 BOSS 正面。
      召唤的小怪数量很多，T 注意拉住小怪仇恨，其他人注意使用范围攻击技能清理小怪。`,
      ],
      [
        "神兵要塞帝国南方堡",
        `BOSS 2 魔导先锋强袭型
      BOSS 读条请求投放气化炸弹后，场地上会出现一个圆形提示点，该技能为距离衰减型 AOE，需要远离提示落点，距离越远伤害越低。
      其他技能出啥躲啥即可，注意陶瓷合金钻头是对 T 大伤害技能，T 注意开好减伤。`,
      ],
      [
        "神兵要塞帝国南方堡",
        `BOSS 3 莉维亚・萨斯・尤尼乌斯
      开场魔导离子是全屏 AOE，典雅女神连枪是对 T 大伤害技能。接下来无尽旋风斩是先内后外的 AOE，先在外侧躲避中央的 AOE 圈，待中央的黄圈消失后，立刻前往中央躲避外侧的 AOE 伤害。
      BOSS 读条无限刃后，是花里胡哨的 AOE 范围攻击，此时不可攻击 BOSS，只需要认真观察 AOE 范围，遵循先出现的先爆炸原则进行回避即可。如果实在找不到安全的落脚点，可以硬吃一个伤害，但万不可吃太多。
      这个 BOSS 的请求投放气化炸弹是老二的加强版，需要先躲避一堆 AOE，再找落点。她的气化炸弹有 2 种模式：
      只有 2 个落点：场地边缘四分之一弧位置安全（与 2 个落点连线成等腰三角形顶点的位置）。
      有 4 个落点：场地中央安全。
      最后 BOSS 使用 魔导增幅器后，进入狂暴状态，会连续释放全屏 AOE。治疗保证团队血线，其他人全力输出吧！`,
      ],
      [
        "最终决战天幕魔导城",
        `进场～BOSS 1
      进门清完小怪之后解锁魔导终端，传送后沿着有小怪的路线前进即可，打完小怪后会开放继续前进的路线 / 传送点。
      BOSS 1 魔导巨兵二型
      出啥躲啥。
      BOSS 1 ~ BOSS 2
      打完老一传送后，面前会出现魔导机甲，右键乘上魔导机甲，从墙壁的缺口出去继续前进。
      机甲有 2 个技能（通常使用技能 1 就可以）：1.  魔导加农炮，对指定范围内敌人造成 4500 点伤害。2.  魔导光子炮，对前方 10m 直线范围内敌人造成 3000 点伤害。
      途中遇到的究极神兵原型机械臂会使用横扫击退玩家，注意不要离得太近。最后轰开超硬陶瓷合金防爆墙就是老二了。`,
      ],
      [
        "最终决战天幕魔导城",
        `BOSS 2 尼禄・托尔・斯卡艾瓦
      开战后场地四周会出现电浆池，远程注意稍微往里站。
      有几个需要注意的技能：
      过载震碎 ： 所有人集合到一起分摊（以后有此类标记的技能均为分摊）
      过载回环 ： 击退，向击退中心站（以后有此类标记的技能，均为向箭头方向的击退）
      另外 BOSS 读条启动之后，会在场地中召唤一个魔导爪，并随机连线一名玩家并接近。被连线的玩家注意和魔导爪保持距离（把线拉长），其他人尽快转火击杀魔导爪。
      其他出啥躲啥即可，治疗注意关照团队血线。`,
      ],
      [
        "最终决战天幕魔导城",
        `BOSS 3 盖乌斯・范・巴埃萨
      打完尼禄后往里走调查魔导终端，就进入最终动画。
      BOSS 读条恐怖剑技后，正面会出现 3 个发光的蓝色叉字特效，这个叉字会向其正面发动直线 AOE，注意躲到两侧。
      其他需要注意的技能：
      从容不迫：分摊，和老二一样有分摊标记
      幻象：场地北侧出现一些 BOSS 分身，会放开场时出现的叉字接直线 AOE，如果开场的没看懂，可以看这个机制躲避（站在两个叉字之间即可）
      指引：按顺序出现一些圆形 AOE 范围提示，先出现的先炸，站在空地 / 第 3、4 波出现的 AOE 范围里，等待第 1、2 波 AOE 炸开之后立刻移动过去以躲避。
      部分技能会紧密衔接释放，治疗注意关照团队血线。
      BOSS 血量下降到极低后，会分身出 4 个盖乌斯的幻影，同时积攒盖乌斯的剑气。玩家需要在躲避技能的同时击杀 4 个幻影，当击杀全部幻影或剑气积攒到 100 时，BOSS 会释放全屏 AOE，若剑气为 100，该 AOE 为必杀伤害。在剑气积攒满之前努力击杀全部幻影吧！`,
      ],
      [
        "伊弗利特讨伐战",
        `T玩家注意开场投盾/飞斧/释放/闪雷弹之后，穿过BOSS，让BOSS背冲队友。一方面这样可以方便近战队友打身位，另外一方面BOSS会出现随机扇形喷火，如果BOSS面朝队友就会误伤友军了。治疗注意BOSS喷火比较疼，及时抬血。
      其他玩家也要注意，不要跟 T 站在一起。
      打到一半的时候场地中央会出现火狱之楔，此时需要玩家转火目标，但是 T 注意不要带着 BOSS 甩头（因为这个时候 BOSS 仍然会放扇形 AOE），如果摸不到就不要硬去摸，保证 BOSS 面向是第一的。
      打掉火狱之楔之后，BOSS 会上天，下来后放全屏 AOE 大招，治疗注意抬血，BOSS 放完大招就会立刻去挠 T，所以记得优先抬满 T 血，再慢慢处理其他队友。`,
      ],
      [
        "泰坦讨伐战",
        `场地周围是会掉下去的，要注意。
      开场T 玩家同样需要注意，投盾 / 飞斧 / 释放 / 闪雷弹之后，穿过 BOSS，让 BOSS 背冲队友（以后要养成这样的习惯，即开怪后让 BOSS 背冲队友）。
      开打后没多久，BOSS 就会起飞，场地外周出现红色 AOE 预警圈，外侧场地会随着 BOSS 落下而消失，千万不要站上去（战斗中也不要过于贴边，没有空气墙，会掉下去的）。同时 BOSS 落下是一个距离衰减伤害，越靠近场边，受到的伤害越小。治疗需要注意给站在太中间的玩家抬血，另外泰坦的跺脚也是全屏伤害，要注意。
      BOSS 除了普攻和跺脚之外，还会使用直线的冲拳，这个技能会击退玩家，如果你看到冲拳的直线预警动画就立刻躲避了，结果还是中了技能，请调低画质，检查网络连接情况。如果太靠边就会被击落到场外，千万不可以中这个技能。
      BOSS 起飞 2 次之后会露出泰坦的核心，这时需要转火打核心，同时点名一名玩家（被点名玩家有金黄地面特效），这名玩家会被花岗岩石牢封锁起来，需要其他玩家打掉石牢解救。
      打掉核心之后，泰坦最后一次起飞，落下后进入最后阶段，泰坦会使用新的技能流沙（圆形范围预警），所有人都不要贪读条或者技能 CD，看到范围就立刻出圈，如果这样还是会中技能，请调低画质，检查网络连接情况。
      泰坦的技能判定会是今后大部分副本技能判定时间点的参照，如果你无论怎么调整设置，第一时间反应都无法躲开泰坦的技能（冲拳和流沙），那么在今后的副本战斗中，你可能会感到非常棘手，建议从电脑及网络硬件下手解决。`,
      ],
      [
        "迦楼罗讨伐战",
        `这是一个略有难度的 BOSS 了，T 玩家需要会观察读条，熟练穿 BOSS 躲避技能，而DPS 玩家需要及时转火。迦楼罗几乎所有平 A 都是正面顺劈，注意不要跟 T 站在一起。
      开场T 拉北场对着墙，其他人远离石柱，BOSS 会随机点名玩家放小旋风，会伤到石柱。BOSS 读条下行突风时，T 注意穿过 BOSS 躲避，吃技能的话会被 眩晕。
      BOSS 上天后，所有人到石柱后躲避（BOSS 会降落在 12 点位置，向 6 点方向放直线 AOE，让石柱挡住 AOE 即可），AOE 动画结束后，所有人再次远离石柱。屏幕提示 ++ 迦楼罗的羽毛从天而降飞散到各处！++ 的时候，BOSS 身下会刷出很多羽毛，有能力的玩家可以预读 AOE，把羽毛扼杀在 BOSS 附近，否则需要 DPS 去清柱子附近的羽毛小怪（一定时间后羽毛会炸掉，对柱子造成伤害）。
      BOSS 第二次上天再落下时，会直接召唤羽毛，T 在 12 点等着接 BOSS 即可，其他人继续打羽毛。
      BOSS 第三次上天落下，会喊话四分五裂吧！，使用全屏 AOE，AOE 伤害可以被场地上的石柱抵消，石柱剩的越多，AOE 伤害越小，如果在之前的战斗中，石柱都被打掉的话，这个 AOE 是可能导致团灭的。
      石柱全部炸掉之后，BOSS 落下对 T 方向放寒风之歌，伤害很高，T 要注意在 BOSS 下来后绕背躲避，然后立刻回正面。`,
      ],
      [
        "近东秘宝阿尔扎达尔海底遗迹群",
        `BOSS 1 阿卜迦
      BOSS 读条触手潜行后，会放出 2 条触手（第一次是 1 条），触手在水面画出一些鬼画符之后潜入水底，接下来会以触手消失的位置为中心放出巨大范围的 AOE（半径与场地半径相同，建议贴边躲避）
      读条喷出毒酸后，场地上会分 3 次出现 AOE 范围预警，默记顺序，在第 3 批 AOE 圈位置等第一批 AOE 圈炸完后立刻移动过去。`,
      ],
      [
        "近东秘宝阿尔扎达尔海底遗迹群",
        `BOSS 2 装甲战车
      这个 BOSS 会召唤浮游炮，同时自身周围出现防御壁，反射浮游炮的攻击：
      第一次为 4 角浮游炮，找两个防御壁之间的空档躲避即可。
      之后会出现对角浮游炮 + 单边双排浮游炮配置，在中央行列靠近 2 排浮游炮的半格里，找面前没有防御壁的空档（参见配图绿色安全区示意）。
      召唤浮游炮时，BOSS 脚下亦有伤害，不可踏入。`,
      ],
      [
        "近东秘宝阿尔扎达尔海底遗迹群",
        `BOSS 3 门奴
      核心机制 1：把玩家抓到场地一侧，进入 旋转移动状态。按左右移动键可以改变头顶箭头的方向，同时转弯半径巨大（大约 1~1.5 个格子），感觉就像在超级滑的冰面上转向，需要提前规划好转弯的路径。
      第二次旋转时，BOSS 会同时附带场地直线 AOE，固定第一次中央，第二次东侧（右侧），旋转调向时要注意回避，如果连续吃到 2 次 AOE 伤害会死。
      核心机制 2：读条魔布附魔的同时，BOSS 抬手，粉紫色连线连接垂下的布幔，连线同色的布幔会发生圆形 AOE，躲到异色布幔下方即可。`,
      ],
      [
        "灿烂神域阿格莱亚",
        `BOSS 1 比尔格
      场地出现蓝色圈：击退。锤子发光 + BOSS 脚下出现雷电提示 + 蓝圈时，将会以蓝圈为中心，发生黄色雷电提示的十字或叉字扇形 AOE，调整击退方向时要注意。
      两侧场地消失的动画并没有伤害，两侧消失后，场地图案变为 3x5 的格子。
      场地变化后，长边两侧会出现锤子动画，锤子会将场地横推一格，第一次为演示动画，在中间一列是安全的。
      第二次会在某一行的格子上出现紫色的锤子，并出现紫色的 AOE 范围预警。紫色锤子所在行会被侧面的锤子敲击移动，预判紫色锤子的移动方向，找安全格子躲避。
      第三次 BOSS 会跳到场地一侧，释放覆盖 3x5 格子范围的 AOE。找到 3 行都被 AOE 预警覆盖的行，并前往远离锤子的一边躲避（锤子敲击移动格子后出现安全区）。
      读条生成分裂体后，场地东侧（右侧）出现 5 个 BOSS 分身，其中若干个会发光，发光分身的 AOE 行进速度较快。前往不发光分身的面前，待旁边发光分身的 AOE 走过去后，穿过 AOE 躲避剩余伤害。`,
      ],
      [
        "灿烂神域阿格莱亚",
        `BOSS 1.5 拉尔戈神使
      读条坏灭雷斩，正面 180 度无范围提示 AOE（仅在最后一秒有展示），看到读条就绕到 BOSS 背后。
      抬手出现雷球，2 个雷球会从中央到场边，然后分别绘制 1/4 圆的扇形区域，被圈起来的区域会产生 AOE。
      之后会有一次组合技，先判定雷球的扇形场地，再判定正面的 180 度 AOE，冷静应对即可。`,
      ],
      [
        "灿烂神域阿格莱亚",
        `BOSS 2 拉尔戈
      BOSS 读条坏灭雷击点名 3 个T 的时候，T 注意开启减伤并远离人群，这个大伤害技能为范围伤害。
      BOSS 背上有 4 个环，作为这个本的核心机制：
      丢出 2 个环放大，2 个小环在手侧，同时读条幻天破坏拳并蓄力：观察蓄力手一侧的小环的颜色，这个颜色对应的大环所在半场有 AOE，去异色半场躲避。
      有大环的同时还有彗星落下的标记：若蓄力侧为红色，则彗星落点正下方安全；若蓄力侧为蓝色，则远离落点且红色大环所在半场安全。
      场地出现紫色范围提示，同时有较细的绿线延伸到场地的手指上：绿线表示击退的方向，找绿线一路投影到立起手指，且尽头没有其他 AOE 提示的手指为安全。`,
      ],
      [
        "灿烂神域阿格莱亚",
        `BOSS 2.5 阿格莱亚双狮
      2 头狮子同时读条时，头顶会出现 1、2 的标记，标记为 1 的狮子先放技能，标记为 2 的后方，据此判断回避的时机。
      如果实在躲不来，可以考虑硬吃 1 个技能，但不要 2 个都吃。`,
      ],
      [
        "灿烂神域阿格莱亚",
        `BOSS 3 阿泽玛
      BOSS 读条两翼红炎风后，场地上会出现一些红球，这些球是会爆炸的，注意不要肆意走动。
      读条蜃景后，会出现一些 BOSS 的分身，这些分身会把面前的球往分身面向所指方向吹过去（可假想为 3x3 的场地，一次吹 1 格），第一次在分身下方躲避较为安全，第二次需要根据分身位置和箭头方向自己寻找安全点。
      BOSS 读条神炎点名 3 个T 的时候，T 注意开启减伤并远离人群，这个大伤害技能为范围伤害。
      之后 BOSS 会丢出 2 把扇子，扇子沿着场地周围飞行，当 BOSS 读条炎扇流舞・终炎时，扇子会爆炸，范围非常大（与场地半径相同），建议在 BOSS 身下观察扇子位置，待扇子停止飞行后，立刻向没有扇子的方向躲避。
      读条烈火旋扫为正面 270° 范围 AOE，仅有背后安全。
      红炎斩 + 蜃景：场地出现十字地火提示，以及 2 个分身；第一次前往分身所在 1/4 场地躲避，第二次从无分身的场地观察相邻场地的分身，没有面向自己的分身所在的场地安全。
      读条燎原之炎后，场地中央仅剩余一块三角形区域安全，会依次出现 3 次击退提示，在第一次击退边中点观察并等待，被击退后立刻移动到第二次击退边的中点，以此类推。
      这个 BOSS 伤害极高，机制很快且密集，治疗多关照团队血线，其他有救场能力的队员也尽量多关照队友。`,
      ],
      [
        "灿烂神域阿格莱亚",
        `BOSS 4 纳尔札尔
      鳞片披风向上飘，发橙色的是纳尔，头顶有蓝色煤气灶火焰的是扎尔，所有生死之择的读条都需要观察 BOSS 形态进行判断（从第 2 次开始，BOSS 有可能在读条中途进行换人，换人时会有气泡提示，建议在读条后半再进行判断）：
      生浪死环之择 ： 橙色炸中间，蓝色炸周围，按相反颜色躲避。
      生轰死爆之择 ： 橙色需要分摊的直线 AOE，蓝色追踪炮。建议被点蓝色点名的人远离人群，直到判定结束，若判定为蓝色的扎尔，则需要继续在场外绕场移动，待追踪炮伤害结束后回人群。
      生死袭火之择 ： 出现扩散型 AOE 提示，根据颜色前往不会炸的 AOE 提示圈之间回避。这些 AOE 圈之间有极小的安全区，极限贴边的话也可以确保安全。
      生死混一之择 ： 前两种的组合，先处理圆环机制，再处理分摊 / 追踪炮。
      其他技能：
      炎天净火，点名 3 人扇形 AOE，1 人分摊。建议被点名扇形的人互不重叠远离，其他人尽可能靠近 BOSS 脚下进行分摊。
      纳尔神火，需要 3 个T 进行分摊。
      炎狱破，紫色激光所向半场 AOE，读条中可能会变更方向。
      死魂爆：天上降落若干陨石，落地时 AOE 范围极大（AOE 直径与场地半径相同），需要走超过半场才能回避，注意观察陨石的位置和顺序进行回避。
      烈火之财：BOSS 移动到场边，并连线场地中随机若干个点，同时提示机制类型；第一次必定为【1 点】击退 +【2 点】远离，第二次需要观察后判断，如果出现连续击退难以调整，可以使用防击退技能处理。
      天秤之试炼：BOSS 上天，场地上出现 3 个影子并连线玩家，没有被连线的人请跟随自己小队队员。打倒影子后，之前被连线的玩家前往另外一半场地，没有被连线的玩家留在原地。观察场地北侧的天平，需要保证天平均衡，已站定 / 想不明白的玩家不要随意乱跑。若天平不平则会直接团灭。`,
      ],
      [
        "巴尔巴莉希娅歼殛战",
        `/p 【散開基準】ヘアレイド：ボス基準　それ以外：北基準
      /p 【基本散開】 【ペアバンプ】
      /p D3 MT D4　　　MTD3
      /p H1　　H2　 H1D1　 H2D4
      /p D1 ST D2　 　　 STD2
      /p 【ヘアレイド外周:足元】
      /p D3H1D1MT←▲→STD2H2D4　※外周AOE：T外周,D1D2内側
      /p 【距離減衰+頭割り】【プレステ：TH固定法】
      /p 　　MT　　ST　　　　　　MT(A)
      /p 　　　　◎ 　 　 　　　H1(D) DPS H2(B)
      /p 　　　頭割り 　 　 　　　　ST(C) ※Tの２回目は1回目と同じマーカー付近
      /p 【呪髪拘束1】① ③マーカー頭割り
      /p 【呪髪拘束2】DPS：時計回り　TH：反時計回り
      /p 【4連円範囲捨て】Cマーカー付近から時計回り
      /p 【プレステバンプ】対角：DPS時計側 TH反時計側とペア　隣：隣組とペア`,
      ],
      [
        "巴尔巴莉希娅歼殛战",
        {
          "A": { "X": 100.0, "Y": 0.0, "Z": 85.0, "ID": 0, "Active": true },
          "B": { "X": 115.0, "Y": 0.0, "Z": 100.0, "ID": 1, "Active": true },
          "C": { "X": 100.0, "Y": 0.0, "Z": 115.0, "ID": 2, "Active": true },
          "D": { "X": 85.0, "Y": 0.0, "Z": 100.0, "ID": 3, "Active": true },
          "One": { "X": 107.5, "Y": 0.0, "Z": 92.5, "ID": 4, "Active": true },
          "Two": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 5, "Active": false },
          "Three": { "X": 92.5, "Y": 0.0, "Z": 107.5, "ID": 6, "Active": true },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
        "ぬけまる",
      ],
      [
        "萨菲洛特幻巧战",
        {
          "A": { "X": 0.0, "Y": 0.074, "Z": -11.162, "ID": 0, "Active": true },
          "B": { "X": 17.5, "Y": 0.052, "Z": 0.0, "ID": 1, "Active": true },
          "C": { "X": 0.0, "Y": 0.052, "Z": 17.176, "ID": 2, "Active": true },
          "D": { "X": -17.5, "Y": 0.052, "Z": 0.0, "ID": 3, "Active": true },
          "One": { "X": 5.7, "Y": 0.082, "Z": -17.5, "ID": 4, "Active": true },
          "Two": { "X": -5.7, "Y": 0.082, "Z": -17.5, "ID": 5, "Active": true },
          "Three": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 6, "Active": false },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
        "奶油咖啡",
      ],
      [
        "萨菲洛特幻巧战",
        {
          "A": { "X": -12.618, "Y": 0.052, "Z": 14.878, "ID": 0, "Active": true },
          "B": { "X": 12.964, "Y": 0.052, "Z": 14.779, "ID": 1, "Active": true },
          "C": { "X": -17.952, "Y": 0.052, "Z": -8.664, "ID": 2, "Active": true },
          "D": { "X": 0.207, "Y": 0.073, "Z": -7.358, "ID": 3, "Active": true },
          "One": { "X": -9.917, "Y": 0.052, "Z": -2.812, "ID": 4, "Active": true },
          "Two": { "X": 10.113, "Y": 0.052, "Z": -2.826, "ID": 5, "Active": true },
          "Three": { "X": 18.873, "Y": 0.052, "Z": -6.124, "ID": 6, "Active": true },
          "Four": { "X": 0.0, "Y": 0.0, "Z": 0.0, "ID": 7, "Active": false },
        },
        "Standard",
      ],
      [
        "萨菲洛特幻巧战",
        `/p 幻魔神【紫圈中场固定】站位宏
       /p 魔神之怒（分组分摊）： 左ST治疗　右DPS
       /p          【绿紫圈】                              【知识分散】
       /p             H1   H2                                D1            D2
       /p 　  D3               D4                          MT            ST
       /p D1     MT     ST     D2        撼地                                    撼地 
       /p 　　　     紫                          H       D3      H       D4      D
       /p 　 　　BOSS                  
       /p ↓↓↓↓↓↓↓↓↓↓
       /p 小怪：大MT　小ST　顺序→小大小小大小
       /p 塔(Debuff有)　左：坦克治疗　右：DPS  同组同色坦克与D1D2补位
       /p 塔(Debuff无)　左：MT　右：ST
       /p 撼地　左：治疗　右：DPS`,
        "紫圈中场固定 候鸟症候群Xyz",
      ],
      [
        "萨菲洛特幻巧战",
        `/p 幻魔神【紫圈场边固定】站位宏
       /p 魔神之怒（分组分摊）： 左ST治疗　右DPS
       /p      【绿紫圈】                                【知识分散】
       /p              紫                                      D1            D2
       /p   H1               H2                           MT            ST
       /p D3                   D4          撼地                                    撼地 
       /p     T      D1    D2               H        D3      H       D4      D
       /p  　 　BOSS                  
       /p ↓↓↓↓↓↓↓↓↓
       /p 小怪：大MT　小ST　顺序→小大小小大小
       /p 塔(Debuff有)　左：坦克治疗　右：DPS  同组同色坦克与D1D2补位
       /p 塔(Debuff无)　左：MT　右：ST
       /p 撼地　左：治疗　右：DPS`,
        "紫圈场边固定 候鸟症候群Xyz",
      ],
    ] as [string, string | PPJSON, string?][]
  ).forEach((m) => {
    fastPush(m[0], m[1], m[2]);
  });
});
function getSource(href: string): string {
  return ` <a href='${href}' target='_blank'>出处</a>`;
}
function fastPush(zoneName: string, data: PPJSON | string, coverTitle?: string): void {
  const mapID = getZoneIDByZoneName(zoneName);
  if (!mapID) {
    console.error(`默认标点库导入时，无法找到${zoneName}对应的mapID`);
    return;
  }
  if (defaultMacro.zoneId[mapID] === undefined) defaultMacro.zoneId[mapID] = [];
  if (typeof data === "object") {
    defaultMacro.zoneId[mapID].push({
      Name: coverTitle ?? data.Name ?? zoneName + "WayMark",
      Type: "place",
      Place: data,
    });
  }
  if (typeof data === "string") {
    defaultMacro.zoneId[mapID].push({
      Name: coverTitle ?? zoneName,
      Type: "macro",
      Text: data,
    });
  }
}
