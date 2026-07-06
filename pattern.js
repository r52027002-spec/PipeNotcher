import {
    generatePipeCircle,
    calculateIntersectionCurve
} from "./geometry.js";


export function createPattern(options) {

    const data = {

        mainDiameter: options.mainDiameter,
        branchDiameter: options.branchDiameter,
        angle: options.angle,
        divisions: options.divisions ?? 180,

        points: {
            main: generatePipeCircle({
                diameter: options.mainDiameter,
                divisions: options.divisions ?? 180
            }),

            branch: generatePipeCircle({
                diameter: options.branchDiameter,
                divisions: options.divisions ?? 180
            })
        },

        intersectionCurve:
            calculateIntersectionCurve({
                mainDiameter: options.mainDiameter,
                branchDiameter: options.branchDiameter,
                angle: options.angle,
                divisions: options.divisions ?? 180
            })
    };


    return data;
}
