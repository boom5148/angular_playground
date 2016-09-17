var Test;
(function (Test) {
    var FirstClass = (function () {
        function FirstClass() {
        }
        Object.defineProperty(FirstClass.prototype, "name", {
            get: function () {
                return "name";
            },
            set: function (value) {
            },
            enumerable: true,
            configurable: true
        });
        ;
        FirstClass.prototype.getName = function (canBeNamedAnything) {
            var x;
            var y;
            var z;
            x = 1;
            y = 1;
            z = 1;
            x = undefined;
            y = undefined;
            z = undefined;
            x = null;
            y = null;
            z = null;
            x = y;
            x = z;
            y = x;
            y = z;
            z = x;
            z = y;
        };
        return FirstClass;
    }());
    Test.FirstClass = FirstClass;
})(Test || (Test = {}));
