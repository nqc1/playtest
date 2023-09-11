/**
 * Custom blocks
 */
//% weight=100 color=#548B54 icon="\uf0a4"
namespace MoveAndPlay {

    /**
      * Check Movement
      * @returns True if movement is detected, false otherwise.
      */
    //% block="Is Moving"
    export function isMovementDetected(): boolean {
        let threshold = 500; // Adjust this threshold value as needed
        let prevX = input.acceleration(Dimension.X);
        let prevY = input.acceleration(Dimension.Y);
        let prevZ = input.acceleration(Dimension.Z);

        basic.pause(100); // Wait for a moment to collect new readings

        let currentX = input.acceleration(Dimension.X);
        let currentY = input.acceleration(Dimension.Y);
        let currentZ = input.acceleration(Dimension.Z);

        let deltaX = Math.abs(currentX - prevX);
        let deltaY = Math.abs(currentY - prevY);
        let deltaZ = Math.abs(currentZ - prevZ);

        //calculate acceleration via euclidian norm rather than by individual directions
        if (Math.sqrt((deltaX * deltaX) + (deltaY * deltaY) + (deltaZ * deltaZ)) > threshold) {
            //if (deltaX > threshold || deltaY > threshold || deltaZ > threshold) {
            return true; // Movement detected
        } else {
            return false; // No movement detected
        }
    }


    /**
        * Check Jumping
        * @returns True if Jumping is detected, false otherwise.
        */
    //% block="Is Jumping"
    export function isJumping(): boolean {
        let threshold = 1750; // Adjust this threshold value as needed
        let prevX = input.acceleration(Dimension.X);
        let prevY = input.acceleration(Dimension.Y);
        let prevZ = input.acceleration(Dimension.Z);

        basic.pause(100); // Wait for a moment to collect new readings

        let currentX = input.acceleration(Dimension.X);
        let currentY = input.acceleration(Dimension.Y);
        let currentZ = input.acceleration(Dimension.Z);

        let deltaX = Math.abs(currentX - prevX);
        let deltaY = Math.abs(currentY - prevY);
        let deltaZ = Math.abs(currentZ - prevZ);


        if (deltaY > threshold) {
            return true; // Jumping detected
        } else {
            return false; // No Jumping detected
        }
    }


    /**
        * Check Running
        * @returns True if Running is detected, false otherwise.
        */
    //% block="Is Running"
    export function isRunning(): boolean {
        let threshold = 750; // Adjust this threshold value as needed
        let prevX = input.acceleration(Dimension.X);
        let prevY = input.acceleration(Dimension.Y);
        let prevZ = input.acceleration(Dimension.Z);

        basic.pause(100); // Wait for a moment to collect new readings

        let currentX = input.acceleration(Dimension.X);
        let currentY = input.acceleration(Dimension.Y);
        let currentZ = input.acceleration(Dimension.Z);

        let deltaX = Math.abs(currentX - prevX);
        let deltaY = Math.abs(currentY - prevY);
        let deltaZ = Math.abs(currentZ - prevZ);


        if (deltaZ > threshold) {
            return true; // Running detected
        } else {
            return false; // No Running detected
        }
    }


    /**
        * Check Walking
        * @returns True if Walking is detected, false otherwise.
        */
    //% block="Is Walking"
    export function isWalking(): boolean {
        let threshold = 400; // Adjust this threshold value as needed
        let prevX = input.acceleration(Dimension.X);
        let prevY = input.acceleration(Dimension.Y);
        let prevZ = input.acceleration(Dimension.Z);

        basic.pause(100); // Wait for a moment to collect new readings

        let currentX = input.acceleration(Dimension.X);
        let currentY = input.acceleration(Dimension.Y);
        let currentZ = input.acceleration(Dimension.Z);

        let deltaX = Math.abs(currentX - prevX);
        let deltaY = Math.abs(currentY - prevY);
        let deltaZ = Math.abs(currentZ - prevZ);


        if (deltaZ > threshold) {
            return true; // Walking detected
        } else {
            return false; // No Walking detected
        }
    }


}