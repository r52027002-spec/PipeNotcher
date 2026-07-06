/**
 * ============================================================
 * PipeNotcher
 * renderer.js
 * ------------------------------------------------------------
 * Canvas描画エンジン（デバッグ可視化用）
 *
 * 役割：
 * ・geometry.jsの結果を可視化
 * ・円・点列・補助線を描画
 *
 * v0.0.4
 * ============================================================
 */

import { mmToPixel } from "./utils.js";
import { DRAW } from "./config.js";

/**
 * メイン描画関数
 *
 * @param {HTMLCanvasElement} canvas
 * @param {Object} data geometry.jsの出力
 */
export function renderPattern(canvas, data) {

    if (!canvas || !data) return;
    
    console.log(data);

    const ctx = canvas.getContext("2d");

    clearCanvas(ctx, canvas);

    const scale = 2;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // 主管
    drawPoints(ctx, data.points.main, centerX, centerY, scale);

    // 枝管（少しずらして見やすく）
    drawPoints(ctx, data.points.branch, centerX + 80, centerY, scale);
// 相貫線（展開図）
drawIntersectionCurve(
    ctx,
    data.intersectionCurve,
    50,
    canvas.height - 100,
    scale
);
    drawInfo(ctx, data);
    /**
 * 相貫線描画
 */
function drawIntersectionCurve(
    ctx,
    curve,
    offsetX,
    offsetY,
    scale
) {

    if (!curve || curve.length === 0) return;


    ctx.strokeStyle = "#0000ff";
    ctx.lineWidth = 2;


    ctx.beginPath();


    const first = curve[0];

    ctx.moveTo(
        offsetX + first.x * scale,
        offsetY - first.y * scale
    );


    for (let i = 1; i < curve.length; i++) {

        const p = curve[i];

        ctx.lineTo(
            offsetX + p.x * scale,
            offsetY - p.y * scale
        );

    }


    ctx.stroke();
}

/**
 * キャンバスクリア
 */
function clearCanvas(ctx, canvas) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * 点列描画
 */
function drawPoints(ctx, points, centerX, centerY, scale) {

    if (!points || points.length === 0) return;

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    ctx.beginPath();

    const first = points[0];

    ctx.moveTo(
        centerX + first.x * scale,
        centerY + first.y * scale
    );

    for (let i = 1; i < points.length; i++) {

        const p = points[i];

        ctx.lineTo(
            centerX + p.x * scale,
            centerY + p.y * scale
        );
    }

    ctx.stroke();
}

/**
 * デバッグ情報表示
 */
function drawInfo(ctx, data) {

    ctx.fillStyle = "#333";
    ctx.font = "12px Arial";

    ctx.fillText(
        `Main: ${data.mainDiameter}mm`,
        10,
        20
    );

    ctx.fillText(
        `Branch: ${data.branchDiameter}mm`,
        10,
        40
    );

    ctx.fillText(
        `Angle: ${data.angle}°`,
        10,
        60
    );

    ctx.fillText(
        `Points: ${data.points.length}`,
        10,
        80
    );
}
