(window.webpackJsonpdemo = window.webpackJsonpdemo || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      e.exports = n(18);
    },
    ,
    ,
    ,
    ,
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        i = n(8),
        o = n.n(i),
        s = (n(15), n(1)),
        l = n(2),
        u = n(5),
        c = n(4),
        h = n(6),
        p = n(9),
        m = n(3),
        d =
          (n(16),
          (function(e) {
            function t(e) {
              var n;
              return (
                Object(s.a)(this, t),
                ((n = Object(u.a)(this, Object(c.a)(t).call(this, e))).state = {
                  prizeMap: {
                    "0-45": "no",
                    "45-90": "no",
                    "90-135": "2",
                    "135-180": "no",
                    "180-225": "1",
                    "225-270": "no",
                    "270-315": "no",
                    "315-360": "3"
                  },
                  rotateTimes: 1,
                  userPrize: "no",
                  currentAngle: 0,
                  userInput: 0
                }),
                (n.prizeChangeHandler = n.prizeChangeHandler.bind(
                  Object(m.a)(n)
                )),
                n
              );
            }
            return (
              Object(h.a)(t, e),
              Object(l.a)(t, [
                {
                  key: "prizeChangeHandler",
                  value: function(e) {
                    this.setState({ userInput: e.target.value });
                  }
                },
                {
                  key: "start",
                  value: function() {
                    var e = this;
                    this.setState({ userPrize: this.state.userInput });
                    var t = Object.entries(this.state.prizeMap)
                      .map(function(t) {
                        var n = Object(p.a)(t, 2),
                          a = n[0];
                        if (n[1] == e.state.userInput) return a;
                      })
                      .filter(Boolean);
                    console.log(t);
                    var n = t[Math.floor(Math.random() * t.length)];
                    console.log(n);
                    var a = this.state.currentAngle;
                    console.log(a);
                    var r = n.split("-"),
                      i = Math.floor(
                        Math.random() * (r[1] / 1 - 5 - (r[0] / 1 + 5)) +
                          r[0] / 1
                      );
                    console.log(i),
                      this.setState({
                        rotateTimes: this.state.rotateTimes + 1,
                        currentAngle: i + 1800 * this.state.rotateTimes
                      });
                  }
                },
                {
                  key: "render",
                  value: function() {
                    var e = {
                      transform: "rotateZ(".concat(
                        this.state.currentAngle,
                        "deg)"
                      )
                    };
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "label",
                        null,
                        "\u8bf7\u8f93\u5165\u7528\u6237\u7684\u83b7\u5956\u5185\u5bb9\uff1a1\u30012\u30013\u3001no\u7686\u53ef'",
                        r.a.createElement("input", {
                          type: "text",
                          value: this.state.userInput,
                          onChange: this.prizeChangeHandler
                        })
                      ),
                      r.a.createElement(
                        "button",
                        { onClick: this.start.bind(this) },
                        "\u70b9\u51fb\u5f00\u59cb"
                      ),
                      r.a.createElement(
                        "div",
                        { className: "prize__wrapper" },
                        r.a.createElement("div", {
                          className: "prize-pointer__wrapper"
                        }),
                        r.a.createElement("div", {
                          className: "prize-wheel__wrapper",
                          style: e
                        })
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(a.Component)),
        v =
          (n(17),
          (function(e) {
            function t(e) {
              var n;
              return (
                Object(s.a)(this, t),
                ((n = Object(u.a)(this, Object(c.a)(t).call(this, e))).state = {
                  inputValue: "",
                  inputValueAfter: ""
                }),
                n
              );
            }
            return (
              Object(h.a)(t, e),
              Object(l.a)(t, [
                {
                  key: "render",
                  value: function() {
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(d, null)
                    );
                  }
                },
                {
                  key: "inputChangeHandler",
                  value: function(e) {
                    this.setState({ inputValue: e.target.value });
                  }
                },
                {
                  key: "btnClickHandler",
                  value: function(e) {
                    this.setState({ inputValueAfter: this.state.inputValue });
                  }
                }
              ]),
              t
            );
          })(a.Component));
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(r.a.createElement(v, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  ],
  [[10, 1, 2]]
]);
//# sourceMappingURL=main.a79cdc3d.chunk.js.map
