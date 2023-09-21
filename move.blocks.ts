/**
 * Custom blocks
 */
//% weight=100 color=#097969 icon="Ω"
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
        let threshold = -1500; // Adjust this threshold value as needed
        let prevX = input.acceleration(Dimension.X);
        let prevY = input.acceleration(Dimension.Y);
        let prevZ = input.acceleration(Dimension.Z);

        basic.pause(100); // Wait for a moment to collect new readings

        let currentX = input.acceleration(Dimension.X);
        let currentY = input.acceleration(Dimension.Y);
        let currentZ = input.acceleration(Dimension.Z);

        let deltaX = (currentX - prevX);
        let deltaY = (currentY - prevY);
        let deltaZ = (currentZ - prevZ);


        if (deltaY < threshold) {
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

        let deltaX = (currentX - prevX);
        let deltaY = (currentY - prevY);
        let deltaZ = (currentZ - prevZ);


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

        let deltaX = (currentX - prevX);
        let deltaY = (currentY - prevY);
        let deltaZ = (currentZ - prevZ);


        if (deltaZ > threshold) {
            return true; // Walking detected
        } else {
            return false; // No Walking detected
        }
    }




    /**
    * Check Standing
    * @returns True if standing is detected, false otherwise.
    */
    //% block="Is Standing"
    export function isStanding(): boolean {
        let threshold = -700; // Adjust this threshold value as needed
        let prevX = input.acceleration(Dimension.X);
        let prevY = input.acceleration(Dimension.Y);
        let prevZ = input.acceleration(Dimension.Z);

        basic.pause(100); // Wait for a moment to collect new readings

        let currentX = input.acceleration(Dimension.X);
        let currentY = input.acceleration(Dimension.Y);
        let currentZ = input.acceleration(Dimension.Z);

        let deltaX = (currentX - prevX);
        let deltaY = (currentY - prevY);
        let deltaZ = (currentZ - prevZ);


        if (deltaY < threshold) {
            return true; // Standing detected
        } else {
            return false; // No Standing detected
        }
    }

    ////The below function probably won't work. It seems that the mircobit is unable to
    ////Determine the directionality of movement?
    /**
    * Check Sitting
    * @returns True if sitting is detected, false otherwise.
    */
    //% block="Is Sitting"
    export function isSitting(): boolean {
        let threshold = 700; // Adjust this threshold value as needed
        let prevX = input.acceleration(Dimension.X);
        let prevY = input.acceleration(Dimension.Y);
        let prevZ = input.acceleration(Dimension.Z);

        basic.pause(100); // Wait for a moment to collect new readings

        let currentX = input.acceleration(Dimension.X);
        let currentY = input.acceleration(Dimension.Y);
        let currentZ = input.acceleration(Dimension.Z);

        let deltaX = (currentX - prevX);
        let deltaY = (currentY - prevY);
        let deltaZ = (currentZ - prevZ);


        if (deltaY > threshold) {
            return true; // Sitting detected
        } else {
            return false; // No Sitting detected
        }
    }


}