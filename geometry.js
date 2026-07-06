/**
 * ============================================================
 * PipeNotcher
 * geometry.js
 * ------------------------------------------------------------
 * 相貫線計算エンジン（コア）
 *
 * v0.0.3
 * ・入力バリデーション
 * ・内部データ整形
 * ・基本構造のみ
 *
 * ※まだ相貫線計算はしない（設計段階）
 * ============================================================
 */

import { PIPE_SIZES, GEOMETRY } from "./config.js";
import { clamp } from "./utils.js";

/**
 * メイン関数
 * 相貫線パターン生成（将来ここが中核になる）
 */
export function generateIntersectionPattern(options) {

    const config = normalizeInput(options);

    validateConfig(config);

    const points = generatePipeCircle({
        diameter: config.mainDiameter,
        divisions: config.divisions
    });

    return {
        points,
        width: config.mainDiameter,
        height: config.mainDiameter,
        mainDiameter: config.mainDiameter,
        branchDiameter: config.branchDiameter,
        angle: config.angle,
        divisions: config.divisions
    };
}

/**
 * 入力を正規化する
 */
function normalizeInput(options) {

    const mainDiameter = Number(options.mainDiameter);
    const branchDiameter = Number(options.branchDiameter);
    const angle = Number(options.angle);
    const divisions = options.divisions
        ? Number(options.divisions)
        : GEOMETRY.divisions;

    return {
        mainDiameter,
        branchDiameter,
        angle,
        divisions
    };
}

/**
 * 入力チェック
 */
function validateConfig(config) {

    if (!isValidPipe(config.mainDiameter)) {
        throw new Error("Invalid main diameter");
    }

    if (!isValidPipe(config.branchDiameter)) {
        throw new Error("Invalid branch diameter");
    }

    if (config.angle <= 0 || config.angle >= 180) {
        throw new Error("Invalid angle");
    }

    if (config.divisions < GEOMETRY.minDivisions ||
        config.divisions > GEOMETRY.maxDivisions) {
        throw new Error("Invalid divisions");
    }
}

/**
 * パイプ径チェック
 */
function isValidPipe(diameter) {

    return PIPE_SIZES.includes(diameter);
}
/**
 * 円周上の点列を生成する
 *
 * @param {number} diameter - 円の直径
 * @param {number} divisions - 分割数
 * @returns {Array<{x:number,y:number}>}
 */
export function generateCirclePoints(diameter, divisions) {

    const radius = diameter / 2;
    const points = [];

    for (let i = 0; i <= divisions; i++) {

        const angle = (Math.PI * 2 * i) / divisions;

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        points.push({ x, y });
    }

    return points;
}
/**
 * 2D点を回転させる
 *
 * @param {{x:number,y:number}} point
 * @param {number} angleRad - ラジアン
 * @returns {{x:number,y:number}}
 */
export function rotatePoint(point, angleRad) {

    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);

    return {
        x: point.x * cos - point.y * sin,
        y: point.x * sin + point.y * cos
    };
}

/**
 * 点をオフセット（平行移動）
 *
 * @param {{x:number,y:number}} point
 * @param {number} dx
 * @param {number} dy
 */
export function translatePoint(point, dx, dy) {

    return {
        x: point.x + dx,
        y: point.y + dy
    };
}
/**
 * 円周点列を生成（中心基準）
 *
 * @param {Object} options
 * @param {number} options.diameter
 * @param {number} options.divisions
 * @returns {Array<{x:number,y:number}>}
 */
export function generatePipeCircle(options) {

    const diameter = options.diameter;
    const divisions = options.divisions;

    const radius = diameter / 2;
    const points = [];

    for (let i = 0; i <= divisions; i++) {

        const theta = (Math.PI * 2 * i) / divisions;

        points.push({
            x: radius * Math.cos(theta),
            y: radius * Math.sin(theta)
        });
    }

    return points;
}