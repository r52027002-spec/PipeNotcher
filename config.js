/**
 * ============================================================
 * PipeNotcher
 * config.js
 * ------------------------------------------------------------
 * プロジェクト全体で使用する設定値を管理するファイル
 *
 * 【役割】
 * ・対応パイプ径
 * ・用紙設定
 * ・描画設定
 * ・PDF設定
 * ・計算精度
 *
 * Ver 0.0.1
 * ============================================================
 */

/**
 * 対応パイプ径（外径：mm）
 *
 * Ver1.0対応サイズ
 */
export const PIPE_SIZES = [
    21.7,
    27.2,
    34.0,
    48.6,
    60.5,
    76.3,
    89.1,
    114.3
];

/**
 * 用紙設定
 */
export const PAPER = {

    // A4横サイズ(mm)
    width: 297,

    // A4縦サイズ(mm)
    height: 210
};

/**
 * PDF設定
 */
export const PDF = {

    // 実寸(100%)
    scale: 1.0,

    // 自動ページ分割
    autoSplit: true
};

/**
 * 相貫線計算設定
 */
export const GEOMETRY = {

    // 円周分割数
    // 720 = 0.5°刻み
    divisions: 720,

    // 最低分割数
    minDivisions: 180,

    // 最大分割数
    maxDivisions: 2880
};

/**
 * 描画設定
 */
export const DRAW = {

    // 切断線太さ(mm)
    cutLineWidth: 0.35,

    // センターライン太さ(mm)
    centerLineWidth: 0.20,

    // 十字マークサイズ(mm)
    crossMarkSize: 6,

    // 100mm確認スケール
    scaleLength: 100
};

/**
 * 対応角度
 *
 * 将来は任意角度へ拡張予定
 */
export const SUPPORTED_ANGLES = [
    45,
    90
];

/**
 * アプリ情報
 */
export const APP = {

    name: "PipeNotcher",

    version: "0.0.1",

    author: "Ryu & ChatGPT",

    description: "Pipe intersection template generator"
};
