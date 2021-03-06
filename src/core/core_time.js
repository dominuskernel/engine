pc.extend(pc, (function () {
    /**
     * @private
     * @name pc.Timer
     * @constructor Create a new Timer instance
     * @class A Timer counts milliseconds from when start() is called until when stop() is called.
     */
    var Timer = function Timer() {
        this._isRunning = false;
        this._a = 0;
        this._b = 0;
    };
    
    Timer.prototype = {
        /**
         * @private
         * @function
         * @name pc.Timer#start
         * @description Start the timer
         */
        start: function () {
            this._isRunning = true;
            this._a = (new Date()).getTime();
        },

        /**
         * @private
         * @function
         * @name pc.Timer#stop
         * @description Stop the timer
         */
        stop: function() {
            this._isRunning = false;
            this._b = (new Date()).getTime();
        },
    
        /**
         * @private
         * @function
         * @name pc.Timer#getMilliseconds
         * @description Get the number of milliseconds that passed between start() and stop() being called
         */
        getMilliseconds: function() {
            return this._b - this._a;
        }
    };

    return {
        Timer: Timer,

        /**
         * @private
         * @function
         * @name pc.now
         * @description Get current time in milliseconds
         * @return {Number} The time in milliseconds
         */
        now: function () {
            return new Date().getTime();
        }
    };
}()));