/**
 * ============================================================
 * PipeNotcher
 * utils.js
 * ------------------------------------------------------------
 * 共通ユーティリティ関数
 *
 * プロジェクト全体で使用する数学関数や
 * 単位変換関数をまとめる。
 *
 * Ver 0.0.2
 * ============================================================
 */

/**
 * 度 → ラジアン
 *
 * @param {number} degree
 * @returns {number}
 */
export function degreeToRadian(degree) {
    return degree * Math.PI / 180;
}

/**
 * ラジアン → 度
 *
 * @param {number} radian
 * @returns {number}
 */
export function radianToDegree(radian) {
    return radian * 180 / Math.PI;
}

/**
 * 円周長
 *
 * @param {number} diameter
 * @returns {number}
 */
export function circumference(diameter) {
    return Math.PI * diameter;
}

/**
 * 半径
 *
 * @param {number} diameter
 * @returns {number}
 */
export function radius(diameter) {
    return diameter / 2;
}

/**
 * 指定した桁数で丸める
 *
 * @param {number} value
 * @param {number} digits
 * @returns {number}
 */
export function round(value, digits = 3) {

    const factor = Math.pow(10, digits);

    return Math.round(value * factor) / factor;

}

/**
 * 数値を指定範囲へ収める
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {

    return Math.min(Math.max(value, min), max);

}

/**
 * 角度を0〜360へ正規化
 *
 * @param {number} angle
 * @returns {number}
 */
export function normalizeAngle(angle) {

    return ((angle % 360) + 360) % 360;

}

/**
 * ミリ→ポイント
 *
 * PDF描画用
 *
 * @param {number} mm
 * @returns {number}
 */
export function mmToPoint(mm) {

    return mm * 72 / 25.4;

}

/**
 * ミリ→ピクセル
 *
 * Canvas描画用
 *
 * @param {number} mm
 * @param {number} dpi
 * @returns {number}
 */
export function mmToPixel(mm, dpi = 96) {

    return mm * dpi / 25.4;

}
