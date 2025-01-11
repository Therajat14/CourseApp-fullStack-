import { P as le, J as V, K as Ne, V as fe, r as I, A as Ce, Q as L, j as o, l as e, U as h, H as a, T as t, a5 as f, F as it, R as ne, S as Se, o as n, a9 as ee, k as Gt, af as We, ag as Pe, I as Re, a7 as te, O as Xe, aa as _e, am as Ue, a8 as E, G as Ke, N as ft, n as ce, z as Da, aq as At, aQ as Sn, aP as Nn, D as Ut, ae as Te, a0 as Dn, a6 as ot, ak as Rt, aC as at, t as Bt, ad as An, a4 as ia, at as Aa, W as ct, ab as Ra, ac as ua, Z as Rn, B as Bn, a$ as Un, b0 as ra } from "./modules-4937572a.js";
import { G as Ft, a as et, bf as pt, A as ae, cA as Wn, cB as Pn, bh as Tt, o as ue, g as $e, _ as oe, aW as rt, aX as Le, $ as Ae, D as nt, cC as On, cD as va, cE as Ba, S as Ve, cF as Ln, c as Mn, d as qn, cG as Ua, cH as Vn, cI as xt, cJ as En, cc as na, cK as sa, v as la, cL as jn, cM as xn, cN as Hn, a2 as Wa, cO as Gn, cP as Fn, cQ as zn, cR as Kn, cS as Qn, cT as Yn, cU as ba, cV as Zn, cW as Xn, cX as Jn, cY as es, cZ as ts, ag as Wt, c_ as as, c$ as ns, d0 as Pa, d1 as Oa, ci as ss, cz as pa, i as ge, cs as La, b as It, d2 as ca, b8 as zt, a0 as St, L as _a, bl as ls, M as os, d3 as is, d4 as rs, d5 as cs, f as _t, d6 as ds, d7 as Ma, d8 as dt, u as Kt, d9 as us, da as qa, N as vs, c5 as Ht, bA as ps, db as Ca, r as _s, dc as hs, dd as wt, cq as yt, b5 as Je, de as ms, c0 as ha, df as Qt, dg as fs, dh as ws, di as ys, dj as gs, dk as $s, dl as ks, dm as bs, dn as Va, dp as Cs, dq as Ts, dr as Is, ds as Ss, dt as Ns } from "./page-activity-a4d924a2.js";
import { N as Ds, C as Ea, v as ja, a as xa } from "./page-home-ab5589d3.js";
import { P as As } from "./page-login-7e8deba5.js";
import { u as gt, S as $t } from "./page-test-c56b5ff6.js";
import { S as Rs } from "./page-promotion-013310da.js";
window.getBuildInfo = function () {
    return {
        buildTime: "12/27/2024, 7:46:36 PM",
        branch: "origin/masterBranch/gamesass-2.24 commitId:2b76d9e70c90ce5f07d6b35176456bc08c053dd7"
    }
}
    ;
const Bs = {
    class: "wallet-container"
}
    , Us = {
        class: "wallet-container-header"
    }
    , Ws = {
        class: "wallet-container-header-belly"
    }
    , Ps = {
        key: 0
    }
    , Os = {
        class: "total"
    }
    , Ls = {
        class: "total"
    }
    , Ms = {
        class: "wallet-container-content"
    }
    , qs = {
        class: "container"
    }
    , Vs = {
        class: "progressBars"
    }
    , Es = {
        class: "progressBarsL"
    }
    , js = {
        class: "progressBarsR"
    }
    , xs = {
        class: "recycleBtnD"
    }
    , Hs = {
        key: 1,
        class: "recycleBtn disable"
    }
    , Gs = {
        class: "userDetail"
    }
    , Fs = ["onClick"]
    , zs = {
        class: "imgD"
    }
    , Ks = ["src"]
    , Qs = {
        key: 0,
        class: "gameList"
    }
    , Ys = {
        class: "money"
    }
    , Zs = {
        key: 1,
        class: "gameList"
    }
    , Xs = le({
        __name: "index",
        setup(y) {
            const s = Ft()
                , v = V(() => s.userInfo)
                , c = Tt()
                , { t: r } = Ne()
                , i = fe()
                , { setLoading: p } = et()
                , _ = pt()
                , $ = {
                    recharge: {
                        title: r("recharge"),
                        icon: "rechargeIcon",
                        link: "Recharge"
                    },
                    withdraw: {
                        title: r("withdraw"),
                        icon: "widthdrawBlue",
                        link: "Withdraw"
                    },
                    rechargeHistory: {
                        title: r("rechargeRecords"),
                        icon: "rechargeHistory",
                        link: "RechargeHistory"
                    },
                    withdrawHistory: {
                        title: r("withdrawRecords"),
                        icon: "withdrawHistory",
                        link: "WithdrawHistory"
                    }
                };
            function k(M) {
                M === "RechargeHistory" && c.emit("changeKeepAliveKey"),
                    i.push({
                        name: M
                    })
            }
            let l = I([])
                , w = 0
                , d = 0
                , R = 0
                , S = "0%"
                , N = 0
                , C = 0
                , m = "0%";
            const b = new Date().getTime() / 1e3
                , T = I(0)
                , B = I(0)
                , D = I(0);
            async function O() {
                p(!0);
                const M = await ae(Wn());
                M && (_.setTimestampLast(b),
                    _.setAllwallets(M == null ? void 0 : M.data),
                    F(M == null ? void 0 : M.data)),
                    p(!1)
            }
            async function Q() {
                if (D.value)
                    return;
                D.value = 5;
                const M = await ae(Pn());
                M && (w = M.data.amount),
                    W()
            }
            const W = async () => {
                if (D.value == 0) {
                    p(!0),
                        await O(),
                        p(!1);
                    return
                }
                setTimeout(() => {
                    D.value -= 1,
                        W()
                }
                    , 1e3)
            }
                ;
            function F(M) {
                if (!M)
                    return;
                v.value.isShowWalletTotalCT == "1" && (T.value = M.totalWithdraw || 0,
                    B.value = M.totalRecharge || 0),
                    l.value = M.thidGameBalanceList || [];
                let X = M.thidGameBalanceList || [];
                if (d = 0,
                    N = 0,
                    X)
                    for (var G of X)
                        G.vendorCode === "Lottery" ? d += G.balance : N += G.balance;
                w = d + N,
                    w > 0 ? (R = Math.round(d / w * 1e4) / 100,
                        C = Math.round(N / w * 1e4) / 100,
                        S = R + "%",
                        m = C + "%") : (R = 0,
                            C = 0)
            }
            return Ce(async () => {
                _.getTimestampLast == 0 || b - _.getTimestampLast >= 6 ? await O() : F(_.getAllwallets)
            }
            ),
                (M, X) => {
                    const G = L("NavBar")
                        , x = L("svg-icon")
                        , P = L("van-circle");
                    return n(),
                        o("div", Bs, [e("div", Us, [h(G, {
                            title: a(r)("wallet"),
                            class: "main",
                            "left-arrow": "",
                            onClickLeft: X[0] || (X[0] = A => a(i).go(-1))
                        }, null, 8, ["title"]), e("div", Ws, [h(x, {
                            name: "wallet1"
                        }), e("div", null, t(a(ue)(a(w))), 1), e("span", null, t(a(r)("totalBalance")), 1), v.value.isShowWalletTotalCT == "1" ? (n(),
                            o("div", Ps, [e("div", null, [e("p", Os, t(T.value), 1), e("p", null, t(a(r)("totalWithdraw")), 1)]), e("div", null, [e("p", Ls, t(B.value), 1), e("p", null, t(a(r)("totalRechargeAmount")), 1)])])) : f("v-if", !0)])]), e("div", Ms, [e("div", qs, [e("div", Vs, [e("div", Es, [h(P, {
                                "current-rate": a(R),
                                "onUpdate:currentRate": X[1] || (X[1] = A => it(R) ? R.value = A : R = A),
                                speed: 100,
                                text: a(S),
                                "stroke-width": "100",
                                "stroke-linecap": "butt"
                            }, null, 8, ["current-rate", "text"]), e("h3", null, t(a(ue)(a(d))), 1), e("span", null, t(a(r)("mainWallet")), 1)]), e("div", js, [h(P, {
                                "current-rate": a(C),
                                "onUpdate:currentRate": X[2] || (X[2] = A => it(C) ? C.value = A : C = A),
                                speed: 100,
                                text: a(m),
                                "stroke-width": "100",
                                "stroke-linecap": "butt"
                            }, null, 8, ["current-rate", "text"]), e("h3", null, t(a(ue)(a(N))), 1), e("span", null, t(a(r)("thirdPartyWallet")), 1)])]), e("div", xs, [D.value == 0 ? (n(),
                                o("button", {
                                    key: 0,
                                    class: "recycleBtn",
                                    onClick: Q
                                }, t(a(r)("oneClickRecovery")), 1)) : (n(),
                                    o("button", Hs, t(a(r)("recycling")) + " " + t(D.value), 1))]), e("div", Gs, [(n(),
                                        o(ne, null, Se($, (A, z) => e("div", {
                                            key: z,
                                            onClick: j => k(A.link)
                                        }, [e("div", zs, [e("img", {
                                            src: a($e)("wallet", A.icon)
                                        }, null, 8, Ks)]), e("span", null, t(A.title), 1)], 8, Fs)), 64))])]), a(l) ? (n(),
                                            o("div", Qs, [(n(!0),
                                                o(ne, null, Se(a(l), (A, z) => (n(),
                                                    o("div", {
                                                        class: ee(["box", A.balance > 0 ? "select" : ""]),
                                                        key: z
                                                    }, [h(x, {
                                                        name: A.vendorCode
                                                    }, null, 8, ["name"]), e("h3", Ys, t(a(ue)(A.balance, " ")), 1), e("span", null, t(A.vendorCode), 1)], 2))), 128))])) : (n(),
                                                        o("div", Zs, [e("div", null, t(a(r)("noData")), 1)]))])])
                }
        }
    });
const Js = oe(Xs, [["__scopeId", "data-v-0dabd3fc"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/index.vue"]])
    , A$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Js
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , kt = y => (We("data-v-63c604a3"),
        y = y(),
        Pe(),
        y)
    , el = {
        class: "WHD__container"
    }
    , tl = ["src"]
    , al = {
        class: "WHD__container-body"
    }
    , nl = {
        class: "container"
    }
    , sl = {
        class: "top ar-1px-b"
    }
    , ll = ["src"]
    , ol = kt(() => e("span", null, "Bank Card 充值", -1))
    , il = Gt('<div class="item" data-v-63c604a3><div data-v-63c604a3><span data-v-63c604a3>订单金额</span><span class="yellow" data-v-63c604a3>$8888.88</span></div><div data-v-63c604a3><span data-v-63c604a3>扣除金额</span><span class="black" data-v-63c604a3>$8888.88</span></div><div data-v-63c604a3><span data-v-63c604a3>到账金额</span><span class="black" data-v-63c604a3>$8888.88</span></div><div data-v-63c604a3><span data-v-63c604a3>订单时间</span><span data-v-63c604a3>2022-06-01</span></div></div>', 1)
    , rl = {
        class: "mImg"
    }
    , cl = ["src"]
    , dl = {
        class: "item"
    }
    , ul = kt(() => e("span", null, "UTR", -1))
    , vl = kt(() => e("span", null, "202246892345", -1))
    , pl = kt(() => e("span", null, "订单号", -1))
    , _l = kt(() => e("span", null, "2022102518543345000113", -1))
    , hl = kt(() => e("span", null, "支付时间", -1))
    , ml = kt(() => e("span", null, "2022-06-20 15：15：16", -1))
    , fl = Gt('<div class="containerB" data-v-63c604a3><div class="top ar-1px-b" data-v-63c604a3><span data-v-63c604a3>银行名称</span></div><div class="item" data-v-63c604a3><div data-v-63c604a3><span class="red" data-v-63c604a3>Account Name</span><span data-v-63c604a3>SAWARN TELECOM</span></div><div data-v-63c604a3><span class="red" data-v-63c604a3>Bank Number</span><span data-v-63c604a3>0005123100000315</span></div><div data-v-63c604a3><span class="red" data-v-63c604a3>Order Number</span><span data-v-63c604a3>2022102518543345000113</span></div></div></div>', 1)
    , wl = le({
        __name: "index",
        setup(y) {
            const s = fe();
            function v() {
                s.back()
            }
            const c = history.state.paramValue || 1;
            return (r, i) => {
                const p = L("NavBar")
                    , _ = L("svg-icon");
                return n(),
                    o("div", el, [h(p, {
                        title: "",
                        classN: `bg${a(c)}`,
                        "left-arrow": "",
                        onClickLeft: v
                    }, null, 8, ["classN"]), e("div", {
                        class: ee(["WHD__container-header", `bg${a(c)}`])
                    }, [e("div", null, [e("h1", null, t(r.$t(a(rt)(a(Le).RechargeState, a(c)))), 1), e("span", null, t(r.$t(a(rt)(a(Le).RStateCorrelationT, a(c)))), 1)]), e("img", {
                        src: a($e)("wallet/recharge/rechargeRecords/state", `${a(c)}`)
                    }, null, 8, tl)], 2), e("div", al, [e("div", nl, [e("div", sl, [e("img", {
                        src: a($e)("wallet/withdraw/withdrawHistory", "bc")
                    }, null, 8, ll), ol]), il, e("div", rl, [e("img", {
                        src: a($e)("wallet/withdraw/withdrawHistory", "moonBar")
                    }, null, 8, cl)]), e("div", dl, [e("div", null, [ul, vl, h(_, {
                        onClick: i[0] || (i[0] = $ => a(Ae)("1414")),
                        name: "copy"
                    })]), e("div", null, [pl, _l, h(_, {
                        onClick: i[1] || (i[1] = $ => a(Ae)("1414")),
                        name: "copy"
                    })]), e("div", null, [hl, ml, h(_, {
                        onClick: i[2] || (i[2] = $ => a(Ae)("1414")),
                        name: "copy"
                    })])])]), fl])])
            }
        }
    });
const yl = oe(wl, [["__scopeId", "data-v-63c604a3"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/BankStatus/index.vue"]])
    , R$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: yl
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , gl = y => (We("data-v-b22f1e4e"),
        y = y(),
        Pe(),
        y)
    , $l = {
        class: "cancel_recharge"
    }
    , kl = {
        class: "info"
    }
    , bl = {
        class: "info_item"
    }
    , Cl = gl(() => e("div", null, "UPI ID", -1))
    , Tl = {
        class: "user_name"
    }
    , Il = {
        class: "info_item"
    }
    , Sl = {
        class: "money"
    }
    , Nl = {
        class: "info_item"
    }
    , Dl = {
        class: "order_num"
    }
    , Al = {
        class: "time"
    }
    , Rl = {
        class: "cancel_content"
    }
    , Bl = {
        class: "title"
    }
    , Ul = ["onClick"]
    , Wl = {
        class: "radio_title"
    }
    , Pl = ["placeholder", "disabled"]
    , Ol = {
        class: "tip"
    }
    , Ll = {
        class: "cancen_model_cnt"
    }
    , Ml = le({
        __name: "index",
        setup(y) {
            const { t: s } = Ne()
                , v = Tt()
                , c = I("")
                , r = I(!1)
                , i = I(-1)
                , p = I()
                , _ = fe()
                , $ = Re([])
                , k = () => {
                    _.back()
                }
                , l = async () => {
                    await d(),
                        r.value = !1
                }
                , w = V(() => {
                    var N;
                    return i.value === 4 ? c.value : (N = $.find(C => C.id === i.value)) == null ? void 0 : N.reasonText
                }
                )
                , d = async () => {
                    var m;
                    let N = {
                        orderId: (m = p.value) == null ? void 0 : m.id,
                        cancelReason: w.value
                    };
                    await ae(On(N)) && (Xe(s("code244")),
                        v.emit("changeKeepAliveKey"),
                        window.history.replaceState(null, "", window.location.href),
                        _.replace({
                            name: "RechargeHistory",
                            query: {
                                type: 1
                            }
                        }))
                }
                , R = async N => {
                    const C = await ae(va({
                        orderId: N
                    }));
                    C && (p.value = C.data)
                }
                , S = async () => {
                    const N = await ae(Ba({
                        type: 0
                    }));
                    N && $.unshift(...N.data)
                }
                ;
            return Ce(async () => {
                const N = Number(_.currentRoute.value.query.orderNo);
                await R(N),
                    await S()
            }
            ),
                (N, C) => {
                    var T, B, D, O;
                    const m = L("NavBar")
                        , b = L("van-divider");
                    return n(),
                        o("div", $l, [h(m, {
                            title: N.$t("concelOrder"),
                            "left-arrow": "",
                            onClickLeft: k
                        }, null, 8, ["title"]), e("div", kl, [e("div", bl, [Cl, e("span", Tl, t((T = p.value) == null ? void 0 : T.sellerAccountNo), 1)]), e("div", Il, [e("div", null, t(N.$t("amount")), 1), e("span", Sl, "₹ " + t((B = p.value) == null ? void 0 : B.orderAmount), 1)]), h(b), e("div", Nl, [e("div", Dl, t((D = p.value) == null ? void 0 : D.orderNo), 1), e("span", Al, t((O = p.value) == null ? void 0 : O.createTime), 1)])]), e("div", Rl, [e("div", Bl, t(N.$t("cancelReason")), 1), (n(!0),
                            o(ne, null, Se($, Q => (n(),
                                o("div", {
                                    class: ee(["cancel_radio", {
                                        radio_active: i.value === Q.id
                                    }]),
                                    key: Q.id,
                                    onClick: () => {
                                        i.value = Q.id,
                                            i.value !== 4 && (c.value = "")
                                    }
                                }, [e("span", Wl, t(Q.reasonText), 1), Q.id === 4 ? _e((n(),
                                    o("textarea", {
                                        key: 0,
                                        class: "textarea_input",
                                        "onUpdate:modelValue": C[0] || (C[0] = W => c.value = W),
                                        placeholder: N.$t("enterOtherReason"),
                                        disabled: i.value !== 4
                                    }, null, 8, Pl)), [[Ue, c.value]]) : f("v-if", !0)], 10, Ul))), 128))]), e("div", Ol, t(N.$t("c2cTip15")), 1), e("div", {
                                        class: "cancel_btn",
                                        onClick: C[1] || (C[1] = Q => r.value = !0)
                                    }, t(N.$t("confirmCancel")), 1), h(nt, {
                                        show: r.value,
                                        "onUpdate:show": C[2] || (C[2] = Q => r.value = Q),
                                        onConfirm: l,
                                        "show-cancel-btn": !0,
                                        confirmText: N.$t("confirmCancel"),
                                        cancelText: N.$t("cancel"),
                                        title: N.$t("cancelDeal")
                                    }, {
                                        content: te(() => [e("div", Ll, t(N.$t("orderDesc2")), 1)]),
                                        _: 1
                                    }, 8, ["show", "confirmText", "cancelText", "title"])])
                }
        }
    });
const ql = oe(Ml, [["__scopeId", "data-v-b22f1e4e"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/CancelRecharge/index.vue"]])
    , B$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ql
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , Ha = y => (We("data-v-877972de"),
        y = y(),
        Pe(),
        y)
    , Vl = {
        class: "orderCancel__container"
    }
    , El = {
        class: "orderCancel__container-header"
    }
    , jl = {
        class: "orderCancel__container-header__details"
    }
    , xl = Ha(() => e("div", {
        class: "divider"
    }, null, -1))
    , Hl = Ha(() => e("div", {
        class: "orderCancel__container-header__footer"
    }, [e("span", null, "MS2022102618415496"), e("span", null, "2022-06-01 15:15:15")], -1))
    , Gl = {
        class: "orderCancel__container-reason"
    }
    , Fl = ["onClick"]
    , zl = ["placeholder"]
    , Kl = {
        class: "orderCancel__container-tip"
    }
    , Ql = le({
        __name: "index",
        setup(y) {
            const { t: s } = Ne()
                , v = fe()
                , c = I(1)
                , r = I("")
                , i = I(!1)
                , p = [{
                    name: "Account Name",
                    value: "SAWARN TELECOM"
                }, {
                    name: "Bank Number",
                    value: "00051231000000315"
                }, {
                    name: "Order Number",
                    value: "2022102518543345000113"
                }, {
                    name: "Payment Amount",
                    value: "฿8888.00"
                }]
                , _ = [{
                    value: 1,
                    label: s("c2cTip17")
                }, {
                    value: 2,
                    label: s("c2cTip17")
                }, {
                    value: 3,
                    label: s("c2cTip17")
                }, {
                    value: 4,
                    label: s("other")
                }];
            return ($, k) => {
                const l = L("NavBar");
                return n(),
                    o(ne, null, [e("div", Vl, [h(l, {
                        "left-arrow": !0,
                        onClickLeft: k[0] || (k[0] = w => a(v).back())
                    }, {
                        center: te(() => [E(t($.$t("concelOrder")), 1)]),
                        _: 1
                    }), e("div", El, [(n(),
                        o(ne, null, Se(p, (w, d) => e("div", jl, [e("span", null, t(w.name), 1), e("span", null, t(w.value), 1)])), 64)), xl, Hl]), e("div", Gl, [e("h1", null, t($.$t("cancelReason")), 1), (n(),
                            o(ne, null, Se(_, (w, d) => e("div", {
                                class: ee(["orderCancel__container-reason__item", {
                                    selected: w.value === c.value
                                }]),
                                onClick: R => c.value = w.value,
                                key: d
                            }, [e("span", null, t(w.label), 1)], 10, Fl)), 64)), _e(e("textarea", {
                                "onUpdate:modelValue": k[1] || (k[1] = w => r.value = w),
                                class: ee({
                                    active: c.value === 4
                                }),
                                placeholder: $.$t("enterOtherReason")
                            }, null, 10, zl), [[Ue, r.value]])]), e("div", Kl, t($.$t("orderDesc1")), 1)]), e("div", {
                                class: "orderCancel__container-button",
                                onClick: k[2] || (k[2] = w => i.value = !0)
                            }, t($.$t("confirmCancel")), 1), h(nt, {
                                show: i.value,
                                "onUpdate:show": k[3] || (k[3] = w => i.value = w),
                                title: $.$t("cancelDeal"),
                                "cancel-text": $.$t("close"),
                                "confirm-text": $.$t("confirmCancel")
                            }, {
                                content: te(() => [E(t($.$t("orderDesc2")), 1)]),
                                _: 1
                            }, 8, ["show", "title", "cancel-text", "confirm-text"])], 64)
            }
        }
    });
const Yl = oe(Ql, [["__scopeId", "data-v-877972de"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/OrderCancel/index.vue"]])
    , U$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Yl
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , u = Re({
        rechangeUpiShow: !1,
        rechargeSubmitBtnStatus: !1,
        currentMenu: 0,
        rechargeType: [],
        bankList: [],
        rechargeTypes: [],
        bank_local: [],
        quickList: [],
        C2CQuickList: [],
        priceRange: {
            min: 0,
            max: 0
        },
        currentPayType: {},
        isRechargeInputDialog: JSON.parse(localStorage.getItem("userInfo") || "{}").isOpenOfficialRechargeInputDialog === "1",
        amount: void 0,
        numberPayAmount: void 0,
        numberExchangeRate: 0,
        validateAmount: "",
        currentQuickIndex: -1,
        rechargeDialogVisible: !1,
        bankInfo: {},
        currentBankIndex: 0,
        isC2COrder: !1,
        C2COrderInfo: void 0,
        isBankOrder: !1,
        bankOrderInfo: void 0,
        isUsdtOrder: !1,
        currentPayId: 0,
        localUsdtInfo: [],
        currentLocalUsdtIndex: 0,
        usdtOrderInfo: {},
        orderDetail: {},
        bankUTR: "",
        localUpiUTR: "",
        upiOrderInfo: void 0,
        isUpiOrder: !1,
        CreateUpiOrderRep: void 0,
        otherBankName: "",
        thirdPayBankList: [],
        selectOtherBank: void 0,
        arPayInfo: void 0,
        isArPayOrder: !1,
        isRsnPayOrder: !1,
        rsnInfo: {
            balance: 0,
            walletActivationStatus: 0,
            walletAddress: ""
        }
    })
    , Zl = [9, 10, 18, 19]
    , Xl = [11, 16, 19]
    , oa = I()
    , Ta = I(1)
    , Dt = I()
    , Ia = I(!1)
    , Sa = I(!1)
    , ut = () => {
        const { t: y } = Ne()
            , s = Tt()
            , v = V(() => A.value === 20)
            , c = V(() => A.value === 21)
            , r = V(() => A.value === 22)
            , p = Ft().getUserInfo
            , _ = V(() => p.uRate)
            , $ = V(() => p.trxRate)
            , k = V(() => p.isOpenOfficialRechargeInputDialog === "1")
            , l = V(() => p.isShowRechargeBankList === "1" || ![9, 10].includes(A.value))
            , w = V(() => Xl.includes(A.value))
            , d = fe()
            , R = I(!1)
            , S = I(!1)
            , N = I([])
            , C = I(!1)
            , m = I(!1)
            , b = I(0)
            , T = I(0)
            , B = I(!1)
            , D = I(!1)
            , O = I("")
            , Q = I(!1)
            , W = V(() => Ve().getDollarSign)
            , F = I(!1)
            , M = U => {
                oa.value = U
            }
            , X = {
                11: {
                    key: "USDT",
                    unit: "USDT",
                    selectText: y("selectUSDTNum"),
                    placeholder: y("enterUSDTAmount"),
                    icon: "usdt"
                },
                16: {
                    key: "TRX",
                    unit: "TRX",
                    selectText: y("selectTRXNum"),
                    placeholder: y("enterTRXAmount"),
                    icon: "trx"
                },
                19: {
                    key: "USDT",
                    unit: "USDT",
                    selectText: y("selectUSDTNum"),
                    placeholder: y("enterUSDTAmount"),
                    icon: "usdt"
                }
            }
            , G = V(() => {
                var H;
                let U = (H = u.rechargeTypes[0]) == null ? void 0 : H.c2cUnitAmount;
                return U ? U.toString().substring(1) : "00"
            }
            )
            , x = V(() => {
                var U, H;
                return ((U = u.bankList) == null ? void 0 : U.length) < 1 ? [] : (H = u.bankList) == null ? void 0 : H.filter(Z => Z.transferType === Ta.value)
            }
            )
            , P = V(() => A.value === 12)
            , A = V(() => u.currentPayId)
            , z = V(() => Zl.includes(A.value))
            , j = V(() => A.value === 10)
            , q = V(() => u.currentPayType.payTypeID || -1)
            , g = V(() => !z.value && !c.value && !r.value && !P.value && !j.value)
            , J = V(() => W.value === "৳" ? x.value[u.currentBankIndex].bankName : u.bankList[u.currentBankIndex].bankName)
            , K = V(() => W.value === "৳" ? x.value : u.bankList)
            , se = V(() => u.thirdPayBankList.length > 0 ? u.thirdPayBankList.filter(U => U.type === u.currentPayType.payTypeID) : [])
            , we = V(() => A.value !== 18 ? !0 : !Ve().getIsSplitLocalEWallet)
            , Oe = async () => {
                u.rechargeType.unshift({
                    payNameUrl2: $e("wallet/withdraw/withdrawHistory", "all_NS"),
                    payNameUrl: $e("wallet/withdraw/withdrawHistory", "all"),
                    payID: -1,
                    payName: y("all"),
                    minPrice: 0,
                    maxPrice: -0,
                    scope: "",
                    typeName: y("all"),
                    payTypeID: 0,
                    paySysName: ""
                }),
                    u.currentMenu = 0
            }
            , ye = V(() => P.value ? !!u.isUpiOrder : z.value || j.value ? !!u.isBankOrder || !!u.isUsdtOrder : c.value ? !!u.isArPayOrder : r.value ? !!u.isRsnPayOrder : !1)
            , ie = V(() => A.value === 11 || A.value === 19 ? _.value : A.value === 16 ? $.value : 0)
            , Ee = V(() => u.rechargeType.find(U => U.payID === 21))
            , qe = V(() => u.rechargeType.find(U => U.payID === 22))
            , pe = V(() => u.rechargeType.filter(U => ![21, 22].includes(U.payID)))
            , De = V(() => u.localUsdtInfo[u.currentLocalUsdtIndex])
            , be = async U => {
                Cn(),
                    u.currentMenu = 0,
                    u.rechargeType = [];
                const H = await ae(Ln());
                H && (u.rechargeType = H.data.typelist,
                    u.currentMenu = 0,
                    u.currentPayId = pe.value[0].payID,
                    !U && Me(0),
                    U && Oe())
            }
            , he = () => {
                var H;
                return (H = u.rechargeTypes.find(Z => Z.paySysName === J.value)) == null ? void 0 : H.payTypeID
            }
            , Me = async U => {
                if (!(u.currentMenu === U && u.currentMenu !== 0)) {
                    if (u.currentMenu = U,
                        U === -1 ? u.currentPayId = 21 : U === -2 ? u.currentPayId = 22 : u.currentPayId = pe.value[U].payID,
                        je(),
                        await ke(),
                        P.value)
                        wa();
                    else if (c.value)
                        He();
                    else if (r.value)
                        re();
                    else if (z.value || j.value)
                        if (A.value === 19)
                            ya();
                        else if (A.value === 18 && !Ve().getIsSplitLocalEWallet)
                            qt(he());
                        else {
                            let H = pe.value[u.currentMenu].payTypeID;
                            qt(j.value ? A.value : H || -1)
                        }
                    Vt()
                }
            }
            , je = () => {
                u.isArPayOrder = !1,
                    u.isRsnPayOrder = !1,
                    u.isC2COrder = !1,
                    u.isUpiOrder = !1,
                    u.isBankOrder = !1,
                    u.isUsdtOrder = !1
            }
            , ke = async (U, H) => {
                var ve, Be, Fe, Ye, Ze, ze, lt, Et;
                const Z = await ae(Mn({
                    payid: A.value || U,
                    payTypeId: ((ve = pe.value[u.currentMenu]) == null ? void 0 : ve.payTypeID) || H
                }));
                if (Z) {
                    if (A.value === 19 && (u.localUsdtInfo = Z.data.localUsdtlist),
                        u.rechargeTypes = Z.data.rechargetypelist,
                        u.bankList = Z.data.banklist,
                        z.value && ((Be = u.bankList) == null ? void 0 : Be.length) > 0 && (u.currentBankIndex = 0),
                        j.value && (((Fe = u.bankList) == null ? void 0 : Fe.length) > 1 && (u.currentBankIndex = ka()),
                            u.bank_local = Z.data.rechargetypelist[0].parameters.split("|")),
                        z.value)
                        if (A.value === 18) {
                            const ta = u.bankList[0].bankName
                                , mt = (Ye = Z.data.rechargetypelist) == null ? void 0 : Ye.find(tt => tt.paySysName === ta);
                            mt && mt.parameters && (u.bank_local = mt.parameters.split("|"))
                        } else
                            u.bank_local = Z.data.rechargetypelist[0].parameters.split("|");
                    ((Ze = Z.data) == null ? void 0 : Ze.rechargetypelist.length) > 0 && (u.quickList = (ze = Z.data.rechargetypelist[0]) == null ? void 0 : ze.quickConfigList,
                        u.currentPayType = Z.data.rechargetypelist[0],
                        u.priceRange = {
                            min: Number((lt = Z.data.rechargetypelist[0]) == null ? void 0 : lt.miniPrice),
                            max: Number((Et = Z.data.rechargetypelist[0]) == null ? void 0 : Et.maxPrice)
                        }),
                        g && (u.thirdPayBankList = Z.data.thirdPayBankList || [],
                            u.thirdPayBankList.length > 0 && (u.selectOtherBank = se.value[0]))
                }
            }
            , He = async () => {
                const U = await ae(qn());
                U.code === 0 && (u.isArPayOrder = U.data)
            }
            , re = async () => {
                const U = await Ua();
                (U == null ? void 0 : U.code) === 0 && (u.rsnInfo = U.data);
                const H = await ae(Vn());
                H.code === 0 && (u.isRsnPayOrder = H.data)
            }
            , xe = U => {
                var H, Z, ve;
                u.currentPayType = u.rechargeTypes[U],
                    u.quickList = (H = u.rechargeTypes[U]) == null ? void 0 : H.quickConfigList,
                    u.priceRange = {
                        min: Number((Z = u.rechargeTypes[U]) == null ? void 0 : Z.miniPrice),
                        max: Number((ve = u.rechargeTypes[U]) == null ? void 0 : ve.maxPrice)
                    },
                    u.thirdPayBankList.length > 0 && (u.selectOtherBank = se.value[0] || ""),
                    Vt()
            }
            , Y = () => {
                return true;
            }
            , de = () => {
                return true;
            }
            , me = U => {
                if (u.currentQuickIndex = U,
                    w.value) {
                    u.numberPayAmount = Number(u.quickList[U].rechargeAmount),
                        u.numberExchangeRate = ie.value * Number(u.quickList[U].rechargeAmount),
                        Y() && (u.numberPayAmount = Number(Qe(u.numberPayAmount.toString())),
                            u.numberExchangeRate = u.numberPayAmount * ie.value);
                    return
                }
                u.amount = Number(u.quickList[U].rechargeAmount),
                    de() && (u.amount = Number(Qe(u.amount.toString())))
            }
            , Qe = U => (U = U + "",
                U.indexOf(".") > -1 ? U.split(".")[0] : U)
            , Ct = async () => {
                if (!u.rechargeSubmitBtnStatus)
                    return;
                const { onTriggerRecharege: U } = ss();
                if (U({
                    amount: u.amount
                }),
                    c.value || r.value)
                    return Ge();
                if (g.value)
                    return Ie();
                if (P.value)
                    return Ot();
                if (z.value || j.value)
                    if ([10, 18].includes(A.value) || u.isRechargeInputDialog && A.value !== 19) {
                        if (!u.bankList) {
                            ce("The payment channel is empty");
                            return
                        }
                        u.bank_local.map(H => {
                            let Z = H.split(",")[1];
                            u.bankInfo[Z] = K.value[u.currentBankIndex][Z]
                        }
                        ),
                            u.rechargeDialogVisible = !0;
                        return
                    } else
                        A.value === 19 ? Lt() : fa()
            }
            , Ge = async () => {
                var Fe;
                if (((Fe = u.arPayInfo) == null ? void 0 : Fe.walletActivationStatus) === 0) {
                    ce(y("arNoActive2"));
                    return
                }
                Da({
                    message: y("loading") + "...",
                    forbidClick: !0
                });
                let U = "https://" + window.location.host + "/#/main";
                const H = sessionStorage.getItem("pixel") || localStorage.getItem("fb_dynamic_pixel") || ""
                    , Z = xt("_fbc") || xt("_fbp") || ""
                    , ve = {
                        payTypeId: u.currentPayType.payTypeID,
                        amount: u.amount || 0,
                        returnUrl: U,
                        pixelId: H,
                        vendorId: 1,
                        fbcId: Z
                    }
                    , Be = await ae(En(ve));
                if (Be && Be.code === 0) {
                    const { data: { submitUrl: Ye, submitType: Ze } } = Be;
                    Ze && Ze === 1 && (Ye ? na() ? sa("recharge", {
                        url: Ye,
                        recharegeName: u.currentPayType.payName
                    }) : la(Ye) : Xe(y("rechargeSuccess")))
                }
            }
            , ea = async (U, H, Z, ve, Be) => {
                if (u.currentPayId = U,
                    c.value && ve === 0) {
                    u.isArPayOrder || await He(),
                        u.isArPayOrder ? window.location.href = u.isArPayOrder : ce(y("C2Ctimeout2"));
                    return
                }
                if (P.value && ve === 0) {
                    d.push({
                        name: "OtherPay",
                        query: {
                            type: "upi"
                        }
                    });
                    return
                }
                if (ve === 0 && U === 19)
                    return d.push({
                        name: "RechargeUsdt"
                    });
                if ((z.value || j.value) && ve === 0)
                    return d.push({
                        name: "RechargeDetail",
                        query: {
                            currentPayId: U,
                            payTypeId: H,
                            amount: Z
                        }
                    })
            }
            , Ot = async () => {
                await rn(),
                    d.push({
                        name: "OtherPay",
                        query: {
                            type: "upi"
                        }
                    })
            }
            , Lt = () => {
                d.push({
                    name: "RechargeUsdt",
                    query: {
                        amount: u.numberPayAmount
                    }
                })
            }
            , Mt = async U => {
                await ae(jn(U)) && (Xe(y("success")),
                    s.emit("changeKeepAliveKey"),
                    d.replace({
                        name: "RechargeHistory"
                    }))
            }
            , Ie = async () => {
                var Ye, Ze;
                const U = Ve();
                if (A.value === 15 || U.getDollarSign === "R$") {
                    const ze = await ae(xn());
                    if (Sa.value = ze.data.needSetPIX,
                        ze.data.isFirstPixRecharge && !Q.value) {
                        Ia.value = !0,
                            Q.value = !0;
                        return
                    }
                    if (ze.data.needSetPIX) {
                        await d.push({
                            name: "Withdraw-AddPIX",
                            query: {
                                fromV: "Recharge"
                            }
                        });
                        return
                    }
                }
                let H = 0;
                w.value ? H = u.numberPayAmount : H = u.amount;
                let Z = window.location.origin + ",status/rechargeStatus";
                const ve = sessionStorage.getItem("pixel") || localStorage.getItem("fb_dynamic_pixel") || ""
                    , Be = xt("_fbc") || xt("_fbp") || "";
                let Fe = u.thirdPayBankList.length > 0 && u.selectOtherBank;
                if (u.currentPayType.payTypeID >= 1e4)
                    tn(H, Z, ve, Be, Fe);
                else {
                    let ze = u.currentPayType.paySendUrl
                        , lt = "";
                    ze.indexOf("tyid") === -1 ? lt = ze + "?tyid=" + u.currentPayType.payTypeID + "&amount=" + H + "&uid=" + p.userId + "&sign=" + p.sign + (Fe ? "&bankCode=" + ((Ye = u.selectOtherBank) == null ? void 0 : Ye.bankCode) : "") + "&urlInfo=" + Z + `&pixelId=${ve}&fbcId=${Be}` : lt = ze + "&amount=" + H + "&uid=" + p.userId + "&sign=" + p.sign + (Fe ? "&bankCode=" + ((Ze = u.selectOtherBank) == null ? void 0 : Ze.bankCode) : "") + "&urlInfo=" + Z + `&pixelId=${ve}&fbcId=${Be}`,
                        na() ? sa("recharge", {
                            url: lt,
                            recharegeName: u.currentPayType.payName
                        }) : la(lt)
                }
            }
            , tn = async (U, H, Z, ve, Be) => {
                var ze;
                const Ye = {
                    payTypeId: u.currentPayType.payTypeID,
                    bankCode: Be ? (ze = u.selectOtherBank) == null ? void 0 : ze.bankCode : "",
                    urlInfo: H,
                    amount: U,
                    pixelId: Z,
                    vendorId: 1,
                    fbcId: ve
                };
                u.rechargeSubmitBtnStatus = !1;
                const Ze = await ae(Hn(Ye));
                if (u.rechargeSubmitBtnStatus = !0,
                    Ze && Ze.code === 0) {
                    const { data: { redirectUrl: lt, scanCodePay: Et, formUrl: ta, formBody: mt } } = Ze;
                    if (!Et && lt) {
                        let tt = lt;
                        na() ? sa("recharge", {
                            url: tt,
                            recharegeName: u.currentPayType.payName
                        }) : la(tt)
                    } else {
                        const tt = document.createElement("form");
                        tt.action = ta,
                            tt.method = "POST",
                            tt.target = "_blank";
                        for (let aa in mt)
                            if (mt.hasOwnProperty(aa)) {
                                let jt = document.createElement("input");
                                jt.name = aa,
                                    jt.value = mt[aa],
                                    jt.type = "hidden",
                                    tt.appendChild(jt)
                            }
                        document.body.appendChild(tt),
                            tt.submit()
                    }
                }
            }
            , an = async () => {
                var ve, Be;
                let U = ((ve = u.amount) == null ? void 0 : ve.toString()) + G.value
                    , H = {
                        category: A.value,
                        orderAmount: Number(U)
                    };
                const [, Z] = await Wa(Gn(H));
                if (Z) {
                    if ((Z == null ? void 0 : Z.msgCode) === 260 && Z.code !== 0) {
                        ce(Z.msg),
                            setTimeout(() => {
                                d.push({
                                    name: "RechargeHistory-RechargeUpiDetail",
                                    query: {
                                        type: "C2C",
                                        orderNo: Z.data.orderId,
                                        state: Z.data.state
                                    }
                                })
                            }
                                , 2e3);
                        return
                    }
                    if (Z.data.state === 1)
                        u.rechangeUpiShow = !1,
                            d.push({
                                name: "OtherPay",
                                query: {
                                    type: "C2C"
                                }
                            });
                    else if (Z.data.state === 2)
                        m.value = !0,
                            b.value = Z.data.errorCount,
                            T.value = Z.data.remainingLimitTime;
                    else {
                        if (u.currentPayType.paySendUrl = (Be = Z.data.rechargeChannelInfo) == null ? void 0 : Be.paySendUrl,
                            u.currentPayType = Z.data.rechargeChannelInfo,
                            !Z.data.suggessList.length)
                            return Ie();
                        u.rechangeUpiShow = !0,
                            u.C2CQuickList = Z.data.suggessList
                    }
                }
            }
            , nn = async () => {
                const U = await ae(Fn({
                    amount: u.amount
                }));
                U && (u.C2CQuickList = U.data)
            }
            , fa = async () => {
                if (j.value)
                    return sn();
                if (A.value !== 9) {
                    let H = u.bankInfo[u.bank_local[1].split(",")[1]];
                    if (H && H.length && H.trim().length < 7) {
                        ce({
                            message: y("wrongTel"),
                            wordBreak: "break-word"
                        });
                        return
                    }
                }
                if (k.value) {
                    for (let H in u.bankInfo)
                        if (!u.bankInfo[H]) {
                            ce(y("rechargeBankTip"));
                            return
                        }
                }
                if (u.rechargeDialogVisible = !1,
                    await ga()) {
                    let H = pe.value[u.currentMenu].payTypeID;
                    A.value === 18 && (H = he()),
                        d.push({
                            name: "RechargeDetail",
                            query: {
                                currentPayId: A.value,
                                payTypeId: H,
                                amount: u.amount
                            }
                        })
                }
            }
            , sn = async () => {
                if (Object.keys(u.bankInfo).length < 2) {
                    ce(y("requiredFaild"));
                    return
                }
                for (let Z in u.bankInfo)
                    if (!u.bankInfo[Z]) {
                        ce(y("rechargeBankTip"));
                        return
                    }
                u.rechargeDialogVisible = !1;
                let U = pe.value[u.currentMenu].payTypeID;
                await un() && d.push({
                    name: "RechargeDetail",
                    query: {
                        currentPayId: A.value,
                        payTypeId: U,
                        amount: u.amount
                    }
                })
            }
            , ln = async U => {
                const H = await ae(va({
                    orderId: U
                }));
                H && (u.C2COrderInfo = H.data)
            }
            , on = async () => {
                var H;
                const U = await ae(zn());
                U ? U.data && ((H = U.data) != null && H.orderNo) && (u.isC2COrder = !0,
                    Nt(U.data.serviceTime, U.data.endTime, () => {
                        u.C2COrderInfo = void 0,
                            u.isC2COrder = !1
                    }
                    ),
                    u.C2COrderInfo = U.data) : (u.C2COrderInfo = void 0,
                        u.isC2COrder = !1)
            }
            , qt = async U => {
                var Z;
                const H = await ae(Kn({
                    payTypeId: U
                }));
                H && (u.orderDetail = H.data,
                    H.data && ((Z = H.data) != null && Z.orderNumber) ? (u.bankUTR = H.data.refNo,
                        u.isBankOrder = !0,
                        Nt(H.data.serverTime, H.data.addTime1, () => {
                            u.bankOrderInfo = void 0,
                                u.isBankOrder = !1
                        }
                        ),
                        u.bankOrderInfo = H.data) : (u.bankOrderInfo = void 0,
                            u.isBankOrder = !1))
            }
            , wa = async () => {
                const U = await ae(Qn({
                    type: 82
                }));
                U && (U.data && U.data.orderNumber ? (u.localUpiUTR = U.data.transferUTR,
                    u.isUpiOrder = !0,
                    Nt(U.data.serverTime, U.data.addTime1, () => {
                        u.upiOrderInfo = void 0,
                            u.isUpiOrder = !1
                    }
                    ),
                    u.upiOrderInfo = U.data) : (u.upiOrderInfo = void 0,
                        u.isUpiOrder = !1))
            }
            , rn = async () => {
                const U = await ae(Yn({
                    amount: u.amount
                }));
                U && (u.CreateUpiOrderRep = U.data)
            }
            , cn = async (U, H, Z) => {
                var ve;
                if (U === "upi") {
                    let Be = {
                        type: 1,
                        tranrefId: u.localUpiUTR,
                        orderNo: H + "",
                        isBankQRCodeOrder: j.value
                    };
                    await ae(ba(Be)) && (s.emit("changeKeepAliveKey"),
                        d.replace({
                            name: "RechargeHistory"
                        }))
                } else
                    await ae(Zn({
                        orderId: H,
                        transactionNo: u.localUpiUTR,
                        ossUrls: Z
                    })) && d.replace({
                        name: "RechargeHistory-RechargeUpiDetail",
                        query: {
                            orderNo: (ve = u.C2COrderInfo) == null ? void 0 : ve.id,
                            state: 1
                        }
                    })
            }
            , ya = async () => {
                var H;
                const U = await ae(Xn({
                    type: 3
                }));
                U && (U.data && ((H = U.data) != null && H.orderNumber) ? (u.isUsdtOrder = !0,
                    u.isBankOrder = !1,
                    Nt(U.data.serverTime, U.data.addTime1, () => {
                        u.usdtOrderInfo = void 0,
                            u.isUsdtOrder = !1
                    }
                    ),
                    u.usdtOrderInfo = U.data) : (u.usdtOrderInfo = void 0,
                        u.isUsdtOrder = !1,
                        u.isBankOrder = !1))
            }
            , dn = async U => {
                await ae(Jn(U)) && (Xe(y("success")),
                    s.emit("changeKeepAliveKey"),
                    d.replace({
                        name: "RechargeHistory"
                    }))
            }
            , ga = async () => {
                let U = pe.value[u.currentMenu].payTypeID;
                A.value === 18 && (U = he());
                let H = {
                    payTypeId: U,
                    amount: u.amount,
                    bankName: J.value,
                    transferType: K.value[u.currentBankIndex].transferType,
                    ...u.bankInfo
                };
                l.value || delete H.bankName;
                const Z = await ae(es(H));
                return Z != null && Z.data ? (u.orderDetail = Z.data,
                    u.bankUTR = Z.data.refNo,
                    !0) : !1
            }
            , un = async () => {
                let U = {
                    payTypeId: A.value,
                    amount: u.amount || 0,
                    bankName: J.value,
                    ...u.bankInfo
                };
                const H = await ae(ts(U));
                return H != null && H.data ? (u.orderDetail = H.data,
                    u.bankUTR = H.data.refNo,
                    !0) : !1
            }
            , Nt = (U, H, Z) => {
                clearInterval(Dt.value),
                    Dt.value = void 0;
                let ve = $a(U, H);
                Dt.value = setInterval(() => {
                    var Ye;
                    if (ve -= 1e3,
                        ve < 0) {
                        clearInterval(Dt.value),
                            Z();
                        return
                    }
                    const Be = Wt(ve, "mm:ss")
                        , Fe = (Ye = oa.value) == null ? void 0 : Ye.querySelectorAll("span");
                    Fe == null || Fe.forEach((Ze, ze) => {
                        Ze.innerHTML = Be[ze]
                    }
                    )
                }
                    , 1e3)
            }
            , vn = async U => {
                var Z, ve;
                if (A.value === 99)
                    return;
                const H = await ae(as({
                    rechargeNumber: U
                }));
                if (((Z = H.data) == null ? void 0 : Z.state) !== 0) {
                    At(((ve = H.data) == null ? void 0 : ve.state) === 1 ? y("orderpay") : y("ordercancle")),
                        sessionStorage.removeItem("localOrder"),
                        d.go(-1);
                    return
                }
            }
            , pn = async () => {
                var H;
                if (Ve().getDollarSign === "₹" && A.value === 9 || j.value) {
                    let Z = {
                        type: 1,
                        tranrefId: u.bankUTR,
                        orderNo: (H = u.orderDetail) == null ? void 0 : H.orderNumber,
                        isBankQRCodeOrder: j.value
                    };
                    const ve = await ae(ba(Z));
                    if (ve.code === 0)
                        Xe(y("success"));
                    else {
                        Xe(ve.msg);
                        return
                    }
                }
                s.emit("changeKeepAliveKey"),
                    d.replace({
                        name: "RechargeHistory"
                    })
            }
            , _n = async (U, H) => {
                await ae(ns({
                    orderNo: U
                })) && (u.isBankOrder = !1,
                    R.value = !1,
                    S.value = !1,
                    Xe(y("cancelSucceed")),
                    s.emit("changeKeepAliveKey"),
                    d.back())
            }
            , $a = (U, H) => {
                let Z = new Date(U);
                return new Date(H).getTime() - Z.getTime()
            }
            , hn = () => {
                u.rechargeSubmitBtnStatus = !1,
                    u.amount = void 0,
                    u.numberPayAmount = void 0,
                    u.numberExchangeRate = void 0,
                    u.currentQuickIndex = -1,
                    u.validateAmount = ""
            }
            , mn = async () => {
                var Z;
                let U = {
                    pageNo: 1,
                    pageSize: 5,
                    startDate: "",
                    endDate: "",
                    state: -1,
                    type: -1,
                    payId: u.currentPayId,
                    category: u.currentPayId
                };
                v.value ? (U.type = -1,
                    delete U.payId) : (delete U.category,
                        delete U.type,
                        U.payTypeId = ((Z = pe.value[u.currentMenu]) == null ? void 0 : Z.payTypeID) || -1);
                const H = await ae(v.value ? Pa(U) : Oa(U));
                H && (N.value = H.data.list)
            }
            , fn = (U, H, Z) => {
                if (H !== 0 && A.value !== 9 && (U.replace(/\D/g, ""),
                    u.bankInfo[Z] = U.replace(/\D/g, "")),
                    H === 0) {
                    let ve = u.bankInfo[u.bank_local[0].split(",")[1]].replace(/\s*/g, "");
                    u.bankInfo[u.bank_local[0].split(",")[1]] = ve
                }
            }
            , wn = U => {
                if (u.currentBankIndex = U,
                    u.currentPayId === 18 && u.bankList.length) {
                    let H = W.value === "৳" ? x.value[U].bankName : u.bankList[U].bankName
                        , Z = u.rechargeTypes.find(ve => ve.paySysName === H);
                    u.bank_local = (Z == null ? void 0 : Z.parameters.split("|")) || [],
                        u.bank_local.map(ve => {
                            let Be = ve.split(",")[1];
                            u.bankInfo[Be] = u.bankList[u.currentBankIndex][Be]
                        }
                        ),
                        u.quickList = Z.quickConfigList
                }
                u.currentPayId === 18 && qt(he())
            }
            , Vt = () => {
                var U;
                u.rechargeSubmitBtnStatus = !1,
                    u.amount = void 0,
                    u.numberPayAmount = void 0,
                    u.numberExchangeRate = void 0,
                    u.validateAmount = "",
                    u.currentQuickIndex = -1,
                    j.value && ((U = u.bankList) == null ? void 0 : U.length) > 1 ? u.currentBankIndex = ka() : u.currentBankIndex = 0,
                    u.localUpiUTR = "",
                    u.bankUTR = ""
            }
            , yn = U => {
                clearTimeout(U.target.timer),
                    U.target.timer = setTimeout(() => {
                        if (u.validateAmount = "",
                            u.currentQuickIndex = -1,
                            w.value) {
                            Y() && (u.numberExchangeRate = u.numberPayAmount ? u.numberPayAmount * ie.value : 0);
                            return
                        }
                        de()
                    }
                        , 500)
            }
            , gn = U => U >= 1e6 ? (U / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : U >= 1e3 ? (U / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : U + ""
            , $n = async () => await navigator.clipboard.readText()
            , kn = U => {
                var H = document.getElementById(U);
                Sn(H, {
                    useCORS: !0,
                    x: 0,
                    y: 0,
                    width: H.offsetWidth,
                    height: H.offsetHeight
                }).then(Z => {
                    Z.toDataURL("image/jpeg");
                    const ve = document.createElement("a");
                    ve.href = Z.toDataURL("image/jpeg"),
                        ve.download = "qrcode.jpeg",
                        document.body.appendChild(ve),
                        ve.click()
                }
                )
            }
            , bn = async U => {
                try {
                    return Nn.toDataURL(U)
                } catch { }
            }
            , Cn = () => {
                u.isBankOrder = !1,
                    u.isUsdtOrder = !1,
                    u.localUpiUTR = "",
                    u.bankUTR = ""
            }
            , ka = () => Math.floor(Math.random() * u.bankList.length)
            , Tn = ({ selectedOptions: U }) => {
                C.value = !1,
                    u.selectOtherBank = U[0]
            }
            , In = (U, H) => {
                let Z = new Date(U.replace(/-/g, "/")).getTime()
                    , ve = new Date(H.replace(/-/g, "/")).getTime();
                Z - ve <= 0 && (B.value = !0)
            }
            ;
        return Ke(() => q.value, () => {
            Vt()
        }
        ),
            ft(() => {
                clearInterval(Dt.value)
            }
            ),
            Ke([() => u.amount, () => u.numberPayAmount], () => {
                if (!u.amount && !u.numberPayAmount) {
                    u.rechargeSubmitBtnStatus = !1;
                    return
                }
                if (w.value && u.numberPayAmount) {
                    u.rechargeSubmitBtnStatus = Y();
                    return
                }
                if (!w.value) {
                    u.rechargeSubmitBtnStatus = de() && u.rechargeTypes.length > 0;
                    return
                }
                u.rechargeSubmitBtnStatus = !1
            }
            ),
        {
            store: u,
            confirmOtherSelectBank: Tn,
            showOtherSelect: C,
            getRechargeTypeName: be,
            handleChangeMenu: Me,
            getRechargeTypes: ke,
            restAmount: Vt,
            handleInput: yn,
            formatNum: gn,
            handleRecharge: Ct,
            handleQuickSelect: me,
            isHaveOrder: ye,
            currentPayId: A,
            numberKeyObj: X,
            isC2CRecharge: v,
            isArpay: c,
            isLocakBank: z,
            isNumberPay: w,
            getC2CunitAmount: G,
            usdtRate: _,
            trxRate: $,
            currentBankName: J,
            currentPayTypeId: q,
            handleSelectPayType: xe,
            handleClearInput: hn,
            getPayTabList: pe,
            arPay: Ee,
            validateBankForm: fn,
            localBankRecharge: fa,
            submitUsdtRecharge: Mt,
            getUsdtOrderInfo: ya,
            getLocalUsdtInfo: De,
            handlePaste: $n,
            createLocalBankOrder: ga,
            getLoclBankOrderDetail: vn,
            handeCancelOrder: _n,
            getAmountList: nn,
            cancelOrderShow: S,
            rechargeActionSheetShow: R,
            handleFinishOrder: pn,
            countdownTimeFun: Nt,
            countdownRef: oa,
            setCountdownRef: M,
            getBankOrderInfo: qt,
            getUpiOrderInfo: wa,
            handleFinishUpiOrder: cn,
            getRechargeTab: Oe,
            historyToDetail: ea,
            getC2COrderInfo: on,
            otherRecharge: Ie,
            getRecordList: mn,
            htmlToImage: kn,
            createQrCode: bn,
            C2CRecharge: an,
            getTransferBankList: x,
            transfer: Ta,
            isFirstPixRecharge: Ia,
            isSplitLocalEWallet: we,
            RechargeRList: N,
            handleSelectBank: wn,
            getElwallett: he,
            IsShowRechargeBankList: l,
            handleUpdateUsdtOrder: dn,
            getOrderDetail: ln,
            isOtherRecharge: g,
            currentOtherThirdBankList: se,
            C2CforbiddenShow: m,
            ErrorCount: b,
            RemainingLimitTime: T,
            C2COrderTimeOutStatus: B,
            C2CTimeOut: In,
            thirdRechargeDialog: D,
            thirdRechargeUrl: O,
            getDownTime: $a,
            currentBankList: K,
            userInfo: p,
            showAmountError: F,
            needPixInfo: Sa,
            rnsPay: qe,
            isRsnpay: r
        }
    }
    , Ga = y => (We("data-v-7cba6004"),
        y = y(),
        Pe(),
        y)
    , Jl = {
        class: "Recharge__container-intro"
    }
    , eo = {
        key: 0,
        class: "Recharge__container-intro__title"
    }
    , to = {
        class: "img"
    }
    , ao = {
        class: "Recharge__container-intro__lists"
    }
    , no = {
        key: 0,
        class: "item"
    }
    , so = ["innerHTML"]
    , lo = {
        class: "red"
    }
    , oo = {
        class: "red"
    }
    , io = {
        class: "red"
    }
    , ro = {
        key: 1,
        class: "item"
    }
    , co = {
        key: 0
    }
    , uo = {
        class: "red"
    }
    , vo = ["innerHTML"]
    , po = {
        key: 2,
        class: "item"
    }
    , _o = Ga(() => e("p", null, "*Số tiền nạp phải là bội số nguyên của 1000", -1))
    , ho = Ga(() => e("p", null, " Lưu ý: nếu tạo lệnh nạp sai với mệnh giá thấp hơn thẻ cào thì hệ thống sẽ tự động cộng vào số tiền mà quý khách đã tạo lệnh,chúng tôi không có trách nhiệm bổ sung số tiền chênh lệch.Xin cảm ơn! ", -1))
    , mo = {
        key: 3,
        class: "item"
    }
    , fo = {
        key: 0
    }
    , wo = {
        key: 4,
        class: "item"
    }
    , yo = {
        key: 5,
        class: "item"
    }
    , go = {
        key: 6,
        class: "item"
    }
    , $o = {
        key: 7,
        class: "item"
    }
    , ko = le({
        __name: "Instructions",
        props: {
            withdrawalsrule: {
                type: null,
                required: !1
            },
            showType: {
                type: Number,
                required: !1,
                default: 0
            },
            withdrawMoney: {
                type: Number,
                required: !1,
                default: 0
            },
            withdrawType: {
                type: Number,
                required: !1,
                default: -1
            },
            isShowHead: {
                type: Boolean,
                required: !1,
                default: !1
            },
            rechargeInfo: {
                type: null,
                required: !1
            }
        },
        setup(y) {
            const s = y
                , { store: v } = ut()
                , c = {}.VITE_BASE_VIR
                , r = V(() => s.showType === 9 || s.showType === 18 || s.showType === 10 ? "bank" : s.showType === 20 ? "c2c" : s.showType === 12 ? "upi" : s.showType === 6 && c ? "exclusive" : s.showType === 11 || s.showType === 16 || s.showType === 19 ? "numberCurrency" : s.showType === 771 ? "c2cDetail" : s.withdrawType !== -1 ? "" : "bank");
            return (i, p) => {
                var $, k, l, w, d, R, S, N, C, m, b, T, B;
                const _ = L("svg-icon");
                return n(),
                    o("div", Jl, [i.isShowHead ? (n(),
                        o("div", eo, [e("div", to, [h(_, {
                            name: "shuoming"
                        })]), e("p", null, t(i.$t("rechargeInstruction")), 1)])) : f("v-if", !0), e("div", ao, [[1, 3, 6].includes(i.withdrawType) ? (n(),
                            o("div", no, [e("p", {
                                innerHTML: i.$t("instructionDes", [a(ue)(($ = i.withdrawalsrule) == null ? void 0 : $.amountofCode)])
                            }, null, 8, so), e("p", null, [E(t(i.$t("instructionTxt6")) + " ", 1), e("span", lo, t((k = i.withdrawalsrule) == null ? void 0 : k.startTime) + "-" + t((l = i.withdrawalsrule) == null ? void 0 : l.endTime), 1)]), e("p", null, [E(t(i.$t("instructionTxt7")), 1), e("span", oo, t((w = i.withdrawalsrule) == null ? void 0 : w.withdrawRemainingCount), 1)]), e("p", null, [E(t(i.$t("instructionTxt8")), 1), e("span", io, t(a(ue)((d = i.withdrawalsrule) == null ? void 0 : d.minPrice)) + "-" + t(a(ue)((R = i.withdrawalsrule) == null ? void 0 : R.maxPrice)), 1)])])) : f("v-if", !0), f(" c2c "), r.value === "c2c" ? (n(),
                                o("div", ro, [e("p", null, t(i.$t("c2cMBAInteger", [(S = i.rechargeInfo) == null ? void 0 : S.c2cUnitAmount])), 1), ((N = i.rechargeInfo) == null ? void 0 : N.rechargeRifts) > 0 ? (n(),
                                    o("p", co, t(i.$t("c2cNEWUPIW", [a(pa)((C = i.rechargeInfo) == null ? void 0 : C.rechargeRifts, 100)])), 1)) : f("v-if", !0), e("p", null, [E(t(i.$t("c2cTUAR")), 1), e("span", uo, t(a(ue)((m = i.rechargeInfo) == null ? void 0 : m.miniPrice)) + "-" + t(a(ue)((b = i.rechargeInfo) == null ? void 0 : b.maxPrice)), 1)]), e("p", {
                                        innerHTML: i.$t("c2cInstructions1")
                                    }, null, 8, vo)])) : f("v-if", !0), f(" 专属 "), r.value === "exclusive" ? (n(),
                                        o("div", po, [e("p", null, "Số tiền nhận được：" + t((a(v).amount || 0) * Number(a(c))), 1), e("p", null, "Phí: " + t((1 - a(c)) * 100) + "%", 1), _o, ho])) : f("v-if", !0), f(" 一般三方和本地银行充值 "), r.value === "bank" ? (n(),
                                            o("div", mo, [e("p", null, t(i.$t("instructionTxt2")), 1), e("p", null, t(i.$t("instructionTxt3")), 1), e("p", null, t(i.$t("instructionTxt4")), 1), i.showType === 18 ? (n(),
                                                o("p", fo, t(i.$t("rechargeBankDetailTip")), 1)) : f("v-if", !0), e("p", null, t(i.$t("instructionTxt5")), 1)])) : f("v-if", !0), r.value === "c2cDetail" ? (n(),
                                                    o("div", wo, [f(" <p>{{ $t('c2cInstructions2') }}</p> "), e("p", null, t(i.$t("c2cInstructions3")), 1)])) : f("v-if", !0), r.value === "numberCurrency" ? (n(),
                                                        o("div", yo, [e("p", null, t(i.$t("instructionsDesc1", [(((T = i.rechargeInfo) == null ? void 0 : T.miniPrice) || 1) + (i.showType === 16 ? "TRX" : "USDT"), (((B = i.rechargeInfo) == null ? void 0 : B.miniPrice) || 1) + (i.showType === 16 ? "TRX" : "USDT")])), 1), e("p", null, t(i.$t("instructionsDesc2")), 1), e("p", null, t(i.$t("instructionsDesc3")), 1), e("p", null, t(i.$t("instructionsDesc4")), 1), e("p", null, t(i.$t("instructionsDesc5")), 1)])) : f("v-if", !0), r.value === "upi" ? (n(),
                                                            o("div", go, [e("p", null, t(i.$t("upiInstructions1")), 1), e("p", null, t(i.$t("upiInstructions2")), 1)])) : f("v-if", !0), i.withdrawType === 3 ? (n(),
                                                                o("div", $o, [f(" <p>{{ $t('instructionTxt9') }}</p> "), e("p", null, t(i.$t("instructionTxt10")), 1), e("p", null, t(i.$t("instructionTxt11")), 1)])) : f("v-if", !0)])])
            }
        }
    });
const Yt = oe(ko, [["__scopeId", "data-v-7cba6004"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Recharge/Instructions.vue"]])
    , bo = {
        class: "pay_state_step"
    }
    , Co = ["src"]
    , To = le({
        __name: "PayState",
        props: {
            state: {
                type: Number,
                default: 1
            },
            type: {
                type: Number,
                default: 1
            }
        },
        setup(y) {
            const s = y
                , { t: v } = Ne()
                , c = V(() => s.type === 1 ? [{
                    img: ge("wallet/recharge", "setup1"),
                    title: v("transfer")
                }, {
                    img: s.state >= 2 ? ge("wallet/recharge", "setup2_active") : ge("wallet/recharge", "setup2"),
                    title: v("uploadproof")
                }, {
                    img: s.state >= 3 ? ge("wallet/recharge", "setup3_active") : ge("wallet/recharge", "setup3"),
                    title: v("waitConfirm")
                }, {
                    img: s.state === 4 ? ge("wallet/recharge", "setup4_active") : ge("wallet/recharge", "setup4"),
                    title: v("completed")
                }] : [{
                    img: ge("wallet/recharge", "appeal_state"),
                    title: v("c2cTip32")
                }, {
                    img: s.state >= 3 ? ge("wallet/recharge", "setup3_active") : ge("wallet/recharge", "setup3"),
                    title: v("amountError2")
                }, {
                    img: s.state === 4 ? ge("wallet/recharge", "setup4_active") : ge("wallet/recharge", "setup4"),
                    title: v("completed")
                }]);
            return (r, i) => (n(),
                o("div", bo, [(n(!0),
                    o(ne, null, Se(c.value, (p, _) => (n(),
                        o("div", {
                            class: ee(["item", {
                                appeal: y.type === 2
                            }]),
                            key: _
                        }, [e("img", {
                            src: p.img,
                            alt: ""
                        }, null, 8, Co), e("span", null, t(p.title), 1)], 2))), 128))]))
        }
    });
const Fa = oe(To, [["__scopeId", "data-v-d8d9a23f"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/OtherPay/components/PayState.vue"]])
    , st = y => (We("data-v-5bada7e8"),
        y = y(),
        Pe(),
        y)
    , Io = {
        class: "other_pay"
    }
    , So = {
        key: 0,
        class: "pay_store"
    }
    , No = ["onClick"]
    , Do = ["src"]
    , Ao = st(() => e("div", {
        class: "tip"
    }, [e("div", null, "have you paid successfully?"), e("div", null, "Paytm,PhonePe,GooglePay,Other Bank")], -1))
    , Ro = {
        class: "orderInfo"
    }
    , Bo = {
        key: 0,
        class: "info_item"
    }
    , Uo = {
        class: "info_item"
    }
    , Wo = st(() => e("span", null, "UPI ID", -1))
    , Po = {
        key: 1,
        class: "info_item"
    }
    , Oo = st(() => e("span", null, "UTR", -1))
    , Lo = {
        class: "info_item"
    }
    , Mo = {
        key: 2
    }
    , qo = ["src"]
    , Vo = {
        key: 3
    }
    , Eo = st(() => e("div", {
        class: "UTR_title"
    }, "UTR(UPI Ref.ID)", -1))
    , jo = {
        class: "c2cupload_box"
    }
    , xo = {
        class: "c2cupload_tip"
    }
    , Ho = ["src"]
    , Go = {
        class: "upload_action"
    }
    , Fo = {
        class: "upload_btn"
    }
    , zo = {
        class: "upload_text"
    }
    , Ko = st(() => e("br", null, null, -1))
    , Qo = {
        key: 2,
        class: "pay_btn"
    }
    , Yo = {
        key: 3,
        class: "c2c_btn"
    }
    , Zo = {
        class: "actionSheet__content"
    }
    , Xo = {
        class: "title"
    }
    , Jo = ["src"]
    , ei = {
        class: "sheet_info"
    }
    , ti = {
        class: "info_item sheet_item"
    }
    , ai = st(() => e("span", null, "UPI ID", -1))
    , ni = {
        class: "sheet_right"
    }
    , si = {
        class: "info_item sheet_item"
    }
    , li = st(() => e("span", null, "UTR", -1))
    , oi = {
        class: "sheet_right"
    }
    , ii = {
        class: "info_item sheet_item"
    }
    , ri = {
        class: "sheet_amount"
    }
    , ci = {
        class: "finish_tit"
    }
    , di = {
        class: "finish_tip"
    }
    , ui = {
        class: "pay_btn"
    }
    , vi = {
        class: "c2c_actiosheet"
    }
    , pi = ["src"]
    , _i = st(() => e("div", {
        class: "text"
    }, [E("*Confirm using "), e("span", null, "your own UPI"), E(" for the transfer")], -1))
    , hi = st(() => e("div", {
        class: "text"
    }, [E(" *After a successful transfer, return here and provide the "), e("span", null, "12-digit Ref/UTR No"), E(". for the deposit into your account. ")], -1))
    , mi = st(() => e("div", {
        class: "video_text"
    }, "DEMO VIDEO >>", -1))
    , fi = st(() => e("div", {
        class: "text2"
    }, "Sample of UTR(UPI Ref.ID)", -1))
    , wi = {
        class: "img_box"
    }
    , yi = ["src"]
    , gi = {
        class: "close_box"
    }
    , $i = le({
        __name: "index",
        setup(y) {
            const { store: s, getUpiOrderInfo: v, handleFinishUpiOrder: c, getC2COrderInfo: r, handeCancelOrder: i, createQrCode: p, htmlToImage: _, getDownTime: $, C2COrderTimeOutStatus: k } = ut()
                , l = fe()
                , w = I(!1)
                , d = I()
                , R = I(!1)
                , S = I()
                , N = I("")
                , C = I(!1)
                , m = I(1)
                , b = I([])
                , T = I("")
                , B = I()
                , D = I("")
                , O = [{
                    name: "Paytm",
                    icon: ge("wallet/recharge", "paytm"),
                    id: 1,
                    url: "paytmmp://upi"
                }, {
                    name: "PhonePe",
                    icon: ge("wallet/recharge", "phone_pe"),
                    id: 2,
                    url: "phonepe://pay"
                }, {
                    name: "GooglePay",
                    icon: ge("wallet/recharge", "google_pay"),
                    id: 3,
                    url: "gpay://upi"
                }, {
                    name: "Other Bank",
                    icon: ge("wallet/recharge", "other_bank"),
                    id: 4,
                    url: "upi://pay"
                }]
                , Q = I({
                    fileType: 1,
                    fileUrl: ""
                })
                , W = V(() => l.currentRoute.value.query.type === "C2C")
                , F = J => {
                    window.open(J, "_blank")
                }
                ;
            V(() => m.value === 2 ? $e("common", "upload_icon") : m.value === 3 ? ge("common", "switch") : $e("common", "upload_icon"));
            const M = async J => {
                b.value = [];
                const K = new FormData;
                K.append("files", J.file);
                const se = await ae(La(K));
                T.value = se.data[0].ossHttp + "/" + se.data[0].src,
                    Q.value.fileUrl = se.data[0].src
            }
                , X = () => {
                    k.value = !1,
                        l.back()
                }
                , G = () => {
                    w.value = !1
                }
                , x = () => {
                    s.localUpiUTR.length < 12 || (w.value = !0)
                }
                , P = () => {
                    l.back()
                }
                , A = V(() => l.currentRoute.value.query.type)
                , z = () => {
                    if (W.value && m.value === 1) {
                        if (s.localUpiUTR.length < 12)
                            return;
                        m.value = 2
                    } else
                        x()
                }
                , j = async J => {
                    if (s.localUpiUTR.length !== 12) {
                        R.value = !0;
                        return
                    }
                    await c(l.currentRoute.value.query.type, J),
                        w.value = !1
                }
                , q = () => {
                    var J, K;
                    l.currentRoute.value.query.type === "upi" ? i(((J = d.value) == null ? void 0 : J.orderNumber) + "") : l.push({
                        name: "CancelRecharge",
                        query: {
                            orderNo: (K = d.value) == null ? void 0 : K.id
                        }
                    })
                }
                , g = async () => {
                    if (await r(),
                        d.value = s.C2COrderInfo,
                        s.isC2COrder = !1,
                        !d.value) {
                        k.value = !0,
                            clearInterval(S.value);
                        return
                    }
                    let J = $(d.value.serviceTime, d.value.endTime);
                    S.value = setInterval(() => {
                        J -= 1e3,
                            J < 0 && (k.value = !0,
                                clearInterval(S.value)),
                            N.value = Wt(J, "mm:ss")
                    }
                        , 1e3)
                }
                ;
            return Ce(async () => {
                var we, Oe, ye, ie;
                let J = l.currentRoute.value.query.type;
                S.value = null;
                let K = "";
                J === "upi" ? (await v(),
                    d.value = s.upiOrderInfo,
                    K = "upi://pay?pa=" + ((we = d.value) == null ? void 0 : we.upiAccount) + "&am=" + ((Oe = d.value) == null ? void 0 : Oe.amount) + "&cu=INR") : (C.value = !0,
                        await g(),
                        K = "upi://pay?pa=" + ((ye = d.value) == null ? void 0 : ye.sellerAccountNo) + "&am=" + ((ie = d.value) == null ? void 0 : ie.orderAmount) + "&cu=INR");
                const se = await p(K);
                D.value = se,
                    p(K)
            }
            ),
                ft(() => {
                    clearInterval(S.value)
                }
                ),
                Ut(() => {
                    sessionStorage.removeItem("upiOrderInfo"),
                        clearInterval(S.value)
                }
                ),
                (J, K) => {
                    var qe, pe, De, be;
                    const se = L("NavBar")
                        , we = L("svg-icon")
                        , Oe = L("van-field")
                        , ye = L("van-uploader")
                        , ie = L("van-divider")
                        , Ee = L("van-action-sheet");
                    return n(),
                        o("div", Io, [h(se, {
                            class: "white",
                            title: J.$t("payments"),
                            "left-arrow": "",
                            onClickLeft: P
                        }, null, 8, ["title"]), W.value ? (n(),
                            Te(Fa, {
                                key: 1,
                                state: m.value
                            }, null, 8, ["state"])) : (n(),
                                o("div", So, [(n(),
                                    o(ne, null, Se(O, he => e("div", {
                                        class: "store_item",
                                        key: he.id,
                                        onClick: Me => F(he.url)
                                    }, [e("img", {
                                        src: he.icon,
                                        alt: ""
                                    }, null, 8, Do), e("span", null, t(he.name), 1)], 8, No)), 64))])), Ao, e("div", Ro, [W.value ? (n(),
                                        o("div", Bo, [e("span", null, t(J.$t("expiredTimes")), 1), e("div", null, t(N.value), 1)])) : f("v-if", !0), e("div", Uo, [Wo, e("div", null, [e("span", null, t(((qe = d.value) == null ? void 0 : qe.upiAccount) || ((pe = d.value) == null ? void 0 : pe.sellerAccountNo) || "--"), 1), h(we, {
                                            name: "copy",
                                            onClick: K[0] || (K[0] = he => {
                                                var Me, je;
                                                return a(Ae)(((Me = d.value) == null ? void 0 : Me.sellerAccountNo) || ((je = d.value) == null ? void 0 : je.upiAccount))
                                            }
                                            )
                                        })])]), m.value !== 1 ? (n(),
                                            o("div", Po, [Oo, e("div", null, [e("span", null, t(a(s).localUpiUTR), 1)])])) : f("v-if", !0), e("div", Lo, [e("span", null, t(J.$t("amount")), 1), e("div", null, t(a(ue)((De = d.value) == null ? void 0 : De.orderAmount) || ((be = d.value) == null ? void 0 : be.amount) || "--"), 1)]), m.value === 1 || !W.value ? (n(),
                                                o("div", Mo, [e("img", {
                                                    class: "qrcode",
                                                    src: D.value,
                                                    id: "qrcode"
                                                }, null, 8, qo), e("div", {
                                                    class: "save_qrcode",
                                                    onClick: K[1] || (K[1] = he => a(_)("qrcode"))
                                                }, t(J.$t("saveTheQRCode")), 1)])) : f("v-if", !0), f(` <img class="qrcode" :src="codeUrl" id="qrcode" />
			<div class="save_qrcode" @click="htmlToImage('qrcode')">{{ $t('saveTheQRCode') }}</div> `), m.value === 1 ? (n(),
                                        o("div", Vo, [Eo, h(Oe, {
                                            modelValue: a(s).localUpiUTR,
                                            "onUpdate:modelValue": K[3] || (K[3] = he => a(s).localUpiUTR = he),
                                            class: "info_item",
                                            type: "digit",
                                            placeholder: "Please enter a 12-digit UTR",
                                            maxlength: 12
                                        }, {
                                            "right-icon": te(() => [h(we, {
                                                name: "copy",
                                                alt: "",
                                                onClick: K[2] || (K[2] = he => a(Ae)(a(s).localUpiUTR))
                                            })]),
                                            _: 1
                                        }, 8, ["modelValue"])])) : f("v-if", !0), m.value === 1 ? (n(),
                                            Te(Yt, {
                                                key: 4,
                                                showType: W.value ? 771 : 12,
                                                isShowHead: !0
                                            }, null, 8, ["showType"])) : f("v-if", !0)]), e("div", jo, [e("div", xo, [e("div", null, t(J.$t("C2Cuploadtip3")), 1), e("div", null, t(J.$t("C2Cuploadtip4")), 1)]), e("div", {
                                                class: ee(["upload_img", {
                                                    noAdd: !!T.value
                                                }]),
                                                onClick: K[4] || (K[4] = () => {
                                                    B.value.chooseFile()
                                                }
                                                )
                                            }, [T.value ? (n(),
                                                o("img", {
                                                    key: 0,
                                                    src: T.value,
                                                    alt: ""
                                                }, null, 8, Ho)) : f("v-if", !0)], 2), e("div", Go, [h(ye, {
                                                    ref_key: "uploadRef",
                                                    ref: B,
                                                    "max-size": 5e3 * 1024,
                                                    onOversize: K[5] || (K[5] = () => a(At)(J.$t("C2Cuploadtip2"))),
                                                    modelValue: b.value,
                                                    "onUpdate:modelValue": K[6] || (K[6] = he => b.value = he),
                                                    accept: "image/*",
                                                    "after-read": M,
                                                    "preview-image": !1
                                                }, {
                                                    default: te(() => [e("div", Fo, [h(we, {
                                                        name: "uploadIcon"
                                                    }), f(' <img :src="uploadBtnIcon" /> '), e("span", null, t(m.value === 2 && b.value.length === 0 ? J.$t("uploadImg") : J.$t("changeImage")), 1)])]),
                                                    _: 1
                                                }, 8, ["modelValue"]), e("div", zo, [E(t(J.$t("C2Cuploadtip1")), 1), Ko, E(" " + t(J.$t("C2Cuploadtip2")), 1)])])]), m.value === 1 ? (n(),
                                                    o("div", Qo, [e("div", {
                                                        class: "cancel_order",
                                                        onClick: q
                                                    }, t(J.$t("concelOrder")), 1), e("div", {
                                                        class: ee(["finish", {
                                                            unfinish: a(s).localUpiUTR.length < 12
                                                        }]),
                                                        onClick: z
                                                    }, t(W.value && m.value === 1 ? J.$t("nextStep") : J.$t("rechargeDetailDesc6")), 3)])) : f("v-if", !0), m.value !== 1 ? (n(),
                                                        o("div", Yo, [e("div", {
                                                            class: ee(["c2cFinish", {
                                                                no_finish: !T.value
                                                            }]),
                                                            onClick: K[7] || (K[7] = () => {
                                                                var he;
                                                                T.value && a(c)("c2c", (he = d.value) == null ? void 0 : he.id, [Q.value])
                                                            }
                                                            )
                                                        }, t(J.$t("rechargeDetailDesc6")), 3), e("div", {
                                                            class: "backPay",
                                                            onClick: K[8] || (K[8] = he => m.value = 1)
                                                        }, t(J.$t("backPay")), 1)])) : f("v-if", !0), h(Ee, {
                                                            show: w.value,
                                                            "onUpdate:show": K[11] || (K[11] = he => w.value = he),
                                                            onClickOverlay: G
                                                        }, {
                                                            default: te(() => {
                                                                var he, Me, je, ke;
                                                                return [e("div", Zo, [e("div", Xo, [e("img", {
                                                                    src: a($e)("wallet", "upi"),
                                                                    alt: ""
                                                                }, null, 8, Jo), e("span", null, t((A.value === "upi" ? "Local UPI " : "NEW UPI ") + J.$t("recharge")), 1)]), h(ie), e("div", ei, [e("div", ti, [ai, e("div", ni, t(((he = d.value) == null ? void 0 : he.sellerAccountNo) || ((Me = d.value) == null ? void 0 : Me.upiAccount)), 1)]), e("div", si, [li, e("div", oi, t(a(s).localUpiUTR), 1)]), e("div", ii, [e("span", null, t(J.$t("amount")), 1), e("div", ri, t(a(ue)(((je = d.value) == null ? void 0 : je.orderAmount) || ((ke = d.value) == null ? void 0 : ke.amount))), 1)])]), e("div", ci, t(J.$t("rechargeDetailDesc8")), 1), e("div", di, t(J.$t("rechargeDetailDesc11")), 1), e("div", ui, [e("div", {
                                                                    class: "cancel_order",
                                                                    onClick: K[9] || (K[9] = He => w.value = !1)
                                                                }, t(J.$t("rechargeDetailDesc7")), 1), e("div", {
                                                                    class: "finish",
                                                                    onClick: K[10] || (K[10] = He => {
                                                                        var re, xe;
                                                                        return j(((re = d.value) == null ? void 0 : re.id) || ((xe = d.value) == null ? void 0 : xe.orderNumber))
                                                                    }
                                                                    )
                                                                }, t(J.$t("rechargeDetailDesc8")), 1)])])]
                                                            }
                                                            ),
                                                            _: 1
                                                        }, 8, ["show"]), h(Ee, {
                                                            title: " ",
                                                            show: C.value,
                                                            "onUpdate:show": K[13] || (K[13] = he => C.value = he),
                                                            onClickOverlay: K[14] || (K[14] = he => C.value = !1),
                                                            closeable: !0
                                                        }, {
                                                            default: te(() => [e("div", vi, [e("img", {
                                                                src: a(ge)("common", "close"),
                                                                class: "close_img"
                                                            }, null, 8, pi), _i, hi, mi, fi, e("div", wi, [e("img", {
                                                                src: a(ge)("wallet/recharge", "C2Chelp"),
                                                                alt: "",
                                                                class: "help_img"
                                                            }, null, 8, yi)]), e("div", gi, [e("div", {
                                                                class: "close_btn",
                                                                onClick: K[12] || (K[12] = he => C.value = !1)
                                                            }, t(J.$t("close")), 1)])])]),
                                                            _: 1
                                                        }, 8, ["show"]), h(nt, {
                                                            show: R.value,
                                                            "onUpdate:show": K[15] || (K[15] = he => R.value = he),
                                                            showCancelBtn: !1,
                                                            title: J.$t("UTRError"),
                                                            "confirm-text": "OK",
                                                            confirm: R.value = !1
                                                        }, {
                                                            content: te(() => [E(t(J.$t("c2cTip16")), 1)]),
                                                            _: 1
                                                        }, 8, ["show", "title", "confirm"]), h(nt, {
                                                            show: a(k),
                                                            "onUpdate:show": K[16] || (K[16] = he => it(k) ? k.value = he : null),
                                                            showCancelBtn: !1,
                                                            title: J.$t("C2Ctimeout1"),
                                                            "confirm-text": "OK",
                                                            onConfirm: X
                                                        }, {
                                                            content: te(() => [E(t(J.$t("C2Ctimeout2")), 1)]),
                                                            _: 1
                                                        }, 8, ["show", "title"])])
                }
        }
    });
const ki = oe($i, [["__scopeId", "data-v-5bada7e8"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/OtherPay/index.vue"]])
    , W$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ki
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , za = y => (We("data-v-4f3d8608"),
        y = y(),
        Pe(),
        y)
    , bi = ["src"]
    , Ci = {
        class: "upi_item"
    }
    , Ti = {
        class: "title"
    }
    , Ii = {
        key: 0,
        class: "upi_image"
    }
    , Si = {
        key: 1,
        class: "gift"
    }
    , Ni = {
        key: 2,
        class: "upi_image"
    }
    , Di = ["src"]
    , Ai = {
        class: "upi_item rns_item"
    }
    , Ri = {
        class: "title"
    }
    , Bi = {
        key: 0,
        class: "upi_image"
    }
    , Ui = {
        class: "Recharge__container-tabcard"
    }
    , Wi = ["onClick"]
    , Pi = {
        class: "centers"
    }
    , Oi = {
        key: 0,
        class: "gift"
    }
    , Li = {
        class: "Recharge__container-tabcard__top"
    }
    , Mi = ["src"]
    , qi = {
        class: "Recharge__container-tabcard__bot"
    }
    , Vi = {
        key: 2
    }
    , Ei = {
        class: "left"
    }
    , ji = {
        class: "right"
    }
    , xi = {
        class: "ar_wallet"
    }
    , Hi = {
        class: "info"
    }
    , Gi = ["src"]
    , Fi = {
        key: 0,
        class: "tit"
    }
    , zi = {
        key: 1,
        class: "tip"
    }
    , Ki = {
        key: 2,
        class: "wallet_amount"
    }
    , Qi = za(() => e("span", null, "ARB", -1))
    , Yi = {
        key: 3
    }
    , Zi = {
        class: "ar_wallet"
    }
    , Xi = {
        class: "info"
    }
    , Ji = ["src"]
    , er = {
        key: 0,
        class: "tip"
    }
    , tr = {
        class: "tit"
    }
    , ar = {
        class: "wallet_amount"
    }
    , nr = za(() => e("em", null, "rsn", -1))
    , sr = le({
        __name: "RechargeMenu",
        setup(y) {
            const { store: s, handleChangeMenu: v, getPayTabList: c, arPay: r, currentPayId: i, rnsPay: p } = ut()
                , { isArWalletActive: _, arWallet: $, getInfo: k, goWallet: l, goActive: w } = It()
                , { t: d } = Ne();
            fe();
            const R = N => {
                N === "RSN" ? s.rsnInfo.walletActivationStatus === 0 ? w("wallet/recharge", "RSN") : l("wallet/recharge", "RSN") : _.value ? l("wallet/recharge") : w("wallet/recharge")
            }
                , S = () => {
                    const N = encodeURIComponent("https://" + window.location.host + "/#/main");
                    let m = `https://arbpay.me/#/TradRules?lang=${localStorage.getItem("language")}&returnUrl=${N}`;
                    window.location.href = m
                }
                ;
            return Ke(() => i.value, async N => {
                N === 21 && (Da({
                    message: d("loading") + "...",
                    forbidClick: !0
                }),
                    await k(),
                    s.arPayInfo = $.value,
                    Dn())
            }
                , {
                    immediate: !0
                }),
                (N, C) => {
                    var T, B, D, O, Q, W, F;
                    const m = L("svg-icon")
                        , b = L("van-icon");
                    return n(),
                        o("div", null, [a(r) ? (n(),
                            o("div", {
                                key: 0,
                                class: ee(["new_upi", {
                                    upi_active: a(s).currentMenu === -1
                                }]),
                                onClick: C[0] || (C[0] = M => a(v)(-1))
                            }, [e("img", {
                                src: a(r).payNameUrl,
                                alt: ""
                            }, null, 8, bi), e("div", Ci, [e("div", Ti, t(a(r).payName), 1), (T = a(r)) != null && T.maxRechargeRifts ? (n(),
                                o("div", Ii, "+" + t(((B = a(r)) == null ? void 0 : B.maxRechargeRifts) * 100) + "%", 1)) : f("v-if", !0), a(r).maxRechargeRifts ? (n(),
                                    o("div", Si, t(a(d)("arGift", [a(pa)(a(r).maxRechargeRifts || 0, 100) + "%"])), 1)) : f("v-if", !0), (D = a(r)) != null && D.maxRechargeRifts ? (n(),
                                        o("div", Ni, "+" + t(((O = a(r)) == null ? void 0 : O.maxRechargeRifts) * 100) + "%", 1)) : f("v-if", !0)])], 2)) : f("v-if", !0), a(p) ? (n(),
                                            o("div", {
                                                key: 1,
                                                class: ee(["new_upi", {
                                                    upi_active: a(s).currentMenu === -2
                                                }]),
                                                onClick: C[1] || (C[1] = M => a(v)(-2))
                                            }, [e("img", {
                                                src: a(p).payNameUrl,
                                                alt: ""
                                            }, null, 8, Di), e("div", Ai, [e("div", Ri, t(a(p).payName), 1), a(p).maxRechargeRifts ? (n(),
                                                o("div", Bi, "+" + t(((Q = a(p)) == null ? void 0 : Q.maxRechargeRifts) * 100) + "%", 1)) : f("v-if", !0)])], 2)) : f("v-if", !0), e("div", Ui, [(n(!0),
                                                    o(ne, null, Se(a(c), (M, X) => (n(),
                                                        o("div", {
                                                            key: X,
                                                            class: ee(["Recharge__container-tabcard__items", {
                                                                active: X === a(s).currentMenu
                                                            }]),
                                                            onClick: G => a(v)(X)
                                                        }, [e("div", Pi, [M.maxRechargeRifts && M.maxRechargeRifts > 0 ? (n(),
                                                            o("div", Oi, [e("span", null, "+" + t(a(ca)((M == null ? void 0 : M.maxRechargeRifts) * 100)) + "%", 1)])) : f("v-if", !0), e("div", Li, [e("img", {
                                                                class: "img",
                                                                src: X === a(s).currentMenu ? M.payNameUrl2 : M.payNameUrl,
                                                                alt: ""
                                                            }, null, 8, Mi)]), e("div", qi, [E(t(M.payName) + " ", 1), f(' <span v-if="item.maxRechargeRifts && item.maxRechargeRifts > 0">{{ item?.maxRechargeRifts * 100 }}%</span> ')])])], 10, Wi))), 128))]), a(r) && a(s).currentMenu === -1 ? (n(),
                                                                o("div", Vi, [e("div", {
                                                                    class: "rule",
                                                                    onClick: C[2] || (C[2] = M => S())
                                                                }, [e("div", Ei, [h(m, {
                                                                    name: "arpay1"
                                                                }), e("p", null, t(N.$t("arbTip1")), 1)]), e("div", ji, [E(t(N.$t("checkOver")), 1), h(b, {
                                                                    name: "arrow"
                                                                })])]), e("div", xi, [e("div", Hi, [e("img", {
                                                                    src: a(r).payNameUrl,
                                                                    alt: ""
                                                                }, null, 8, Gi), e("div", null, [a(_) ? (n(),
                                                                    o("div", Fi, t(a(d)("arbTip13")), 1)) : f("v-if", !0), a(_) ? (n(),
                                                                        o("div", Ki, [E(t(((W = a($)) == null ? void 0 : W.balance) || 0), 1), Qi])) : (n(),
                                                                            o("div", zi, t(N.$t("arNoActive")), 1))])]), e("div", {
                                                                                class: "ar_btn",
                                                                                onClick: R
                                                                            }, t(a(_) ? a(d)("comminWallet") : a(d)("arActive")), 1)]), f(` <div class="ar_wallet_tip">{{ $t('arTip') }}</div> `)])) : f("v-if", !0), a(p) && a(s).currentMenu === -2 ? (n(),
                                                                                o("div", Yi, [e("div", Zi, [e("div", Xi, [e("img", {
                                                                                    src: a(p).payNameUrl,
                                                                                    alt: ""
                                                                                }, null, 8, Ji), e("div", null, [a(s).rsnInfo.walletActivationStatus === 0 ? (n(),
                                                                                    o("div", er, t(N.$t("rnsNoActive")), 1)) : (n(),
                                                                                        o(ne, {
                                                                                            key: 1
                                                                                        }, [e("div", tr, t(a(d)("RSNTip")), 1), e("div", ar, [e("em", null, t(a(d)("balance")) + ":", 1), E(" " + t(((F = a(s).rsnInfo) == null ? void 0 : F.balance) || 0) + " ", 1), nr])], 64))])]), e("div", {
                                                                                            class: "ar_btn",
                                                                                            onClick: C[3] || (C[3] = M => R("RSN"))
                                                                                        }, t(a(s).rsnInfo.walletActivationStatus === 0 ? a(d)("RNSActive") : a(d)("comminWallet")), 1)]), f(` <div class="ar_wallet_tip">{{ $t('arTip') }}</div> `)])) : f("v-if", !0)])
                }
        }
    });
const lr = oe(sr, [["__scopeId", "data-v-4f3d8608"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Recharge/RechargeMenu.vue"]])
    , or = {
        key: 0,
        class: "arCard"
    }
    , ir = {
        class: "left"
    }
    , rr = ["src"]
    , cr = {
        class: "features"
    }
    , dr = {
        class: "title"
    }
    , ur = {
        class: "t1"
    }
    , vr = {
        class: "t3"
    }
    , pr = ["innerHTML"]
    , _r = ["innerHTML"]
    , hr = le({
        __name: "noActivate",
        props: {
            pageType: {
                type: String,
                required: !0
            }
        },
        setup(y) {
            const s = () => {
                const r = encodeURIComponent("https://" + window.location.host + "/#/main");
                let p = `https://arbpay.me/#/ActivaRules?lang=${localStorage.getItem("language")}&returnUrl=${r}`;
                window.location.href = p
            }
                , { goActive: v } = It()
                , c = V(() => Ve().getProjectName);
            return (r, i) => {
                const p = L("svg-icon")
                    , _ = L("van-icon");
                return n(),
                    o(ne, null, [r.pageType !== "wallet/recharge" ? (n(),
                        o("div", or, [e("div", ir, [e("img", {
                            src: a($e)("wallet/withdrawType", "21")
                        }, null, 8, rr), E(" " + t(r.$t("arbTip3")), 1)]), e("div", {
                            class: "right",
                            onClick: i[0] || (i[0] = $ => a(v)(r.pageType))
                        }, t(r.$t("arbActive")), 1)])) : f("v-if", !0), e("div", cr, [e("div", dr, [h(p, {
                            name: "arpay2"
                        }), E(" " + t(r.$t("arbTip4")), 1)]), e("p", null, t(r.$t("arbTip5")), 1), e("p", ur, t(r.$t("arbTip6")), 1), e("p", {
                            class: "t2",
                            onClick: i[1] || (i[1] = $ => s())
                        }, [E(t(r.$t("arbTip7")), 1), h(_, {
                            name: "arrow"
                        })]), e("p", vr, t(r.$t("arbTip8")), 1), e("p", {
                            innerHTML: r.$t("abbTip9", [c.value])
                        }, null, 8, pr), e("p", {
                            innerHTML: r.$t("arbTip10", [c.value])
                        }, null, 8, _r), e("p", null, t(r.$t("arbTip11")), 1), e("p", null, t(r.$t("arbTip12")), 1), e("div", {
                            class: "toActive",
                            onClick: i[2] || (i[2] = $ => a(v)(r.pageType))
                        }, t(r.$t("arActive")), 1)])], 64)
            }
        }
    });
const Ka = oe(hr, [["__scopeId", "data-v-e7d19060"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/Ar/noActivate.vue"]])
    , Pt = y => (We("data-v-9e03166f"),
        y = y(),
        Pe(),
        y)
    , mr = {
        class: "Recharge__content"
    }
    , fr = {
        key: 0,
        class: "Recharge__content-quickInfo boxStyle"
    }
    , wr = {
        class: "Recharge__content-quickInfo__title"
    }
    , yr = {
        class: "title"
    }
    , gr = ["onClick"]
    , $r = {
        key: 0,
        class: "other"
    }
    , kr = {
        key: 0,
        class: "bouns"
    }
    , br = {
        key: 1,
        class: "usdt_icon"
    }
    , Cr = ["src"]
    , Tr = {
        key: 0,
        class: "bouns"
    }
    , Ir = {
        key: 1,
        class: "other_bank"
    }
    , Sr = {
        class: "select_bank_tit"
    }
    , Nr = {
        key: 2,
        class: "transfer boxStyle"
    }
    , Dr = {
        class: "title"
    }
    , Ar = {
        class: "transfer_list"
    }
    , Rr = ["src"]
    , Br = ["src"]
    , Ur = {
        key: 3,
        class: "bank_list"
    }
    , Wr = ["onClick"]
    , Pr = ["data-img"]
    , Or = {
        key: 5,
        class: "Recharge__content-paymoney boxStyle"
    }
    , Lr = {
        class: "Recharge__content-paymoney__title"
    }
    , Mr = ["src"]
    , qr = {
        key: 2
    }
    , Vr = {
        key: 3
    }
    , Er = {
        class: "Recharge__content-paymoney__money-list"
    }
    , jr = ["onClick"]
    , xr = ["src"]
    , Hr = {
        key: 1
    }
    , Gr = {
        key: 0,
        class: "ar_gift"
    }
    , Fr = ["src"]
    , zr = {
        class: "place-div"
    }
    , Kr = {
        key: 2,
        class: "unit"
    }
    , Qr = ["src"]
    , Yr = {
        key: 2,
        class: "recharge_tip"
    }
    , Zr = {
        class: "Recharge__content-waitPay boxStyle"
    }
    , Xr = ["src"]
    , Jr = {
        class: "wait_text"
    }
    , ec = Pt(() => e("span", null, "3", -1))
    , tc = Pt(() => e("span", null, "0", -1))
    , ac = Pt(() => e("span", null, ":", -1))
    , nc = Pt(() => e("span", null, "0", -1))
    , sc = Pt(() => e("span", null, "0", -1))
    , lc = [ec, tc, ac, nc, sc]
    , oc = {
        class: "showAmountError"
    }
    , ic = {
        class: "title1"
    }
    , rc = {
        class: "title2"
    }
    , cc = {
        class: "title2 red"
    }
    , dc = {
        class: "button"
    }
    , uc = le({
        __name: "RechargeContainer",
        setup(y) {
            const s = I()
                , { store: v, currentPayId: c, isLocakBank: r, isArpay: i, isNumberPay: p, isHaveOrder: _, currentPayTypeId: $, handleSelectPayType: k, numberKeyObj: l, handleQuickSelect: w, handleInput: d, getC2CunitAmount: R, handleClearInput: S, formatNum: N, setCountdownRef: C, getElwallett: m, isSplitLocalEWallet: b, handleSelectBank: T, IsShowRechargeBankList: B, showOtherSelect: D, confirmOtherSelectBank: O, isOtherRecharge: Q, currentOtherThirdBankList: W, getTransferBankList: F, transfer: M, handleRecharge: X, showAmountError: G, isRsnpay: x } = ut()
                , { arWallet: P, isArWalletActive: A, goWallet: z, goActive: j } = It()
                , q = fe()
                , g = V(() => Ve().getDollarSign)
                , J = V(() => i.value ? "arActive" : "active");
            Ce(() => {
                C(s.value)
            }
            );
            const K = () => {
                v.amount = 1e3,
                    v.currentQuickIndex = -1
            }
                , se = V(() => i.value || x.value ? !!(A.value || v.rsnInfo.walletActivationStatus === 1) : !_.value)
                , we = async () => {
                    let ye = c.value === 18 ? m() : v.currentPayType.payTypeID;
                    c.value === 21 ? window.location.href = v.isArPayOrder : c.value === 12 ? q.push({
                        name: "OtherPay",
                        query: {
                            type: "upi"
                        }
                    }) : c.value === 19 ? q.push({
                        name: "RechargeUsdt",
                        query: {
                            amount: v.numberPayAmount
                        }
                    }) : q.push({
                        name: "RechargeDetail",
                        query: {
                            currentPayId: c.value,
                            payTypeId: ye,
                            amount: v.amount
                        }
                    })
                }
                , Oe = () => {
                    z("wallet/recharge")
                }
                ;
            return (ye, ie) => {
                var ke, He;
                const Ee = L("svg-icon")
                    , qe = L("van-icon")
                    , pe = L("van-field")
                    , De = L("van-picker")
                    , be = L("van-popup")
                    , he = L("van-dialog")
                    , Me = ot("lazy")
                    , je = ot("throttle-click");
                return n(),
                    o(ne, null, [e("div", mr, [f("  选择通道  "), !a(r) && !a(i) && !a(x) && !a(_) && a(c) !== 10 ? (n(),
                        o("div", fr, [e("div", wr, [e("div", yr, [h(Ee, {
                            name: "quickpay2"
                        }), e("p", null, t(ye.$t("RCTXT1")), 1)])]), e("div", {
                            class: ee(["rechargeTypes_list", {
                                numberPay: a(p)
                            }])
                        }, [(n(!0),
                            o(ne, null, Se(a(v).rechargeTypes, (re, xe) => (n(),
                                o("div", {
                                    class: ee(["Recharge__content-quickInfo__item", {
                                        item_active: a($) === re.payTypeID
                                    }]),
                                    key: re.payTypeID,
                                    onClick: Y => a(k)(xe)
                                }, [a(c) !== 11 ? (n(),
                                    o("div", $r, [e("div", null, t(re.payName), 1), e("div", null, t(ye.$t("RCTXT2")) + t(re.miniPrice) + " - " + t(a(N)(re.maxPrice)), 1), re.rechargeRifts > 0 ? (n(),
                                        o("div", kr, t(a(ca)(re.rechargeRifts * 100)) + "% bonus", 1)) : f("v-if", !0)])) : (n(),
                                            o("div", br, [e("img", {
                                                src: a($e)("wallet", "usdt"),
                                                alt: ""
                                            }, null, 8, Cr), e("div", null, [e("div", null, t(re.payName), 1), e("div", null, t(ye.$t("RCTXT2")) + t(re.miniPrice) + " - " + t(a(N)(re.maxPrice)), 1), re.rechargeRifts > 0 ? (n(),
                                                o("div", Tr, t(a(ca)(re.rechargeRifts * 100)) + "% bonus", 1)) : f("v-if", !0)])]))], 10, gr))), 128))], 2)])) : f("v-if", !0), a(Q) && a(v).thirdPayBankList.length > 0 && a(W).length > 0 ? (n(),
                                                    o("div", Ir, [e("div", Sr, [h(Ee, {
                                                        name: "bank"
                                                    }), E(t(ye.$t("selectBank")), 1)]), e("div", {
                                                        class: "bank_name",
                                                        onClick: ie[0] || (ie[0] = re => D.value = !0)
                                                    }, [E(t((ke = a(v).selectOtherBank) == null ? void 0 : ke.bankName) + " ", 1), h(qe, {
                                                        name: "arrow",
                                                        class: "right_arrow"
                                                    })])])) : f("v-if", !0), f(" 孟加拉的转账类型选择 "), g.value === "৳" && !a(_) && a(c) === 9 ? (n(),
                                                        o("div", Nr, [e("div", Dr, [h(Ee, {
                                                            name: "transf_amount"
                                                        }), E(" " + t(ye.$t("transferType")), 1)]), e("div", Ar, [e("div", {
                                                            class: ee(["item", {
                                                                transfer_active: a(M) === 1
                                                            }]),
                                                            onClick: ie[1] || (ie[1] = re => M.value = 1)
                                                        }, [e("img", {
                                                            src: a(ge)("wallet/recharge", "banktobank"),
                                                            alt: ""
                                                        }, null, 8, Rr), E(" " + t(ye.$t("banktobank")), 1)], 2), e("div", {
                                                            class: ee(["item", {
                                                                transfer_active: a(M) === 2
                                                            }]),
                                                            onClick: ie[2] || (ie[2] = re => M.value = 2)
                                                        }, [e("img", {
                                                            src: a(ge)("wallet/recharge", "wallettobank"),
                                                            alt: ""
                                                        }, null, 8, Br), E(" " + t(ye.$t("wallettobank")), 1)], 2)])])) : f("v-if", !0), f(" 银行列表 "), a(r) && a(b) && a(B) && !a(_) ? (n(),
                                                            o("div", Ur, [(n(!0),
                                                                o(ne, null, Se(g.value === "৳" ? a(F) : a(v).bankList, (re, xe) => (n(),
                                                                    o("div", {
                                                                        class: ee(["bank_item", {
                                                                            bank_item_active: a(v).currentBankIndex === xe
                                                                        }]),
                                                                        onClick: Y => a(T)(xe)
                                                                    }, [_e(e("img", {
                                                                        alt: "",
                                                                        "data-img": a($e)("wallet", "slot_wallet")
                                                                    }, null, 8, Pr), [[Me, re.bankLogo]]), E(" " + t(re.bankName), 1)], 10, Wr))), 256))])) : f("v-if", !0), !a(A) && a(i) ? (n(),
                                                                        Te(Ka, {
                                                                            key: 4,
                                                                            "page-type": "wallet/recharge"
                                                                        })) : f("v-if", !0), f(` <div class="toActive" @click="goActive('wallet/recharge', 'RSN')" v-if="store.rsnInfo.walletActivationStatus === 0 && isRsnpay">
			{{$t('RNSActive')}}
		</div> `), f(" 充值金额选择 "), se.value ? (n(),
                        o("div", Or, [e("div", Lr, [a(p) ? (n(),
                            o("img", {
                                key: 1,
                                src: a($e)("wallet", a(l)[a(c)].icon),
                                alt: ""
                            }, null, 8, Mr)) : (n(),
                                Te(Ee, {
                                    key: 0,
                                    name: "saveWallet"
                                })), a(p) ? (n(),
                                    o("p", Vr, t(((He = a(l)[a(c)]) == null ? void 0 : He.selectText) || ""), 1)) : (n(),
                                        o("p", qr, t(a(i) ? ye.$t("arbRecharge") : a(x) ? ye.$t("rsnRecharge") : ye.$t("rechageAmount")), 1))]), e("div", Er, [(n(!0),
                                            o(ne, null, Se(a(v).quickList, (re, xe) => (n(),
                                                o("div", {
                                                    class: ee(["Recharge__content-paymoney__money-list__item", a(v).currentQuickIndex === xe ? J.value : ""]),
                                                    key: xe,
                                                    onClick: Y => a(w)(xe)
                                                }, [e("div", {
                                                    class: ee(["amount", {
                                                        arAmount: a(i)
                                                    }])
                                                }, [a(p) ? (n(),
                                                    o("img", {
                                                        key: 0,
                                                        src: a($e)("wallet", a(l)[a(c)].icon),
                                                        alt: "",
                                                        class: "usdt"
                                                    }, null, 8, xr)) : f("v-if", !0), !a(p) && !a(i) ? (n(),
                                                        o("span", Hr, t(g.value), 1)) : f("v-if", !0), E(" " + t(a(i) ? "₹" + a(N)(Number(re.rechargeAmount)) : a(N)(Number(re.rechargeAmount))), 1)], 2), f('					<div v-if="isArpay && store.currentPayType?.rechargeRifts" class="ar_gift">'), f("						{{ $t('k3WarningTip4') }} ₹"), f("						<span>{{ formatNum(Number(item.giftAmount)) }}</span>"), f("					</div>"), re.giftAmount > 0 ? (n(),
                                                            o("div", Gr, [E(t(ye.$t("k3WarningTip4")) + " + " + t(g.value) + " ", 1), e("span", null, t(a(N)(Number(re.giftAmount))), 1)])) : f("v-if", !0)], 10, jr))), 128))]), a(p) ? (n(),
                                                                o("div", {
                                                                    key: 0,
                                                                    class: ee(["Recharge__content-paymoney__money-input", {
                                                                        radius: a(p)
                                                                    }])
                                                                }, [e("div", {
                                                                    class: ee(["place-div", a(l)[a(c)].icon])
                                                                }, null, 2), h(pe, {
                                                                    modelValue: a(v).numberPayAmount,
                                                                    "onUpdate:modelValue": ie[3] || (ie[3] = re => a(v).numberPayAmount = re),
                                                                    modelModifiers: {
                                                                        number: !0
                                                                    },
                                                                    type: "digit",
                                                                    autocomplete: "new-password",
                                                                    placeholder: a(l)[a(c)].placeholder,
                                                                    class: "amount-input",
                                                                    onInput: ie[4] || (ie[4] = re => a(d)(re))
                                                                }, null, 8, ["modelValue", "placeholder"]), e("div", {
                                                                    class: "place-right",
                                                                    onClick: ie[5] || (ie[5] = re => a(S)())
                                                                }, [e("img", {
                                                                    src: a(ge)("wallet/recharge", "clean"),
                                                                    alt: ""
                                                                }, null, 8, Fr)])], 2)) : f("v-if", !0), a(c) != 6 ? (n(),
                                                                    o("div", {
                                                                        key: 1,
                                                                        class: ee(["Recharge__content-paymoney__money-input", {
                                                                            radius: a(p)
                                                                        }])
                                                                    }, [e("div", zr, t(g.value), 1), a(p) ? (n(),
                                                                        Te(pe, {
                                                                            key: 0,
                                                                            disabled: a(p),
                                                                            modelValue: a(v).numberExchangeRate,
                                                                            "onUpdate:modelValue": ie[6] || (ie[6] = re => a(v).numberExchangeRate = re),
                                                                            modelModifiers: {
                                                                                number: !0
                                                                            },
                                                                            type: "digit",
                                                                            autocomplete: "new-password",
                                                                            placeholder: ye.$t("enterAmount"),
                                                                            class: "amount-input",
                                                                            onInput: ie[7] || (ie[7] = re => a(d)(re))
                                                                        }, null, 8, ["disabled", "modelValue", "placeholder"])) : (n(),
                                                                            Te(pe, {
                                                                                key: 1,
                                                                                modelValue: a(v).amount,
                                                                                "onUpdate:modelValue": ie[8] || (ie[8] = re => a(v).amount = re),
                                                                                modelModifiers: {
                                                                                    number: !0
                                                                                },
                                                                                type: "digit",
                                                                                autocomplete: "new-password",
                                                                                placeholder: ye.$t("enterAmount"),
                                                                                class: "amount-input",
                                                                                onInput: ie[9] || (ie[9] = re => a(d)(re))
                                                                            }, null, 8, ["modelValue", "placeholder"])), a(c) === 20 ? (n(),
                                                                                o("div", Kr, t(a(R)), 1)) : f("v-if", !0), !a(p) && !a(i) ? (n(),
                                                                                    o("div", {
                                                                                        key: 3,
                                                                                        class: "place-right",
                                                                                        onClick: ie[10] || (ie[10] = re => a(S)())
                                                                                    }, [e("img", {
                                                                                        src: a(ge)("wallet/recharge", "clean"),
                                                                                        alt: ""
                                                                                    }, null, 8, Qr)])) : f("v-if", !0), a(i) ? (n(),
                                                                                        o("div", {
                                                                                            key: 4,
                                                                                            class: "ar_all",
                                                                                            onClick: K
                                                                                        }, t(ye.$t("withdrawStatem1")), 1)) : f("v-if", !0)], 2)) : f("v-if", !0), a(v).validateAmount ? (n(),
                                                                                            o("div", Yr, t(a(v).validateAmount), 1)) : f("v-if", !0), !a(_) || a(Q) ? _e((n(),
                                                                                                o("div", {
                                                                                                    key: 3,
                                                                                                    class: ee(["Recharge__container-rechageBtn", a(v).rechargeSubmitBtnStatus ? "rechage_active" : ""])
                                                                                                }, [E(t(ye.$t("recharge")), 1)], 2)), [[je, {
                                                                                                    handler: a(X),
                                                                                                    wait: 2e3
                                                                                                }]]) : f("v-if", !0)])) : f("v-if", !0), _e(e("div", Zr, [e("img", {
                                                                                                    src: a($e)("wallet", "tip"),
                                                                                                    alt: ""
                                                                                                }, null, 8, Xr), e("div", Jr, t(ye.$t("RCTXT3")), 1), a(i) ? f("v-if", !0) : (n(),
                                                                                                    o("div", {
                                                                                                        key: 0,
                                                                                                        class: "Recharge__content-waitPay__countdown",
                                                                                                        ref_key: "countdownRef",
                                                                                                        ref: s
                                                                                                    }, lc, 512)), e("div", {
                                                                                                        class: "go_pay",
                                                                                                        onClick: we
                                                                                                    }, t(ye.$t("RCTXT4")), 1)], 512), [[Rt, a(_)]]), h(be, {
                                                                                                        show: a(D),
                                                                                                        "onUpdate:show": ie[12] || (ie[12] = re => it(D) ? D.value = re : null),
                                                                                                        round: "",
                                                                                                        position: "bottom"
                                                                                                    }, {
                                                                                                        default: te(() => [h(De, {
                                                                                                            "columns-field-names": {
                                                                                                                text: "bankName",
                                                                                                                value: "bankCode",
                                                                                                                children: "children"
                                                                                                            },
                                                                                                            columns: a(W),
                                                                                                            onCancel: ie[11] || (ie[11] = re => D.value = !1),
                                                                                                            onConfirm: a(O)
                                                                                                        }, null, 8, ["columns", "onConfirm"])]),
                                                                                                        _: 1
                                                                                                    }, 8, ["show"])]), h(he, {
                                                                                                        show: a(G),
                                                                                                        "onUpdate:show": ie[14] || (ie[14] = re => it(G) ? G.value = re : null),
                                                                                                        "show-confirm-button": !1,
                                                                                                        width: 327
                                                                                                    }, {
                                                                                                        default: te(() => {
                                                                                                            var re;
                                                                                                            return [e("div", oc, [e("div", ic, t(ye.$t("arb1")), 1), e("div", rc, t(ye.$t("arb2")), 1), e("div", cc, t(ye.$t("arb3", [((re = a(P)) == null ? void 0 : re.withdrawalRewardRatio) || 0])), 1), e("div", dc, [e("div", {
                                                                                                                class: "clance",
                                                                                                                onClick: ie[13] || (ie[13] = xe => G.value = !1)
                                                                                                            }, t(ye.$t("cancel")), 1), e("div", {
                                                                                                                class: "goBuy",
                                                                                                                onClick: Oe
                                                                                                            }, t(ye.$t("arb4")), 1)])])]
                                                                                                        }
                                                                                                        ),
                                                                                                        _: 1
                                                                                                    }, 8, ["show"])], 64)
            }
        }
    });
const vc = oe(uc, [["__scopeId", "data-v-9e03166f"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Recharge/RechargeContainer.vue"]])
    , pc = {
        class: "balanceAssets"
    }
    , _c = {
        class: "balanceAssets__header"
    }
    , hc = {
        class: "balanceAssets__header__left"
    }
    , mc = ["src"]
    , fc = {
        class: "balanceAssets__main"
    }
    , wc = ["src"]
    , yc = le({
        __name: "BalanceAssets",
        setup(y) {
            const s = pt();
            return (v, c) => (n(),
                o("div", pc, [e("div", _c, [e("div", hc, [e("img", {
                    src: a($e)("wallet", "balance")
                }, null, 8, mc), E(" " + t(v.$t("balance")), 1)])]), e("div", fc, [e("p", null, t(a(ue)(a(s).getAmount)), 1), e("img", {
                    src: a(ge)("wallet/recharge", "refresh"),
                    alt: "",
                    onClick: c[0] || (c[0] = r => a(s).resetData())
                }, null, 8, wc)]), f(` <div class="balanceAssets__tip">
			<img :src="getIconsPublic('wallet/recharge', 'cip')" alt="" />
		</div> `)]))
        }
    });
const gc = oe(yc, [["__scopeId", "data-v-98c90f53"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/BalanceAssets.vue"]])
    , $c = le({
        __name: "CountDownTimer",
        props: {
            startTime: {
                type: String,
                required: !0
            },
            endTime: {
                type: String,
                required: !0
            },
            className: {
                type: String,
                required: !1
            }
        },
        setup(y) {
            const s = y
                , v = I()
                , c = I("00:00");
            return Ce(() => {
                let r = s.startTime
                    , i = s.endTime
                    , p = new Date(r.replace(/-/g, "/")).getTime()
                    , _ = new Date(i.replace(/-/g, "/")).getTime()
                    , $ = p - _;
                v.value = setInterval(() => {
                    $ -= 1e3,
                        c.value = Wt($, "mm:ss"),
                        $ < 0 && (clearInterval(v.value),
                            c.value = "00:00")
                }
                    , 1e3)
            }
            ),
                ft(() => {
                    clearInterval(v.value)
                }
                ),
                (r, i) => (n(),
                    o("span", {
                        class: ee([r.className, "count_timer"])
                    }, t(c.value), 3))
        }
    });
const Qa = oe($c, [["__scopeId", "data-v-b3f8911c"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Recharge/CountDownTimer.vue"]])
    , kc = y => (We("data-v-9f5f4114"),
        y = y(),
        Pe(),
        y)
    , bc = {
        class: "record__main"
    }
    , Cc = {
        class: "record__main-title"
    }
    , Tc = {
        key: 1
    }
    , Ic = ["onClick"]
    , Sc = {
        class: "record__main-info__title flex_between"
    }
    , Nc = {
        class: "recharge_text"
    }
    , Dc = {
        class: "flex_between"
    }
    , Ac = ["src"]
    , Rc = {
        key: 0,
        class: "record__main-info__money item flex_between"
    }
    , Bc = {
        key: 1,
        class: "record__main-info__money item flex_between"
    }
    , Uc = {
        key: 2,
        class: "record__main-info__type item flex_between"
    }
    , Wc = {
        key: 3,
        class: "record__main-info__type item flex_between"
    }
    , Pc = kc(() => e("span", null, "UTR", -1))
    , Oc = {
        key: 4,
        class: "record__main-info__time item flex_between"
    }
    , Lc = {
        key: 5,
        class: "record__main-info__time item flex_between"
    }
    , Mc = {
        key: 6,
        class: "record__main-info__orderNumber item flex_between"
    }
    , qc = {
        key: 7,
        class: "record__main-info__orderNumber item flex_between"
    }
    , Vc = ["onClick"]
    , Ec = ["onClick"]
    , jc = le({
        __name: "RechargeRecord",
        setup(y, { expose: s }) {
            const v = Tt()
                , { store: c, historyToDetail: r, getRecordList: i, RechargeRList: p } = ut()
                , _ = V(() => p.value.length >= 5)
                , $ = fe()
                , { goToTictek: k, isCenterServer: l } = zt({
                    ServerType: 2
                })
                , w = S => {
                    let N = "";
                    switch (S.state) {
                        case 0:
                            N = "recharge";
                            break;
                        case 1:
                            N = "check";
                            break;
                        case 2:
                            N = "timeout";
                            break;
                        case 3:
                            N = "representation";
                            break;
                        case 4:
                            N = "success";
                            break;
                        case 5:
                            N = "fail";
                            break;
                        case 6:
                            N = "cancel";
                            break;
                        default:
                            N = "#FFB800";
                            break
                    }
                    return N
                }
                , d = async S => {
                    r(S.payID || S.category, S.type, S.price, S.state, S.id)
                }
                , R = () => {
                    v.emit("changeKeepAliveKey"),
                        $.push({
                            name: "RechargeHistory"
                        })
                }
                ;
            return Ce(() => {
                i()
            }
            ),
                s({
                    getRecordList: i
                }),
                (S, N) => {
                    const C = L("svg-icon");
                    return n(),
                        o("div", bc, [e("div", Cc, [h(C, {
                            name: "historyHead"
                        }), e("span", null, t(a(c).currentPayId === 20 ? "C2C" + S.$t("rechargeRecords") : S.$t("rechargeRecords")), 1)]), a(p).length < 1 ? (n(),
                            Te(St, {
                                key: 0,
                                class: "mgt40"
                            })) : f("v-if", !0), a(p).length > 0 ? (n(),
                                o("div", Tc, [(n(!0),
                                    o(ne, null, Se(a(p), m => (n(),
                                        o("div", {
                                            class: "record__main-info",
                                            key: m.rechargeNumber,
                                            onClick: b => d(m)
                                        }, [e("div", Sc, [e("div", Nc, t(S.$t("recharge")), 1), e("div", Dc, [a(c).currentPayId !== 20 ? (n(),
                                            o("div", {
                                                key: 0,
                                                class: ee({
                                                    danger: m.state === 0,
                                                    success: m.state === 1,
                                                    rechargeFail: m.state === 2,
                                                    cancel: m.state === 6
                                                })
                                            }, t(S.$t(a(rt)(a(Le).RechargeState, m.state))), 3)) : (n(),
                                                o("div", {
                                                    key: 1,
                                                    class: ee(w(m))
                                                }, [E(t(a(rt)(a(Le).RechargeC2CState, m.state)) + " ", 1), m.state === 1 || m.state === 0 ? (n(),
                                                    Te(Qa, {
                                                        "start-time": m.endTime,
                                                        "end-time": m.serviceTime,
                                                        "class-name": w(m),
                                                        key: m.id
                                                    }, null, 8, ["start-time", "end-time", "class-name"])) : f("v-if", !0)], 2)), m.state !== 2 ? (n(),
                                                        o("img", {
                                                            key: 2,
                                                            src: a(ge)("wallet/recharge", "left_arrow"),
                                                            alt: ""
                                                        }, null, 8, Ac)) : f("v-if", !0)])]), a(c).currentPayId !== 20 ? (n(),
                                                            o("div", Rc, [e("span", null, t(S.$t("amount")), 1), e("span", null, t(a(ue)(m == null ? void 0 : m.price)), 1)])) : (n(),
                                                                o("div", Bc, [e("span", null, t(S.$t("amount")), 1), e("span", null, t(a(ue)(m == null ? void 0 : m.orderAmount)), 1)])), a(c).currentPayId !== 20 ? (n(),
                                                                    o("div", Uc, [e("span", null, t(S.$t("type")), 1), e("span", null, t(m == null ? void 0 : m.payName), 1)])) : (n(),
                                                                        o("div", Wc, [Pc, e("div", null, [e("span", null, t(m.transactionNo || "-"), 1), h(C, {
                                                                            name: "copy",
                                                                            alt: "",
                                                                            onClick: at(b => a(Ae)(m.transactionNo), ["stop"])
                                                                        }, null, 8, ["onClick"])])])), a(c).currentPayId !== 20 ? (n(),
                                                                            o("div", Oc, [e("span", null, t(S.$t("time")), 1), e("span", null, t(m.addTime), 1)])) : (n(),
                                                                                o("div", Lc, [e("span", null, t(S.$t("time")), 1), e("span", null, t(m.createTime), 1)])), a(c).currentPayId !== 20 ? (n(),
                                                                                    o("div", Mc, [e("span", null, t(S.$t("orderNo")), 1), e("div", null, [e("span", null, t(m == null ? void 0 : m.rechargeNumber), 1), h(C, {
                                                                                        name: "copy",
                                                                                        alt: "",
                                                                                        onClick: at(b => a(Ae)(m.rechargeNumber), ["stop"])
                                                                                    }, null, 8, ["onClick"])])])) : (n(),
                                                                                        o("div", qc, [e("span", null, t(S.$t("orderNo")), 1), e("div", null, [e("span", null, t(m.orderNo), 1), h(C, {
                                                                                            "name-": "copy",
                                                                                            alt: "",
                                                                                            onClick: at(b => a(Ae)(m.orderNo), ["stop"])
                                                                                        }, null, 8, ["onClick"])])])), [0, 2].includes(m.state) && a(l) ? (n(),
                                                                                            o("div", {
                                                                                                key: 8,
                                                                                                class: "report",
                                                                                                onClick: at(b => a(k)(m, S.isC2C), ["stop"])
                                                                                            }, t(S.$t("report")), 9, Vc)) : f("v-if", !0)], 8, Ic))), 128)), _.value ? (n(),
                                                                                                o("div", {
                                                                                                    key: 0,
                                                                                                    class: "record__main-more",
                                                                                                    onClick: at(R, ["stop"])
                                                                                                }, t(S.$t("allRecords")), 9, Ec)) : f("v-if", !0)])) : f("v-if", !0)])
                }
        }
    });
const xc = oe(jc, [["__scopeId", "data-v-9f5f4114"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Recharge/RechargeRecord.vue"]])
    , Hc = {
        class: "Recharge__box"
    }
    , Gc = {
        class: "Recharge__container"
    }
    , Fc = {
        class: "cancen_model_cnt"
    }
    , zc = {
        class: "promptHeader"
    }
    , Kc = {
        class: "promptContent"
    }
    , Qc = {
        class: "input_item"
    }
    , Yc = ["maxlength", "onUpdate:modelValue", "placeholder", "onInput"]
    , Zc = {
        key: 0,
        class: "tip"
    }
    , Xc = {
        key: 1,
        class: "tip"
    }
    , Jc = {
        class: "footer_btn"
    }
    , ed = {
        class: "forbidden_tip"
    }
    , td = {
        class: "forbidden1"
    }
    , ad = {
        class: "forbidden2"
    }
    , nd = {
        class: "forbidden3"
    }
    , sd = {
        class: "cancen_model_cnt"
    }
    , ld = le({
        __name: "index",
        setup(y) {
            const { store: s, C2CforbiddenShow: v, ErrorCount: c, RemainingLimitTime: r, currentPayId: i, validateBankForm: p, localBankRecharge: _, getRechargeTypeName: $, getAmountList: k, isFirstPixRecharge: l, isArpay: w, needPixInfo: d, isRsnpay: R } = ut()
                , { isArWalletActive: S } = It()
                , N = fe()
                , C = pt()
                , m = Tt()
                , b = I(!1)
                , T = V(() => Ve().getDollarSign)
                , B = V(() => w.value || R.value ? !S.value || s.rsnInfo.walletActivationStatus === 1 : !1)
                , D = () => {
                    m.emit("changeKeepAliveKey"),
                        N.push({
                            name: "RechargeHistory"
                        })
                }
                ;
            function O() {
                var F;
                ((F = N.currentRoute.value.query) == null ? void 0 : F.type) === "Add" ? N.go(-2) : N.go(-1)
            }
            const Q = () => {
                l.value = !1,
                    d.value && N.push({
                        name: "Withdraw-AddPIX",
                        query: {
                            fromV: "Recharge"
                        }
                    })
            }
                , W = () => {
                    k(),
                        b.value = !1
                }
                ;
            return Ce(async () => {
                C.resetData(!0),
                    $()
            }
            ),
                (F, M) => {
                    const X = L("NavBar")
                        , G = L("van-dialog");
                    return n(),
                        o("div", Hc, [e("div", Gc, [h(X, {
                            class: "white",
                            title: F.$t("recharge"),
                            placeholder: !1,
                            "left-arrow": "",
                            onClickLeft: O
                        }, {
                            right: te(() => [e("div", {
                                class: "title",
                                onClick: D
                            }, t(F.$t("rechargeRecords")), 1)]),
                            _: 1
                        }, 8, ["title"]), f(" 余额组件 "), h(gc), f(" 支付方式选择菜单 "), h(lr), f(" 支付方式组件 "), h(vc), f(` <div
				v-if="!isHaveOrder || isOtherRecharge"
				class="Recharge__container-rechageBtn"
				:class="store.rechargeSubmitBtnStatus ? 'rechage_active' : ''"
				v-throttle-click="{ handler: handleRecharge, wait: 2000 }"
			>
				{{ $t('recharge') }}
			</div> `), f(" 充值说明组件 "), a(i) && !B.value ? (n(),
                            Te(Yt, {
                                key: 0,
                                "show-type": a(i),
                                isShowHead: !0,
                                rechargeInfo: a(s).currentPayType
                            }, null, 8, ["show-type", "rechargeInfo"])) : f("v-if", !0), a(i) && !B.value ? (n(),
                                Te(xc, {
                                    ref: "recordRef",
                                    payID: a(i),
                                    key: a(i)
                                }, null, 8, ["payID"])) : f("v-if", !0)]), f(" <RechargeUpiSheet /> "), h(nt, {
                                    show: b.value,
                                    "onUpdate:show": M[0] || (M[0] = x => b.value = x),
                                    onConfirm: W,
                                    "show-cancel-btn": !0,
                                    confirmText: "OK",
                                    title: F.$t("c2cLapseOfAmount")
                                }, {
                                    content: te(() => [e("div", Fc, t(F.$t("c2cPCAAmount")), 1)]),
                                    _: 1
                                }, 8, ["show", "title"]), a(s).isRechargeInputDialog && a(i) !== 19 || [10, 18].includes(a(i)) ? (n(),
                                    Te(G, {
                                        key: 0,
                                        show: a(s).rechargeDialogVisible,
                                        "onUpdate:show": M[3] || (M[3] = x => a(s).rechargeDialogVisible = x),
                                        "confirm-button-text": F.$t("confirm")
                                    }, {
                                        footer: te(() => []),
                                        default: te(() => [e("div", zc, t(F.$t("prompt")), 1), e("div", Kc, [(n(!0),
                                            o(ne, null, Se(a(s).bank_local, (x, P) => (n(),
                                                o("div", Qc, [e("div", null, t(x.split(",")[0]), 1), _e(e("input", {
                                                    class: "input_bank",
                                                    maxlength: P === 0 ? 50 : 30,
                                                    "onUpdate:modelValue": A => a(s).bankInfo[x.split(",")[1]] = A,
                                                    placeholder: F.$t("requiredFaild"),
                                                    onInput: A => a(p)(a(s).bankInfo[x.split(",")[1]], P, x.split(",")[1])
                                                }, null, 40, Yc), [[Ue, a(s).bankInfo[x.split(",")[1]], void 0, {
                                                    trim: !0
                                                }]])]))), 256)), T.value === "৳" ? (n(),
                                                    o("div", Zc, t(F.$t("rechargeBankVailte2")), 1)) : (n(),
                                                        o("div", Xc, t(a(i) === 9 || a(i) === 10 ? F.$t("rechargeBankVailte1") : F.$t("rechargeBankVailte")), 1)), e("div", Jc, [e("div", {
                                                            onClick: M[1] || (M[1] = (...x) => a(_) && a(_)(...x))
                                                        }, t(F.$t("confirm")), 1), e("div", {
                                                            onClick: M[2] || (M[2] = x => a(s).rechargeDialogVisible = !1)
                                                        }, t(F.$t("cancel")), 1)])])]),
                                        _: 1
                                    }, 8, ["show", "confirm-button-text"])) : f("v-if", !0), h(nt, {
                                        show: a(v),
                                        "onUpdate:show": M[4] || (M[4] = x => it(v) ? v.value = x : null),
                                        title: F.$t("C2Cforbidden", [a(r)]),
                                        "img-url": "forbhidden",
                                        showCancelBtn: !1,
                                        onConfirm: M[5] || (M[5] = x => v.value = !1),
                                        "cancel-text": F.$t("close"),
                                        "confirm-text": F.$t("sure")
                                    }, {
                                        content: te(() => [e("div", ed, t(F.$t("C2Cforbidden1", [a(r)])), 1), e("div", td, t(F.$t("C2Cforbidden2", [a(c)])), 1), e("div", ad, t(F.$t("C2Cforbidden3", [a(r)])), 1), e("div", nd, t(F.$t("C2Cforbidden4")), 1)]),
                                        _: 1
                                    }, 8, ["show", "title", "cancel-text", "confirm-text"]), h(nt, {
                                        show: a(l),
                                        "onUpdate:show": M[6] || (M[6] = x => it(l) ? l.value = x : null),
                                        onConfirm: M[7] || (M[7] = x => Q()),
                                        "show-cancel-btn": !1,
                                        confirmText: F.$t("confirm"),
                                        cancelText: F.$t("cancel"),
                                        title: F.$t("safetyTips")
                                    }, {
                                        content: te(() => [e("div", sd, t(F.$t("safetyTips1")), 1)]),
                                        _: 1
                                    }, 8, ["show", "confirmText", "cancelText", "title"])])
                }
        }
    });
const od = oe(ld, [["__scopeId", "data-v-36cc3380"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Recharge/index.vue"]])
    , P$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: od
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , vt = y => (We("data-v-845bb16b"),
        y = y(),
        Pe(),
        y)
    , id = {
        class: "rechargeDetail__container"
    }
    , rd = {
        class: "rechargeDetail__container-header"
    }
    , cd = vt(() => e("span", null, null, -1))
    , dd = vt(() => e("span", null, null, -1))
    , ud = vt(() => e("span", null, null, -1))
    , vd = vt(() => e("span", null, null, -1))
    , pd = vt(() => e("span", null, null, -1))
    , _d = [cd, dd, ud, vd, pd]
    , hd = {
        class: "rechargeDetail__container-main"
    }
    , md = {
        key: 0,
        class: "rechargeDetail__container-body"
    }
    , fd = {
        class: "rechargeDetail__container-body__title"
    }
    , wd = {
        class: "qrcodeCont"
    }
    , yd = ["src"]
    , gd = {
        class: "qrcode_item"
    }
    , $d = {
        key: 1,
        class: "rechargeDetail__container-body"
    }
    , kd = {
        class: "rechargeDetail__container-body__title"
    }
    , bd = {
        key: 0,
        class: "rechargeDetail__container-body__content"
    }
    , Cd = {
        key: 0,
        class: "rechargeDetail__container-body__content"
    }
    , Td = vt(() => e("h1", null, "SWIFT CODE", -1))
    , Id = {
        key: 1,
        class: "rechargeDetail__container-body__content"
    }
    , Sd = vt(() => e("h1", null, "Routing Number", -1))
    , Nd = {
        key: 2,
        class: "rechargeDetail__container-body__timestamp"
    }
    , Dd = {
        key: 2,
        class: "utr_box"
    }
    , Ad = vt(() => e("h1", null, "UTR(UPI Ref.ID)", -1))
    , Rd = {
        key: 0,
        class: "rechargeDetail__container-buttons"
    }
    , Bd = {
        key: 1,
        class: "rechargeDetail__container-buttons"
    }
    , Ud = {
        key: 0
    }
    , Wd = {
        key: 1
    }
    , Pd = {
        class: "actionSheet__content"
    }
    , Od = {
        class: "title"
    }
    , Ld = {
        key: 0,
        class: "img"
    }
    , Md = {
        key: 1,
        class: "img"
    }
    , qd = {
        key: 2,
        class: "img"
    }
    , Vd = vt(() => e("div", {
        class: "divider"
    }, null, -1))
    , Ed = {
        class: "details"
    }
    , jd = {
        class: "details"
    }
    , xd = {
        class: "details"
    }
    , Hd = {
        class: "details"
    }
    , Gd = {
        class: "tipTitle"
    }
    , Fd = {
        class: "tipText"
    }
    , zd = {
        class: "cancen_model_cnt"
    }
    , Kd = le({
        __name: "index",
        setup(y) {
            const s = I()
                , v = I("")
                , c = V(() => Number(B.currentRoute.value.query.currentPayId))
                , r = V(() => Number(B.currentRoute.value.query.payTypeId))
                , i = V(() => {
                    var A;
                    return Bt((A = l.orderDetail) == null ? void 0 : A.serverTime).format("YYYY-MM-DD HH:mm:ss")
                }
                )
                , p = Tt()
                , _ = V(() => Ve().getDollarSign)
                , { rechargeActionSheetShow: $, cancelOrderShow: k, store: l, getLoclBankOrderDetail: w, handleFinishOrder: d, handlePaste: R, handeCancelOrder: S, countdownTimeFun: N, setCountdownRef: C, htmlToImage: m, getBankOrderInfo: b } = ut()
                , { t: T } = Ne()
                , B = fe()
                , D = Ve()
                , O = V(() => B.currentRoute.value.query.bankName === "KBZpay" ? {
                    tit1: T("kbzName"),
                    tit2: T("kbzMobile"),
                    tit3: T("rechageAmount")
                } : B.currentRoute.value.query.bankName === "WavePay" ? {
                    tit1: T("waveName"),
                    tit2: T("waveMobile"),
                    tit3: T("rechageAmount")
                } : {
                    tit1: T("rechargeDetailTitle1"),
                    tit2: T(c.value === 9 ? "rechargeDetailTitle2" : "account"),
                    tit3: T("amount")
                })
                , Q = Re([{
                    title: O.value.tit1,
                    value: "",
                    name: "accountName"
                }, {
                    title: O.value.tit2,
                    value: "",
                    name: "bankAccountNumber"
                }, {
                    title: "IFSC",
                    value: "",
                    name: "ifscCode"
                }, {
                    title: O.value.tit3,
                    value: "",
                    name: "amount"
                }])
                , W = () => {
                    p.emit("changeKeepAliveKey"),
                        B.replace({
                            name: "RechargeHistory"
                        })
                }
                , F = I()
                , M = V(() => Ve().getProjectName === "vn168")
                , X = V(() => c.value === 9 ? {
                    text1: T("accountName"),
                    text2: T("bankNumber"),
                    text3: T("orderNumber"),
                    text4: T("rechageAmount")
                } : r.value === 157 ? {
                    text1: T("kbzName"),
                    text2: T("kbzMobile"),
                    text3: T("orderNumber"),
                    text4: T("rechageAmount")
                } : r.value === 158 ? {
                    text1: T("waveName"),
                    text2: T("waveMobile"),
                    text3: T("orderNumber"),
                    text4: T("rechageAmount")
                } : {
                    text1: T("name"),
                    text2: T("account"),
                    text3: T("orderNumber"),
                    text4: T("rechageAmount")
                })
                , G = async () => {
                    l.bankUTR = await R()
                }
                , x = () => {
                    let A = Number(B.currentRoute.value.query.currentPayId);
                    if ((!l.bankUTR || l.bankUTR.length < 12) && D.getDollarSign === "₹" && A === 9) {
                        ce({
                            message: T("bankUTR"),
                            wordBreak: "break-word"
                        });
                        return
                    }
                    $.value = !0
                }
                , P = A => {
                    let z = l.orderDetail ? l.orderDetail[A] : "";
                    A === "bankAccountNumber" && (z = z == null ? void 0 : z.replaceAll(" ", "")),
                        Ae(z)
                }
                ;
            return Ce(async () => {
                var z, j, q, g, J, K, se, we;
                C(s.value);
                let A = c.value === 10 ? c.value : B.currentRoute.value.query.payTypeId;
                await b(Number(A)),
                    await w(((z = l.orderDetail) == null ? void 0 : z.orderNumber) + ""),
                    Q[0].value = ((j = l.orderDetail) == null ? void 0 : j.accountName) || "",
                    Q[1].value = ((q = l.orderDetail) == null ? void 0 : q.bankAccountNumber) || "",
                    D.getDollarSign === "₹" && c.value === 9 && (Q[2].value = ((g = l.orderDetail) == null ? void 0 : g.ifscCode) || ""),
                    Q[3].value = ((J = l.orderDetail) == null ? void 0 : J.amount) || "",
                    c.value === 10 && (v.value = ((K = l.orderDetail) == null ? void 0 : K.bankCardQRCodeUrl) || ""),
                    N((se = l.orderDetail) == null ? void 0 : se.serverTime, (we = l.orderDetail) == null ? void 0 : we.addTime1, () => {
                        l.orderDetail = void 0,
                            l.isBankOrder = !1,
                            B.back()
                    }
                    )
            }
            ),
                An((A, z, j) => {
                    j()
                }
                ),
                (A, z) => {
                    var K, se, we, Oe, ye, ie, Ee, qe;
                    const j = L("NavBar")
                        , q = L("svg-icon")
                        , g = L("van-field")
                        , J = L("van-action-sheet");
                    return n(),
                        o("div", id, [h(j, {
                            leftArrow: !0,
                            onClickLeft: z[0] || (z[0] = pe => a(B).back()),
                            onClickRight: W,
                            class: "main"
                        }, {
                            center: te(() => [E(t(A.$t("recharge")), 1)]),
                            right: te(() => [E(t(A.$t("rechargeRecords")), 1)]),
                            _: 1
                        }), e("div", rd, [e("p", null, t(A.$t("rechargeDetailDesc3")), 1), e("div", {
                            class: "rechargeDetail__container-header__countdown",
                            ref_key: "countdownRef",
                            ref: s
                        }, _d, 512)]), e("div", hd, [[10].includes(c.value) ? (n(),
                            o("div", md, [e("div", fd, [e("h1", null, t(((K = a(l).orderDetail) == null ? void 0 : K.bankName) || A.$t("rechargeDetailDesc4")), 1)]), e("div", wd, [e("p", null, [E(t(A.$t("rechageAmount")) + " ", 1), e("span", null, t(((se = a(l).orderDetail) == null ? void 0 : se.amount) || "5,000"), 1)]), e("div", null, [e("img", {
                                class: "qrcode",
                                src: v.value,
                                id: "qrcode"
                            }, null, 8, yd)]), e("div", {
                                class: "save_qrcode",
                                onClick: z[1] || (z[1] = pe => a(m)("qrcode"))
                            }, [E(t(A.$t("saveTheQRCode")) + " ", 1), e("p", null, "(" + t(A.$t("rechargeQRTip")) + ")", 1)]), e("div", gd, [e("span", null, t(i.value), 1), e("div", null, [e("span", null, t((we = a(l).orderDetail) == null ? void 0 : we.orderNumber), 1), h(q, {
                                name: "copy",
                                onClick: z[2] || (z[2] = pe => {
                                    var De;
                                    return a(Ae)((De = a(l).orderDetail) == null ? void 0 : De.orderNumber)
                                }
                                )
                            })])])])])) : (n(),
                                o("div", $d, [e("div", kd, [e("h1", null, [r.value == 157 ? (n(),
                                    Te(q, {
                                        key: 0,
                                        name: "bankKbz"
                                    })) : r.value == 158 ? (n(),
                                        Te(q, {
                                            key: 1,
                                            name: "bankWave"
                                        })) : (n(),
                                            Te(q, {
                                                key: 2,
                                                name: "bankTitle"
                                            })), E(" " + t(((Oe = a(l).orderDetail) == null ? void 0 : Oe.bankName) || A.$t("rechargeDetailDesc4")), 1)])]), (n(!0),
                                                o(ne, null, Se(Q, (pe, De) => (n(),
                                                    o("div", {
                                                        key: De
                                                    }, [pe.value ? (n(),
                                                        o("div", bd, [e("h1", null, t(pe.title), 1), e("div", null, [e("span", null, t(pe.value), 1), h(q, {
                                                            name: "copy",
                                                            onClick: be => P(pe.name)
                                                        }, null, 8, ["onClick"])])])) : f("v-if", !0)]))), 128)), _.value === "৳" ? (n(),
                                                            o("div", Cd, [Td, e("div", null, [E(t((ye = a(l).orderDetail) == null ? void 0 : ye.extend1) + " ", 1), h(q, {
                                                                name: "copy",
                                                                onClick: z[3] || (z[3] = pe => {
                                                                    var De;
                                                                    return a(Ae)((De = a(l).orderDetail) == null ? void 0 : De.extend1)
                                                                }
                                                                )
                                                            })])])) : f("v-if", !0), _.value === "৳" ? (n(),
                                                                o("div", Id, [Sd, e("div", null, [E(t((ie = a(l).orderDetail) == null ? void 0 : ie.extend2) + " ", 1), h(q, {
                                                                    name: "copy",
                                                                    onClick: z[4] || (z[4] = pe => {
                                                                        var De;
                                                                        return a(Ae)((De = a(l).orderDetail) == null ? void 0 : De.extend2)
                                                                    }
                                                                    )
                                                                })])])) : f("v-if", !0), M.value ? (n(),
                                                                    o("div", Nd, [e("span", null, t((Ee = F.value) == null ? void 0 : Ee.serverTime), 1), e("span", null, [e("span", null, t((qe = F.value) == null ? void 0 : qe.orderNumber), 1), h(q, {
                                                                        name: "copy",
                                                                        onClick: z[5] || (z[5] = pe => {
                                                                            var De;
                                                                            return a(Ae)((De = F.value) == null ? void 0 : De.orderNumber)
                                                                        }
                                                                        )
                                                                    })])])) : f("v-if", !0)])), a(D).getDollarSign === "₹" && c.value === 9 ? (n(),
                                                                        o("div", Dd, [Ad, h(g, {
                                                                            modelValue: a(l).bankUTR,
                                                                            "onUpdate:modelValue": z[6] || (z[6] = pe => a(l).bankUTR = pe),
                                                                            class: "utr_input",
                                                                            type: "phone",
                                                                            placeholder: A.$t("bankUTR"),
                                                                            maxlength: 12
                                                                        }, {
                                                                            button: te(() => [e("div", {
                                                                                class: "paste",
                                                                                onClick: G
                                                                            }, t(A.$t("paste")), 1)]),
                                                                            _: 1
                                                                        }, 8, ["modelValue", "placeholder"])])) : f("v-if", !0), f(" 充值说明组件 "), h(Yt, {
                                                                            "show-type": c.value,
                                                                            isShowHead: !0
                                                                        }, null, 8, ["show-type"])]), c.value === 10 ? (n(),
                                                                            o("div", Rd, [e("div", null, [e("span", {
                                                                                onClick: z[7] || (z[7] = pe => k.value = !0)
                                                                            }, t(A.$t("rechargeDetailDesc5")), 1), e("span", {
                                                                                onClick: z[8] || (z[8] = pe => a(d)())
                                                                            }, t(A.$t("rechargeDetailDesc6")), 1), f(` <span v-else class="disablePayBtn">
					{{ $t('rechargeDetailDesc6') }}
				</span> `)])])) : (n(),
                            o("div", Bd, [a($) ? (n(),
                                o("div", Wd, [e("span", {
                                    onClick: z[10] || (z[10] = pe => $.value = !1)
                                }, t(A.$t("rechargeDetailDesc7")), 1), e("span", {
                                    onClick: z[11] || (z[11] = pe => a(d)())
                                }, t(A.$t("rechargeDetailDesc8")), 1)])) : (n(),
                                    o("div", Ud, [e("span", {
                                        onClick: z[9] || (z[9] = pe => k.value = !0)
                                    }, t(A.$t("rechargeDetailDesc5")), 1), e("span", {
                                        onClick: x
                                    }, t(A.$t("rechargeDetailDesc6")), 1)]))])), h(J, {
                                        show: a($),
                                        "onUpdate:show": z[12] || (z[12] = pe => it($) ? $.value = pe : null),
                                        closeable: !1
                                    }, {
                                        default: te(() => {
                                            var pe, De, be, he, Me, je, ke, He, re;
                                            return [e("div", Pd, [e("div", Od, [r.value == 157 ? (n(),
                                                o("div", Ld, [h(q, {
                                                    name: "bankKbz"
                                                })])) : r.value == 158 ? (n(),
                                                    o("div", Md, [h(q, {
                                                        name: "bankWave"
                                                    })])) : (n(),
                                                        o("div", qd, [h(q, {
                                                            name: "bankTitle"
                                                        })])), e("p", null, t(((pe = a(l).orderDetail) == null ? void 0 : pe.bankName) || A.$t("rechargeDetailDesc4")), 1)]), Vd, e("div", Ed, [e("span", null, t((De = X.value) == null ? void 0 : De.text1), 1), e("span", null, t((be = a(l).orderDetail) == null ? void 0 : be.accountName), 1)]), e("div", jd, [e("span", null, t((he = X.value) == null ? void 0 : he.text2), 1), e("span", null, t((Me = a(l).orderDetail) == null ? void 0 : Me.bankAccountNumber), 1)]), e("div", xd, [e("span", null, t((je = X.value) == null ? void 0 : je.text3), 1), e("span", null, t((ke = a(l).orderDetail) == null ? void 0 : ke.orderNumber), 1)]), e("div", Hd, [e("span", null, t((He = X.value) == null ? void 0 : He.text4), 1), e("span", null, t((re = a(l).orderDetail) == null ? void 0 : re.amount), 1)]), e("h1", Gd, t(A.$t("rechargeDetailDesc10")), 1), e("p", Fd, t(A.$t("rechargeDetailDesc11")), 1)])]
                                        }
                                        ),
                                        _: 1
                                    }, 8, ["show"]), h(nt, {
                                        show: a(k),
                                        "onUpdate:show": z[13] || (z[13] = pe => it(k) ? k.value = pe : null),
                                        onConfirm: z[14] || (z[14] = pe => {
                                            var De;
                                            return a(S)((De = a(l).orderDetail) == null ? void 0 : De.orderNumber)
                                        }
                                        ),
                                        "show-cancel-btn": !0,
                                        confirmText: A.$t("confirmCancel"),
                                        cancelText: A.$t("cancel"),
                                        title: A.$t("cancelDeal")
                                    }, {
                                        content: te(() => [e("div", zd, t(A.$t("orderDesc2")), 1)]),
                                        _: 1
                                    }, 8, ["show", "confirmText", "cancelText", "title"])])
                }
        }
    });
const Qd = oe(Kd, [["__scopeId", "data-v-845bb16b"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/RechargeDetail/index.vue"]])
    , O$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Qd
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , Yd = y => (We("data-v-f851bd18"),
        y = y(),
        Pe(),
        y)
    , Zd = {
        class: "rechargeh__container"
    }
    , Xd = {
        class: "rechargeh__header_box"
    }
    , Jd = ["src"]
    , eu = {
        key: 0,
        class: "state_box"
    }
    , tu = {
        class: "query_select"
    }
    , au = {
        class: "ar-searchbar__selector"
    }
    , nu = {
        class: "ar-searchbar__selector-default"
    }
    , su = {
        class: "rechargeh__container-content"
    }
    , lu = ["onClick"]
    , ou = {
        class: "rechargeh__container-content__item-header"
    }
    , iu = {
        class: "recharge_tit"
    }
    , ru = {
        key: 0,
        class: "rechargeh__container-content__item-body"
    }
    , cu = {
        class: "price"
    }
    , du = Yd(() => e("span", null, "UTR", -1))
    , uu = {
        class: "order"
    }
    , vu = {
        key: 1,
        class: "rechargeh__container-content__item-body"
    }
    , pu = {
        class: "price"
    }
    , _u = {
        class: "order"
    }
    , hu = ["onClick"]
    , mu = le({
        __name: "index",
        setup(y) {
            const { t: s } = Ne()
                , { store: v, getRechargeTypeName: c, currentPayId: r, historyToDetail: i } = ut();
            v.currentPayId = 0,
                c(!0);
            const p = fe();
            function _() {
                p.currentRoute.value.query.type ? p.replace({
                    name: "Recharge"
                }) : p.back()
            }
            const { goToTictek: $, isCenterServer: k } = zt({
                ServerType: 2
            })
                , l = I(!1)
                , w = I(s("all"))
                , d = I(!1)
                , R = I(!1)
                , S = I(1)
                , N = I()
                , C = Re({
                    startDate: "",
                    endDate: "",
                    state: -1,
                    payId: -1,
                    payTypeId: -1
                })
                , m = V(() => {
                    if (!b.value)
                        return Le.RechargeState;
                    let P = [{
                        key: s("all"),
                        value: -1
                    }]
                        , A = Le.RechargeC2CState;
                    return S.value === 1 ? P.concat(A.slice(0, 4)) : P.concat(A.slice(4, 7))
                }
                )
                , b = V(() => {
                    var P;
                    return ((P = v.rechargeType[v.currentMenu]) == null ? void 0 : P.payID) === 20 || !1
                }
                )
                , T = P => {
                    P !== S.value && (w.value = s("all"),
                        C.state = -1,
                        S.value = P,
                        C.type = P,
                        W.value.resetRefresh())
                }
                , B = async ({ selectedOptions: P }) => {
                    l.value = !1,
                        w.value = P[0].key,
                        C.state = P[0].value,
                        W.value.resetRefresh()
                }
                ;
            function D() {
                l.value = !0,
                    d.value = !0
            }
            async function O() {
                let P = N.value.endDateValue !== "" ? `${N.value.endDateValue} 23:59:59` : "";
                C.startDate = Bt(N.value.startDateValue).format("YYYY-MM-DD HH:mm:ss"),
                    C.endDate = Bt(P).format("YYYY-MM-DD HH:mm:ss"),
                    W.value.resetRefresh()
            }
            const Q = I([])
                , W = I()
                , F = V(() => v.currentMenu === 0 || !b.value ? (C.category && delete C.category,
                    C) : {
                    ...C
                })
                , M = P => { }
                , X = async P => {
                    i(P.payID || P.category, P.type, P.price, P.state, P.id)
                }
                , G = V(() => b.value ? Pa : Oa)
                , x = P => {
                    let A = "";
                    switch (P.state) {
                        case 0:
                            A = "recharge";
                            break;
                        case 1:
                            r.value !== 20 ? A = "success" : A = "check";
                            break;
                        case 2:
                            r.value !== 20 ? A = "fail" : A = "timeout";
                            break;
                        case 3:
                            A = "representation";
                            break;
                        case 4:
                            A = "success";
                            break;
                        case 5:
                            A = "fail";
                            break;
                        case 6:
                            A = "cancel";
                            break;
                        case 7:
                            A = "timeout";
                            break;
                        default:
                            A = "#FFB800";
                            break
                    }
                    return A
                }
                ;
            return Ke(() => v.currentMenu, async () => {
                v.currentMenu === 0 && (v.currentPayId = 0),
                    w.value = s("all"),
                    C.state = -1,
                    R.value = !1,
                    b.value ? (C.type = 1,
                        C.category = -1,
                        delete C.payTypeId,
                        delete C.payId) : (delete C.type,
                            C.payId = v.rechargeType[v.currentMenu].payID,
                            C.payTypeId = v.rechargeType[v.currentMenu].payTypeID),
                    await W.value.resetRefresh()
            }
            ),
                (P, A) => {
                    const z = L("NavBar")
                        , j = L("svg-icon")
                        , q = L("van-icon")
                        , g = L("van-picker")
                        , J = L("van-popup")
                        , K = L("van-divider");
                    return n(),
                        o("div", Zd, [h(z, {
                            class: "white",
                            title: P.$t("rechargeRecords"),
                            "left-arrow": "",
                            onClickLeft: _
                        }, null, 8, ["title"]), e("div", Xd, [h(Ds, {
                            list: a(v).rechargeType,
                            "is-auto-load": !0,
                            active: a(v).currentMenu,
                            "onUpdate:active": A[0] || (A[0] = se => a(v).currentMenu = se),
                            tabClassName: "tabs",
                            activeClassName: "tab_active",
                            ref: "tabRefs",
                            tabItemClassName: "funtab_item"
                        }, {
                            default: te(({ item: se, index: we }) => [e("div", {
                                class: ee(["tab_item", {
                                    tab_active: we === a(v).currentMenu
                                }])
                            }, [se.payID == -1 ? (n(),
                                Te(j, {
                                    key: 0,
                                    name: "all"
                                })) : (n(),
                                    o("img", {
                                        key: 1,
                                        src: a(v).currentMenu === we ? se.payNameUrl2 : se.payNameUrl,
                                        alt: ""
                                    }, null, 8, Jd)), e("span", null, t(se.typeName), 1)], 2)]),
                            _: 1
                        }, 8, ["list", "active"]), b.value ? (n(),
                            o("div", eu, [e("div", {
                                class: ee(["state_item", {
                                    state_item_active: S.value === 1
                                }]),
                                onClick: A[1] || (A[1] = se => T(1))
                            }, t(P.$t("inTransaction")), 3), e("div", {
                                class: ee(["state_item", {
                                    state_item_active: S.value === 2
                                }]),
                                onClick: A[2] || (A[2] = se => T(2))
                            }, t(P.$t("completed")), 3)])) : f("v-if", !0), e("div", tu, [e("div", au, [e("div", {
                                onClick: D,
                                class: ee({
                                    selectorA: !d.value
                                })
                            }, [e("span", nu, t(w.value), 1), h(q, {
                                name: "arrow-down"
                            })], 2)]), f("日期选择组件"), h(Ea, {
                                ref_key: "calendar",
                                ref: N,
                                onConfirm: O
                            }, null, 512)])]), h(J, {
                                show: l.value,
                                "onUpdate:show": A[4] || (A[4] = se => l.value = se),
                                round: "",
                                position: "bottom"
                            }, {
                                default: te(() => [h(g, {
                                    "columns-field-names": {
                                        text: "key",
                                        value: "value",
                                        children: "children"
                                    },
                                    columns: m.value,
                                    onCancel: A[3] || (A[3] = se => l.value = !1),
                                    onConfirm: B
                                }, null, 8, ["columns"])]),
                                _: 1
                            }, 8, ["show"]), h(_a, {
                                list: Q.value,
                                "onUpdate:list": A[5] || (A[5] = se => Q.value = se),
                                "page-query": F.value,
                                "onUpdate:pageQuery": A[6] || (A[6] = se => F.value = se),
                                api: G.value,
                                distance: 100,
                                ref_key: "listRef",
                                ref: W,
                                onPageChange: M,
                                isAutoLoad: !0
                            }, {
                                content: te(() => [e("div", su, [(n(!0),
                                    o(ne, null, Se(Q.value, (se, we) => (n(),
                                        o("div", {
                                            class: "rechargeh__container-content__item",
                                            key: we,
                                            onClick: at(Oe => X(se), ["stop"])
                                        }, [e("div", ou, [e("span", iu, t(P.$t("recharge")), 1), e("div", {
                                            class: ee(["recharge_right", x(se)])
                                        }, t(a(rt)(b.value ? a(Le).RechargeC2CState : a(Le).RechargeState, se.state)), 3)]), h(K, {
                                            class: "divier"
                                        }), b.value ? (n(),
                                            o("div", ru, [e("div", null, [e("span", null, t(P.$t("amount")), 1), e("span", cu, t(a(ue)(se.orderAmount)), 1)]), e("div", null, [du, e("span", null, t(se.transactionNo || "-"), 1)]), e("div", null, [e("span", null, t(P.$t("time")), 1), e("span", null, t(se.createTime), 1)]), e("div", null, [e("span", null, t(P.$t("orderNo")), 1), e("div", uu, [e("span", null, t(se.orderNo), 1), h(j, {
                                                name: "copy",
                                                onClick: at(Oe => a(Ae)(se.orderNo), ["stop"])
                                            }, null, 8, ["onClick"])])])])) : (n(),
                                                o("div", vu, [e("div", null, [e("span", null, t(P.$t("amount")), 1), e("span", pu, t(a(ue)(se.price)), 1)]), e("div", null, [e("span", null, t(P.$t("type")), 1), e("span", null, t(se == null ? void 0 : se.payName), 1)]), e("div", null, [e("span", null, t(P.$t("time")), 1), e("span", null, t(se.addTime), 1)]), e("div", null, [e("span", null, t(P.$t("orderNo")), 1), e("div", _u, [e("span", null, t(se.rechargeNumber), 1), h(j, {
                                                    name: "copy",
                                                    onClick: at(Oe => a(Ae)(se.rechargeNumber), ["stop"])
                                                }, null, 8, ["onClick"])])])])), [0, 2].includes(se.state) && a(k) ? (n(),
                                                    o("div", {
                                                        key: 2,
                                                        class: "report",
                                                        onClick: at(Oe => a($)(se, b.value), ["stop"])
                                                    }, t(P.$t("report")), 9, hu)) : f("v-if", !0)], 8, lu))), 128))])]),
                                _: 1
                            }, 8, ["list", "page-query", "api"])])
                }
        }
    });
const fu = oe(mu, [["__scopeId", "data-v-f851bd18"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/RechargeHistory/index.vue"]])
    , L$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: fu
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , wu = y => (We("data-v-a876fc5b"),
        y = y(),
        Pe(),
        y)
    , yu = {
        class: "RechargeUsdt__container"
    }
    , gu = {
        class: "RechargeUsdt__container__content"
    }
    , $u = {
        class: "RechargeUsdt__container__content-qrCode"
    }
    , ku = ["src"]
    , bu = {
        class: "tip"
    }
    , Cu = ["src"]
    , Tu = {
        class: "RechargeUsdt__container__content-info"
    }
    , Iu = {
        class: "label"
    }
    , Su = {
        class: "address"
    }
    , Nu = {
        class: "RechargeUsdt__container__content-info"
    }
    , Du = {
        class: "label"
    }
    , Au = {
        class: "address"
    }
    , Ru = {
        class: "RechargeUsdt__container__content-info"
    }
    , Bu = {
        class: "label"
    }
    , Uu = {
        class: "RechargeUsdt__container-popup__wrap"
    }
    , Wu = {
        class: "title"
    }
    , Pu = {
        class: "tip"
    }
    , Ou = {
        class: "list"
    }
    , Lu = {
        class: "item"
    }
    , Mu = ["src"]
    , qu = wu(() => e("span", null, "Tron(TRC20)", -1))
    , Vu = {
        class: "item"
    }
    , Eu = le({
        __name: "index",
        setup(y) {
            const s = fe()
                , { t: v } = Ne()
                , c = I(!1)
                , r = I("")
                , { store: i, submitUsdtRecharge: p, getLocalUsdtInfo: _, handlePaste: $, createQrCode: k, getUsdtOrderInfo: l, handleUpdateUsdtOrder: w } = ut()
                , d = I("")
                , R = I(null)
                , S = b => b.replace(/[\u4e00-\u9fa5\s]/g, "");
            Ce(async () => {
                var B, D, O, Q, W;
                if (await l(),
                    !sessionStorage.getItem("usdtInfo") && !i.isUsdtOrder)
                    R.value = _.value,
                        R.value && sessionStorage.setItem("usdtInfo", JSON.stringify(R.value));
                else {
                    let F = sessionStorage.getItem("usdtInfo")
                        , M = JSON.parse(F || "{}");
                    R.value = M
                }
                let b = ((B = R.value) == null ? void 0 : B.coding) || ((D = i.usdtOrderInfo) == null ? void 0 : D.rechargeAddress)
                    , T = "";
                b && (T = await k(((O = R.value) == null ? void 0 : O.coding) || ((Q = i.usdtOrderInfo) == null ? void 0 : Q.rechargeAddress))),
                    i.isUsdtOrder && (d.value = (W = i.usdtOrderInfo) == null ? void 0 : W.transferOutAddress),
                    r.value = T + ""
            }
            );
            const N = async () => {
                var T, B, D, O, Q, W, F, M;
                if (!d.value) {
                    ce(v("enterUsdtAddress"));
                    return
                }
                if (i.isUsdtOrder) {
                    let X = {
                        usdtId: (T = i.usdtOrderInfo) == null ? void 0 : T.usdtId,
                        usdtType: (B = i.usdtOrderInfo) == null ? void 0 : B.usdtType,
                        rechargeAddress: (D = i.usdtOrderInfo) == null ? void 0 : D.rechargeAddress,
                        transferOutAddress: d.value,
                        amount: Number((O = i.usdtOrderInfo) == null ? void 0 : O.amount),
                        orderNo: (Q = i.usdtOrderInfo) == null ? void 0 : Q.orderNumber
                    };
                    await w(X);
                    return
                }
                let b = {
                    usdtId: (W = R.value) == null ? void 0 : W.usdtID,
                    amount: Number(s.currentRoute.value.query.amount),
                    usdtType: (F = R.value) == null ? void 0 : F.usdtType,
                    rechargeAddress: (M = R.value) == null ? void 0 : M.coding,
                    transferOutAddress: d.value
                };
                await p(b)
            }
                ;
            Ut(() => {
                sessionStorage.removeItem("usdtInfo")
            }
            );
            const C = async () => {
                d.value = await $()
            }
                ;
            function m() {
                s.go(-1)
            }
            return (b, T) => {
                var W, F, M, X;
                const B = L("NavBar")
                    , D = L("svg-icon")
                    , O = L("van-field")
                    , Q = L("van-popup");
                return n(),
                    o("div", yu, [h(B, {
                        title: b.$t("rechargeUSDT"),
                        placeholder: !1,
                        "left-arrow": "",
                        onClickLeft: m
                    }, null, 8, ["title"]), e("div", gu, [e("div", $u, [e("img", {
                        src: r.value,
                        alt: ""
                    }, null, 8, ku), e("div", bu, t(b.$t("rechargeUsdtDesc1")), 1), e("img", {
                        src: a($e)("wallet", "recharge_usdt"),
                        alt: "",
                        class: "usdt_bg"
                    }, null, 8, Cu)]), e("div", Tu, [e("div", Iu, [h(D, {
                        name: "usdt4"
                    }), e("span", null, t(b.$t("rechargeUsdtDesc2")), 1)]), e("div", Su, [e("span", null, t(((W = R.value) == null ? void 0 : W.coding) || ((F = a(i).usdtOrderInfo) == null ? void 0 : F.rechargeAddress)), 1), h(D, {
                        name: "copy",
                        onClick: T[0] || (T[0] = G => {
                            var x;
                            return a(Ae)((x = R.value) == null ? void 0 : x.coding)
                        }
                        )
                    })])]), e("div", Nu, [e("div", Du, [h(D, {
                        name: "usdt4"
                    }), e("span", null, t(b.$t("rechargeUsdtDesc3")), 1)]), e("div", Au, [e("span", null, t(((M = R.value) == null ? void 0 : M.usdtName) || ((X = a(i).usdtOrderInfo) == null ? void 0 : X.bankName)), 1), f(` <img :src="getIcons('wallet/recharge', 'mainChain')" alt="" @click="showPicker = true" /> `)])]), e("div", Ru, [e("div", Bu, [e("span", null, t(b.$t("transferAddress")), 1)]), h(O, {
                        modelValue: d.value,
                        "onUpdate:modelValue": T[2] || (T[2] = G => d.value = G),
                        modelModifiers: {
                            trim: !0
                        },
                        class: "address_input",
                        placeholder: b.$t("enterUsdtAddress"),
                        maxlength: 40,
                        formatter: S
                    }, {
                        button: te(() => [e("div", {
                            class: "paste",
                            onClick: T[1] || (T[1] = G => C())
                        }, t(b.$t("paste")), 1)]),
                        _: 1
                    }, 8, ["modelValue", "placeholder"])]), h(Yt, {
                        "show-type": 19,
                        isShowHead: !0
                    }), e("div", {
                        class: "RechargeUsdt__container-rechageBtn rechage_active",
                        onClick: N
                    }, t(b.$t("finishRechargeUsdt")), 1)]), h(Q, {
                        show: c.value,
                        "onUpdate:show": T[3] || (T[3] = G => c.value = G),
                        round: "",
                        position: "bottom"
                    }, {
                        default: te(() => [e("div", Uu, [e("div", Wu, t(b.$t("rechargeUsdtDesc4")), 1), e("div", Pu, t(b.$t("rechargeUsdtDesc5")), 1), e("div", Ou, [e("div", Lu, [e("img", {
                            src: a(ge)("wallet/recharge", "mainChain"),
                            alt: ""
                        }, null, 8, Mu), qu]), e("div", Vu, [h(D, {
                            name: "usdt4",
                            class: "icon"
                        }), e("span", null, t(b.$t("rechargeUsdtDesc6")), 1)])])])]),
                        _: 1
                    }, 8, ["show"])])
            }
        }
    });
const ju = oe(Eu, [["__scopeId", "data-v-a876fc5b"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/RechargeUsdt/index.vue"]])
    , M$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ju
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , xu = {
        class: "transRecord__container"
    }
    , Hu = {
        style: {
            height: "65px"
        }
    }
    , Gu = {
        class: "ar"
    }
    , Fu = {
        class: "ar-searchbar"
    }
    , zu = {
        class: "transRecord__container-content"
    }
    , Ku = {
        class: "transRecord__container-content__card"
    }
    , Qu = {
        class: "transRecord__container-content__card-top"
    }
    , Yu = {
        class: "transRecord__container-content__card-mid"
    }
    , Zu = {
        class: "line"
    }
    , Xu = {
        class: "left"
    }
    , Ju = {
        class: "right"
    }
    , ev = {
        class: "line"
    }
    , tv = {
        class: "left"
    }
    , av = {
        class: "right"
    }
    , nv = {
        class: "line"
    }
    , sv = {
        class: "left"
    }
    , lv = {
        class: "transRecord__container-content__card-bot"
    }
    , ov = ["onUpdate:modelValue"]
    , iv = le({
        __name: "index",
        setup(y) {
            const { t: s } = Ne()
                , v = fe();
            function c() {
                v.back()
            }
            const r = I([])
                , i = I([])
                , p = I()
                , _ = Re({
                    date: "",
                    type: -1
                })
                , $ = I(!1)
                , k = I("")
                , l = I(!1)
                , w = async ({ selectedOptions: G }) => {
                    $.value = !1,
                        k.value = G[0].typeName,
                        _.type = G[0].type,
                        p.value.resetRefresh()
                }
                ;
            function d() {
                $.value = !0,
                    l.value = !0
            }
            const { key: R, value: S } = ls()
                , N = I(S)
                , { minDate: C, maxDate: m } = os(0)
                , b = I(!1)
                , T = ({ selectedOptions: G }) => {
                    b.value = !1
                }
                , B = async ({ selectedOptions: G }) => {
                    b.value = !1,
                        _.date = `${N.value[0]}-${N.value[1]}-${N.value[2]} 00:00:00`,
                        p.value.resetRefresh()
                }
                , D = ({ selectedOptions: G }) => { }
                , O = (G, x) => x;
            async function Q() {
                const G = await ae(is());
                G && (r.value = G.data.typeList.map(x => (x.typeName = s(`code${x.typeNameCode}`),
                    x)),
                    r.value.unshift({
                        type: -1,
                        typeName: s("all")
                    }),
                    k.value = r.value[0].typeName)
            }
            let W = [8e3, 8005, 8018, 8021, 8023, 8100]
                , F = [8001, 8002, 8003, 8004, 8006, 8007, 8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8019, 8020, 8022, 8024, 8029, 8030, 8031, 8101, 8102, 8103, 8104, 8105, 8107];
            const M = G => {
                i.value = G,
                    i.value = i.value.map(x => {
                        x.typeName = s(`code${x.typeNameCode}`);
                        let P;
                        return W.includes(x.typeNameCode * 1) ? P = "red" : F.includes(x.typeNameCode * 1) && (P = "green"),
                        {
                            ...x,
                            typeColor: P
                        }
                    }
                    )
            }
                ;
            function X(G) {
                return [109].includes(G) ? "red" : [111, 112, 110, 108, 114].includes(G) ? "green" : ""
            }
            return Ce(async () => {
                await Q()
            }
            ),
                (G, x) => {
                    const P = L("NavBar")
                        , A = L("ArSelect")
                        , z = L("van-picker")
                        , j = L("van-popup")
                        , q = L("van-date-picker");
                    return n(),
                        o("div", xu, [h(P, {
                            title: G.$t("transactionrecord"),
                            "left-arrow": "",
                            onClickLeft: c
                        }, null, 8, ["title"]), e("div", Hu, [e("div", Gu, [e("div", Fu, [h(A, {
                            onClickSelect: d,
                            selectName: k.value
                        }, null, 8, ["selectName"]), h(A, {
                            onClickSelect: x[0] || (x[0] = g => b.value = !0),
                            selectName: _.date || G.$t("pickDate")
                        }, null, 8, ["selectName"])])])]), f(" 配合弹窗层使用 "), h(j, {
                            show: $.value,
                            "onUpdate:show": x[2] || (x[2] = g => $.value = g),
                            round: "",
                            position: "bottom"
                        }, {
                            default: te(() => [h(z, {
                                "columns-field-names": {
                                    text: "typeName",
                                    value: "type",
                                    children: "children"
                                },
                                columns: r.value,
                                onCancel: x[1] || (x[1] = g => $.value = !1),
                                onConfirm: w
                            }, null, 8, ["columns"])]),
                            _: 1
                        }, 8, ["show"]), f(" 日期选择 "), h(j, {
                            show: b.value,
                            "onUpdate:show": x[4] || (x[4] = g => b.value = g),
                            round: "",
                            position: "bottom"
                        }, {
                            default: te(() => [h(q, {
                                modelValue: N.value,
                                "onUpdate:modelValue": x[3] || (x[3] = g => N.value = g),
                                title: G.$t("pickDate"),
                                onCancel: T,
                                onConfirm: B,
                                filter: O,
                                onChange: D,
                                "min-date": a(C),
                                "max-date": a(m)
                            }, null, 8, ["modelValue", "title", "min-date", "max-date"])]),
                            _: 1
                        }, 8, ["show"]), h(_a, {
                            distance: 100,
                            api: a(cs),
                            list: i.value,
                            "onUpdate:list": [x[5] || (x[5] = g => i.value = g), M],
                            ref_key: "listRef",
                            ref: p,
                            pageQuery: _,
                            "onUpdate:pageQuery": x[6] || (x[6] = g => _ = g)
                        }, {
                            content: te(() => [e("div", zu, [(n(!0),
                                o(ne, null, Se(i.value, (g, J) => (n(),
                                    o("div", {
                                        class: "transRecord__container-content__item",
                                        key: J
                                    }, [e("div", Ku, [e("div", Qu, [e("h3", null, t(g.typeName), 1)]), e("div", Yu, [e("div", Zu, [e("div", Xu, t(G.$t("detail")), 1), e("div", Ju, t(a(rs)(r.value, g.type)), 1)]), e("div", ev, [e("div", tv, t(G.$t("time")), 1), e("div", av, t(g.addTime), 1)]), e("div", nv, [e("div", sv, t(G.$t("amount")), 1), e("div", {
                                        class: ee(["right", g.typeColor]),
                                        style: ia(`color:${X(g.type)}`)
                                    }, t(a(ue)(g.amount)), 7)])]), e("div", lv, [_e(e("textarea", {
                                        class: "textarea",
                                        name: "remark",
                                        cols: "30",
                                        rows: "10",
                                        readonly: !0,
                                        "onUpdate:modelValue": K => g.remark = K
                                    }, null, 8, ov), [[Ue, g.remark]])])])]))), 128))])]),
                            _: 1
                        }, 8, ["api", "list", "pageQuery"])])
                }
        }
    });
const rv = oe(iv, [["__scopeId", "data-v-2565e76d"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/TransAction/index.vue"]])
    , q$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: rv
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , cv = {
        class: "balanceAssets"
    }
    , dv = {
        class: "balanceAssets__header"
    }
    , uv = {
        class: "balanceAssets__header__left"
    }
    , vv = ["src"]
    , pv = {
        class: "balanceAssets__main"
    }
    , _v = ["src"]
    , hv = le({
        __name: "BalanceAssetsW",
        props: {
            data_NewSetWithdrawal: {
                type: null,
                required: !0
            },
            withdrawalsrule: {
                type: null,
                required: !0
            }
        },
        setup(y) {
            const s = y
                , { t: v } = Ne()
                , { setLoading: c } = et()
                , r = Aa(s, "withdrawalsrule");
            async function i() {
                c(!0);
                const p = await ae(_t({
                    withdrawid: s.data_NewSetWithdrawal.type
                }));
                p && (r.value.amount = p.data.withdrawalsrule.amount,
                    Xe(v("refreshSuccess"))),
                    c(!1)
            }
            return (p, _) => (n(),
                o("div", cv, [e("div", dv, [e("div", uv, [e("img", {
                    src: a($e)("wallet", "balance")
                }, null, 8, vv), f(" 可用余额 "), E(" " + t(p.$t("vailableBalance")), 1)])]), e("div", pv, [e("p", null, t(a(ue)(r.value.amount)), 1), e("img", {
                    src: a(ge)("wallet/recharge", "refresh"),
                    alt: "",
                    onClick: i
                }, null, 8, _v)])]))
        }
    });
const mv = oe(hv, [["__scopeId", "data-v-0879c174"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/BalanceAssetsW.vue"]])
    , fv = {
        class: "rechargeh__container"
    }
    , wv = {
        class: "rechargeh__container-head"
    }
    , yv = {
        class: "rechargeh__container-content"
    }
    , gv = {
        class: "rechargeh__container-content__item-header ar-1px-b"
    }
    , $v = {
        class: "rechargeh__container-content__item-body"
    }
    , kv = {
        class: "rechargeh__container-footer"
    }
    , bv = le({
        __name: "WithdrawHistory",
        setup(y, { expose: s }) {
            const v = fe()
                , { setLoading: c } = et()
                , r = I([])
                , i = Re({
                    pageNo: 1,
                    pageSize: 5,
                    startDate: "",
                    endDate: "",
                    state: -1,
                    type: -1
                });
            function p() {
                v.push({
                    name: "WithdrawHistory"
                })
            }
            async function _() {
                c(!0);
                const $ = await ae(ds(i));
                $ && (r.value = $.data.list),
                    c(!1)
            }
            return Ce(async () => {
                await _()
            }
            ),
                s({
                    getWithdrawLog: _
                }),
                ($, k) => {
                    const l = L("svg-icon");
                    return n(),
                        o("div", fv, [e("div", wv, [h(l, {
                            name: "historyHead"
                        }), e("h1", null, t($.$t("whTitle5")), 1)]), e("div", yv, [r.value.length > 0 ? (n(!0),
                            o(ne, {
                                key: 0
                            }, Se(r.value, (w, d) => (n(),
                                o("div", {
                                    class: "rechargeh__container-content__item",
                                    key: d
                                }, [f(' <div class="rechargeh__container-content__item-header ar-1px-b" @click="onToDetail(item.state)"> '), e("div", gv, [e("span", null, t($.$t("withdraw")), 1), e("span", {
                                    class: ee({
                                        stateR: w.state === 0,
                                        stateG: w.state === 1
                                    })
                                }, [E(t(a(rt)(a(Le).WithdrawState, w.state)) + " ", 1), f(' <van-icon name="arrow" /> ')], 2)]), e("div", $v, [e("div", null, [e("span", null, t($.$t("amount")), 1), e("span", null, t(a(ue)(w.price)), 1)]), e("div", null, [e("span", null, t($.$t("type")), 1), e("span", null, t(w.withdrawName), 1)]), e("div", null, [e("span", null, t($.$t("time")), 1), e("span", null, t(w.addTime), 1)]), e("div", null, [e("span", null, t($.$t("orderNo")), 1), e("span", null, t(w.withdrawNumber), 1), h(l, {
                                    onClick: R => a(Ae)(w.withdrawNumber.toString()),
                                    name: "copy"
                                }, null, 8, ["onClick"])])])]))), 128)) : (n(),
                                    Te(St, {
                                        key: 1
                                    }))]), e("div", kv, [e("button", {
                                        onClick: p
                                    }, t($.$t("allRecords")), 1)])])
                }
        }
    });
const da = oe(bv, [["__scopeId", "data-v-30972a14"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/WithdrawHistory.vue"]])
    , Cv = {
        class: "withdrawWay"
    }
    , Tv = ["src"]
    , Iv = ["src"]
    , Sv = ["src"]
    , Nv = ["src"]
    , Dv = ["src"]
    , Av = ["src"]
    , Rv = ["onClick"]
    , Bv = ["src"]
    , Uv = ["src"]
    , Wv = le({
        __name: "withdrawalTypes",
        props: {
            data_NewSetWithdrawal: {
                type: null,
                required: !0
            },
            withdrawalTypeslist: {
                type: Array,
                required: !0
            },
            c2cAward: {
                type: Number,
                required: !0
            }
        },
        emits: ["onSelectWithdrawalType"],
        setup(y, { emit: s }) {
            const v = y
                , c = V(() => v.withdrawalTypeslist.find(_ => _.withdrawID == 20))
                , r = V(() => v.withdrawalTypeslist.find(_ => _.withdrawID == 21))
                , i = V(() => v.withdrawalTypeslist.find(_ => _.withdrawID == 22));
            function p(_) {
                s("onSelectWithdrawalType", _)
            }
            return (_, $) => (n(),
                o("div", Cv, [c.value ? (n(),
                    o("div", {
                        key: 0,
                        class: ee(["c2c", {
                            active: _.data_NewSetWithdrawal.type == 20
                        }]),
                        onClick: $[0] || ($[0] = k => p({
                            withdrawID: 20
                        }))
                    }, [_.data_NewSetWithdrawal.type != c.value.withdrawID ? (n(),
                        o("img", {
                            key: 0,
                            src: c.value.withBeforeImgUrl
                        }, null, 8, Tv)) : (n(),
                            o("img", {
                                key: 1,
                                src: c.value.withAfterImgUrl
                            }, null, 8, Iv)), e("div", null, [e("div", null, t(c.value.name), 1), _.c2cAward > 0 ? (n(),
                                o(ne, {
                                    key: 0
                                }, [E(t(_.$t("c2cEGReward", [_.c2cAward ? a(pa)(_.c2cAward, 100) : 0])), 1)], 64)) : f("v-if", !0)])], 2)) : f("v-if", !0), r.value ? (n(),
                                    o("div", {
                                        key: 1,
                                        class: ee(["c2c Ar", {
                                            active: _.data_NewSetWithdrawal.type == 21
                                        }]),
                                        onClick: $[1] || ($[1] = k => p({
                                            withdrawID: 21
                                        }))
                                    }, [_.data_NewSetWithdrawal.type != r.value.withdrawID ? (n(),
                                        o("img", {
                                            key: 0,
                                            src: r.value.withBeforeImgUrl
                                        }, null, 8, Sv)) : (n(),
                                            o("img", {
                                                key: 1,
                                                src: r.value.withAfterImgUrl
                                            }, null, 8, Nv)), e("div", null, [e("div", null, t(r.value.name), 1), e("p", null, t(_.$t("withdrawTip5")), 1)])], 2)) : f("v-if", !0), i.value ? (n(),
                                                o("div", {
                                                    key: 2,
                                                    class: ee(["c2c Ar", {
                                                        active: _.data_NewSetWithdrawal.type == 22
                                                    }]),
                                                    onClick: $[2] || ($[2] = k => p({
                                                        withdrawID: 22
                                                    }))
                                                }, [_.data_NewSetWithdrawal.type != i.value.withdrawID ? (n(),
                                                    o("img", {
                                                        key: 0,
                                                        src: i.value.withBeforeImgUrl
                                                    }, null, 8, Dv)) : (n(),
                                                        o("img", {
                                                            key: 1,
                                                            src: i.value.withAfterImgUrl
                                                        }, null, 8, Av)), e("div", null, [e("div", null, t(i.value.name), 1)])], 2)) : f("v-if", !0), (n(!0),
                                                            o(ne, null, Se(_.withdrawalTypeslist, k => (n(),
                                                                o(ne, {
                                                                    key: k.withdrawID
                                                                }, [[20, 21, 22].includes(k.withdrawID) ? f("v-if", !0) : (n(),
                                                                    o("div", {
                                                                        key: 0,
                                                                        class: ee({
                                                                            select: _.data_NewSetWithdrawal.type == k.withdrawID
                                                                        }),
                                                                        onClick: l => p(k)
                                                                    }, [e("div", null, [_.data_NewSetWithdrawal.type != k.withdrawID ? (n(),
                                                                        o("img", {
                                                                            key: 0,
                                                                            src: k.withBeforeImgUrl
                                                                        }, null, 8, Bv)) : (n(),
                                                                            o("img", {
                                                                                key: 1,
                                                                                src: k.withAfterImgUrl
                                                                            }, null, 8, Uv))]), e("span", null, t(k.name), 1)], 10, Rv))], 64))), 128))]))
        }
    });
const Pv = oe(Wv, [["__scopeId", "data-v-9bae072d"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/withdrawalTypes.vue"]])
    , Ov = {
        class: "explain"
    }
    , Lv = {
        class: "input"
    }
    , Mv = {
        class: "place-div"
    }
    , qv = ["placeholder"]
    , Vv = {
        key: 0,
        class: "verify"
    }
    , Ev = {
        class: "balance bank"
    }
    , jv = {
        class: "yellow"
    }
    , xv = ["value"]
    , Hv = {
        class: "rightD"
    }
    , Gv = {
        class: "yellow"
    }
    , Fv = {
        class: "explain usdt"
    }
    , zv = {
        class: "head"
    }
    , Kv = ["src"]
    , Qv = {
        key: 0
    }
    , Yv = {
        key: 1
    }
    , Zv = {
        class: "input"
    }
    , Xv = {
        class: "place-div"
    }
    , Jv = ["placeholder"]
    , ep = {
        key: 0,
        class: "verify"
    }
    , tp = {
        key: 1,
        class: "verify"
    }
    , ap = {
        key: 2,
        class: "input"
    }
    , np = ["placeholder"]
    , sp = {
        class: "place-div"
    }
    , lp = {
        class: "place-icon"
    }
    , op = ["src"]
    , ip = {
        class: "balance usdt"
    }
    , rp = {
        class: "yellow"
    }
    , cp = ["value"]
    , dp = le({
        __name: "withdrawField",
        props: {
            data_NewSetWithdrawal: {
                type: null,
                required: !0
            },
            withdrawalsrule: {
                type: null,
                required: !0
            }
        },
        setup(y, { expose: s }) {
            const v = y
                , { t: c } = Ne()
                , r = V(() => Ve().getDollarSign)
                , i = I(0)
                , p = V({
                    get() {
                        return i.value != 0 ? i.value : ""
                    },
                    set(B) {
                        i.value = B
                    }
                })
                , _ = Aa(v, "data_NewSetWithdrawal")
                , $ = V({
                    get() {
                        return _.value.amount != 0 ? _.value.amount : ""
                    },
                    set(B) {
                        _.value.amount = B
                    }
                })
                , k = V(() => _.value.amount != 0 && (_.value.amount > v.withdrawalsrule.canWithdrawAmount || _.value.amount > v.withdrawalsrule.maxPrice || _.value.amount < v.withdrawalsrule.minPrice || v.withdrawalsrule.amountofCode > 0))
                , l = V(() => {
                    if (_.value.amount != 0) {
                        if (v.withdrawalsrule.amountofCode > 0)
                            return c("code128");
                        if (_.value.amount > v.withdrawalsrule.canWithdrawAmount)
                            return c("cashBalanceInsufficient");
                        if (_.value.amount > v.withdrawalsrule.maxPrice || _.value.amount < v.withdrawalsrule.minPrice)
                            return c("wordWithdrawal", [ue(v.withdrawalsrule.minPrice), ue(v.withdrawalsrule.maxPrice)])
                    }
                }
                )
                , w = V(() => _.value.type === 3 && _.value.amount != 0 && Number(_.value.amount) < 10);
            function d(B) {
                B.keyCode != 46 && (B.keyCode < 48 || B.keyCode > 57) && (B.returnValue = !1)
            }
            function R(B) {
                (B.keyCode < 48 || B.keyCode > 57) && (B.returnValue = !1)
            }
            function S() {
                _.value.amount = Number(_.value.amount.toString().replace(/[^\d.]/g, "").replace(/^\./g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")),
                    _.value.amount.toString().length > 11 && (_.value.amount = Number(_.value.amount.toString().slice(0, 11)))
            }
            function N() {
                _.value.amount = Math.floor(v.withdrawalsrule.canWithdrawAmount),
                    _.value.type === 3 && m()
            }
            function C() {
                i.value = Math.floor(i.value)
            }
            function m() {
                if (_.value.amount = Number(_.value.amount.toString().replace(/[^\d.]/g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3").replace(/^\./g, "")),
                    _.value.amount.toString().length > 11 && (_.value.amount = Number(_.value.amount.toString().slice(0, 11))),
                    _.value.amount > 0) {
                    let B = Number(_.value.amount) / v.withdrawalsrule.uRate;
                    i.value = Math.floor(B * 100) / 100
                } else
                    i.value = 0
            }
            function b() {
                if (i.value.toString().length > 11 && (i.value = Number(i.value.toString().slice(0, 11))),
                    i.value > 0) {
                    let B = i.value * v.withdrawalsrule.uRate;
                    _.value.amount = Math.floor(Math.floor(B * 100) / 100)
                } else
                    _.value.amount = 0
            }
            const T = V(() => {
                if (!_.value.amount)
                    return 0;
                const { withMinPrice: B = 0, withMaxPrice: D = 0, fee: O } = v.withdrawalsrule;
                return O > 0 && B <= _.value.amount && _.value.amount <= D ? _.value.amount - _.value.amount * O : _.value.amount
            }
            );
            return s({
                usdtCount: i,
                data: _,
                showValidate: k,
                showValidateUB: w
            }),
                (B, D) => (n(),
                    o(ne, null, [_e(e("div", Ov, [e("div", Lv, [e("div", Mv, t(r.value), 1), _e(e("input", {
                        placeholder: B.$t("enterAmount"),
                        onInput: D[0] || (D[0] = O => S()),
                        class: "inp",
                        "onUpdate:modelValue": D[1] || (D[1] = O => $.value = O),
                        onKeypress: D[2] || (D[2] = O => d(O))
                    }, null, 40, qv), [[Ue, $.value]])]), k.value ? (n(),
                        o("div", Vv, t(l.value), 1)) : f("v-if", !0), e("div", Ev, [e("div", null, [e("span", null, [E(t(B.$t("wfDesc1")) + " ", 1), e("h6", jv, t(a(ue)(B.withdrawalsrule.canWithdrawAmount || 0)), 1)]), e("input", {
                            type: "button",
                            value: B.$t("all"),
                            onClick: N
                        }, null, 8, xv)]), e("div", null, [e("span", null, t(B.$t("wfDesc2")), 1), e("div", Hv, [e("span", Gv, t(a(ue)(T.value)), 1)])])])], 512), [[Rt, [1, 2, 6, 8, 5].includes(_.value.type)]]), _e(e("div", Fv, [e("div", zv, [e("img", {
                            src: a($e)("wallet/withdrawType", String(_.value.type))
                        }, null, 8, Kv), _.value.type == 3 ? (n(),
                            o("h1", Qv, t(B.$t("selectUSDTNum")), 1)) : f("v-if", !0), _.value.type == 10 ? (n(),
                                o("h1", Yv, t(B.$t("selectUSDTAmount")), 1)) : f("v-if", !0)]), e("div", Zv, [e("div", Xv, t(r.value), 1), _e(e("input", {
                                    type: "number",
                                    placeholder: B.$t("enterWithdrawAmount"),
                                    onInput: m,
                                    class: "inp",
                                    "onUpdate:modelValue": D[3] || (D[3] = O => $.value = O),
                                    onKeypress: D[4] || (D[4] = O => R(O))
                                }, null, 40, Jv), [[Ue, $.value]])]), k.value ? (n(),
                                    o("div", ep, t(l.value), 1)) : f("v-if", !0), w.value ? (n(),
                                        o("div", tp, t(B.$t("wfDesc4")), 1)) : f("v-if", !0), [3].includes(_.value.type) ? (n(),
                                            o("div", ap, [_e(e("input", {
                                                type: "number",
                                                placeholder: B.$t("enterUSDTAmount"),
                                                onInput: b,
                                                class: "inp",
                                                "onUpdate:modelValue": D[5] || (D[5] = O => p.value = O),
                                                onKeypress: D[6] || (D[6] = O => R(O)),
                                                onFocus: C
                                            }, null, 40, np), [[Ue, p.value]]), e("div", sp, [e("div", lp, [e("img", {
                                                src: a($e)("wallet/withdrawType", "3")
                                            }, null, 8, op)])])])) : f("v-if", !0), e("div", ip, [e("div", null, [e("span", null, [E(t(B.$t("wfDesc5")) + " ", 1), e("h6", rp, t(a(ue)(B.withdrawalsrule.canWithdrawAmount || 0)), 1)]), e("input", {
                                                type: "button",
                                                value: B.$t("all"),
                                                onClick: N
                                            }, null, 8, cp)])])], 512), [[Rt, [3, 10].includes(_.value.type)]])], 64))
        }
    });
const up = oe(dp, [["__scopeId", "data-v-cb5583fe"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/withdrawField.vue"]])
    , vp = {
        key: 0,
        class: "addWithdrawType"
    }
    , pp = ["src"]
    , _p = {
        key: 0,
        class: "addWithdrawType-text"
    }
    , hp = le({
        __name: "AddWithdrawType",
        props: {
            isShowhintTextO: {
                type: Boolean,
                required: !1,
                default: !1
            },
            hintTextO: {
                type: String,
                required: !1,
                default: ""
            },
            type: {
                type: null,
                required: !1,
                default: ""
            }
        },
        setup(y) {
            const s = y
                , v = fe()
                , c = ct()
                , { t: r } = Ne()
                , i = pt()
                , p = r("addAddr");
            let _ = r("paymentMethodRequired");
            const { getSelfCustomerServiceLink: $ } = zt({
                ServerType: 2
            })
                , k = V(() => !([3, 10].includes(s.type) && i.getADDUSTD == 0))
                , l = () => {
                    $("addUSTD")
                }
                ;
            function w() {
                const R = {
                    1: "Withdraw-AddBankCard",
                    2: "Withdraw-AddUpi",
                    3: "Withdraw-AddUSDT",
                    4: "Withdraw-AddType4",
                    5: "Withdraw-AddPIX",
                    6: "Withdraw-AddWave",
                    8: "Withdraw-AddKbz",
                    10: "Withdraw-AddUSDT"
                };
                v.replace({
                    name: R[s.type],
                    query: {
                        fromV: c.name
                    }
                })
            }
            const d = V(() => ({
                1: r("titleAddBankCard"),
                2: r("addUpi"),
                3: r("addAddr"),
                4: r("addWallet"),
                5: r("upiAddPaymentMethod"),
                6: r("addWaveType"),
                8: r("upiAddPaymentMethod"),
                10: r("addAddr")
            })[s.type]);
            return (R, S) => {
                const N = L("svg-icon");
                return k.value ? (n(),
                    o("div", vp, [e("div", {
                        class: "addWithdrawType-top",
                        onClick: w
                    }, [e("img", {
                        src: a(ge)("wallet/withdraw", "add")
                    }, null, 8, pp), e("span", null, t(d.value || a(p)), 1)]), R.isShowhintTextO ? (n(),
                        o("div", _p, t(R.hintTextO || a(_)), 1)) : f("v-if", !0)])) : (n(),
                            o("div", {
                                key: 1,
                                class: "canNotAdd",
                                onClick: l
                            }, [h(N, {
                                name: "customer_b",
                                class: "forgetbg"
                            }), E(" " + t(R.$t("contactServicer") + R.$t("titleAddUSDTAddr")), 1)]))
            }
        }
    });
const Zt = oe(hp, [["__scopeId", "data-v-ef5c8333"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/AddWithdrawType.vue"]])
    , mp = {
        class: "Recharge__container-intro"
    }
    , fp = {
        class: "br"
    }
    , wp = ["innerHTML"]
    , yp = {
        class: "red"
    }
    , gp = {
        class: "red"
    }
    , $p = {
        class: "red"
    }
    , kp = {
        key: 0
    }
    , bp = ["innerHTML"]
    , Cp = {
        key: 0
    }
    , Tp = ["innerHTML"]
    , Ip = ["innerHTML"]
    , Sp = ["innerHTML"]
    , Np = ["innerHTML"]
    , Dp = ["innerHTML"]
    , Ap = ["innerHTML"]
    , Rp = le({
        __name: "InstructionsW",
        props: {
            withdrawalsrule: {
                type: null,
                required: !0
            },
            withdrawType: {
                type: null,
                required: !1
            },
            award: {
                type: null,
                required: !1
            },
            name: {
                type: null,
                required: !1
            }
        },
        setup(y) {
            return (s, v) => {
                var c, r, i, p, _, $, k, l, w, d, R, S;
                return n(),
                    o("div", mp, [e("div", fp, [s.withdrawType == 21 ? (n(),
                        o(ne, {
                            key: 0
                        }, [e("p", null, t(s.$t("arWTip1", [s.name])), 1), e("p", null, t(s.$t("arWTip2", [s.name])), 1)], 64)) : f("v-if", !0), [1, 2, 3, 4, 5, 6, 8, 10, 20, 21].includes(s.withdrawType) ? (n(),
                            o(ne, {
                                key: 1
                            }, [e("p", {
                                innerHTML: s.$t("instructionDes", [a(ue)((c = s.withdrawalsrule) == null ? void 0 : c.amountofCode)])
                            }, null, 8, wp), e("p", null, [E(t(s.$t("instructionTxt6")) + " ", 1), e("span", yp, t((r = s.withdrawalsrule) == null ? void 0 : r.startTime) + "-" + t((i = s.withdrawalsrule) == null ? void 0 : i.endTime), 1)]), e("p", null, [E(t(s.$t("instructionTxt7")), 1), e("span", gp, t((p = s.withdrawalsrule) == null ? void 0 : p.withdrawRemainingCount), 1)]), e("p", null, [E(t(s.$t("instructionTxt8")) + " ", 1), e("span", $p, t(a(ue)((_ = s.withdrawalsrule) == null ? void 0 : _.minPrice)) + "-" + t(a(ue)(($ = s.withdrawalsrule) == null ? void 0 : $.maxPrice)), 1)])], 64)) : f("v-if", !0), [3, 10].includes(s.withdrawType) ? (n(),
                                o(ne, {
                                    key: 2
                                }, [e("p", null, t(s.$t("instructionTxt10")), 1), e("p", null, t(s.$t("instructionTxt11")), 1)], 64)) : f("v-if", !0), s.withdrawType == 4 ? (n(),
                                    o(ne, {
                                        key: 3
                                    }, [Number(s.award) ? (n(),
                                        o("div", kp, [e("p", {
                                            innerHTML: s.$t("c2cFTip1", [s.name, s.award * 100 || 0])
                                        }, null, 8, bp)])) : f("v-if", !0)], 64)) : f("v-if", !0), s.withdrawType == 20 ? (n(),
                                            o(ne, {
                                                key: 4
                                            }, [Number(s.award) ? (n(),
                                                o("div", Cp, [e("p", {
                                                    innerHTML: s.$t("c2cFTip1", [s.name, s.award * 100 || 0])
                                                }, null, 8, Tp)])) : f("v-if", !0), e("div", null, [e("p", {
                                                    innerHTML: s.$t("c2cFTip4")
                                                }, null, 8, Ip)]), e("div", null, [e("p", {
                                                    innerHTML: s.$t("c2cFTip2", [((k = s.withdrawalsrule) == null ? void 0 : k.c2cUnitAmount) || 100])
                                                }, null, 8, Sp)]), e("div", null, [e("p", {
                                                    innerHTML: s.$t("c2cFTip3")
                                                }, null, 8, Np)])], 64)) : f("v-if", !0), s.withdrawType != 21 ? (n(),
                                                    o(ne, {
                                                        key: 5
                                                    }, [(l = s.withdrawalsrule) != null && l.fee ? (n(),
                                                        o(ne, {
                                                            key: 0
                                                        }, [((w = s.withdrawalsrule) == null ? void 0 : w.withMinPrice) + ((d = s.withdrawalsrule) == null ? void 0 : d.withMaxPrice) ? (n(),
                                                            o("p", {
                                                                key: 0,
                                                                innerHTML: s.$t("sxf", [a(ue)((R = s.withdrawalsrule) == null ? void 0 : R.withMinPrice), a(ue)((S = s.withdrawalsrule) == null ? void 0 : S.withMaxPrice)])
                                                            }, null, 8, Dp)) : f("v-if", !0), e("p", {
                                                                innerHTML: s.$t("sxf1", [Math.floor(s.withdrawalsrule.fee * 1e4 / 100).toFixed(2)])
                                                            }, null, 8, Ap)], 64)) : f("v-if", !0), e("p", null, t(s.$t("withdrwsTip5")), 1), e("p", null, t(s.$t("withdrwsTip6")), 1)], 64)) : f("v-if", !0)])])
            }
        }
    });
const Xt = oe(Rp, [["__scopeId", "data-v-76eb7f31"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/InstructionsW.vue"]])
    , ht = y => (We("data-v-391308ac"),
        y = y(),
        Pe(),
        y)
    , Bp = {
        class: "c2cConfirm"
    }
    , Up = ht(() => e("p", null, [E("*You must click "), e("span", null, "【Confirm Receipt】")], -1))
    , Wp = ht(() => e("p", null, "*After receiving the transfer, go to order details and click 【Confirm Receipt】to receive the reward.", -1))
    , Pp = ht(() => e("h6", null, [E("How to "), e("span", null, "【Confirm Receipt】")], -1))
    , Op = {
        class: "imgBox"
    }
    , Lp = {
        class: "box"
    }
    , Mp = ht(() => e("div", null, [e("h6", null, "01、"), E("Open my withdrawal record")], -1))
    , qp = {
        class: "box"
    }
    , Vp = ht(() => e("div", null, "02、Select New-UPI Click Order", -1))
    , Ep = {
        class: "box"
    }
    , jp = ht(() => e("div", null, "03、Click to Money received", -1))
    , xp = {
        class: "box"
    }
    , Hp = ht(() => e("div", null, "04、Complete the order and get rewards", -1))
    , Gp = ht(() => e("span", null, "[Money received]", -1))
    , Fp = le({
        __name: "c2cConfirm",
        props: {
            showC2c: {
                type: Boolean,
                default: !1,
                required: !0
            }
        },
        emits: ["update:showC2c"],
        setup(y, { emit: s }) {
            const v = y
                , { showC2c: c } = Ra(v, s)
                , r = I(!1);
            function i() {
                if (!r.value)
                    return ce({
                        message: "Please read the process and check the box to agree",
                        wordBreak: "break-word"
                    });
                localStorage.setItem("isC2cCheck", "1"),
                    c.value = !1
            }
            return Ce(() => {
                localStorage.getItem("isC2cCheck") != null && (r.value = localStorage.getItem("isC2cCheck") == "1")
            }
            ),
                (p, _) => {
                    const $ = L("van-checkbox")
                        , k = ot("lazy");
                    return n(),
                        o("div", Bp, [Up, Wp, Pp, e("div", Op, [e("div", Lp, [Mp, _e(e("img", null, null, 512), [[k, a($e)("wallet/withdraw/c2c", "1")]])]), e("div", qp, [Vp, _e(e("img", null, null, 512), [[k, a($e)("wallet/withdraw/c2c", "2")]])]), e("div", Ep, [jp, _e(e("img", null, null, 512), [[k, a($e)("wallet/withdraw/c2c", "3")]])]), e("div", xp, [Hp, _e(e("img", null, null, 512), [[k, a($e)("wallet/withdraw/c2c", "4")]])])]), h($, {
                            modelValue: r.value,
                            "onUpdate:modelValue": _[0] || (_[0] = l => r.value = l)
                        }, {
                            default: te(() => [E("I already understand the process and agree to come back and click "), Gp]),
                            _: 1
                        }, 8, ["modelValue"]), e("div", {
                            class: ee(["btn", {
                                active: r.value
                            }]),
                            onClick: i
                        }, "confirm", 2)])
                }
        }
    });
const zp = oe(Fp, [["__scopeId", "data-v-391308ac"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/c2cConfirm.vue"]])
    , Kp = {
        class: "c2cWithdraw__C"
    }
    , Qp = {
        class: "c2cWithdraw__C-input"
    }
    , Yp = {
        class: "place-div"
    }
    , Zp = {
        class: "unit"
    }
    , Xp = {
        key: 0,
        class: "verify"
    }
    , Jp = {
        class: "can-withdraw"
    }
    , e_ = {
        class: "c2cWithdraw__C-tip"
    }
    , t_ = {
        class: "c2cWithdraw__C-tip-l"
    }
    , a_ = {
        class: "c2cWithdraw__C-tip-r"
    }
    , n_ = {
        class: "c2cWithdraw__T"
    }
    , s_ = {
        class: "c2cWithdraw__T-h"
    }
    , l_ = 20
    , o_ = le({
        __name: "c2cField",
        props: {
            c2crule: {
                type: null,
                required: !0
            },
            c2cAward: {
                type: null,
                required: !0
            },
            c2cName: {
                type: String,
                required: !0
            }
        },
        emits: ["setc2cAmount"],
        setup(y, { emit: s }) {
            const v = y
                , { t: c } = Ne()
                , r = I(0)
                , i = V(() => Ve().getDollarSign)
                , p = V(() => Number(r.value) ? Number(r.value) * (v.c2crule.c2cUnitAmount || 100) : 0)
                , _ = V(() => p.value * v.c2cAward)
                , $ = () => {
                    const w = Math.floor(v.c2crule.canWithdrawAmount / 100)
                        , d = Math.floor(v.c2crule.maxPrice / 100);
                    r.value = w > d ? d : w
                }
                , k = w => {
                    s("setc2cAmount", w * (v.c2crule.c2cUnitAmount || 100))
                }
                , l = V(() => {
                    if (p.value != 0) {
                        if (p.value > v.c2crule.canWithdrawAmount)
                            return c("cashBalanceInsufficient");
                        if (p.value > v.c2crule.maxPrice || p.value < v.c2crule.minPrice)
                            return c("wordWithdrawal", [ue(v.c2crule.minPrice), ue(v.c2crule.maxPrice)])
                    }
                    return ""
                }
                );
            return Ce(() => { }
            ),
                (w, d) => {
                    var N;
                    const R = L("van-field")
                        , S = L("svg-icon");
                    return n(),
                        o(ne, null, [e("div", Kp, [e("div", Qp, [e("div", Yp, t(i.value), 1), h(R, {
                            modelValue: r.value,
                            "onUpdate:modelValue": [d[0] || (d[0] = C => r.value = C), k],
                            modelModifiers: {
                                number: !0
                            },
                            type: "digit",
                            placeholder: w.$t("plsEnterQuantity"),
                            class: "amount-input"
                        }, null, 8, ["modelValue", "placeholder"]), e("div", Zp, t(((N = w.c2crule.c2cUnitAmount) == null ? void 0 : N.toString().substring(1)) || "00"), 1)]), l.value ? (n(),
                            o("div", Xp, t(l.value), 1)) : f("v-if", !0), e("div", Jp, [E(t(w.$t("wfDesc1")) + t(a(ue)(w.c2crule.canWithdrawAmount || 0)) + " ", 1), e("div", {
                                onClick: $
                            }, t(w.$t("all")), 1)]), e("div", e_, [e("div", t_, [e("div", null, t(w.$t("wfDesc2")), 1), e("div", null, t(w.$t("savedForYou")), 1)]), e("div", a_, [e("div", null, t(a(ue)(p.value)), 1), e("div", null, t(a(ue)(_.value)), 1)])]), ua(w.$slots, "default", {}, void 0, !0)]), e("div", n_, [e("div", s_, [h(S, {
                                name: "shuoming"
                            }), E(" " + t(w.$t("withdrawalInstructions")), 1)]), h(Xt, {
                                withdrawType: l_,
                                withdrawalsrule: w.c2crule,
                                award: w.c2cAward,
                                name: w.c2cName
                            }, null, 8, ["withdrawalsrule", "award", "name"])])], 64)
                }
        }
    });
const i_ = oe(o_, [["__scopeId", "data-v-472a2df8"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/c2cField.vue"]])
    , r_ = {
        class: "title"
    }
    , c_ = {
        class: "name"
    }
    , d_ = le({
        __name: "c2cUpi",
        props: {
            withdrawalslist: {
                type: Array,
                default: () => []
            },
            bid: {
                default: -0
            }
        },
        setup(y) {
            const s = y
                , v = ct()
                , c = fe()
                , r = V(() => s.withdrawalslist.find(p => p.bid == s.bid) || {})
                , i = p => {
                    c.replace({
                        name: "Withdraw-Upi",
                        query: {
                            bid: p,
                            fromV: v.name
                        }
                    })
                }
                ;
            return Ce(() => { }
            ),
                (p, _) => {
                    const $ = L("van-icon");
                    return n(),
                        o("div", {
                            class: ee(["c2cUpi", {
                                noUpi: !y.withdrawalslist.length
                            }]),
                            onClick: _[0] || (_[0] = k => i(r.value.bid))
                        }, [y.withdrawalslist.length ? (n(),
                            o(ne, {
                                key: 0
                            }, [e("div", r_, t(p.$t("upiCollectMoney")), 1), e("div", c_, t(r.value.upiAccount), 1), h($, {
                                name: "arrow",
                                class: "right-icon",
                                size: "12"
                            })], 64)) : (n(),
                                o(ne, {
                                    key: 1
                                }, [E(t(p.$t("addUpi")), 1)], 64))], 2)
                }
        }
    });
const Na = oe(d_, [["__scopeId", "data-v-fe54ed07"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/c2cUpi.vue"]])
    , u_ = y => (We("data-v-15989e8c"),
        y = y(),
        Pe(),
        y)
    , v_ = ["onClick"]
    , p_ = {
        class: "c2cRecord__C-item-h"
    }
    , __ = {
        class: "title"
    }
    , h_ = {
        key: 0
    }
    , m_ = {
        key: 1
    }
    , f_ = {
        class: "c2cRecord__C-item-a"
    }
    , w_ = {
        class: "title"
    }
    , y_ = {
        class: "c2cRecord__C-item-u"
    }
    , g_ = u_(() => e("span", {
        class: "title"
    }, "UTR", -1))
    , $_ = {
        class: "c2cRecord__C-item-t"
    }
    , k_ = {
        class: "title"
    }
    , b_ = {
        class: "c2cRecord__C-item-id"
    }
    , C_ = {
        class: "title"
    }
    , T_ = le({
        __name: "c2cRecordList",
        props: {
            list: {
                type: Array,
                required: !0
            }
        },
        setup(y) {
            const s = y
                , { t: v } = Ne()
                , c = fe()
                , r = [v("c2cState0"), v("c2cState1"), v("c2cState2"), v("c2cState3"), v("c2cState4"), v("c2cTip9"), v("c2cState6"), v("c2cState7"), v("c2cState8"), v("c2cState9"), v("c2cState10"), v("c2cState11"), v("c2cState11"), v("c2cState13"), v("c2cState14")]
                , i = I(null)
                , p = I(0)
                , _ = I("00:00")
                , $ = I("00:00")
                , k = I(null)
                , l = I(null)
                , w = (N, C) => {
                    localStorage.setItem("c2cOrderNo", N),
                        c.push({
                            name: "Withdraw-C2cDetail",
                            query: {
                                order: N,
                                state: C
                            }
                        })
                }
                ;
            Ke(() => s.list, N => {
                if (i.value = N.findIndex(m => m.state === 1),
                    i.value != -1) {
                    const m = N[i.value].serviceTime.replace(/-/g, "/")
                        , b = N[i.value].confrimEndTime.replace(/-/g, "/");
                    p.value = new Date(b).getTime() - new Date(m).getTime(),
                        p.value > 0 ? (clearInterval(k.value),
                            R()) : _.value = "00:00"
                } else
                    _.value = "00:00";
                let C = N.find(m => m.state === 11 || m.state === 12);
                if (C) {
                    const m = C.auditEndTime.replace(/-/g, "/")
                        , b = C.serviceTime.replace(/-/g, "/");
                    p.value = new Date(b).getTime() - new Date(m).getTime(),
                        clearInterval(l.value),
                        S()
                } else
                    $.value = "00:00"
            }
            );
            const d = N => {
                const C = Math.floor(N / 36e5)
                    , m = Math.floor((N - C * 36e5) / 6e4)
                    , b = Math.floor((N - C * 36e5 - m * 6e4) / 1e3);
                return `${C ? C.toString().padStart(2, "0") + ":" : ""}${m.toString().padStart(2, "0")}:${b.toString().padStart(2, "0")}`
            }
                ;
            function R() {
                k.value = setInterval(() => {
                    p.value -= 1e3,
                        _.value = d(p.value),
                        p.value <= 0 && clearInterval(k.value)
                }
                    , 1e3)
            }
            function S() {
                l.value = setInterval(() => {
                    p.value += 1e3,
                        $.value = d(p.value)
                }
                    , 1e3)
            }
            return ft(() => {
                clearInterval(k.value),
                    clearInterval(l.value)
            }
            ),
                (N, C) => {
                    const m = L("van-icon")
                        , b = L("svg-icon");
                    return n(!0),
                        o(ne, null, Se(N.list, (T, B) => (n(),
                            o("div", {
                                key: B,
                                class: "c2cRecord__C-item",
                                onClick: D => w(T.orderNo, T.state)
                            }, [e("div", p_, [e("div", __, t(N.$t("withdraw")), 1), e("div", {
                                class: ee(["state" + T.state])
                            }, [E(t(r[T.state]) + " ", 1), T.state === 1 ? (n(),
                                o("span", h_, t(_.value), 1)) : f("v-if", !0), [11, 12].includes(T.state) ? (n(),
                                    o("span", m_, ": " + t($.value), 1)) : f("v-if", !0), T.state != 2 ? (n(),
                                        Te(m, {
                                            key: 2,
                                            name: "arrow",
                                            size: "14"
                                        })) : f("v-if", !0)], 2)]), e("div", f_, [e("span", w_, t(N.$t("amount")), 1), E(" " + t(a(ue)(T.orderAmount)), 1)]), e("div", y_, [g_, e("span", null, [E(t(T.transactionNo), 1), h(b, {
                                            name: "copy",
                                            onClick: at(D => a(Ae)(T.transactionNo), ["stop"])
                                        }, null, 8, ["onClick"])])]), e("div", $_, [e("span", k_, t(N.$t("time")), 1), E(t(T.createTime), 1)]), e("div", b_, [e("span", C_, t(N.$t("orderNo")), 1), e("span", null, [E(t(T.orderNo), 1), h(b, {
                                            name: "copy",
                                            onClick: at(D => a(Ae)(T.orderNo), ["stop"])
                                        }, null, 8, ["onClick"])])])], 8, v_))), 128)
                }
        }
    });
const Ya = oe(T_, [["__scopeId", "data-v-15989e8c"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/c2cRecordList.vue"]])
    , I_ = {
        class: "c2cRecord__C"
    }
    , S_ = {
        class: "c2cRecord__C-head"
    }
    , N_ = {
        class: "c2cRecord__C-body"
    }
    , D_ = le({
        __name: "c2cRecord",
        setup(y, { expose: s }) {
            const v = fe()
                , c = I()
                , r = I({
                    startDate: "",
                    endDate: "",
                    type: -1,
                    state: -1,
                    category: -1
                })
                , i = I([])
                , p = () => {
                    v.push({
                        name: "WithdrawHistory"
                    })
                }
                ;
            return s({
                resetRefresh: () => {
                    c.value.resetRefresh()
                }
            }),
                ($, k) => (n(),
                    o("div", I_, [e("div", S_, t($.$t("c2CWithdrawalRecord")), 1), e("div", N_, [h(_a, {
                        list: i.value,
                        "onUpdate:list": k[0] || (k[0] = l => i.value = l),
                        "page-query": r.value,
                        "onUpdate:pageQuery": k[1] || (k[1] = l => r.value = l),
                        api: a(Ma),
                        distance: 100,
                        ref_key: "listRef",
                        ref: c,
                        "is-auto-load": !0,
                        showNoM: !1
                    }, {
                        content: te(() => [h(Ya, {
                            list: i.value
                        }, null, 8, ["list"])]),
                        _: 1
                    }, 8, ["list", "page-query", "api"])]), e("div", {
                        class: "c2cRecord__C-allrecord",
                        onClick: p
                    }, t($.$t("allRecords")), 1)]))
        }
    });
const A_ = oe(D_, [["__scopeId", "data-v-824a4891"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/c2cRecord.vue"]])
    , R_ = {
        class: "WC4__C"
    }
    , B_ = {
        class: "WC4__C-input"
    }
    , U_ = {
        class: "place-div"
    }
    , W_ = {
        key: 0,
        class: "verify"
    }
    , P_ = {
        class: "can-withdraw"
    }
    , O_ = {
        class: "amount"
    }
    , L_ = {
        class: "num"
    }
    , M_ = 4
    , q_ = le({
        __name: "wC4Field",
        props: {
            rule: {
                type: null,
                required: !0
            },
            award: {
                type: null,
                required: !0
            },
            name: {
                type: String,
                required: !0
            },
            wtype: {
                type: Number,
                required: !0
            }
        },
        emits: ["setc2cAmount"],
        setup(y, { emit: s }) {
            const v = y
                , { t: c } = Ne()
                , r = I(0)
                , i = V(() => Ve().getDollarSign);
            Ke(() => v.wtype, l => {
                r.value = 0
            }
            );
            const p = V(() => {
                if (!r.value)
                    return 0;
                const { withMinPrice: l = 0, withMaxPrice: w = 0, fee: d } = v.rule;
                return d > 0 && l <= r.value && r.value <= w ? r.value - r.value * d : r.value
            }
            )
                , _ = () => {
                    const l = v.rule.canWithdrawAmount
                        , w = v.rule.maxPrice;
                    r.value = l > w ? w : l
                }
                , $ = l => {
                    s("setc2cAmount", l)
                }
                , k = V(() => {
                    if (r.value != 0) {
                        if (r.value > v.rule.canWithdrawAmount)
                            return c("cashBalanceInsufficient");
                        if (r.value > v.rule.maxPrice || r.value < v.rule.minPrice)
                            return c("wordWithdrawal", [ue(v.rule.minPrice), ue(v.rule.maxPrice)])
                    }
                    return ""
                }
                );
            return Ce(() => { }
            ),
                (l, w) => {
                    const d = L("van-field");
                    return n(),
                        o("div", R_, [e("div", B_, [e("div", U_, t(i.value), 1), h(d, {
                            modelValue: r.value,
                            "onUpdate:modelValue": [w[0] || (w[0] = R => r.value = R), $],
                            modelModifiers: {
                                number: !0
                            },
                            type: "digit",
                            placeholder: l.$t("plsEnterQuantity"),
                            class: "amount-input"
                        }, null, 8, ["modelValue", "placeholder"])]), k.value ? (n(),
                            o("div", W_, t(k.value), 1)) : f("v-if", !0), e("div", P_, [E(t(l.$t("wfDesc1")) + t(a(ue)(l.rule.canWithdrawAmount || 0)) + " ", 1), e("div", {
                                onClick: _
                            }, t(l.$t("all")), 1)]), e("div", O_, [e("div", null, t(l.$t("wfDesc2")), 1), e("div", L_, t(a(ue)(p.value)), 1)]), ua(l.$slots, "default", {}, void 0, !0), h(Xt, {
                                withdrawType: M_,
                                withdrawalsrule: l.rule,
                                award: l.award,
                                name: l.name
                            }, null, 8, ["withdrawalsrule", "award", "name"])])
                }
        }
    });
const V_ = oe(q_, [["__scopeId", "data-v-81d3a4d3"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/wC4Field.vue"]])
    , E_ = {
        class: "name"
    }
    , j_ = {
        class: "title"
    }
    , x_ = {
        class: "name"
    }
    , H_ = le({
        __name: "wC4Id",
        props: {
            withdrawalslist: {
                type: Array,
                default: () => []
            },
            bid: {
                default: -0
            },
            withdrawType: {
                default: 4
            },
            name: {
                default: ""
            }
        },
        setup(y) {
            const s = y
                , v = ct()
                , c = fe()
                , r = V(() => s.withdrawalslist.find(_ => _.bid == s.bid) || {})
                , i = V(() => s.withdrawalslist.length > 0 ? s.withdrawalslist[0] : {})
                , p = _ => {
                    if (s.withdrawType === 22)
                        s.bid || c.replace({
                            name: "Withdraw-AddRsnPay",
                            query: {
                                Type4name: s.name
                            }
                        });
                    else {
                        if ([23, 24].includes(s.withdrawType) && s.withdrawalslist.length)
                            return;
                        c.replace({
                            name: "Withdraw-Type4",
                            query: {
                                bid: _,
                                fromV: v.name,
                                Type4name: s.name,
                                withdrawType: s.withdrawType
                            }
                        })
                    }
                }
                ;
            return Ce(() => { }
            ),
                (_, $) => {
                    const k = L("van-icon");
                    return [4, 23, 24].includes(y.withdrawType) ? (n(),
                        o("div", {
                            key: 0,
                            class: ee(["wC4Id", {
                                noUpi: !y.withdrawalslist.length
                            }]),
                            onClick: $[0] || ($[0] = l => p(r.value.bid))
                        }, [y.withdrawalslist.length ? (n(),
                            o(ne, {
                                key: 0
                            }, [e("div", {
                                class: ee(["title", `${r.value.walletName}`])
                            }, t(r.value.walletName), 3), e("div", E_, t(r.value.mobileNO), 1), h(k, {
                                name: "arrow",
                                class: "right-icon",
                                size: "12"
                            })], 64)) : (n(),
                                o(ne, {
                                    key: 1
                                }, [E(t(_.$t("addto")), 1)], 64))], 2)) : (n(),
                                    o("div", {
                                        key: 1,
                                        class: ee(["wC4Id rnsData", {
                                            noUpi: !y.withdrawalslist.length
                                        }]),
                                        onClick: $[1] || ($[1] = l => p(i.value.bid))
                                    }, [y.withdrawalslist.length ? (n(),
                                        o(ne, {
                                            key: 0
                                        }, [e("div", j_, t(i.value.bankName), 1), e("div", x_, t(i.value.mobileNo), 1)], 64)) : (n(),
                                            o(ne, {
                                                key: 1
                                            }, [E(t(_.$t("addto")), 1)], 64))], 2))
                }
        }
    });
const G_ = oe(H_, [["__scopeId", "data-v-8fab5987"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/wC4Id.vue"]])
    , F_ = y => (We("data-v-b6d0c70a"),
        y = y(),
        Pe(),
        y)
    , z_ = {
        class: "arCard"
    }
    , K_ = {
        class: "left"
    }
    , Q_ = ["src"]
    , Y_ = {
        key: 0,
        class: "tip"
    }
    , Z_ = {
        class: "tit"
    }
    , X_ = {
        class: "wallet_amount"
    }
    , J_ = F_(() => e("em", null, "rsn", -1))
    , eh = le({
        __name: "RsnType",
        props: {
            withdrawalslist: {
                type: Array,
                default: () => []
            },
            currentType: {
                type: Object,
                default: {
                    withBeforeImgUrl: ""
                }
            },
            rsnInfo: {
                type: Object,
                default: {
                    balance: 0,
                    walletActivationStatus: 0,
                    walletAddress: ""
                }
            },
            bid: {
                default: -0
            },
            withdrawType: {
                default: 4
            },
            name: {
                default: ""
            }
        },
        emits: ["getRnsTypeInfo"],
        setup(y, { emit: s }) {
            const v = y
                , { goActive: c, goWallet: r } = It()
                , i = () => {
                    v.rsnInfo.walletActivationStatus === 0 ? c("wallet/recharge", "RSN") : r("wallet/recharge", "RSN")
                }
                ;
            return Ce(() => {
                s("getRnsTypeInfo")
            }
            ),
                (p, _) => {
                    var $, k, l;
                    return n(),
                        o("div", z_, [e("div", K_, [e("img", {
                            src: ($ = y.currentType) == null ? void 0 : $.withBeforeImgUrl
                        }, null, 8, Q_), e("div", null, [((k = y.rsnInfo) == null ? void 0 : k.walletActivationStatus) === 0 ? (n(),
                            o("div", Y_, t(p.$t("rnsNoActive")), 1)) : (n(),
                                o(ne, {
                                    key: 1
                                }, [e("div", Z_, t(p.$t("RSNTip")), 1), e("div", X_, [e("em", null, t(p.$t("balance")) + ":", 1), E(t(((l = y.rsnInfo) == null ? void 0 : l.balance) || 0) + " ", 1), J_])], 64))])]), e("div", {
                                    class: "right",
                                    onClick: i
                                }, t(y.rsnInfo.walletActivationStatus === 0 ? p.$t("RNSActive") : p.$t("comminWallet")), 1)])
                }
        }
    });
const th = oe(eh, [["__scopeId", "data-v-b6d0c70a"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/RsnType.vue"]])
    , ah = {
        class: "c2cWithdraw__C"
    }
    , nh = {
        class: "head"
    }
    , sh = {
        class: "c2cWithdraw__C-input"
    }
    , lh = {
        class: "place-div"
    }
    , oh = {
        key: 0,
        class: "verify"
    }
    , ih = {
        class: "can-withdraw"
    }
    , rh = {
        class: "c2cWithdraw__C-tip"
    }
    , ch = {
        class: "c2cWithdraw__C-tip-l"
    }
    , dh = {
        class: "c2cWithdraw__C-tip-r"
    }
    , uh = {
        class: "c2cWithdraw__T"
    }
    , vh = {
        class: "c2cWithdraw__T-h"
    }
    , ph = 21
    , _h = le({
        __name: "arField",
        setup(y, { expose: s }) {
            const { withdrawalsrule: v, withdrawalTypeslist: c, setc2cAmount: r } = dt()
                , { t: i } = Ne()
                , p = I(0)
                , _ = V(() => Ve().getDollarSign)
                , $ = V(() => Number(p.value) ? Number(p.value) : 0)
                , k = () => {
                    const d = Math.floor(v.value.canWithdrawAmount)
                        , R = Math.floor(v.value.maxPrice);
                    p.value = d > R ? R : d
                }
                , l = d => {
                    r(d)
                }
                , w = V(() => {
                    if ($.value != 0) {
                        if ($.value > v.value.canWithdrawAmount)
                            return i("cashBalanceInsufficient");
                        if ($.value > v.value.maxPrice || $.value < v.value.minPrice)
                            return i("wordWithdrawal", [ue(v.value.minPrice), ue(v.value.maxPrice)])
                    }
                    return ""
                }
                );
            return s({
                validateTxt: w
            }),
                (d, R) => {
                    var C;
                    const S = L("svg-icon")
                        , N = L("van-field");
                    return n(),
                        o(ne, null, [e("div", ah, [e("div", nh, [h(S, {
                            name: "saveWallet"
                        }), E(" " + t(d.$t("enterA")), 1)]), e("div", sh, [e("div", lh, t(_.value), 1), h(N, {
                            modelValue: p.value,
                            "onUpdate:modelValue": [R[0] || (R[0] = m => p.value = m), l],
                            modelModifiers: {
                                number: !0
                            },
                            type: "digit",
                            placeholder: d.$t("plsEnterQuantity"),
                            class: "amount-input"
                        }, null, 8, ["modelValue", "placeholder"]), e("div", {
                            class: "all",
                            onClick: k
                        }, t(d.$t("all")), 1)]), w.value ? (n(),
                            o("div", oh, t(w.value), 1)) : f("v-if", !0), e("div", ih, t(d.$t("wfDesc1")) + t(a(ue)(a(v).canWithdrawAmount || 0)), 1), e("div", rh, [e("div", ch, [e("div", null, t(d.$t("wfDesc2")), 1)]), e("div", dh, [e("div", null, t(a(ue)($.value)), 1)])]), ua(d.$slots, "default", {}, void 0, !0)]), e("div", uh, [e("div", vh, [h(S, {
                                name: "shuoming"
                            }), E(t(d.$t("withdrawalInstructions")), 1)]), h(Xt, {
                                withdrawType: ph,
                                withdrawalsrule: a(v),
                                name: ((C = a(c).find(m => m.withdrawID == 21)) == null ? void 0 : C.name) || ""
                            }, null, 8, ["withdrawalsrule", "name"])])], 64)
                }
        }
    });
const hh = oe(_h, [["__scopeId", "data-v-7dcfb9e1"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/Ar/arField.vue"]])
    , mh = {
        class: "arType"
    }
    , fh = {
        class: "left"
    }
    , wh = {
        class: "right"
    }
    , yh = {
        key: 0,
        class: "arCard"
    }
    , gh = {
        class: "left"
    }
    , $h = ["src"]
    , kh = {
        class: "amount"
    }
    , bh = {
        class: "recycleBtnD c2c"
    }
    , Ch = le({
        __name: "card",
        emits: ["onShowPwdD"],
        setup(y, { expose: s, emit: v }) {
            fe();
            const { data_NewSetWithdrawalH: c, withdrawalTypeslist: r } = dt()
                , { getInfo: i, arWallet: p, goWallet: _ } = It()
                , $ = I()
                , k = V(() => {
                    var d, R;
                    if ([21].includes(c.value.type) && c.value.amount > 0)
                        return !(c.value.amount < 1 || ((d = $.value) == null ? void 0 : d.validateTxt.length) > 0 || c.value.bid == 0 || ((R = p.value) == null ? void 0 : R.walletActivationStatus) != 1)
                }
                )
                , l = () => {
                    const w = encodeURIComponent("https://" + window.location.host + "/#/main");
                    let R = `https://arbpay.me/#/TradRules?type=1&lang=${localStorage.getItem("language")}&returnUrl=${w}`;
                    window.location.href = R
                }
                ;
            return Ce(() => {
                i()
            }
            ),
                s({
                    isActiveC: k
                }),
                (w, d) => {
                    var N, C;
                    const R = L("svg-icon")
                        , S = L("van-icon");
                    return n(),
                        o("div", mh, [e("div", {
                            class: "rule",
                            onClick: d[0] || (d[0] = m => l())
                        }, [e("div", fh, [h(R, {
                            name: "arpay1"
                        }), e("p", null, t(w.$t("arbTip1")), 1)]), e("div", wh, [E(t(w.$t("checkOver")), 1), h(S, {
                            name: "arrow"
                        })])]), ((N = a(p)) == null ? void 0 : N.walletActivationStatus) == 1 ? (n(),
                            o(ne, {
                                key: 0
                            }, [[21].includes(a(c).type) ? (n(),
                                o("div", yh, [e("div", gh, [e("img", {
                                    src: a($e)("wallet/withdrawType", `${a(c).type}`)
                                }, null, 8, $h), e("p", null, [e("span", null, t(w.$t("arbTip13")), 1), e("span", kh, t(((C = a(p)) == null ? void 0 : C.balance) || 0) + " ARB", 1)])]), e("div", {
                                    class: "right",
                                    onClick: d[1] || (d[1] = m => a(_)("wallet/withdraw"))
                                }, t(w.$t("comminWallet")), 1)])) : f("v-if", !0), h(hh, {
                                    ref_key: "arFieldRef",
                                    ref: $
                                }, {
                                    default: te(() => [e("div", bh, [e("button", {
                                        class: ee(["recycleBtn", {
                                            active: k.value
                                        }]),
                                        onClick: d[2] || (d[2] = () => {
                                            v("onShowPwdD")
                                        }
                                        )
                                    }, t(w.$t("withdraw")), 3)])]),
                                    _: 1
                                }, 512), h(da)], 64)) : (n(),
                                    Te(Ka, {
                                        key: 1,
                                        pageType: "wallet/Withdraw"
                                    }))])
                }
        }
    });
const Th = oe(Ch, [["__scopeId", "data-v-69845b27"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/Ar/card.vue"]])
    , Ih = {
        class: "noRightTimeDialog"
    }
    , Sh = {
        class: "fail"
    }
    , Nh = {
        class: "van-dialog__content-title title1"
    }
    , Dh = {
        class: "van-dialog__content-note"
    }
    , Ah = {
        class: "red"
    }
    , Rh = le({
        __name: "noRightTimeDialog",
        setup(y) {
            const { withdrawalsrule: s } = dt()
                , v = V(() => s.value ? s.value.startTime : "00:00")
                , c = V(() => s.value ? s.value.endTime : "23:59");
            return (r, i) => {
                const p = ot("lazy");
                return n(),
                    o("div", Ih, [_e(e("img", Sh, null, 512), [[p, a($e)("wallet", "tip")]]), e("div", Nh, t(r.$t("noRightTime")), 1), e("div", Dh, [e("p", null, [E(t(r.$t("wTimeInterval")), 1), e("span", Ah, t(v.value) + "-" + t(c.value), 1), E(", ")]), e("p", null, t(r.$t("later")), 1)])])
            }
        }
    });
const Bh = oe(Rh, [["__scopeId", "data-v-415fa4b1"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/noRightTimeDialog.vue"]])
    , Za = y => (We("data-v-80a607a5"),
        y = y(),
        Pe(),
        y)
    , Uh = {
        class: "withdraw__container"
    }
    , Wh = {
        class: "withdraw__container-content"
    }
    , Ph = {
        class: "recycleBtnD c2c"
    }
    , Oh = {
        class: "recycleBtnD c2c"
    }
    , Lh = {
        key: 1,
        class: "bankInfoItem usdt"
    }
    , Mh = ["src"]
    , qh = {
        key: 2,
        class: "bankInfoItem usdt KBZ"
    }
    , Vh = ["src"]
    , Eh = {
        key: 0
    }
    , jh = {
        key: 1
    }
    , xh = {
        key: 0
    }
    , Hh = {
        key: 1
    }
    , Gh = {
        class: "recycleBtnD"
    }
    , Fh = {
        class: "succeed"
    }
    , zh = {
        class: "van-dialog__content-title"
    }
    , Kh = {
        class: "van-dialog__content-note"
    }
    , Qh = {
        class: "succeedImg"
    }
    , Yh = {
        class: "c2cTip"
    }
    , Zh = ["innerHTML"]
    , Xh = ["innerHTML"]
    , Jh = {
        class: "pwd"
    }
    , em = {
        class: "pwd-head ar-1px-b"
    }
    , tm = Za(() => e("input", {
        type: "text",
        class: "is-hidden"
    }, null, -1))
    , am = Za(() => e("input", {
        type: "password",
        class: "is-hidden"
    }, null, -1))
    , nm = {
        class: "red"
    }
    , sm = {
        class: "forgetPwd"
    }
    , lm = {
        class: "btnD"
    }
    , om = ["innerHTML"]
    , im = {
        class: "question"
    }
    , rm = {
        class: "button"
    }
    , cm = le({
        __name: "index",
        setup(y) {
            const { setWithdrawal: s, setWithdrawalsrule: v, setWithdrawalTypeslist: c } = dt()
                , r = I(!1)
                , i = () => {
                    if (r.value = !r.value,
                        r.value) {
                        const Y = new Date().getTime() + 2592e6;
                        localStorage.setItem("popupHideUntil", Y.toString())
                    } else
                        localStorage.removeItem("popupHideUntil")
                }
                , { t: p } = Ne()
                , { setLoading: _ } = et()
                , { getUserInfo: $, getRegisterState: k, $state: l } = Kt()
                , w = fe()
                , d = pt()
                , R = I()
                , S = I()
                , N = I()
                , C = I({})
                , m = I({
                    balance: 0,
                    walletActivationStatus: 0,
                    walletAddress: ""
                })
                , b = I()
                , T = I(0)
                , B = I(!1)
                , D = I(!1)
                , O = V(() => l.isOpenForgetPasswordSMSState);
            function Q() {
                w.back()
            }
            const W = Ft()
                , F = V(() => W.userInfo)
                , M = V(() => {
                    var Y;
                    return g.type === 22 && ((Y = m.value) == null ? void 0 : Y.walletActivationStatus) === 0
                }
                )
                , X = I("")
                , G = I(!1);
            function x() {
                const Y = {
                    1: "Withdraw-BankCard",
                    3: "Withdraw-USDT",
                    10: "Withdraw-USDT",
                    5: "Withdraw-PIX"
                };
                w.replace({
                    name: Y[g.type]
                })
            }
            const P = V(() => {
                var me, Qe;
                if ([4, 20, 22, 23, 24].includes(g.type) && g.amount > 0)
                    return !(be.value.withdrawalslist.length == 0 || g.bid == 0 || g.amount < 1 || g.amount > be.value.withdrawalsrule.canWithdrawAmount);
                const de = [1, 2, 3, 5, 6, 8, 10];
                return !(g.bid == 0 || !de.includes(g.type) || g.amount < 1 || (me = R.value) != null && me.showValidate || (Qe = R.value) != null && Qe.showValidateUB || g.type == 1 && g.amount.toString().indexOf(".") != -1)
            }
            )
                , A = I(!1)
                , z = I(!1)
                , j = I(!1)
                , q = I(!1)
                , g = Re({
                    amount: 0,
                    pwd: "",
                    type: 0,
                    bid: 0,
                    name: ""
                });
            Ke(g, Y => {
                d.setWithdrawal({
                    ...Y
                }),
                    s(Y)
            }
            );
            const J = I(null)
                , K = I("");
            async function se() {
                J.value && clearTimeout(J.value),
                    J.value = setTimeout(async () => {
                        if (F.value.isAllowWithdraw == 0) {
                            D.value = !0,
                                j.value = !1;
                            return
                        }
                        let Y = be.value.withdrawalsrule;
                        g.amount = Number(g.amount);
                        var de = /^\d+(\.\d{1,2})?$/;
                        if (!de.test(g.amount.toString())) {
                            ce(p("showDialogTip1")),
                                j.value = !1;
                            return
                        }
                        if (g.amount > Y.maxPrice || g.amount < Y.minPrice) {
                            ce(p("wordWithdrawal", [ue(Y.minPrice), ue(Y.maxPrice)])),
                                j.value = !1;
                            return
                        }
                        _(!0);
                        const me = await we(vs(g));
                        me && (me.code !== 0 && me.msgCode == 220 ? (q.value = !0,
                            setTimeout(function () {
                                q.value = !1
                            }, 3e3)) : me.code !== 0 && me.msgCode == 280 ? setTimeout(function () {
                                g.type == 20 && (me != null && me.data) && (localStorage.setItem("c2cOrderNo", me == null ? void 0 : me.data),
                                    w.push({
                                        name: "Withdraw-C2cDetail",
                                        query: {
                                            order: me == null ? void 0 : me.data
                                        }
                                    }))
                            }, 2e3) : me.code !== 0 && me.msgCode === 1009 ? await Rn({
                                message: p("code1009")
                            }) : g.type == 20 ? (z.value = !0,
                                K.value = me == null ? void 0 : me.data) : A.value = !0),
                            j.value = !1,
                            _(!1)
                    }
                        , 500)
            }
            const we = async Y => await Y.then(me => me && me.code !== 0 ? [220, 1009].includes(me.msgCode) ? me : [280].includes(me.msgCode) ? (Ht(me),
                me) : (Ht(me),
                    null) : me).catch(me => (Ht(me),
                        null));
            async function Oe(Y) {
                Y == "c2c" ? (z.value = !1,
                    (g.type == 20 || g.type == 2) && K.value && (localStorage.setItem("c2cOrderNo", K.value),
                        w.push({
                            name: "Withdraw-C2cDetail",
                            query: {
                                order: K.value
                            }
                        }))) : (A.value = !1,
                            await w.push({
                                name: "WithdrawHistory"
                            }))
            }
            function ye() {
                var Y;
                g.type == 21 ? (Y = S.value) != null && Y.isActiveC && (g.pwd = "",
                    j.value = !0) : P.value && (g.pwd = "",
                        j.value = !0)
            }
            const ie = I([]);
            async function Ee() {
                var de, me;
                _(!0);
                const Y = await ae(qa());
                if (Y) {
                    ie.value = (Y == null ? void 0 : Y.data.withdrawlist) || [],
                        c(ie.value),
                        d.getWithdrawal.type && ie.value.find(Ge => Ge.withdrawID == d.getWithdrawal.type) ? g.type = d.getWithdrawal.type : ie.value.find(Ge => Ge.withdrawID == d.getWithdrawal.type) || (g.type = 0),
                        g.type == 0 && (g.type = ie.value[0].withdrawID,
                            qe.value = ie.value[0].name,
                            g.type == 20 && (B.value = !0)),
                        [4, 23, 24].includes(g.type) && (qe.value = ((de = ie.value.find(Ge => Ge.withdrawID == g.type)) == null ? void 0 : de.name) || ""),
                        g.type == 22 && (qe.value = ((me = ie.value.find(Ge => Ge.withdrawID == 22)) == null ? void 0 : me.name) || "");
                    let Qe = localStorage.getItem("popupHideUntil") || void 0;
                    const Ct = new Date().getTime();
                    if (G.value = Y.data.isOpenSafeGuide,
                        G.value) {
                        const Ge = parseInt(Qe, 10);
                        Ct < Ge && (G.value = !1),
                            X.value = Y.data.safeGuideContent || ""
                    }
                }
                _(!1)
            }
            const qe = I("")
                , pe = async () => {
                    try {
                        const Y = await Ua();
                        (Y == null ? void 0 : Y.code) === 0 ? m.value = Y.data : ce({
                            message: Y == null ? void 0 : Y.msg
                        })
                    } catch { }
                }
                ;
            async function De(Y) {
                g.type != Y.withdrawID && (Y.withdrawID == 20 && (B.value = !0),
                    g.type = Y.withdrawID,
                    C.value = {},
                    await Me(),
                    qe.value = Y.name || "",
                    g.bid = be.value.withdrawalslist.length > 0 ? be.value.withdrawalslist[0].bid : 0,
                    g.amount = 0,
                    R.value && (R.value.usdtCount = 0))
            }
            const be = I({
                withdrawalslist: [],
                withdrawalsrule: {}
            });
            function he() {
                C.value = be.value.withdrawalslist.find(Y => Y.bid == g.bid),
                    C.value || (g.bid = be.value.withdrawalslist[0].bid,
                        C.value = be.value.withdrawalslist[0])
            }
            async function Me() {
                var de, me, Qe;
                _(!0);
                const Y = await ae(_t({
                    withdrawid: g.type
                }));
                if (_(!1),
                    Y) {
                    if (be.value = Y.data,
                        v((de = Y.data) == null ? void 0 : de.withdrawalsrule),
                        Y.data.lastBandCarkName ? localStorage.setItem("lastBandCarkName", (me = Y.data) == null ? void 0 : me.lastBandCarkName) : localStorage.removeItem("lastBandCarkName"),
                        !be.value.withdrawalslist.length)
                        return;
                    g.bid == 0 && (g.bid = ((Qe = be.value.withdrawalslist[0]) == null ? void 0 : Qe.bid) || 0),
                        he(),
                        d.setWithdrawalslist(Y.data.withdrawalslist)
                }
            }
            Ce(async () => {
                var Y, de;
                d.getWithdrawal.type && (g.type = d.getWithdrawal.type),
                    g.bid = Number(((de = (Y = w.currentRoute.value) == null ? void 0 : Y.query) == null ? void 0 : de.bid) || 0) || 0,
                    $({
                        signature: W.token
                    }),
                    k(),
                    await Ee(),
                    await Me(),
                    await re()
            }
            );
            function je() {
                w.push({
                    name: "CustomerService"
                })
            }
            function ke() {
                w.push({
                    name: "rpwd"
                })
            }
            const He = () => {
                w.push({
                    name: "StrongBox"
                })
            }
                , re = async () => {
                    const Y = await ae(us({
                        key: "C2CWithdrawRewardRate"
                    }))
                        , de = (Y == null ? void 0 : Y.data.value1) || 0;
                    T.value = Number(de)
                }
                , xe = Y => {
                    g.amount = Y
                }
                ;
            return (Y, de) => {
                var Lt, Mt;
                const me = L("NavBar")
                    , Qe = L("svg-icon")
                    , Ct = L("van-icon")
                    , Ge = L("van-dialog")
                    , ea = L("van-popup")
                    , Ot = ot("lazy");
                return n(),
                    o(ne, null, [e("div", Uh, [h(me, {
                        title: Y.$t("withdraw"),
                        "left-arrow": "",
                        onClickLeft: Q,
                        onClickRight: de[0] || (de[0] = Ie => a(w).push({
                            name: "WithdrawHistory"
                        }))
                    }, {
                        right: te(() => [e("span", null, t(Y.$t("withdrawRecords")), 1)]),
                        _: 1
                    }, 8, ["title"]), e("div", Wh, [f("资产余额"), h(mv, {
                        data_NewSetWithdrawal: g,
                        withdrawalsrule: be.value.withdrawalsrule
                    }, null, 8, ["data_NewSetWithdrawal", "withdrawalsrule"]), f("提款方式"), h(Pv, {
                        data_NewSetWithdrawal: g,
                        withdrawalTypeslist: ie.value,
                        c2cAward: T.value,
                        onOnSelectWithdrawalType: De
                    }, null, 8, ["data_NewSetWithdrawal", "withdrawalTypeslist", "c2cAward"]), f(" upi "), g.type == 2 ? (n(),
                        Te(Na, {
                            key: 0,
                            withdrawalslist: be.value.withdrawalslist,
                            bid: g.bid
                        }, null, 8, ["withdrawalslist", "bid"])) : f("v-if", !0), f(" c2cupi "), g.type == 20 ? (n(),
                            o(ne, {
                                key: 1
                            }, [h(Na, {
                                withdrawalslist: be.value.withdrawalslist,
                                bid: g.bid
                            }, null, 8, ["withdrawalslist", "bid"]), h(i_, {
                                c2crule: be.value.withdrawalsrule,
                                c2cAward: T.value,
                                onSetc2cAmount: xe,
                                c2cName: ((Lt = ie.value.find(Ie => Ie.withdrawID == 20)) == null ? void 0 : Lt.name) || ""
                            }, {
                                default: te(() => [e("div", Ph, [e("button", {
                                    class: ee(["recycleBtn", {
                                        active: P.value
                                    }]),
                                    onClick: ye
                                }, t(Y.$t("withdraw")), 3)])]),
                                _: 1
                            }, 8, ["c2crule", "c2cAward", "c2cName"]), h(A_, {
                                ref_key: "c2cRecordRef",
                                ref: b
                            }, null, 512)], 64)) : g.type == 21 ? (n(),
                                Te(Th, {
                                    key: 2,
                                    onOnShowPwdD: de[1] || (de[1] = Ie => ye()),
                                    ref_key: "ArCardRef",
                                    ref: S
                                }, null, 512)) : [4, 23, 24, 22].includes(g.type) ? (n(),
                                    o(ne, {
                                        key: 3
                                    }, [g.type === 22 ? (n(),
                                        Te(th, {
                                            key: 0,
                                            withdrawalslist: be.value.withdrawalslist,
                                            withdrawType: g.type,
                                            bid: g.bid,
                                            name: qe.value,
                                            rsnInfo: m.value,
                                            currentType: ie.value.find(Ie => Ie.withdrawID == 22),
                                            onGetRnsTypeInfo: pe
                                        }, null, 8, ["withdrawalslist", "withdrawType", "bid", "name", "rsnInfo", "currentType"])) : (n(),
                                            Te(G_, {
                                                key: 1,
                                                withdrawalslist: be.value.withdrawalslist,
                                                withdrawType: g.type,
                                                bid: g.bid,
                                                name: qe.value
                                            }, null, 8, ["withdrawalslist", "withdrawType", "bid", "name"])), M.value ? f("v-if", !0) : (n(),
                                                Te(V_, {
                                                    key: 2,
                                                    rule: be.value.withdrawalsrule,
                                                    award: T.value,
                                                    wtype: g.type,
                                                    onSetc2cAmount: xe,
                                                    name: ((Mt = ie.value.find(Ie => Ie.withdrawID == 20)) == null ? void 0 : Mt.name) || ""
                                                }, {
                                                    default: te(() => [e("div", Oh, [e("button", {
                                                        class: ee(["recycleBtn", {
                                                            active: P.value
                                                        }]),
                                                        onClick: ye
                                                    }, t(Y.$t("withdraw")), 3)])]),
                                                    _: 1
                                                }, 8, ["rule", "award", "wtype", "name"])), f("提现记录"), M.value ? f("v-if", !0) : (n(),
                                                    Te(da, {
                                                        key: 3,
                                                        ref_key: "withdrawHistory",
                                                        ref: N
                                                    }, null, 512))], 64)) : (n(),
                                                        o(ne, {
                                                            key: 4
                                                        }, [f("银行卡模块"), be.value.withdrawalslist.length ? (n(),
                                                            o("div", {
                                                                key: 0,
                                                                class: "bankInfo",
                                                                onClick: de[2] || (de[2] = Ie => x())
                                                            }, [[1, 5].includes(g.type) ? (n(),
                                                                o("div", {
                                                                    key: 0,
                                                                    class: ee(["bankInfoItem", `type${g.type}`])
                                                                }, [e("div", null, [h(Qe, {
                                                                    name: g.type
                                                                }, null, 8, ["name"]), e("span", null, t(C.value.bankName), 1)]), e("div", null, [e("span", null, t(C.value.beneficiaryName), 1), e("span", null, t(C.value.accountNo), 1)]), h(Ct, {
                                                                    name: "arrow"
                                                                })], 2)) : f("v-if", !0), [3, 10].includes(g.type) ? (n(),
                                                                    o("div", Lh, [e("div", null, [e("img", {
                                                                        src: a($e)("wallet/withdrawType", `${g.type}`)
                                                                    }, null, 8, Mh), e("span", null, t(C.value.bankName), 1)]), e("div", null, [e("span", null, t(C.value.accountNo), 1), h(Ct, {
                                                                        name: "arrow"
                                                                    })]), e("div", null, [e("span", null, t(C.value.usdtRemarkName), 1)])])) : f("v-if", !0), [6, 8].includes(g.type) ? (n(),
                                                                        o("div", qh, [e("div", null, [e("img", {
                                                                            src: a($e)("wallet/withdrawType", `${g.type}`)
                                                                        }, null, 8, Vh), g.type == 6 ? (n(),
                                                                            o("span", Eh, t(C.value.bankName), 1)) : f("v-if", !0), g.type == 8 ? (n(),
                                                                                o("span", jh, t(C.value.walletName), 1)) : f("v-if", !0)]), e("div", null, [g.type == 6 ? (n(),
                                                                                    o("span", xh, t(C.value.accountNo), 1)) : f("v-if", !0), g.type == 8 ? (n(),
                                                                                        o("span", Hh, t(C.value.mobileNO), 1)) : f("v-if", !0)])])) : f("v-if", !0)])) : f("v-if", !0), _e(h(Zt, {
                                                                                            type: g.type,
                                                                                            isShowhintTextO: !0
                                                                                        }, null, 8, ["type"]), [[Rt, [1, 3, 6, 8, 5, 10].includes(g.type) && be.value.withdrawalslist.length == 0]]), f("输入区"), h(up, {
                                                                                            data_NewSetWithdrawal: g,
                                                                                            withdrawalsrule: be.value.withdrawalsrule,
                                                                                            ref_key: "withdrawField",
                                                                                            ref: R
                                                                                        }, null, 8, ["data_NewSetWithdrawal", "withdrawalsrule"]), e("div", Gh, [e("button", {
                                                                                            class: ee(["recycleBtn", {
                                                                                                active: P.value
                                                                                            }]),
                                                                                            onClick: ye
                                                                                        }, t(Y.$t("withdraw")), 3)]), f("提现说明组件"), h(Xt, {
                                                                                            withdrawType: g.type,
                                                                                            withdrawalsrule: be.value.withdrawalsrule
                                                                                        }, null, 8, ["withdrawType", "withdrawalsrule"]), f("提现记录"), h(da, {
                                                                                            ref_key: "withdrawHistory",
                                                                                            ref: N
                                                                                        }, null, 512)], 64))]), f("提现成功弹窗"), h(Ge, {
                                                                                            show: A.value,
                                                                                            "onUpdate:show": de[4] || (de[4] = Ie => A.value = Ie),
                                                                                            "show-confirm-button": !1,
                                                                                            "z-index": "100"
                                                                                        }, {
                                                                                            default: te(() => [_e(e("img", Fh, null, 512), [[Ot, a($e)("public", "succeed")]]), e("div", zh, t(Y.$t("tipWithdrawalApplicationSuccess")), 1), e("div", Kh, [e("span", null, t(Y.$t("tipWithdrawWillBeCompletedIn2Hours")), 1), e("span", null, t(Y.$t("tipPlaWaitPaciently")) + "...", 1)]), e("div", {
                                                                                                class: "van-dialog__content-btn",
                                                                                                onClick: de[3] || (de[3] = Ie => Oe())
                                                                                            }, t(Y.$t("confirm")), 1)]),
                                                                                            _: 1
                                                                                        }, 8, ["show"]), h(nt, {
                                                                                            class: "c2c",
                                                                                            show: z.value,
                                                                                            "onUpdate:show": de[5] || (de[5] = Ie => z.value = Ie),
                                                                                            showCancelBtn: !1,
                                                                                            onConfirm: de[6] || (de[6] = Ie => Oe("c2c")),
                                                                                            title: Y.$t("withdrawTip2")
                                                                                        }, {
                                                                                            header: te(() => [_e(e("img", Qh, null, 512), [[Ot, a($e)("public", "succeed")]])]),
                                                                                            content: te(() => [e("div", Yh, [e("h1", {
                                                                                                innerHTML: Y.$t("withdrawTip3")
                                                                                            }, null, 8, Zh), e("p", {
                                                                                                innerHTML: Y.$t("withdrawTip4")
                                                                                            }, null, 8, Xh)])]),
                                                                                            _: 1
                                                                                        }, 8, ["show", "title"]), f("输入密码弹窗"), j.value ? (n(),
                                                                                            Te(ea, {
                                                                                                key: 0,
                                                                                                show: j.value,
                                                                                                "onUpdate:show": de[9] || (de[9] = Ie => j.value = Ie),
                                                                                                position: "bottom",
                                                                                                closeable: "",
                                                                                                round: ""
                                                                                            }, {
                                                                                                default: te(() => [e("div", Jh, [e("div", em, [h(Qe, {
                                                                                                    name: "safeIcon"
                                                                                                }), e("h1", null, t(Y.$t("withdrawDialogDesc1")), 1)]), tm, am, h(As, {
                                                                                                    value: g.pwd,
                                                                                                    "onUpdate:value": de[7] || (de[7] = Ie => g.pwd = Ie),
                                                                                                    label: Y.$t("withdrawDialogPh"),
                                                                                                    maxlength: 32
                                                                                                }, null, 8, ["value", "label"]), e("span", nm, t(Y.$t("withdrawDialogDesc3")), 1), e("div", sm, [O.value ? (n(),
                                                                                                    o("span", {
                                                                                                        key: 0,
                                                                                                        onClick: ke
                                                                                                    }, t(Y.$t("withdrawDialogDesc4")), 1)) : f("v-if", !0), e("div", {
                                                                                                        class: "red",
                                                                                                        onClick: je
                                                                                                    }, t(Y.$t("withdrawDialogDesc5")), 1)]), e("div", lm, [e("button", {
                                                                                                        onClick: de[8] || (de[8] = () => j.value = !1)
                                                                                                    }, t(Y.$t("withdrawDialogDesc6")), 1), e("button", {
                                                                                                        onClick: se
                                                                                                    }, t(Y.$t("withdrawDialogDesc7")), 1)])])]),
                                                                                                _: 1
                                                                                            }, 8, ["show"])) : f("v-if", !0), f("不在提现时间内提示"), h(Ge, {
                                                                                                show: q.value,
                                                                                                "onUpdate:show": de[10] || (de[10] = Ie => q.value = Ie),
                                                                                                "show-confirm-button": !1,
                                                                                                "z-index": "100"
                                                                                            }, {
                                                                                                default: te(() => [h(Bh)]),
                                                                                                _: 1
                                                                                            }, 8, ["show"]), h(Ge, {
                                                                                                show: B.value,
                                                                                                "onUpdate:show": de[12] || (de[12] = Ie => B.value = Ie),
                                                                                                showConfirmButton: !1,
                                                                                                class: "c2cconfirm",
                                                                                                width: "100%"
                                                                                            }, {
                                                                                                default: te(() => [B.value ? (n(),
                                                                                                    Te(zp, {
                                                                                                        key: 0,
                                                                                                        showC2c: B.value,
                                                                                                        "onUpdate:showC2c": de[11] || (de[11] = Ie => B.value = Ie)
                                                                                                    }, null, 8, ["showC2c"])) : f("v-if", !0)]),
                                                                                                _: 1
                                                                                            }, 8, ["show"]), h(nt, {
                                                                                                show: D.value,
                                                                                                "onUpdate:show": de[13] || (de[13] = Ie => D.value = Ie),
                                                                                                showCancelBtn: !1,
                                                                                                showCloseIcon: !0,
                                                                                                clickOutSide: !0,
                                                                                                onConfirm: de[14] || (de[14] = () => D.value = !1)
                                                                                            }, {
                                                                                                content: te(() => [e("h1", null, t(Y.$t("withdrwsTip1")), 1)]),
                                                                                                _: 1
                                                                                            }, 8, ["show"])]), h(Ge, {
                                                                                                "class-name": "safebox-dialog",
                                                                                                show: G.value,
                                                                                                "onUpdate:show": de[16] || (de[16] = Ie => G.value = Ie)
                                                                                            }, {
                                                                                                footer: te(() => [e("div", im, t(Y.$t("safeG")), 1), e("div", {
                                                                                                    class: ee(["active", {
                                                                                                        a: r.value
                                                                                                    }]),
                                                                                                    onClick: i
                                                                                                }, [h(Qe, {
                                                                                                    name: "active"
                                                                                                }), E(t(Y.$t("checkSafeBox")), 1)], 2), e("div", rm, [e("div", {
                                                                                                    onClick: de[15] || (de[15] = Ie => G.value = !1)
                                                                                                }, t(Y.$t("no")), 1), e("div", {
                                                                                                    onClick: He
                                                                                                }, t(Y.$t("go")), 1)])]),
                                                                                                default: te(() => [e("div", {
                                                                                                    class: "content",
                                                                                                    innerHTML: X.value
                                                                                                }, null, 8, om)]),
                                                                                                _: 1
                                                                                            }, 8, ["show"])], 64)
            }
        }
    });
const dm = oe(cm, [["__scopeId", "data-v-80a607a5"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/index.vue"]])
    , V$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: dm
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , um = {
        class: "rechargeh__container"
    }
    , vm = {
        class: "rechargeh__container_header"
    }
    , pm = {
        class: "tabDiv"
    }
    , _m = {
        key: 0,
        class: "c2cType"
    }
    , hm = {
        class: "ar"
    }
    , mm = {
        class: "ar-searchbar"
    }
    , fm = {
        class: "rechargeh__container-content__item-header ar-1px-b"
    }
    , wm = {
        class: "rechargeh__container-content__item-body"
    }
    , ym = ["onUpdate:modelValue"]
    , gm = le({
        __name: "index",
        setup(y) {
            const { t: s } = Ne()
                , { setLoading: v } = et()
                , c = I(!1)
                , r = fe();
            function i() {
                r.back()
            }
            const p = I([])
                , _ = I(!1)
                , $ = I("")
                , k = I(!1)
                , l = async ({ selectedOptions: M }) => {
                    var X;
                    _.value = !1,
                        $.value = M[0].key,
                        W.state = M[0].value,
                        (X = Q.value) == null || X.resetRefresh()
                }
                , w = I(Ca)
                , d = I();
            let R = I([]);
            const S = I(!1)
                , N = I(-1)
                , C = I(null)
                , m = Ke(N, (M, X) => {
                    $.value = Le.RechargeState[0].key,
                        W.state = Le.RechargeState[0].value,
                        W.type = R.value[M].withdrawID,
                        W.type == 20 ? (d.value = [{
                            key: s("withdrawStatem1"),
                            value: -1
                        }, {
                            key: s("c2cState0"),
                            value: 0
                        }, {
                            key: s("c2cState1"),
                            value: 1
                        }, {
                            key: s("c2cState2"),
                            value: 2
                        }, {
                            key: s("c2cState3"),
                            value: 3
                        }, {
                            key: s("c2cState4"),
                            value: 4
                        }, {
                            key: s("c2cTip9"),
                            value: 5
                        }, {
                            key: s("c2cState6"),
                            value: 6
                        }, {
                            key: s("c2cState7"),
                            value: 7
                        }, {
                            key: s("c2cState8"),
                            value: 8
                        }, {
                            key: s("c2cState9"),
                            value: 9
                        }],
                            $.value = Le.C2cState[0].key,
                            W.state = Le.C2cState[0].value,
                            W.category = -1,
                            w.value = Ma,
                            S.value = !0,
                            W.type = -1) : (clearInterval(C.value),
                                d.value = Le.WithdrawState,
                                delete W.category,
                                S.value = !1,
                                w.value = Ca),
                        Bn(() => {
                            var G;
                            (G = Q.value) == null || G.resetRefresh()
                        }
                        )
                }
                );
            function b() {
                C.value = setInterval(() => {
                    var M;
                    (M = Q.value) == null || M.resetRefresh()
                }
                    , 1e4)
            }
            Ke(() => p.value, M => {
                S.value && M.findIndex(X => X.state === 11 || X.state === 12) != -1 ? (clearInterval(C.value),
                    b()) : clearInterval(C.value)
            }
            );
            async function T() {
                v(!0);
                const M = await ae(qa());
                if (M) {
                    let X = M == null ? void 0 : M.data.withdrawlist;
                    X.unshift({
                        withdrawID: -1,
                        name: s("all"),
                        isAdd: 0
                    }),
                        R.value = X
                }
                v(!1)
            }
            Ce(async () => {
                setTimeout(() => {
                    $.value = s("all"),
                        d.value = Le.WithdrawState
                }
                ),
                    await T()
            }
            ),
                Ut(() => {
                    m()
                }
                ),
                ft(() => {
                    clearInterval(C.value)
                }
                );
            function B() {
                _.value = !0,
                    k.value = !0
            }
            const D = I();
            async function O() {
                var X;
                let M = D.value.endDateValue !== "" ? `${D.value.endDateValue} 23:59:59` : "";
                W.startDate = Bt(D.value.startDateValue).format("YYYY-MM-DD HH:mm:ss"),
                    W.endDate = Bt(M).format("YYYY-MM-DD HH:mm:ss"),
                    (X = Q.value) == null || X.resetRefresh()
            }
            const Q = I()
                , W = Re({
                    startDate: "",
                    endDate: "",
                    state: Le.RechargeState[0].value,
                    type: -1
                })
                , F = M => {
                    var X;
                    W.type = M,
                        M == 1 ? d.value = [{
                            key: s("withdrawStatem1"),
                            value: -1
                        }, {
                            key: s("c2cState0"),
                            value: 0
                        }, {
                            key: s("c2cState1"),
                            value: 1
                        }, {
                            key: s("c2cState2"),
                            value: 2
                        }, {
                            key: s("c2cState3"),
                            value: 3
                        }, {
                            key: s("c2cState8"),
                            value: 8
                        }, {
                            key: s("c2cState9"),
                            value: 9
                        }] : d.value = [{
                            key: s("withdrawStatem1"),
                            value: -1
                        }, {
                            key: s("c2cState4"),
                            value: 4
                        }, {
                            key: s("c2cTip9"),
                            value: 5
                        }, {
                            key: s("c2cState6"),
                            value: 6
                        }, {
                            key: s("c2cState7"),
                            value: 7
                        }],
                        $.value = Le.C2cState[0].key,
                        W.state = Le.C2cState[0].value,
                        (X = Q.value) == null || X.resetRefresh()
                }
                ;
            return (M, X) => {
                const G = L("NavBar")
                    , x = L("svg-icon")
                    , P = L("van-tab")
                    , A = L("van-tabs")
                    , z = L("ArSelect")
                    , j = L("van-picker")
                    , q = L("van-popup");
                return n(),
                    o("div", um, [h(G, {
                        class: "white",
                        title: M.$t("withdrawRecords"),
                        "left-arrow": "",
                        onClickLeft: i
                    }, null, 8, ["title"]), e("div", vm, [h(A, {
                        class: "onlineGames__container-tabBar",
                        active: N.value,
                        "onUpdate:active": X[0] || (X[0] = g => N.value = g),
                        type: "card",
                        ref: "tabsRef",
                        ellipsis: "",
                        "swipe-threshold": 3
                    }, {
                        default: te(() => [(n(!0),
                            o(ne, null, Se(a(R), (g, J) => (n(),
                                Te(P, {
                                    key: J
                                }, Un({
                                    _: 2
                                }, [g.withdrawID === -1 ? {
                                    name: "title",
                                    fn: te(() => [e("div", pm, [h(x, {
                                        name: "all"
                                    }), E(" " + t(g.name), 1)])]),
                                    key: "0"
                                } : {
                                    name: "title",
                                    fn: te(() => [e("div", {
                                        class: "tabDiv"
                                    }, [N.value == J ? (n(),
                                        o("img", {
                                            key: 0,
                                            src: g.withAfterImgUrl
                                        }, null, 8, ["src"])) : (n(),
                                            o("img", {
                                                key: 1,
                                                src: g.withBeforeImgUrl
                                            }, null, 8, ["src"])), E(" " + t(g.name), 1)])]),
                                    key: "1"
                                }]), 1024))), 128))]),
                        _: 1
                    }, 8, ["active"]), S.value ? (n(),
                        o("div", _m, [e("div", {
                            class: ee({
                                active: W.type == 1
                            }),
                            onClick: X[1] || (X[1] = g => F(1))
                        }, t(M.$t("inTransaction")), 3), e("div", {
                            class: ee({
                                active: W.type == 2
                            }),
                            onClick: X[2] || (X[2] = g => F(2))
                        }, t(M.$t("completed")), 3)])) : f("v-if", !0), e("div", hm, [e("div", mm, [h(z, {
                            onClickSelect: B,
                            selectName: $.value
                        }, null, 8, ["selectName"]), f("日期选择组件"), h(Ea, {
                            ref_key: "calendar",
                            ref: D,
                            onConfirm: O
                        }, null, 512)])])]), h(q, {
                            show: _.value,
                            "onUpdate:show": X[4] || (X[4] = g => _.value = g),
                            round: "",
                            position: "bottom"
                        }, {
                            default: te(() => [h(j, {
                                "columns-field-names": {
                                    text: "key",
                                    value: "value",
                                    children: "children"
                                },
                                columns: d.value,
                                onCancel: X[3] || (X[3] = g => _.value = !1),
                                onConfirm: l
                            }, null, 8, ["columns"])]),
                            _: 1
                        }, 8, ["show"]), f(" 提现记录 "), h(ps, {
                            list: p.value,
                            "onUpdate:list": X[5] || (X[5] = g => p.value = g),
                            "page-query": W,
                            "onUpdate:pageQuery": X[6] || (X[6] = g => W = g),
                            api: w.value,
                            distance: 100,
                            ref_key: "listRef",
                            ref: Q,
                            "is-auto-load": c.value
                        }, {
                            content: te(() => [e("div", {
                                class: ee(["rechargeh__container-content", {
                                    isC2c: S.value
                                }])
                            }, [S.value ? (n(),
                                Te(Ya, {
                                    key: 0,
                                    list: p.value
                                }, null, 8, ["list"])) : (n(!0),
                                    o(ne, {
                                        key: 1
                                    }, Se(p.value, (g, J) => (n(),
                                        o("div", {
                                            class: "rechargeh__container-content__item",
                                            key: J
                                        }, [f(' <div class="rechargeh__container-content__item-header ar-1px-b" @click="onToDetail(item.state)"> '), e("div", fm, [e("span", null, t(M.$t("withdraw")), 1), f(" <span>{{ item.withdrawName }}</span> "), e("span", {
                                            class: ee({
                                                stateR: g.state === 0,
                                                stateG: g.state === 1,
                                                stateReject: g.state === 2
                                            })
                                        }, [E(t(a(rt)(a(Le).WithdrawState, g.state)) + " ", 1), f(' <van-icon name="arrow" /> ')], 2)]), e("div", wm, [e("div", null, [e("span", null, t(M.$t("amount")), 1), e("span", null, t(a(ue)(g.price)), 1)]), e("div", null, [e("span", null, t(M.$t("type")), 1), e("span", null, t(g.withdrawName), 1)]), e("div", null, [e("span", null, t(M.$t("time")), 1), e("span", null, t(g.addTime), 1)]), e("div", null, [e("span", null, t(M.$t("orderNo")), 1), e("span", null, t(g.withdrawNumber), 1), h(x, {
                                            onClick: K => a(Ae)(g.withdrawNumber.toString()),
                                            name: "copy"
                                        }, null, 8, ["onClick"])]), e("div", null, [e("span", null, t(M.$t("remarksContent")), 1)]), e("div", null, [f(" <span>{{ $t('remarksContent') }}</span> "), _e(e("textarea", {
                                            class: "textarea",
                                            name: "remark",
                                            cols: "30",
                                            rows: "10",
                                            readonly: !0,
                                            "onUpdate:modelValue": K => g.remark = K
                                        }, null, 8, ym), [[Rt, (g == null ? void 0 : g.remark) && (g == null ? void 0 : g.remark.trim()) != ""], [Ue, g.remark]])])])]))), 128))], 2)]),
                            _: 1
                        }, 8, ["list", "page-query", "api", "is-auto-load"])])
            }
        }
    });
const $m = oe(gm, [["__scopeId", "data-v-e4760c44"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/WithdrawHistory/index.vue"]])
    , E$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $m
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , km = {
        key: 0
    }
    , bm = {
        class: "info"
    }
    , Cm = {
        class: "state_txt"
    }
    , Tm = {
        class: "tip"
    }
    , Im = ["src"]
    , Sm = {
        class: "btn_group"
    }
    , Nm = ["src"]
    , Dm = ["src"]
    , Am = le({
        __name: "RechargeDetailHeader",
        props: {
            state: {
                type: Number,
                required: !0
            },
            info: {
                type: null,
                required: !0
            }
        },
        emits: ["onClickRight", "appeal", "appealAdmin"],
        setup(y, { emit: s }) {
            const v = y
                , { t: c } = Ne()
                , r = V(() => p.value.find(k => k.state === v.state))
                , i = V(() => {
                    var k;
                    return (k = p.value.find(l => l.state === v.state)) == null ? void 0 : k.state
                }
                )
                , p = I([{
                    state: 1,
                    text: c("rechargeState0"),
                    tip: c("rdhTip1"),
                    tip2: c("tipPlaWaitPaciently"),
                    icon: ge("wallet/recharge", "wait"),
                    className: "wait"
                }, {
                    state: 4,
                    text: c("completed"),
                    tip: c("c2cTip7"),
                    tip2: c("c2cTip8"),
                    icon: ge("wallet/recharge", "success"),
                    className: "success"
                }, {
                    state: 5,
                    text: c("rechargeState4"),
                    tip: c("rdhTip2"),
                    tip2: c("rdhTip3"),
                    icon: ge("wallet/recharge", "fail"),
                    className: "fail"
                }, {
                    state: 7,
                    text: c("rechargeState1"),
                    tip: c("rdhTip4"),
                    tip2: c("rdhTip5"),
                    icon: ge("wallet/recharge", "timeout"),
                    className: "timeout"
                }, {
                    state: 6,
                    text: c("cancelled"),
                    tip: "",
                    icon: ge("wallet/recharge", "cancel"),
                    className: "cancel"
                }, {
                    state: 3,
                    text: c("c2cState3"),
                    tip: c("c2cTip5"),
                    tip2: c("c2cTip6"),
                    icon: ge("wallet/recharge", "appeal"),
                    className: "appeal"
                }, {
                    state: 8,
                    text: c("c2cState14"),
                    tip: c("amountError1"),
                    tip2: c("c2cTip33"),
                    icon: ge("wallet/recharge", "amount_error"),
                    className: "appeal"
                }])
                , _ = () => {
                    s("onClickRight")
                }
                , $ = () => {
                    _s.go(-1)
                }
                ;
            return Ke(() => v.info, k => {
                v.state === 6 && (p.value[4].tip = k == null ? void 0 : k.cancelReason)
            }
                , {
                    immediate: !0
                }),
                (k, l) => {
                    var d, R, S, N, C, m, b, T, B;
                    const w = L("NavBar");
                    return n(),
                        o("div", {
                            class: ee(["upi_detail_header", (d = r.value) == null ? void 0 : d.className])
                        }, [h(w, {
                            title: "",
                            "left-arrow": "",
                            onClickLeft: $,
                            onClickRight: _
                        }, {
                            right: te(() => [p.value === 3 ? (n(),
                                o("div", km, t(k.$t("concelOrder")), 1)) : f("v-if", !0)]),
                            _: 1
                        }), e("div", bm, [e("div", Cm, [E(t((R = r.value) == null ? void 0 : R.text) + " ", 1), ((S = k.info) == null ? void 0 : S.state) === 1 ? (n(),
                            Te(Qa, {
                                "start-time": (N = k.info) == null ? void 0 : N.endTime,
                                "end-time": (C = k.info) == null ? void 0 : C.serviceTime,
                                "class-name": "state_txt",
                                key: (m = k.info) == null ? void 0 : m.id
                            }, null, 8, ["start-time", "end-time"])) : f("v-if", !0)]), e("div", Tm, [e("div", null, t((b = r.value) == null ? void 0 : b.tip), 1), e("div", null, t((T = r.value) == null ? void 0 : T.tip2), 1)])]), e("img", {
                                src: (B = r.value) == null ? void 0 : B.icon,
                                class: "state_img",
                                alt: ""
                            }, null, 8, Im), e("div", Sm, [i.value === 7 ? (n(),
                                o("div", {
                                    key: 0,
                                    class: "appeal",
                                    onClick: l[0] || (l[0] = () => {
                                        s("appeal")
                                    }
                                    )
                                }, [e("img", {
                                    src: a(ge)("wallet/recharge/detail", "appeal"),
                                    alt: ""
                                }, null, 8, Nm), E(" " + t(k.$t("appeal")), 1)])) : f("v-if", !0), i.value === 3 ? (n(),
                                    o("div", {
                                        key: 1,
                                        class: "appeal_admin",
                                        onClick: l[1] || (l[1] = () => {
                                            s("appealAdmin")
                                        }
                                        )
                                    }, t(k.$t("AppealsAdmin")), 1)) : f("v-if", !0), i.value === 7 || i.value === 3 || i.value === 1 ? (n(),
                                        o("div", {
                                            key: 2,
                                            class: "cancel",
                                            onClick: l[2] || (l[2] = () => {
                                                s("onClickRight")
                                            }
                                            )
                                        }, [e("img", {
                                            src: a(ge)("common", "close"),
                                            alt: ""
                                        }, null, 8, Dm), E(" " + t(k.$t("concelOrder")), 1)])) : f("v-if", !0)])], 2)
                }
        }
    });
const Rm = oe(Am, [["__scopeId", "data-v-fb8ab76f"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Recharge/RechargeDetailHeader.vue"]])
    , Jt = y => (We("data-v-f3187262"),
        y = y(),
        Pe(),
        y)
    , Bm = {
        key: 0,
        style: {
            padding: "20px 16px 0"
        }
    }
    , Um = {
        class: "order_info"
    }
    , Wm = {
        class: "title"
    }
    , Pm = ["src"]
    , Om = Jt(() => e("div", {
        class: "dir"
    }, null, -1))
    , Lm = {
        class: "order_info_box"
    }
    , Mm = {
        class: "order_info_item"
    }
    , qm = {
        class: "title"
    }
    , Vm = {
        class: "amount"
    }
    , Em = {
        class: "order_info_item"
    }
    , jm = {
        class: "title"
    }
    , xm = {
        class: "order_info_item"
    }
    , Hm = {
        class: "title"
    }
    , Gm = {
        class: "order_info_item"
    }
    , Fm = {
        class: "title"
    }
    , zm = {
        class: "time"
    }
    , Km = {
        key: 0,
        class: "order_info_item"
    }
    , Qm = {
        class: "title"
    }
    , Ym = {
        class: "time"
    }
    , Zm = Jt(() => e("div", {
        class: "divider"
    }, null, -1))
    , Xm = {
        class: "order_info_box"
    }
    , Jm = {
        class: "order_info_item"
    }
    , e1 = Jt(() => e("div", {
        class: "title"
    }, "UTR", -1))
    , t1 = {
        class: "order_num"
    }
    , a1 = ["src"]
    , n1 = {
        class: "order_info_item"
    }
    , s1 = {
        class: "title"
    }
    , l1 = {
        class: "order_num"
    }
    , o1 = ["src"]
    , i1 = {
        class: "order_info_item"
    }
    , r1 = {
        class: "title"
    }
    , c1 = {
        class: "time"
    }
    , d1 = {
        class: "upi_info"
    }
    , u1 = {
        class: "upi_title"
    }
    , v1 = {
        class: "order_info_box"
    }
    , p1 = {
        class: "order_info_item"
    }
    , _1 = Jt(() => e("div", {
        class: "title"
    }, "UPI", -1))
    , h1 = {
        class: "order_num"
    }
    , m1 = ["src"]
    , f1 = {
        key: 1,
        class: "upi_info"
    }
    , w1 = {
        class: "upi_title"
    }
    , y1 = ["src"]
    , g1 = {
        key: 2
    }
    , $1 = {
        class: "upi_info"
    }
    , k1 = {
        class: "upi_title tit_img"
    }
    , b1 = ["src", "onClick"]
    , C1 = {
        key: 0,
        class: "upi_info"
    }
    , T1 = {
        class: "upi_title tit_video"
    }
    , I1 = {
        style: {
            width: "100%"
        },
        controls: ""
    }
    , S1 = ["src"]
    , N1 = le({
        __name: "index",
        setup(y) {
            const s = fe()
                , v = I(3)
                , c = I()
                , r = I(-1)
                , i = I()
                , p = I()
                , _ = Ve()
                , $ = V(() => {
                    var b, T;
                    return !!((b = c.value) != null && b.isAppealCompleted || [4, 3, 7, 1].includes((T = c.value) == null ? void 0 : T.state))
                }
                )
                , k = V(() => {
                    var m, b;
                    if ((m = c.value) != null && m.ossUrls)
                        return _.getOSSUrl + "/" + JSON.parse(((b = c.value) == null ? void 0 : b.ossUrls) || "[]")[0].fileUrl || ""
                }
                )
                , l = V(() => {
                    var m, b;
                    return (m = c.value) != null && m.withdrawOssUrls ? JSON.parse((b = c.value) == null ? void 0 : b.withdrawOssUrls).filter(T => T.fileType === 1) : []
                }
                )
                , w = V(() => {
                    var m, b, T;
                    return (m = c.value) != null && m.withdrawOssUrls ? (T = JSON.parse((b = c.value) == null ? void 0 : b.withdrawOssUrls).filter(B => B.fileType === 2)[0]) == null ? void 0 : T.fileUrl : []
                }
                )
                , d = async m => {
                    const b = await ae(va({
                        orderId: m
                    }));
                    b && (c.value = b.data,
                        i.value = b.data,
                        r.value = b.data.state,
                        c.value.state === 4 && (v.value = 4),
                        c.value.state === 5 && c.value.isAppealCompleted && (v.value = 4),
                        r.value !== 1 && p.value && clearInterval(p.value),
                        (r.value === 3 || r.value === 7) && C())
                }
                , R = () => {
                    var m;
                    s.push({
                        name: "CancelRecharge",
                        query: {
                            orderNo: (m = c.value) == null ? void 0 : m.id
                        }
                    })
                }
                , S = async () => {
                    var m, b, T;
                    try {
                        await ae(hs({
                            orderId: (m = c.value) == null ? void 0 : m.id
                        })),
                            await d((b = c.value) == null ? void 0 : b.id),
                            At({
                                message: "申诉成功",
                                type: "success"
                            }),
                            N(),
                            r.value = (T = c.value) == null ? void 0 : T.state
                    } catch { }
                }
                , N = () => {
                    var m;
                    Tawk_API.toggle(),
                        window.Tawk_API.setAttributes({
                            order: (m = c.value) == null ? void 0 : m.id,
                            store: "recharge"
                        }, function (b) { })
                }
                , C = () => {
                    let m = "https://embed.tawk.to/6452138631ebfa0fe7fbb175/1hb0ug9qm";
                    if (!document.getElementById("tawk-chatjs")) {
                        let b = document.createElement("script");
                        b.id = "tawk-chatjs",
                            b.async = !0,
                            b.src = m,
                            document.head.appendChild(b)
                    }
                }
                ;
            return Ce(() => {
                r.value = Number(s.currentRoute.value.query.state);
                const m = Number(s.currentRoute.value.query.orderNo) || -1;
                d(m),
                    r.value === 1 ? p.value = setInterval(() => {
                        d(m)
                    }
                        , 5e3) : clearInterval(p.value),
                    (r.value === 3 || r.value === 7) && C()
            }
            ),
                Ut(() => {
                    p.value && clearInterval(p.value)
                }
                ),
                (m, b) => {
                    var B, D, O, Q, W, F, M, X, G, x, P, A, z;
                    const T = L("van-divider");
                    return n(),
                        o("div", null, [(n(),
                            Te(Rm, {
                                state: r.value,
                                info: i.value,
                                onOnClickRight: R,
                                onAppeal: S,
                                onAppealAdmin: N,
                                key: r.value
                            }, null, 8, ["state", "info"])), $.value ? (n(),
                                o("div", Bm, [h(Fa, {
                                    state: v.value,
                                    type: (B = c.value) != null && B.isAppealCompleted || ((D = c.value) == null ? void 0 : D.state) === 3 ? 2 : 1
                                }, null, 8, ["state", "type"])])) : f("v-if", !0), e("div", Um, [e("div", Wm, [e("img", {
                                    src: a($e)("wallet", "upi"),
                                    alt: ""
                                }, null, 8, Pm), e("span", null, "New UPI " + t(m.$t("recharge")), 1)]), Om, e("div", Lm, [e("div", Mm, [e("div", qm, t(m.$t("orderAmount")), 1), e("span", Vm, t(a(ue)((O = c.value) == null ? void 0 : O.orderAmount)), 1)]), e("div", Em, [e("div", jm, t(m.$t("actualAmount")), 1), e("span", null, t(a(ue)((Q = c.value) == null ? void 0 : Q.finalAmount)), 1)]), e("div", xm, [e("div", Hm, t(m.$t("award")), 1), e("span", null, t(a(ue)((W = c.value) == null ? void 0 : W.discountAmount)), 1)]), e("div", Gm, [e("div", Fm, t(m.$t("orderTime")), 1), e("span", zm, t((F = c.value) == null ? void 0 : F.createTime), 1)]), ((M = c.value) == null ? void 0 : M.state) === 8 ? (n(),
                                    o("div", Km, [e("div", Qm, t(m.$t("c2cTip47")), 1), e("span", Ym, t((X = c.value) == null ? void 0 : X.lastUpdateTime), 1)])) : f("v-if", !0)]), Zm, e("div", Xm, [e("div", Jm, [e1, e("div", t1, [e("span", null, t((G = c.value) == null ? void 0 : G.transactionNo), 1), e("img", {
                                        src: a(ge)("wallet/recharge", "copy1"),
                                        alt: "",
                                        onClick: b[0] || (b[0] = j => {
                                            var q;
                                            return a(Ae)(((q = c.value) == null ? void 0 : q.transactionNo) || "-")
                                        }
                                        )
                                    }, null, 8, a1)])]), e("div", n1, [e("div", s1, t(m.$t("orderNo")), 1), e("div", l1, [e("span", null, t((x = c.value) == null ? void 0 : x.orderNo), 1), e("img", {
                                        src: a(ge)("wallet/recharge", "copy1"),
                                        alt: "",
                                        onClick: b[1] || (b[1] = j => {
                                            var q;
                                            return a(Ae)(((q = c.value) == null ? void 0 : q.orderNo) || "-")
                                        }
                                        )
                                    }, null, 8, o1)])]), e("div", i1, [e("div", r1, t(m.$t("PaymentTime")), 1), e("span", c1, t((P = c.value) == null ? void 0 : P.confrimBeginTime), 1)])])]), e("div", d1, [e("div", u1, t(m.$t("information")), 1), h(T), e("div", v1, [e("div", p1, [_1, e("div", h1, [e("span", null, t(((A = c.value) == null ? void 0 : A.sellerAccountNo) || "--"), 1), e("img", {
                                        src: a(ge)("wallet/recharge", "copy1"),
                                        alt: "",
                                        onClick: b[2] || (b[2] = j => {
                                            var q;
                                            return a(Ae)(((q = c.value) == null ? void 0 : q.sellerAccountNo) || "-")
                                        }
                                        )
                                    }, null, 8, m1)])])])]), ((z = c.value) == null ? void 0 : z.state) !== 8 ? (n(),
                                        o("div", f1, [e("div", w1, t(m.$t("c2cTip50")), 1), h(T), e("img", {
                                            src: k.value,
                                            class: "pay_img",
                                            alt: "",
                                            onClick: b[3] || (b[3] = () => {
                                                a(ra)({
                                                    images: [k.value || ""],
                                                    closeable: !0
                                                })
                                            }
                                            )
                                        }, null, 8, y1)])) : (n(),
                                            o("div", g1, [e("div", $1, [e("div", k1, t(m.$t("c2cTip48")), 1), h(T), (n(!0),
                                                o(ne, null, Se(l.value, j => (n(),
                                                    o("img", {
                                                        src: a(_).getOSSUrl + "/" + j.fileUrl,
                                                        class: "withdraw_img",
                                                        alt: "",
                                                        onClick: () => {
                                                            a(ra)({
                                                                images: [a(_).getOSSUrl + "/" + j.fileUrl],
                                                                closeable: !0
                                                            })
                                                        }
                                                    }, null, 8, b1))), 256))]), w.value ? (n(),
                                                        o("div", C1, [e("div", T1, t(m.$t("c2cTip49")), 1), h(T), e("video", I1, [e("source", {
                                                            src: a(_).getOSSUrl + "/" + w.value
                                                        }, null, 8, S1)])])) : f("v-if", !0)])), f(` <div class="btn_group">
			<div class="appeal" v-if="orderDetail?.state === 7" @click="handleAppeal">{{ $t('appeal') }}</div>
			<div class="appeal_admin" v-if="orderDetail?.state === 3" @click="handleAppealAdmin">{{ $t('AppealsAdmin') }}</div>
			<div
				class="cancel"
				@click="handleCancelOrder"
				v-if="orderDetail?.state === 7 || orderDetail?.state === 3 || orderDetail?.state === 1"
			>
				{{ $t('concelOrder') }}
			</div>
		</div> `)])
                }
        }
    });
const D1 = oe(N1, [["__scopeId", "data-v-f3187262"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/RechargeHistory/RechargeUpiDetail/index.vue"]])
    , j$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: D1
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , A1 = {
        class: "chooseBank__container"
    }
    , R1 = {
        class: "search"
    }
    , B1 = ["placeholder"]
    , U1 = {
        class: "chooseBank__container-content"
    }
    , W1 = {
        class: "chooseBank__container-content-items"
    }
    , P1 = {
        class: "ar-1px-b"
    }
    , O1 = ["onClick"]
    , L1 = {
        class: "chooseBank__container-content-items__title"
    }
    , M1 = ["src"]
    , q1 = le({
        __name: "index",
        emits: ["onSelectItem"],
        setup(y, { emit: s }) {
            const v = I("");
            let c = Re([])
                , r = I([]);
            function i(_) {
                s("onSelectItem", _)
            }
            async function p() {
                const _ = await ae(wt({
                    withdrawid: 1
                }));
                _ && (c = _.data.banklist,
                    r.value = c)
            }
            return Ke(v, () => {
                c.length > 0 && (r.value = c.filter(_ => _.bankName.toLowerCase().indexOf(v.value.toLowerCase()) !== -1))
            }
            ),
                Ce(() => {
                    p()
                }
                ),
                (_, $) => {
                    const k = L("van-icon");
                    return n(),
                        o("div", A1, [e("div", R1, [h(k, {
                            name: "search",
                            size: "35"
                        }), _e(e("input", {
                            placeholder: _.$t("phSearchBank"),
                            "onUpdate:modelValue": $[0] || ($[0] = l => v.value = l)
                        }, null, 8, B1), [[Ue, v.value, void 0, {
                            trim: !0
                        }]])]), e("div", U1, [e("div", W1, [e("div", P1, t(_.$t("selectBank")), 1), (n(!0),
                            o(ne, null, Se(a(r), l => (n(),
                                o("div", {
                                    key: l.bankID,
                                    class: "chooseBank__container-content-items__item ar-1px-b",
                                    onClick: w => i(l)
                                }, [e("div", L1, [e("img", {
                                    src: l.bankLogo,
                                    alt: ""
                                }, null, 8, M1), e("span", null, t(l.bankName), 1)])], 8, O1))), 128))])])])
                }
        }
    });
const Xa = oe(q1, [["__scopeId", "data-v-c1c91417"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/ChooseBank/index.vue"]])
    , x$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Xa
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , V1 = {
        class: "addBankCard__container"
    }
    , E1 = {
        key: 0,
        class: "addBankCard__container-content"
    }
    , j1 = {
        class: "addBankCard__container-content-top"
    }
    , x1 = ["src"]
    , H1 = {
        class: "addBankCard__container-content-item"
    }
    , G1 = {
        class: "label"
    }
    , F1 = {
        class: "addBankCard__container-content-item"
    }
    , z1 = {
        class: "label"
    }
    , K1 = ["placeholder", "readonly"]
    , Q1 = {
        key: 0,
        class: "red"
    }
    , Y1 = {
        key: 1,
        class: "red"
    }
    , Z1 = {
        class: "addBankCard__container-content-item"
    }
    , X1 = {
        class: "label"
    }
    , J1 = ["placeholder"]
    , ef = {
        class: "addBankCard__container-content-item"
    }
    , tf = {
        class: "label phone_icon"
    }
    , af = ["placeholder"]
    , nf = {
        key: 0,
        class: "addBankCard__container-content-item"
    }
    , sf = {
        class: "label"
    }
    , lf = ["placeholder"]
    , of = {
        key: 1,
        class: "addBankCard__container-content-item"
    }
    , rf = {
        class: "label"
    }
    , cf = ["placeholder"]
    , df = {
        key: 2,
        class: "addBankCard__container-content-item"
    }
    , uf = {
        class: "label"
    }
    , vf = ["placeholder"]
    , pf = {
        key: 3,
        class: "addBankCard__container-content-item"
    }
    , _f = {
        class: "label"
    }
    , hf = ["placeholder"]
    , mf = {
        class: "addBankCard__container-content-btn"
    }
    , ff = {
        key: 1
    }
    , wf = le({
        __name: "index",
        setup(y) {
            const { t: s } = Ne()
                , v = I(0)
                , { setLoading: c } = et()
                , r = Kt()
                , i = fe()
                , { isOpenWithdraw: p, isOpenAddBankCardOpenEmail: _ } = yt()
                , $ = i.currentRoute.value.query.fromV || "Withdraw-BankCard"
                , k = I()
                , { iseditor: l, onInput: w, setUL: d, onLoad: R, makeTxt: S } = dt()
                , N = V(() => k.value ? k.value : s("addCardMsg1"));
            function C(q) {
                W.bankid = q.bankID,
                    k.value = q.bankName,
                    v.value = 0
            }
            const m = V(() => v.value == 0 ? s("titleAddBankCard") : s("selectBank"))
                , b = I(!1)
                , T = I(!1)
                , B = I(!1)
                , D = Ve()
                , O = V(() => D.getDollarSign);
            O.value && (b.value = ["₫", "K"].includes(O.value),
                T.value = O.value == "₹",
                B.value = O.value == "৳");
            function Q() {
                if (v.value > 0)
                    return v.value = 0;
                i.replace({
                    name: $,
                    query: {
                        type: "Add"
                    }
                })
            }
            const W = Re({
                smsCode: "",
                ifsccode: "",
                bankid: 0,
                beneficiaryname: "",
                accountno: "",
                email: "",
                mobileno: "",
                bankcitycode: "",
                bankprovincecode: "",
                bankbranchaddress: "",
                type: "",
                codeType: Je.addBankCard
            })
                , M = gt({
                    content: () => h($t, {
                        type: W.type,
                        "onUpdate:type": q => W.type = q,
                        code: W.smsCode,
                        "onUpdate:code": q => W.smsCode = q,
                        onConfirm: P,
                        codeType: Je.addBankCard
                    }, null),
                    beforeClose: () => {
                        W.smsCode = ""
                    }
                })
                , X = V(() => !(W.beneficiaryname.trim().length == 0 || W.accountno.trim().length == 0 || W.mobileno.trim().length == 0 || !T.value && !B.value && W.bankbranchaddress.trim().length == 0 || W.bankid == 0 || T.value == !0 && W.ifsccode.trim().length == 0 || B.value == !0 && W.ifsccode.trim().length == 0))
                , G = () => {
                    const q = localStorage.getItem("numberType") || r.userForm.numberType;
                    if (!X.value)
                        return !1;
                    if (W.bankid == 0)
                        return ce({
                            message: s("addCardMsg1"),
                            wordBreak: "break-word"
                        });
                    if (W.beneficiaryname.toString().trim().length == 0)
                        return ce({
                            message: s("addCardMsg2"),
                            wordBreak: "break-word"
                        });
                    if (W.accountno.toString().trim().length == 0)
                        return ce({
                            message: s("addCardMsg3"),
                            wordBreak: "break-word"
                        });
                    {
                        let g;
                        if (O.value == "R$") {
                            if (g = /^[0-9\-]{6,25}$/,
                                W.accountno.indexOf("-") == -1)
                                return ce({
                                    message: s("code212"),
                                    wordBreak: "break-word"
                                })
                        } else
                            g = /^[0-9]{6,25}$/;
                        if (!g.test(W.accountno))
                            return ce({
                                message: s("code212"),
                                wordBreak: "break-word"
                            })
                    }
                    if (N.value.toUpperCase() == "STATE BANK OF INDIA" && W.accountno.toString().trim().charAt(0) == "0")
                        return ce({
                            message: s("addBC1", [N.value]),
                            wordBreak: "break-word"
                        });
                    if (W.mobileno.toString().trim().length == 0)
                        return ce({
                            message: s("addCardMsg4"),
                            wordBreak: "break-word"
                        });
                    if (!ha(q, W.mobileno.trim().length))
                        return ce({
                            message: s("wrongTel"),
                            wordBreak: "break-word"
                        });
                    if (W.bankbranchaddress.toString().trim().length == 0 && !T.value && !B.value)
                        return ce({
                            message: s("addCardMsg5"),
                            wordBreak: "break-word"
                        });
                    if (_.value && W.email.toString().trim().length == 0)
                        return ce({
                            message: s("addCardMsg6"),
                            wordBreak: "break-word"
                        });
                    if (T.value == !0) {
                        if (W.ifsccode.trim().length == 0)
                            return ce({
                                message: s("phEnter") + s("IFSCCode"),
                                wordBreak: "break-word"
                            });
                        if (!/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/.test(W.ifsccode))
                            return ce({
                                message: s("IFSCCode") + s("formatErr"),
                                wordBreak: "break-word"
                            })
                    }
                    return _.value && !ja.email1.test(W.email) ? ce({
                        message: s(xa.email),
                        wordBreak: "break-word"
                    }) : B.value == !0 && W.ifsccode.trim().length == 0 ? ce({
                        message: s("phEnter") + " Routing Number",
                        wordBreak: "break-word"
                    }) : !0
                }
                ;
            async function x() {
                if (W.smsCode = "",
                    G() === !0) {
                    if (p.value)
                        return M.open();
                    await P()
                }
            }
            async function P() {
                const q = localStorage.getItem("numberType") || r.userForm.numberType;
                c(!0),
                    W.beneficiaryname = W.beneficiaryname.trim(),
                    await ae(ms(Object.assign({}, W, {
                        mobileno: q + W.mobileno
                    }))) && (Xe(s("addedSuccessfully")),
                        M.close(),
                        await i.replace({
                            name: $,
                            query: {
                                type: "Add"
                            },
                            replace: !0
                        })),
                    c(!1)
            }
            function A() {
                O.value == "R$" ? W.accountno = W.accountno.replace(/[^\d\-]+/g, "") : W.accountno = W.accountno.replace(/[^\d]+/g, "")
            }
            const z = () => {
                W.ifsccode = W.ifsccode.replace(/[^a-zA-Z0-9]/g, ""),
                    d(W, "ifsccode")
            }
                ;
            function j() {
                v.value = 2
            }
            return R(W, "beneficiaryname"),
                (q, g) => {
                    const J = L("NavBar")
                        , K = L("svg-icon")
                        , se = L("van-icon");
                    return n(),
                        o("div", V1, [h(J, {
                            title: m.value,
                            "left-arrow": "",
                            onClickLeft: Q
                        }, null, 8, ["title"]), v.value == 0 ? (n(),
                            o("div", E1, [e("div", j1, [e("img", {
                                src: a($e)("wallet", "hint")
                            }, null, 8, x1), e("span", null, t(q.$t("tipBindUrOwnCardToEnsureFundSafety")), 1)]), e("div", H1, [e("div", G1, [h(K, {
                                name: "bank"
                            }), E(" " + t(q.$t("selectBank")), 1)]), e("div", {
                                class: "selectB",
                                onClick: j
                            }, [E(t(N.value) + " ", 1), h(se, {
                                name: "arrow"
                            })])]), f("验证收款人姓名"), e("div", F1, [e("div", z1, [h(K, {
                                name: "name"
                            }), E(" " + t(q.$t("payeeName")), 1)]), _e(e("input", {
                                placeholder: q.$t("phEnterPayeeName"),
                                "onUpdate:modelValue": g[0] || (g[0] = we => W.beneficiaryname = we),
                                maxlength: "50",
                                onInput: g[1] || (g[1] = we => a(S)(W, "beneficiaryname")),
                                readonly: a(l)
                            }, null, 40, K1), [[Ue, W.beneficiaryname, void 0, {
                                trim: !0
                            }]]), b.value ? (n(),
                                o("span", Q1, t(q.$t("validateDesc21")), 1)) : f("v-if", !0), b.value ? (n(),
                                    o("p", Y1, t(q.$t("example")) + " : DINH THI HUYEN", 1)) : f("v-if", !0)]), e("div", Z1, [e("div", X1, [h(K, {
                                        name: "bankCard"
                                    }), E(" " + t(q.$t("bankcardNo")), 1)]), _e(e("input", {
                                        placeholder: q.$t("phEnterBankcardNo"),
                                        "onUpdate:modelValue": g[2] || (g[2] = we => W.accountno = we),
                                        maxlength: "25",
                                        onInput: A
                                    }, null, 40, J1), [[Ue, W.accountno, void 0, {
                                        trim: !0
                                    }]])]), e("div", ef, [e("div", tf, [h(K, {
                                        name: "phone"
                                    }), E(" " + t(q.$t("tel")), 1)]), _e(e("input", {
                                        placeholder: q.$t("phEnterPayeeTel"),
                                        "onUpdate:modelValue": g[3] || (g[3] = we => W.mobileno = we),
                                        maxlength: "12",
                                        onInput: g[4] || (g[4] = we => a(w)(W, "mobileno"))
                                    }, null, 40, af), [[Ue, W.mobileno, void 0, {
                                        trim: !0
                                    }]])]), a(_) ? (n(),
                                        o("div", nf, [e("div", sf, [h(K, {
                                            name: "email"
                                        }), E(" " + t(q.$t("email")), 1)]), _e(e("input", {
                                            type: "text",
                                            placeholder: q.$t("inputemail"),
                                            "onUpdate:modelValue": g[5] || (g[5] = we => W.email = we),
                                            maxlength: "250"
                                        }, null, 8, lf), [[Ue, W.email, void 0, {
                                            trim: !0
                                        }]])])) : f("v-if", !0), T.value ? (n(),
                                            o("div", of, [e("div", rf, [h(K, {
                                                name: "ifscCode"
                                            }), E(" " + t(q.$t("IFSCCode")), 1)]), _e(e("input", {
                                                placeholder: q.$t("phEnter") + q.$t("IFSCCode"),
                                                "onUpdate:modelValue": g[6] || (g[6] = we => W.ifsccode = we),
                                                onInput: z,
                                                maxlength: "11"
                                            }, null, 40, cf), [[Ue, W.ifsccode, void 0, {
                                                trim: !0
                                            }]])])) : f("v-if", !0), B.value ? (n(),
                                                o("div", df, [e("div", uf, [h(K, {
                                                    name: "address"
                                                }), E(" Routing Number ")]), _e(e("input", {
                                                    placeholder: q.$t("phEnter") + " Routing Number",
                                                    "onUpdate:modelValue": g[7] || (g[7] = we => W.ifsccode = we)
                                                }, null, 8, vf), [[Ue, W.ifsccode, void 0, {
                                                    trim: !0
                                                }]])])) : f("v-if", !0), !T.value && !B.value ? (n(),
                                                    o("div", pf, [e("div", _f, [h(K, {
                                                        name: "address"
                                                    }), E(" " + t(q.$t("branchBankAddr")), 1)]), _e(e("textarea", {
                                                        class: "textarea",
                                                        name: "remark",
                                                        id: "",
                                                        cols: "30",
                                                        rows: "10",
                                                        placeholder: q.$t("phEnterBranchAddr"),
                                                        "onUpdate:modelValue": g[8] || (g[8] = we => W.bankbranchaddress = we),
                                                        maxlength: "100"
                                                    }, null, 8, hf), [[Ue, W.bankbranchaddress, void 0, {
                                                        trim: !0
                                                    }]])])) : f("v-if", !0), e("div", mf, [e("button", {
                                                        class: ee({
                                                            active: X.value
                                                        }),
                                                        onClick: x
                                                    }, t(q.$t("save")), 3)])])) : (n(),
                                                        o("div", ff, [f("选择银行卡"), h(Xa, {
                                                            onOnSelectItem: C
                                                        })]))])
                }
        }
    });
const yf = oe(wf, [["__scopeId", "data-v-1726638e"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/AddBankCard/index.vue"]])
    , H$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: yf
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , gf = {
        class: "addKBZ"
    }
    , $f = {
        class: "addKBZ-top"
    }
    , kf = ["src"]
    , bf = {
        class: "addKBZ-item"
    }
    , Cf = {
        class: "label"
    }
    , Tf = {
        class: "selectB"
    }
    , If = {
        class: "addKBZ-item"
    }
    , Sf = {
        class: "label"
    }
    , Nf = ["placeholder", "readonly"]
    , Df = {
        class: "addKBZ-item"
    }
    , Af = {
        class: "label"
    }
    , Rf = ["placeholder"]
    , Bf = le({
        __name: "index",
        setup(y) {
            const { iseditor: s, onInput: v, checkAccoutNo: c, onLoad: r, makeTxt: i } = dt()
                , { t: p } = Ne()
                , _ = fe()
                , { setLoading: $ } = et();
            let k = Re([]);
            const l = I("")
                , { isOpenWithdraw: w } = yt()
                , d = Re({
                    smsCode: "",
                    withdrawId: 8,
                    bankId: 0,
                    mobileNo: "",
                    beneficiaryName: "",
                    type: "",
                    codeType: Je.addKBZ
                })
                , R = V(() => !(d.mobileNo.trim().length == 0 || d.bankId == 0 || d.beneficiaryName.trim().length == 0));
            async function S() {
                const D = await ae(wt({
                    withdrawid: 8
                }));
                D && (k = D.data.banklist,
                    l.value = k.length > 0 ? k[0].bankName : "",
                    d.bankId = k.length > 0 ? k[0].bankID : 0)
            }
            Ce(async () => {
                await S()
            }
            );
            const N = () => !R.value || !localStorage.getItem("numberType") ? !1 : d.bankId == 0 ? ce({
                message: p("addCardMsg1"),
                wordBreak: "break-word"
            }) : d.beneficiaryName.toString().trim().length == 0 ? ce({
                message: p("phEnterName"),
                wordBreak: "break-word"
            }) : d.mobileNo.toString().trim().length == 0 ? ce({
                message: p("addCardMsg4"),
                wordBreak: "break-word"
            }) : c(d.mobileNo, p("tel") + p("formatErr")) ? ha(localStorage.getItem("numberType"), d.mobileNo.trim().length) ? !0 : ce({
                message: p("wrongTel"),
                wordBreak: "break-word"
            }) : void 0
                , m = gt({
                    content: () => h($t, {
                        type: d.type,
                        "onUpdate:type": D => d.type = D,
                        code: d.smsCode,
                        "onUpdate:code": D => d.smsCode = D,
                        onConfirm: T,
                        codeType: Je.addKBZ
                    }, null),
                    beforeClose: () => {
                        d.smsCode = ""
                    }
                });
            async function b() {
                if (N() === !0) {
                    if (d.smsCode = "",
                        w.value)
                        return m.open();
                    await T()
                }
            }
            async function T() {
                $(!0),
                    await ae(Qt(d)) && (m.close(),
                        _.replace({
                            name: "Withdraw",
                            query: {
                                type: "Add"
                            },
                            replace: !0
                        })),
                    $(!1)
            }
            function B() {
                _.replace({
                    name: "Withdraw",
                    query: {
                        type: "Add"
                    }
                })
            }
            return r(d, "beneficiaryName"),
                (D, O) => {
                    const Q = L("NavBar")
                        , W = L("svg-icon");
                    return n(),
                        o("div", gf, [h(Q, {
                            title: `${D.$t("addto")} KBZPay`,
                            "left-arrow": "",
                            onClickLeft: B
                        }, null, 8, ["title"]), e("div", $f, [e("img", {
                            src: a($e)("wallet", "hint")
                        }, null, 8, kf), e("span", null, t(D.$t("WaveTip1")), 1)]), e("div", bf, [e("div", Cf, [h(W, {
                            name: "bank"
                        }), E(" " + t(D.$t("bankname")), 1)]), e("div", Tf, t(l.value), 1)]), e("div", If, [e("div", Sf, [h(W, {
                            name: "name"
                        }), E(" " + t(D.$t("name")), 1)]), _e(e("input", {
                            placeholder: D.$t("phEnterName"),
                            "onUpdate:modelValue": O[0] || (O[0] = F => d.beneficiaryName = F),
                            maxlength: "50",
                            onInput: O[1] || (O[1] = F => a(i)(d, "beneficiaryName")),
                            readonly: a(s)
                        }, null, 40, Nf), [[Ue, d.beneficiaryName, void 0, {
                            trim: !0
                        }]])]), e("div", Df, [e("div", Af, [h(W, {
                            name: "phone"
                        }), E(" " + t(D.$t("tel")), 1)]), _e(e("input", {
                            placeholder: D.$t("phEnterPayeeTel"),
                            "onUpdate:modelValue": O[2] || (O[2] = F => d.mobileNo = F),
                            maxlength: 12,
                            onInput: O[3] || (O[3] = F => a(v)(d, "mobileNo"))
                        }, null, 40, Rf), [[Ue, d.mobileNo, void 0, {
                            trim: !0
                        }]])]), e("div", {
                            class: ee(["addKBZ-btn", {
                                active: R.value
                            }]),
                            onClick: b
                        }, t(D.$t("save")), 3)])
                }
        }
    });
const Uf = oe(Bf, [["__scopeId", "data-v-ee22f671"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/AddKbz/index.vue"]])
    , G$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Uf
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , Wf = y => (We("data-v-9694f22e"),
        y = y(),
        Pe(),
        y)
    , Pf = {
        class: "addBankCard__container"
    }
    , Of = {
        class: "addBankCard__container-content"
    }
    , Lf = {
        class: "addBankCard__container-content-top"
    }
    , Mf = {
        class: "addBankCard__container-content-top-item"
    }
    , qf = {
        class: "label"
    }
    , Vf = ["readonly", "placeholder"]
    , Ef = {
        class: "addBankCard__container-content-top-item"
    }
    , jf = Wf(() => e("div", {
        class: "label"
    }, "CPF", -1))
    , xf = ["readonly", "placeholder"]
    , Hf = {
        class: "addBankCard__container-content-top-item"
    }
    , Gf = {
        class: "label"
    }
    , Ff = {
        class: "ar-searchbar"
    }
    , zf = {
        class: "addBankCard__container-content-top-item"
    }
    , Kf = {
        class: "label"
    }
    , Qf = {
        class: "accountNo"
    }
    , Yf = {
        key: 0
    }
    , Zf = ["placeholder"]
    , Xf = ["placeholder"]
    , Jf = {
        class: "addBankCard__container-content-btn"
    }
    , ew = {
        class: "search"
    }
    , tw = le({
        __name: "index",
        setup(y) {
            const { getSelfCustomerServiceLink: s } = zt({
                ServerType: 2
            })
                , { t: v } = Ne()
                , { setLoading: c } = et()
                , r = fe()
                , i = I("")
                , p = I(!1)
                , _ = r.currentRoute.value.query.fromV || "Withdraw-PIX";
            function $() {
                r.replace({
                    name: _,
                    query: {
                        type: "Add"
                    }
                })
            }
            const { isOpenWithdraw: k } = yt()
                , l = Re({
                    bankId: 0,
                    accountNo: "",
                    name: "",
                    cpf: "",
                    smsCode: "",
                    type: "",
                    codeType: Je.addPIX,
                    pixType: ""
                })
                , w = I(localStorage.getItem("numberType"))
                , d = I("");
            let R = I([])
                , S = Re([]);
            const N = V(() => !(l.accountNo.trim().length == 0 || l.name.trim().length == 0 || l.cpf.trim().length == 0 || l.bankId == 0))
                , C = () => {
                    s()
                }
                ;
            function m(P) {
                P.preventDefault();
                const z = P.clipboardData.getData("text").replace(/[^\d]/g, "");
                P.target.value = z,
                    P.target.id == "cpf" ? l.cpf = z : P.target.id == "accountNo" && (l.accountNo = z)
            }
            const b = () => {
                if (N.value)
                    return l.name.trim().length == 0 ? ce({
                        message: v("phEnterPayeeName"),
                        wordBreak: "break-word"
                    }) : l.cpf.trim().length == 0 ? ce({
                        message: v("enterCpf"),
                        wordBreak: "break-word"
                    }) : X(l.cpf.trim()) ? l.bankId == 0 ? ce({
                        message: v("tipsCpf2"),
                        wordBreak: "break-word"
                    }) : l.accountNo.trim().length == 0 ? ce({
                        message: v("tipsCpf3"),
                        wordBreak: "break-word"
                    }) : (i.value.toUpperCase().indexOf("PHONE") != -1 || i.value.toUpperCase().indexOf("CPF") != -1) && l.accountNo.trim().length != 11 ? ce({
                        message: v("tipsCpf4"),
                        wordBreak: "break-word"
                    }) : i.value.toUpperCase().indexOf("CPF") != -1 && l.accountNo != l.cpf ? ce({
                        message: v("pixTip1"),
                        wordBreak: "break-word"
                    }) : ["EMALL", "EMAIL"].includes(i.value.toUpperCase()) && !ja.email1.test(l.accountNo.trim()) ? ce({
                        message: v(xa.email),
                        wordBreak: "break-word"
                    }) : !0 : ce({
                        message: v("tipsCpf1"),
                        wordBreak: "break-word"
                    })
            }
                ;
            async function T() {
                if (b() === !0) {
                    if (l.smsCode = "",
                        k.value)
                        return x.open();
                    await B()
                }
            }
            async function B() {
                c(!0);
                let P = l;
                if (i.value.toUpperCase().indexOf("PHONE") != -1) {
                    const z = w.value + l.accountNo;
                    P = Object.assign({}, l, {
                        accountNo: z
                    })
                }
                await ae(fs(P)) && (Xe(v("addedSuccessfully")),
                    x.close(),
                    l.accountNo = "",
                    await r.replace({
                        name: _,
                        query: {
                            type: "Add"
                        },
                        replace: !0
                    })),
                    c(!1)
            }
            const D = I(!0);
            async function O() {
                const P = await ae(ws());
                P && P.data != null ? (D.value = !0,
                    l.name = P.data.realName,
                    l.cpf = P.data.idCard) : D.value = !1
            }
            async function Q() {
                const P = await ae(wt({
                    withdrawid: 5
                }));
                P && (S = P.data.banklist,
                    i.value = S.length > 0 ? S[0].bankName : "",
                    l.bankId = S.length > 0 ? S[0].bankID : 0,
                    R.value = S,
                    W())
            }
            Ke(d, () => {
                S.length > 0 && (R.value = S.filter(P => P.bankName.toLowerCase().indexOf(d.value.toLowerCase()) !== -1))
            }
            );
            function W() {
                l.accountNo = "",
                    l.pixType = "",
                    i.value.toUpperCase().indexOf("CPF") != -1 && (l.pixType = "cpf",
                        l.cpf.trim().length != 0 && (l.accountNo = l.cpf))
            }
            Ke(p, () => {
                p.value && (d.value = "")
            }
            );
            function F() {
                p.value = !0
            }
            const M = ({ selectedOptions: P }) => {
                p.value = !1,
                    P[0] && (i.value = P[0].bankName,
                        l.bankId = P[0].bankID,
                        W())
            }
                ;
            function X(P) {
                if (P = P.replace(/[^\d]+/g, ""),
                    P == "" || P.length != 11 || P == "00000000000" || P == "11111111111" || P == "22222222222" || P == "33333333333" || P == "44444444444" || P == "55555555555" || P == "66666666666" || P == "77777777777" || P == "88888888888" || P == "99999999999")
                    return !1;
                let A = 0;
                for (let j = 0; j < 9; j++)
                    A += parseInt(P.charAt(j)) * (10 - j);
                let z = 11 - A % 11;
                if ((z == 10 || z == 11) && (z = 0),
                    z != parseInt(P.charAt(9)))
                    return !1;
                A = 0;
                for (let j = 0; j < 10; j++)
                    A += parseInt(P.charAt(j)) * (11 - j);
                return z = 11 - A % 11,
                    (z == 10 || z == 11) && (z = 0),
                    z == parseInt(P.charAt(10))
            }
            Ce(async () => {
                await O(),
                    await Q()
            }
            );
            const x = gt({
                content: () => h($t, {
                    type: l.type,
                    "onUpdate:type": P => l.type = P,
                    code: l.smsCode,
                    "onUpdate:code": P => l.smsCode = P,
                    onConfirm: B,
                    codeType: Je.addPIX
                }, null),
                beforeClose: () => {
                    l.smsCode = ""
                }
            });
            return (P, A) => {
                const z = L("NavBar")
                    , j = L("svg-icon")
                    , q = L("ArSelect")
                    , g = L("van-picker")
                    , J = L("van-popup");
                return n(),
                    o("div", Pf, [h(z, {
                        title: P.$t("paymentMethod"),
                        "left-arrow": "",
                        onClickLeft: $
                    }, null, 8, ["title"]), e("div", Of, [e("h1", null, [h(j, {
                        name: "pix"
                    }), E(t(P.$t("pixInfo")), 1)]), e("div", Lf, [e("div", Mf, [e("div", qf, t(P.$t("payeeName")), 1), _e(e("input", {
                        readonly: D.value,
                        placeholder: P.$t("phEnterPayeeName"),
                        "onUpdate:modelValue": A[0] || (A[0] = K => l.name = K)
                    }, null, 8, Vf), [[Ue, l.name]])]), e("div", Ef, [jf, _e(e("input", {
                        readonly: D.value,
                        placeholder: P.$t("enterCpf"),
                        "onUpdate:modelValue": A[1] || (A[1] = K => l.cpf = K),
                        maxlength: "11",
                        oninput: "value=value.replace(/\\D/g,'')",
                        onPaste: m,
                        id: "cpf"
                    }, null, 40, xf), [[Ue, l.cpf]])]), e("div", Hf, [e("div", Gf, t(P.$t("pixType")), 1), e("div", Ff, [h(q, {
                        onClickSelect: F,
                        selectName: i.value
                    }, null, 8, ["selectName"])])]), e("div", zf, [e("div", Kf, t(P.$t("pixAccount")), 1), e("div", Qf, [i.value.toUpperCase().indexOf("PHONE") != -1 ? (n(),
                        o("div", Yf, "+" + t(w.value), 1)) : f("v-if", !0), f("phone只能输入数字"), i.value.toUpperCase().indexOf("PHONE") != -1 || i.value.toUpperCase().indexOf("CPF") != -1 ? _e((n(),
                            o("input", {
                                key: 1,
                                placeholder: P.$t("enterPixAccount"),
                                "onUpdate:modelValue": A[2] || (A[2] = K => l.accountNo = K),
                                oninput: "value=value.replace(/\\D/g,'')",
                                maxlength: "11",
                                onPaste: m,
                                id: "accountNo"
                            }, null, 40, Zf)), [[Ue, l.accountNo, void 0, {
                                trim: !0
                            }]]) : _e((n(),
                                o("input", {
                                    key: 2,
                                    placeholder: P.$t("enterPixAccount"),
                                    "onUpdate:modelValue": A[3] || (A[3] = K => l.accountNo = K),
                                    oninput: "value=value.replace(/\\s+/g,'')",
                                    maxlength: "40"
                                }, null, 8, Xf)), [[Ue, l.accountNo, void 0, {
                                    trim: !0
                                }]])])])])]), e("div", Jf, [e("button", {
                                    class: ee({
                                        active: N.value
                                    }),
                                    onClick: T
                                }, t(P.$t("save")), 3), e("div", {
                                    onClick: C
                                }, [h(j, {
                                    name: "iconservr-r"
                                }), E(t(P.$t("withdrawDialogDesc5")), 1)])]), h(J, {
                                    show: p.value,
                                    "onUpdate:show": A[6] || (A[6] = K => p.value = K),
                                    round: "",
                                    position: "bottom"
                                }, {
                                    default: te(() => [e("div", ew, [h(Rs, {
                                        placeholder: P.$t("searchPixType"),
                                        value: d.value,
                                        "onUpdate:value": A[4] || (A[4] = K => d.value = K),
                                        isShowClose: !0
                                    }, null, 8, ["placeholder", "value"])]), h(g, {
                                        "columns-field-names": {
                                            text: "bankName",
                                            value: "bankID",
                                            children: "children"
                                        },
                                        columns: a(R),
                                        onCancel: A[5] || (A[5] = K => p.value = !1),
                                        onConfirm: M
                                    }, null, 8, ["columns"])]),
                                    _: 1
                                }, 8, ["show"])])
            }
        }
    });
const aw = oe(tw, [["__scopeId", "data-v-9694f22e"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/AddPIX/index.vue"]])
    , F$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: aw
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , nw = {
        class: "addtype4_C"
    }
    , sw = {
        class: "addtype4_C-header"
    }
    , lw = {
        class: "addtype4_C-title"
    }
    , ow = {
        class: "selectB"
    }
    , iw = {
        class: "addtype4_C-title"
    }
    , rw = {
        class: "successTip"
    }
    , cw = le({
        __name: "index",
        setup(y) {
            const { t: s } = Ne()
                , v = fe()
                , { isOpenWithdraw: c } = yt()
                , r = v.currentRoute.value.query.Type4name
                , i = I(!1)
                , p = Re({
                    withdrawId: 22,
                    mobileNo: "",
                    bankId: "",
                    smsCode: "",
                    beneficiaryName: "",
                    type: "",
                    codeType: Je.addEWallet
                })
                , _ = I({
                    bankName: "",
                    bankID: 0,
                    reserved: ""
                });
            I(!1);
            const $ = () => {
                v.replace({
                    name: "Withdraw-RsnPay",
                    query: {
                        type: "Add",
                        Type4name: r
                    }
                })
            }
                , k = V(() => p.mobileNo);
            let l = I([]);
            async function w() {
                var m;
                const C = await ae(wt({
                    withdrawid: 22
                }));
                C && (l.value = C.data.banklist,
                    ((m = C == null ? void 0 : C.data) == null ? void 0 : m.banklist.length) > 0 && (_.value = C.data.banklist[0],
                        p.bankId = C.data.banklist[0].bankID))
            }
            Ce(async () => {
                await w()
            }
            );
            const d = async () => {
                await ae(Qt(p)) && (Xe(s("addedSuccessfully")),
                    S.close(),
                    v.replace({
                        name: "Withdraw",
                        query: {
                            bid: 0,
                            type: 22
                        }
                    }),
                    v.replace({
                        name: "Withdraw-RsnPay",
                        query: {
                            type: "Add",
                            Type4name: r
                        }
                    }))
            }
                , S = gt({
                    content: () => h($t, {
                        type: p.type,
                        "onUpdate:type": C => p.type = C,
                        code: p.smsCode,
                        "onUpdate:code": C => p.smsCode = C,
                        onConfirm: d,
                        codeType: Je.addEWallet
                    }, null),
                    beforeClose: () => {
                        p.smsCode = ""
                    }
                })
                , N = async () => {
                    if (c.value)
                        return S.open();
                    await d()
                }
                ;
            return (C, m) => {
                const b = L("NavBar")
                    , T = L("van-field")
                    , B = L("van-toast");
                return n(),
                    o(ne, null, [e("div", nw, [h(b, {
                        title: a(r) + a(s)("paymentMethod"),
                        "left-arrow": "",
                        onClickLeft: $
                    }, null, 8, ["title"]), e("div", sw, t(a(r)), 1), e("div", lw, t(C.$t("bankname")), 1), e("div", ow, t(_.value.bankName), 1), f(` <van-field
			class="addtype4-input"
			v-model="activeBink.bankName"
			:readonly="true"
			disabled
			:placeholder="$t('tipSelectPls')"
		/> `), e("div", iw, t(C.$t("walletAddress")), 1), h(T, {
                        class: "addtype4-input",
                        modelValue: p.mobileNo,
                        "onUpdate:modelValue": m[0] || (m[0] = D => p.mobileNo = D),
                        modelModifiers: {
                            trim: !0
                        },
                        placeholder: C.$t("phEnter") + C.$t("walletAddress")
                    }, null, 8, ["modelValue", "placeholder"]), e("div", {
                        class: ee(["sumbitBtn", {
                            disable: !k.value
                        }]),
                        onClick: N
                    }, t(C.$t("save")), 3), h(B, {
                        show: i.value,
                        "onUpdate:show": m[1] || (m[1] = D => i.value = D)
                    }, {
                        message: te(() => [e("div", rw, [e("div", null, t(C.$t("addedSuccessfully")), 1)])]),
                        _: 1
                    }, 8, ["show"])]), f(` <van-popup v-model:show="showPicker" round position="bottom">
		<van-picker
			:columns="originalBankList"
			:columns-field-names="customFieldName"
			@cancel="showPicker = false"
			@confirm="onConfirm"
		/>
	</van-popup> `)], 2112)
            }
        }
    });
const dw = oe(cw, [["__scopeId", "data-v-81838f32"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/AddRsnPay/index.vue"]])
    , z$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: dw
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , uw = {
        class: "addtype4_C"
    }
    , vw = {
        class: "addtype4_C-header"
    }
    , pw = {
        class: "addtype4_C-title"
    }
    , _w = {
        class: "addtype4_C-title"
    }
    , hw = {
        class: "selectB"
    }
    , mw = {
        class: "addtype4_C-title"
    }
    , fw = {
        class: "addtype4_C-title"
    }
    , ww = {
        class: "successTip"
    }
    , yw = le({
        __name: "index",
        setup(y) {
            const { iseditor: s, onLoad: v, makeTxt: c } = dt()
                , { t: r } = Ne()
                , i = fe()
                , { isOpenWithdraw: p } = yt()
                , _ = i.currentRoute.value.query.Type4name
                , $ = Number(i.currentRoute.value.query.withdrawType)
                , k = I(!1)
                , l = Re({
                    withdrawId: $,
                    mobileNo: "",
                    bankId: "",
                    smsCode: "",
                    beneficiaryName: "",
                    type: "",
                    codeType: Je.addEWallet
                })
                , w = I({
                    bankName: "",
                    bankID: 0,
                    reserved: ""
                })
                , d = I(!1)
                , R = () => {
                    i.replace({
                        name: "Withdraw-Type4",
                        query: {
                            type: "Add",
                            Type4name: _,
                            withdrawType: $
                        }
                    })
                }
                , S = {
                    text: "bankName",
                    value: "bankID"
                }
                , N = V(() => l.mobileNo && l.bankId && l.beneficiaryName);
            let C = I([]);
            async function m() {
                const G = await ae(wt({
                    withdrawid: $
                }));
                G && (C.value = G.data.banklist,
                    [23, 24].includes($) && (w.value = G.data.banklist[0],
                        l.bankId = G.data.banklist[0].bankID))
            }
            Ce(async () => {
                await m()
            }
            );
            const b = async () => {
                await ae(Qt(l)) && (Xe(r("addedSuccessfully")),
                    B.close(),
                    i.replace({
                        name: "Withdraw-Type4",
                        query: {
                            type: "Add",
                            Type4name: _,
                            withdrawType: $
                        }
                    }))
            }
                , B = gt({
                    content: () => h($t, {
                        type: l.type,
                        "onUpdate:type": G => l.type = G,
                        code: l.smsCode,
                        "onUpdate:code": G => l.smsCode = G,
                        onConfirm: b,
                        codeType: Je.addEWallet
                    }, null),
                    beforeClose: () => {
                        l.smsCode = ""
                    }
                })
                , D = G => {
                    let x = {
                        ...G.selectedOptions[0]
                    };
                    w.value = x,
                        l.bankId = x.bankID,
                        d.value = !1
                }
                ;
            function O(G) {
                return /^[A-Za-z\d]{8,15}$/.test(G) ? !0 : (ce({
                    message: r("account") + r("formatErr"),
                    wordBreak: "break-word"
                }),
                    !1)
            }
            function Q(G, x) {
                return /^[0-9]{8,15}$/.test(G) ? !0 : (ce({
                    message: x,
                    wordBreak: "break-word"
                }),
                    !1)
            }
            const W = {}.VITE_ADDTYPE4_ONLY_NUM === "1"
                , F = V(() => W ? "digit" : "text")
                , M = () => {
                    if (!(l.mobileNo.toString().trim().length > 0 && !(W ? Q(l.mobileNo, r("account") + r("formatErr")) : O(l.mobileNo))))
                        return !0
                }
                , X = async () => {
                    if (M() === !0) {
                        if (p.value)
                            return B.open();
                        await b()
                    }
                }
                ;
            return v(l, "beneficiaryName"),
                (G, x) => {
                    const P = L("NavBar")
                        , A = L("van-field")
                        , z = L("van-toast")
                        , j = L("van-picker")
                        , q = L("van-popup");
                    return n(),
                        o(ne, null, [e("div", uw, [h(P, {
                            title: a(_) + a(r)("paymentMethod"),
                            "left-arrow": "",
                            onClickLeft: R
                        }, null, 8, ["title"]), e("div", vw, t(a(_)), 1), a($) == 4 ? (n(),
                            o(ne, {
                                key: 0
                            }, [e("div", pw, t(G.$t("selectType")), 1), h(A, {
                                class: "addtype4-input",
                                modelValue: w.value.bankName,
                                "onUpdate:modelValue": x[0] || (x[0] = g => w.value.bankName = g),
                                readonly: !0,
                                "right-icon": "arrow-down",
                                placeholder: G.$t("tipSelectPls"),
                                onClick: x[1] || (x[1] = g => d.value = !0)
                            }, null, 8, ["modelValue", "placeholder"])], 64)) : (n(),
                                o(ne, {
                                    key: 1
                                }, [e("div", _w, t(G.$t("bankname")), 1), e("div", hw, t(w.value.bankName), 1)], 64)), e("div", mw, t(G.$t("name")), 1), h(A, {
                                    class: "addtype4-input",
                                    modelValue: l.beneficiaryName,
                                    "onUpdate:modelValue": x[2] || (x[2] = g => l.beneficiaryName = g),
                                    maxlength: 50,
                                    placeholder: G.$t("phEnter") + G.$t("name"),
                                    onInput: x[3] || (x[3] = g => a(c)(l, "beneficiaryName")),
                                    readonly: a(s)
                                }, null, 8, ["modelValue", "placeholder", "readonly"]), e("div", fw, t(G.$t("account")), 1), h(A, {
                                    class: "addtype4-input",
                                    modelValue: l.mobileNo,
                                    "onUpdate:modelValue": x[4] || (x[4] = g => l.mobileNo = g),
                                    modelModifiers: {
                                        trim: !0
                                    },
                                    maxlength: 15,
                                    type: F.value,
                                    placeholder: G.$t("phEnter") + G.$t("account")
                                }, null, 8, ["modelValue", "type", "placeholder"]), e("div", {
                                    class: ee(["sumbitBtn", {
                                        disable: !N.value
                                    }]),
                                    onClick: X
                                }, t(G.$t("save")), 3), h(z, {
                                    show: k.value,
                                    "onUpdate:show": x[5] || (x[5] = g => k.value = g)
                                }, {
                                    message: te(() => [e("div", ww, [e("div", null, t(G.$t("addedSuccessfully")), 1)])]),
                                    _: 1
                                }, 8, ["show"])]), h(q, {
                                    show: d.value,
                                    "onUpdate:show": x[7] || (x[7] = g => d.value = g),
                                    round: "",
                                    position: "bottom"
                                }, {
                                    default: te(() => [h(j, {
                                        columns: a(C),
                                        "columns-field-names": S,
                                        onCancel: x[6] || (x[6] = g => d.value = !1),
                                        onConfirm: D
                                    }, null, 8, ["columns"])]),
                                    _: 1
                                }, 8, ["show"])], 64)
                }
        }
    });
const gw = oe(yw, [["__scopeId", "data-v-497422b6"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/AddType4/index.vue"]])
    , K$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: gw
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , $w = {
        class: "addUSDT__container"
    }
    , kw = {
        class: "addUSDT__container-content"
    }
    , bw = {
        class: "addUSDT__container-content-top"
    }
    , Cw = ["src"]
    , Tw = {
        class: "addUSDT__container-content-item"
    }
    , Iw = {
        class: "label"
    }
    , Sw = {
        class: "ar-searchbar"
    }
    , Nw = {
        class: "addUSDT__container-content-item"
    }
    , Dw = {
        class: "label"
    }
    , Aw = {
        class: "input"
    }
    , Rw = ["placeholder", "maxlength"]
    , Bw = {
        class: "addUSDT__container-content-item"
    }
    , Uw = {
        class: "label"
    }
    , Ww = ["placeholder"]
    , Pw = {
        class: "addUSDT__container-content-btn"
    }
    , Ow = le({
        __name: "index",
        setup(y) {
            const { t: s } = Ne()
                , { isOpenWithdraw: v } = yt()
                , { setLoading: c } = et()
                , r = fe()
                , i = r.currentRoute.value.query.fromV || "Withdraw-USDT";
            function p() {
                r.replace({
                    name: i,
                    query: {
                        type: "Add"
                    }
                })
            }
            const _ = I(!1);
            let $ = Re([]);
            async function k() {
                const O = await ae(wt({
                    withdrawid: 3
                }));
                O && ($ = O.data.banklist,
                    l.value = $.length > 0 ? $[0].bankName : "",
                    S.bankid = $.length > 0 ? $[0].bankID : 0)
            }
            const l = I("")
                , w = ({ selectedOptions: O }) => {
                    _.value = !1,
                        l.value = O[0].bankName,
                        S.bankid = O[0].bankID
                }
                ;
            function d() {
                _.value = !0
            }
            const R = V(() => l.value.toUpperCase().indexOf("TRC") != -1 ? 36 : l.value.toUpperCase().indexOf("ERC") != -1 ? 46 : 100)
                , S = Re({
                    withdrawid: 3,
                    bankid: 0,
                    usdtaddress: "",
                    smsCode: "",
                    usdtRemarkName: "",
                    type: "",
                    codeType: Je.addUSDT
                })
                , N = O => {
                    const Q = O.target;
                    S.usdtaddress = Q.value.replace(/[^\w\/]/ig, "")
                }
                , C = V(() => !(S.usdtRemarkName.trim().length == 0 || S.bankid == 0 || S.usdtaddress.trim().length == 0))
                , m = () => {
                    if (C.value)
                        return S.bankid == 0 ? ce({
                            message: s("onConfirmMsg1"),
                            wordBreak: "break-word"
                        }) : S.usdtaddress.toString().trim().length == 0 ? ce({
                            message: s("onConfirmMsg2"),
                            wordBreak: "break-word"
                        }) : S.usdtaddress.trim().length < 30 ? ce({
                            message: s("onConfirmMsg4"),
                            wordBreak: "break-word"
                        }) : l.value.toUpperCase().indexOf("TRC") != -1 && (S.usdtaddress.trim().slice(0, 1) != "T" || S.usdtaddress.trim().length > 36) ? ce({
                            message: s("onConfirmMsg5"),
                            wordBreak: "break-word"
                        }) : l.value.toUpperCase().indexOf("ERC") != -1 && (S.usdtaddress.trim().slice(0, 2) != "0x" || S.usdtaddress.trim().length > 46) ? ce({
                            message: s("onConfirmMsg5"),
                            wordBreak: "break-word"
                        }) : S.usdtRemarkName.toString().trim().length == 0 ? ce({
                            message: s("onConfirmMsg3"),
                            wordBreak: "break-word"
                        }) : !0
                }
                ;
            async function b() {
                if (m() !== !0)
                    return;
                c(!0),
                    await ae(ys(S)) && (Xe(s("addedSuccessfully")),
                        B.close(),
                        await r.replace({
                            name: i,
                            query: {
                                type: "Add"
                            },
                            replace: !0
                        })),
                    c(!1)
            }
            Ce(async () => {
                await k()
            }
            );
            const B = gt({
                content: () => h($t, {
                    type: S.type,
                    "onUpdate:type": O => S.type = O,
                    code: S.smsCode,
                    "onUpdate:code": O => S.smsCode = O,
                    onConfirm: b,
                    codeType: S.codeType
                }, null),
                beforeClose: () => {
                    S.smsCode = ""
                }
            });
            async function D() {
                if (S.smsCode = "",
                    m() === !0) {
                    if (v.value)
                        return B.open();
                    await b()
                }
            }
            return (O, Q) => {
                const W = L("NavBar")
                    , F = L("svg-icon")
                    , M = L("ArSelect")
                    , X = L("van-picker")
                    , G = L("van-popup");
                return n(),
                    o("div", $w, [h(W, {
                        title: O.$t("titleAddUSDTAddr"),
                        "left-arrow": "",
                        onClickLeft: p
                    }, null, 8, ["title"]), e("div", kw, [e("div", bw, [e("img", {
                        src: a($e)("wallet", "hint")
                    }, null, 8, Cw), e("span", null, t(O.$t("tipBindUrOwnUSDEAddrForFundSafety")), 1)]), e("div", Tw, [e("div", Iw, [h(F, {
                        name: "usdt1",
                        class: "icon"
                    }), E(" " + t(O.$t("selectMainNetwork")), 1)]), e("div", Sw, [h(M, {
                        onClickSelect: d,
                        selectName: l.value
                    }, null, 8, ["selectName"])])]), e("div", Nw, [e("div", Dw, [h(F, {
                        name: "usdt2",
                        class: "icon"
                    }), E(" " + t(O.$t("usedAddr")), 1)]), e("div", Aw, [_e(e("input", {
                        placeholder: O.$t("phEnterUSDTAddr"),
                        maxlength: R.value,
                        "onUpdate:modelValue": Q[0] || (Q[0] = x => S.usdtaddress = x),
                        onInput: N
                    }, null, 40, Rw), [[Ue, S.usdtaddress]])])]), e("div", Bw, [e("div", Uw, [h(F, {
                        name: "usdt3",
                        class: "icon"
                    }), E(" " + t(O.$t("addressAlias")), 1)]), _e(e("input", {
                        placeholder: O.$t("phEnterUSDTRemarks"),
                        maxlength: "20",
                        "onUpdate:modelValue": Q[1] || (Q[1] = x => S.usdtRemarkName = x)
                    }, null, 8, Ww), [[Ue, S.usdtRemarkName]])]), e("div", Pw, [e("button", {
                        class: ee({
                            active: C.value
                        }),
                        onClick: D
                    }, t(O.$t("save")), 3)])]), h(G, {
                        show: _.value,
                        "onUpdate:show": Q[3] || (Q[3] = x => _.value = x),
                        round: "",
                        position: "bottom"
                    }, {
                        default: te(() => [h(X, {
                            "columns-field-names": {
                                text: "bankName",
                                value: "bankID",
                                children: "children"
                            },
                            columns: a($),
                            onCancel: Q[2] || (Q[2] = x => _.value = !1),
                            onConfirm: w
                        }, null, 8, ["columns"])]),
                        _: 1
                    }, 8, ["show"])])
            }
        }
    });
const Lw = oe(Ow, [["__scopeId", "data-v-24736190"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/AddUSDT/index.vue"]])
    , Q$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Lw
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , Ja = y => (We("data-v-8ced09ab"),
        y = y(),
        Pe(),
        y)
    , Mw = {
        class: "addupi_C"
    }
    , qw = {
        class: "addupi_C-header wallet_18"
    }
    , Vw = Ja(() => e("div", {
        class: "addupi_C-title"
    }, "UPI Name", -1))
    , Ew = Ja(() => e("div", {
        class: "addupi_C-title"
    }, "UPI ID", -1))
    , jw = le({
        __name: "index",
        setup(y) {
            const s = fe()
                , v = Kt()
                , c = I(v.getUserForm.numberType)
                , r = I("")
                , { t: i } = Ne()
                , p = I("");
            V(() => c.value + "" + r.value);
            const { iseditor: _, onLoad: $, makeTxt: k } = dt()
                , l = () => {
                    s.replace({
                        name: "Withdraw-Upi",
                        query: {
                            type: "Add"
                        }
                    })
                }
                , w = Re({
                    beneficiaryName: "",
                    accountNo: ""
                });
            function d(C) {
                var B;
                const m = sessionStorage.getItem("areaPhoneLenList");
                let T = (B = JSON.parse(m).find(D => C.indexOf(D.area.replace("+", "")) == 0)) == null ? void 0 : B.area.replace("+", "");
                T && (c.value = T,
                    r.value = C.substring(T.length))
            }
            const R = V(() => w.beneficiaryName && w.accountNo && r && c)
                , S = async () => {
                    const C = await ae(gs());
                    p.value = (C == null ? void 0 : C.data) || "",
                        p.value != "" && d(p.value)
                }
                ;
            Ce(() => {
                S()
            }
            ),
                $(w, "beneficiaryName");
            const N = async () => {
                if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/.test(w.accountNo))
                    return ce(i("UPIID"));
                await ae($s(w)) && (Xe(i("addedSuccessfully")),
                    await s.replace({
                        name: "Withdraw-Upi"
                    }))
            }
                ;
            return (C, m) => {
                const b = L("NavBar")
                    , T = L("svg-icon")
                    , B = L("van-field");
                return n(),
                    o("div", Mw, [h(b, {
                        title: C.$t("paymentMethod"),
                        "left-arrow": "",
                        onClickLeft: l
                    }, null, 8, ["title"]), e("div", qw, [h(T, {
                        name: "upi"
                    }), E(t(C.$t("UPIInformation")), 1)]), Vw, h(B, {
                        class: "upi-input",
                        modelValue: w.beneficiaryName,
                        "onUpdate:modelValue": m[0] || (m[0] = D => w.beneficiaryName = D),
                        modelModifiers: {
                            trim: !0
                        },
                        maxlength: 30,
                        placeholder: C.$t("phEnterUPIName"),
                        readonly: a(_),
                        onInput: m[1] || (m[1] = D => a(k)(w, "beneficiaryName")),
                        rules: [{
                            required: !0,
                            message: C.$t("phEnterUPIName")
                        }]
                    }, null, 8, ["modelValue", "placeholder", "readonly", "rules"]), Ew, h(B, {
                        class: "upi-input",
                        modelValue: w.accountNo,
                        "onUpdate:modelValue": m[2] || (m[2] = D => w.accountNo = D),
                        modelModifiers: {
                            trim: !0
                        },
                        maxlength: 30,
                        type: "text",
                        placeholder: C.$t("phEnterUPIID")
                    }, null, 8, ["modelValue", "placeholder"]), f(` <div class="addupi_C-title">{{$t('phoneN') }}</div>
        <div class="addupi_C_number">
            <DropDown v-model:typeValue="numberType" ref="dropDown" @changeT="changeT"/>
            <van-field class="upi-input number" v-model.number.trim="number"  type="digit" :placeholder="$t('plsEnterTel')"/>
        </div>
        <div class="tip"><van-icon name="warning-o" size="14" />{{ $t('upiTip1') }}</div> `), e("div", {
                        class: ee(["bind-bank-sumbit", {
                            disable: !R.value
                        }]),
                        onClick: N
                    }, t(C.$t("save")), 3)])
            }
        }
    });
const xw = oe(jw, [["__scopeId", "data-v-8ced09ab"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/AddUpi/index.vue"]])
    , Y$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: xw
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , Hw = {
        class: "addKBZ"
    }
    , Gw = {
        class: "addKBZ-top"
    }
    , Fw = ["src"]
    , zw = {
        class: "addKBZ-item"
    }
    , Kw = {
        class: "label"
    }
    , Qw = {
        class: "selectB"
    }
    , Yw = {
        class: "addKBZ-item"
    }
    , Zw = {
        class: "label"
    }
    , Xw = ["placeholder", "readonly"]
    , Jw = {
        class: "addKBZ-item"
    }
    , ey = {
        class: "label"
    }
    , ty = ["placeholder"]
    , ay = le({
        __name: "index",
        setup(y) {
            const { iseditor: s, onInput: v, checkAccoutNo: c, onLoad: r, makeTxt: i } = dt()
                , { t: p } = Ne()
                , _ = fe()
                , { setLoading: $ } = et()
                , { isOpenWithdraw: k } = yt();
            let l = Re([]);
            const w = I("")
                , d = Re({
                    smsCode: "",
                    withdrawId: 6,
                    bankId: 0,
                    mobileNo: "",
                    beneficiaryName: "",
                    type: "",
                    codeType: Je.addWave
                })
                , R = V(() => !(d.mobileNo.trim().length == 0 || d.bankId == 0 || d.beneficiaryName.trim().length == 0))
                , S = () => d.bankId == 0 ? ce({
                    message: p("addCardMsg1"),
                    wordBreak: "break-word"
                }) : d.beneficiaryName.toString().trim().length == 0 ? ce({
                    message: p("phEnterName"),
                    wordBreak: "break-word"
                }) : d.mobileNo.toString().trim().length == 0 ? ce({
                    message: p("addCardMsg4"),
                    wordBreak: "break-word"
                }) : c(d.mobileNo, p("tel") + p("formatErr")) ? ha(localStorage.getItem("numberType"), d.mobileNo.trim().length) ? !0 : ce({
                    message: p("wrongTel"),
                    wordBreak: "break-word"
                }) : void 0
                , C = gt({
                    content: () => h($t, {
                        type: d.type,
                        "onUpdate:type": D => d.type = D,
                        code: d.smsCode,
                        "onUpdate:code": D => d.smsCode = D,
                        onConfirm: b,
                        codeType: Je.addWave
                    }, null),
                    beforeClose: () => {
                        d.smsCode = ""
                    }
                });
            async function m() {
                if (!R.value)
                    return !1;
                if (S() === !0) {
                    if (!localStorage.getItem("numberType"))
                        return !1;
                    if (d.smsCode = "",
                        k.value)
                        return C.open();
                    await b()
                }
            }
            async function b() {
                $(!0),
                    await ae(Qt(d)) && (C.close(),
                        _.replace({
                            name: "Withdraw",
                            query: {
                                type: "Add"
                            },
                            replace: !0
                        })),
                    $(!1)
            }
            async function T() {
                const D = await ae(wt({
                    withdrawid: 6
                }));
                D && (l = D.data.banklist,
                    w.value = l.length > 0 ? l[0].bankName : "",
                    d.bankId = l.length > 0 ? l[0].bankID : 0)
            }
            T();
            function B() {
                _.replace({
                    name: "Withdraw",
                    query: {
                        type: "Add"
                    }
                })
            }
            return r(d, "beneficiaryName"),
                (D, O) => {
                    const Q = L("NavBar")
                        , W = L("svg-icon");
                    return n(),
                        o("div", Hw, [h(Q, {
                            title: D.$t("addWaveType"),
                            "left-arrow": "",
                            onClickLeft: B
                        }, null, 8, ["title"]), e("div", Gw, [e("img", {
                            src: a($e)("wallet", "hint")
                        }, null, 8, Fw), e("span", null, t(D.$t("WaveTip1")), 1)]), e("div", zw, [e("div", Kw, [h(W, {
                            name: "bankName"
                        }), E(" " + t(D.$t("bankname")), 1)]), e("div", Qw, t(w.value), 1)]), e("div", Yw, [e("div", Zw, [h(W, {
                            name: "user"
                        }), E(" " + t(D.$t("name")), 1)]), _e(e("input", {
                            placeholder: D.$t("phEnterName"),
                            "onUpdate:modelValue": O[0] || (O[0] = F => d.beneficiaryName = F),
                            maxlength: "50",
                            onInput: O[1] || (O[1] = F => a(i)(d, "beneficiaryName")),
                            readonly: a(s)
                        }, null, 40, Xw), [[Ue, d.beneficiaryName, void 0, {
                            trim: !0
                        }]])]), e("div", Jw, [e("div", ey, [h(W, {
                            name: "phone"
                        }), E(" " + t(D.$t("tel")), 1)]), _e(e("input", {
                            placeholder: D.$t("phEnterPayeeTel"),
                            "onUpdate:modelValue": O[2] || (O[2] = F => d.mobileNo = F),
                            maxlength: 12,
                            type: "digit",
                            onInput: O[3] || (O[3] = F => a(v)(d, "mobileNo"))
                        }, null, 40, ty), [[Ue, d.mobileNo, void 0, {
                            trim: !0
                        }]])]), e("div", {
                            class: ee(["addKBZ-btn", {
                                active: R.value
                            }]),
                            onClick: m
                        }, t(D.$t("save")), 3)])
                }
        }
    });
const ny = oe(ay, [["__scopeId", "data-v-8c64dafa"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/AddWave/index.vue"]])
    , Z$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ny
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , sy = y => (We("data-v-9ed9b8ef"),
        y = y(),
        Pe(),
        y)
    , ly = {
        class: "bankCard__container"
    }
    , oy = {
        key: 0,
        class: "bankCard__container-content"
    }
    , iy = {
        class: "bankCard__container-content__card"
    }
    , ry = sy(() => e("div", {
        class: "bankCard__container-content__card-top"
    }, null, -1))
    , cy = {
        class: "bankCard__container-content__card-mid"
    }
    , dy = {
        class: "line"
    }
    , uy = {
        class: "left"
    }
    , vy = {
        class: "right"
    }
    , py = {
        class: "line"
    }
    , _y = {
        class: "left"
    }
    , hy = {
        class: "right"
    }
    , my = {
        class: "line"
    }
    , fy = {
        class: "left"
    }
    , wy = {
        class: "right"
    }
    , yy = {
        key: 1,
        class: "bankCard__container-default"
    }
    , gy = le({
        __name: "index",
        setup(y) {
            const { setLoading: s } = et()
                , v = fe()
                , c = pt()
                , r = V(() => c.getWithdrawal)
                , i = I(!1)
                , p = V(() => c.getWithdrawal.bid.toString())
                , _ = I([]);
            function $() {
                v.replace({
                    name: "Withdraw",
                    query: {
                        bid: p.value
                    }
                })
            }
            const k = Re({
                bid: c.getWithdrawal.bid,
                withdrawid: c.getWithdrawal.type
            });
            function l(S) {
                v.replace({
                    name: "Withdraw",
                    query: {
                        bid: S.bid
                    }
                })
            }
            async function w() {
                i.value = !1,
                    s(!0),
                    await ae(ks(k)) && (k.bid == r.value.bid && (r.value.bid = 0),
                        c.setWithdrawal({
                            ...r.value
                        }),
                        await R()),
                    s(!1)
            }
            const d = Re({
                withdrawid: c.getWithdrawal.type
            });
            async function R() {
                s(!0);
                const S = await ae(_t(d));
                S && (_.value = S.data.withdrawalslist,
                    S.data.withdrawalslist.length > 0 && c.getWithdrawal.bid == 0 || S.data.withdrawalslist.length == 1 ? r.value.bid = S.data.withdrawalslist[0].bid : S.data.withdrawalslist.length == 0 && (r.value.bid = 0),
                    c.setWithdrawal({
                        ...r.value
                    }),
                    c.setWithdrawalslist(S.data.withdrawalslist)),
                    s(!1)
            }
            return Ce(async () => {
                v.currentRoute.value.query.type == "Add" ? await R() : _.value = c.getWithdrawalslist
            }
            ),
                (S, N) => {
                    const C = L("NavBar")
                        , m = L("van-radio")
                        , b = L("van-radio-group")
                        , T = ot("lazy");
                    return n(),
                        o("div", ly, [h(C, {
                            title: S.$t("bankCard"),
                            "left-arrow": "",
                            onClickLeft: $
                        }, null, 8, ["title"]), _.value.length > 0 ? (n(),
                            o("div", oy, [(n(!0),
                                o(ne, null, Se(_.value, B => (n(),
                                    o("div", {
                                        class: "bankCard__container-content__item",
                                        key: B.bid
                                    }, [h(b, {
                                        modelValue: p.value,
                                        "onUpdate:modelValue": N[0] || (N[0] = D => p.value = D)
                                    }, {
                                        default: te(() => [e("div", iy, [ry, e("div", cy, [e("div", dy, [e("div", uy, t(S.$t("bankname")), 1), e("div", vy, t(B.bankName), 1)]), f(` <div class="line" v-if="item.beneficiaryName">
								<div class="left">{{ $t('payeename') }}</div>
								<div class="right">{{ item.beneficiaryName }}</div>
							</div> `), e("div", py, [e("div", _y, t(S.$t("bankcardNo")), 1), e("div", hy, t(B.accountNo), 1)]), e("div", my, [e("div", fy, t(S.$t("tel")), 1), e("div", wy, t(B.mobileNo), 1)])]), e("div", null, [h(m, {
                                            name: `${B.bid.toString()}`,
                                            "icon-size": "18px",
                                            onClick: D => l(B)
                                        }, {
                                            default: te(() => [E(t(S.$t("select")), 1)]),
                                            _: 2
                                        }, 1032, ["name", "onClick"])])])]),
                                        _: 2
                                    }, 1032, ["modelValue"])]))), 128))])) : (n(),
                                        o("div", yy, [h(St, null, {
                                            text: te(() => [e("span", null, t(S.$t("noPaymentMethodsYet")), 1)]),
                                            _: 1
                                        })])), h(Zt, {
                                            type: 1
                                        }), h(nt, {
                                            show: i.value,
                                            "onUpdate:show": N[2] || (N[2] = B => i.value = B),
                                            onConfirm: w,
                                            "show-cancel-btn": !0,
                                            title: S.$t("tipCanNotRetrivedAfterDeleted"),
                                            confirmText: S.$t("confirmDelete"),
                                            cancelText: S.$t("cancel")
                                        }, {
                                            content: te(() => [_e(e("img", {
                                                class: "dialog__content-bottom",
                                                onClick: N[1] || (N[1] = B => i.value = !1)
                                            }, null, 512), [[T, a(ge)("main", "close")]])]),
                                            _: 1
                                        }, 8, ["show", "title", "confirmText", "cancelText"])])
                }
        }
    });
const $y = oe(gy, [["__scopeId", "data-v-9ed9b8ef"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/BankCard/index.vue"]])
    , X$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $y
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , ky = {
        class: "item"
    }
    , by = {
        key: 0,
        class: "line"
    }
    , Cy = le({
        __name: "progress",
        props: {
            state: {
                type: Number,
                required: !0
            },
            isAppealCompleted: {
                type: Boolean,
                required: !1
            }
        },
        setup(y) {
            const s = y
                , { t: v } = Ne()
                , c = [{
                    title: v("c2cState11"),
                    icon: "1"
                }, {
                    title: v("c2cState13"),
                    icon: "2"
                }, {
                    title: v("c2cTip30"),
                    icon: "3"
                }, {
                    title: v("c2cState4"),
                    icon: "4"
                }]
                , r = [{
                    title: v("c2cTip32"),
                    icon: "1"
                }, {
                    title: v("c2cTip33"),
                    icon: "2"
                }, {
                    title: v("c2cState4"),
                    icon: "3"
                }]
                , i = [{
                    title: v("c2cTip32"),
                    icon: "1"
                }, {
                    title: v("c2cTip33"),
                    icon: "2"
                }, {
                    title: v("c2cTip9"),
                    icon: "4"
                }]
                , p = V(() => [1, 9, 11, 13].includes(s.state) ? c : [3].includes(s.state) ? r : [5].includes(s.state) ? i : s.state == 4 ? s.isAppealCompleted ? r : c : []);
            function _($) {
                let k = [];
                switch (s.state) {
                    case 1:
                    case 9:
                        k = [!0, !0, !0, !1];
                        break;
                    case 4:
                        k = [!0, !0, !0, !0];
                        break;
                    case 11:
                        k = [!0, !1, !1, !1];
                        break;
                    case 13:
                        k = [!0, !0, !1, !1];
                        break;
                    case 3:
                        k = [!0, !0, !1];
                        break;
                    case 5:
                        k = [!0, !0, !0];
                        break
                }
                return k[$]
            }
            return ($, k) => p.value.length > 0 ? (n(),
                o("div", {
                    key: 0,
                    class: ee(["progress", [`state_${$.state}`, {
                        isAppealCompleted: $.isAppealCompleted
                    }]])
                }, [(n(!0),
                    o(ne, null, Se(p.value, (l, w) => (n(),
                        o(ne, null, [e("div", ky, [e("span", {
                            class: ee(`icon${_(w) ? l.icon + "_a" : l.icon}`)
                        }, null, 2), e("h6", null, t(l.title), 1)]), w < p.value.length - 1 ? (n(),
                            o("div", by)) : f("v-if", !0)], 64))), 256))], 2)) : f("v-if", !0)
        }
    });
const en = oe(Cy, [["__scopeId", "data-v-90f50022"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/progress.vue"]])
    , Ty = y => (We("data-v-ced8750d"),
        y = y(),
        Pe(),
        y)
    , Iy = {
        class: "c2cDetail__CO"
    }
    , Sy = {
        class: "top"
    }
    , Ny = {
        class: "container"
    }
    , Dy = {
        key: 0,
        class: "time"
    }
    , Ay = {
        key: 1,
        class: "time2"
    }
    , Ry = {
        class: "head"
    }
    , By = {
        class: "tip2"
    }
    , Uy = {
        class: "tip2"
    }
    , Wy = {
        key: 0
    }
    , Py = {
        key: 0,
        class: "operate"
    }
    , Oy = {
        class: "order-q"
    }
    , Ly = {
        class: "y"
    }
    , My = {
        class: "order-q"
    }
    , qy = {
        class: "b"
    }
    , Vy = Ty(() => e("div", {
        class: "line"
    }, null, -1))
    , Ey = {
        class: "tip"
    }
    , jy = le({
        __name: "c2cDetailOther",
        props: {
            OrderDetail: {
                type: null,
                required: !0
            },
            orderNo: {
                type: String,
                required: !0
            }
        },
        emits: ["update:OrderDetail", "update:orderNo"],
        setup(y, { emit: s }) {
            const v = y
                , c = fe()
                , { t: r } = Ne()
                , { OrderDetail: i, orderNo: p } = Ra(v, s)
                , _ = {
                    2: {
                        title: r("c2cState11"),
                        tip1: r("c2cWTip1"),
                        tip2: r("c2cWTip6"),
                        tip3: r("c2cTip31")
                    },
                    11: {
                        title: r("c2cState11"),
                        tip1: r("c2cWTip1"),
                        tip2: r("c2cWTip2"),
                        tip3: r("c2cWTip3")
                    },
                    12: {
                        title: r("c2cState11"),
                        tip1: r("c2cWTip1"),
                        tip2: r("c2cWTip2"),
                        tip3: r("c2cWTip3")
                    }
                }
                , $ = V(() => _[i.value.state])
                , k = () => {
                    c.go(-1)
                }
                , l = I("00:00")
                , w = I(0)
                , d = I(null)
                , R = V(() => [11, 12].includes(i.value.state));
            Ke(() => i.value, D => {
                S(D)
            }
                , {
                    immediate: !0
                });
            function S(D) {
                if (!R.value)
                    return !1;
                const O = D.auditEndTime.replace(/-/g, "/")
                    , Q = D.serviceTime.replace(/-/g, "/");
                w.value = new Date(Q).getTime() - new Date(O).getTime(),
                    clearInterval(d.value),
                    m()
            }
            const N = D => {
                const O = Math.floor(D / 36e5)
                    , Q = Math.floor((D - O * 36e5) / 6e4)
                    , W = Math.floor((D - O * 36e5 - Q * 6e4) / 1e3);
                return `${O ? O.toString().padStart(2, "0") + ":" : ""}${Q.toString().padStart(2, "0")}:${W.toString().padStart(2, "0")}`
            }
                , C = I(5);
            function m() {
                d.value = setInterval(() => {
                    C.value--,
                        w.value += 1e3,
                        l.value = N(w.value),
                        C.value == 0 && (b(i.value.orderNo),
                            C.value = 5)
                }
                    , 1e3)
            }
            const b = async D => {
                const O = await ae(Va({
                    orderNo: D
                }));
                O && (O.data.state == 2 && clearInterval(d.value),
                    i.value = O.data)
            }
                ;
            async function T() {
                await ae(bs({
                    orderNo: i.value.orderNo
                })) && b(i.value.orderNo)
            }
            function B() {
                c.push({
                    name: "Withdraw-c2cCancelWithdrawal",
                    query: {
                        orderAmount: i.value.orderAmount,
                        sellerAccountNo: i.value.sellerAccountNo,
                        createTime: i.value.createTime,
                        orderNo: i.value.orderNo
                    }
                })
            }
            return ft(() => {
                clearInterval(d.value)
            }
            ),
                (D, O) => {
                    var W;
                    const Q = L("NavBar");
                    return n(),
                        o("div", Iy, [e("div", Sy, [h(Q, {
                            title: $.value.title,
                            "left-arrow": "",
                            onClickLeft: k,
                            backgroundColor: "transparent"
                        }, null, 8, ["title"]), f(" 进度条 "), h(en, {
                            state: (W = a(i)) == null ? void 0 : W.state
                        }, null, 8, ["state"]), e("div", Ny, [R.value ? (n(),
                            o("div", Dy, [e("p", null, t($.value.title), 1), e("div", null, [e("span", null, t(l.value), 1)])])) : f("v-if", !0), R.value ? f("v-if", !0) : (n(),
                                o("div", Ay, t(D.$t("c2cState2")), 1))]), e("div", Ry, [e("div", By, t($.value.tip2), 1), e("div", Uy, [E(t($.value.tip3), 1), R.value ? (n(),
                                    o("span", Wy, t(a(i).matchTimeMinutes || 5) + t(D.$t("minute")), 1)) : f("v-if", !0)])]), R.value ? f("v-if", !0) : (n(),
                                        o("div", Py, [e("div", {
                                            class: "CancelW",
                                            onClick: B
                                        }, t(D.$t("concelOrder")), 1), e("div", {
                                            class: "uAmount",
                                            onClick: T
                                        }, t(D.$t("continueM")), 1)]))]), e("div", {
                                            class: ee(["order", ["bgc" + $.value.background]])
                                        }, [e("div", Oy, [e("span", null, t(D.$t("withdrawalA")), 1), e("span", Ly, t(a(ue)(a(i).orderAmount)), 1)]), e("div", My, [e("span", null, "UPI " + t(D.$t("account")), 1), e("span", qy, t(a(i).sellerAccountNo), 1)]), e("div", {
                                            class: "order-id",
                                            onClick: O[0] || (O[0] = F => a(Ae)(a(i).orderNo))
                                        }, [e("span", null, t(a(Wt)(a(i).createTime, "yyyy-MM-dd")), 1), E(t(a(i).orderNo), 1)]), Vy, e("div", Ey, t(D.$t("c2cWTip4")), 1)], 2)])
                }
        }
    });
const xy = oe(jy, [["__scopeId", "data-v-ced8750d"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/components/Wallet/Withdraw/c2cDetailOther.vue"]])
    , ma = y => (We("data-v-0f202033"),
        y = y(),
        Pe(),
        y)
    , Hy = {
        key: 0,
        class: "c2cDetail__C"
    }
    , Gy = {
        class: "title"
    }
    , Fy = {
        key: 0
    }
    , zy = {
        class: "tip1"
    }
    , Ky = {
        key: 0,
        class: "tip2"
    }
    , Qy = {
        key: 1
    }
    , Yy = {
        key: 0,
        class: "accountArry"
    }
    , Zy = {
        class: "con"
    }
    , Xy = {
        class: "order"
    }
    , Jy = {
        class: "order-h"
    }
    , eg = {
        class: "order-q y"
    }
    , tg = {
        key: 0,
        class: "order-q y"
    }
    , ag = {
        key: 1,
        class: "order-q orange"
    }
    , ng = {
        class: "order-t"
    }
    , sg = {
        key: 2,
        class: "order-t"
    }
    , lg = ma(() => e("div", {
        class: "line"
    }, null, -1))
    , og = ma(() => e("span", null, "UTR", -1))
    , ig = {
        key: 4,
        class: "order-tl"
    }
    , rg = {
        key: 0,
        class: "upi"
    }
    , cg = {
        class: "upi-h"
    }
    , dg = ma(() => e("span", null, "UPI", -1))
    , ug = {
        key: 1,
        class: "upi img"
    }
    , vg = {
        class: "upi-h"
    }
    , pg = {
        class: "imgBox"
    }
    , _g = ["onClick"]
    , hg = {
        key: 2,
        class: "img"
    }
    , mg = {
        class: "imgBox"
    }
    , fg = ["onClick"]
    , wg = {
        key: 3,
        class: "img video"
    }
    , yg = {
        class: "v",
        controls: ""
    }
    , gg = ["src"]
    , $g = ["src"]
    , kg = ["src"]
    , bg = le({
        __name: "index",
        setup(y) {
            var z;
            const { t: s } = Ne()
                , v = fe()
                , c = ct()
                , r = Ve()
                , i = {
                    0: {
                        title: s("c2cState0"),
                        tip1: s("c2cTip1"),
                        tip2: s("tipPlaWaitPaciently"),
                        icon: "0",
                        background: 0
                    },
                    1: {
                        title: s("c2cState1"),
                        tip1: s("c2cTip2"),
                        tip2: s("c2cTip3"),
                        icon: "0",
                        background: 1
                    },
                    2: {
                        title: s("c2cState8"),
                        tip1: s("c2cTip4"),
                        tip2: s("tipPlaWaitPaciently"),
                        icon: "6",
                        background: 8
                    },
                    3: {
                        title: s("c2cState3"),
                        tip1: s("c2cTip5"),
                        tip2: s("c2cTip6"),
                        icon: "1",
                        background: 3
                    },
                    4: {
                        title: s("completed"),
                        tip1: s("c2cTip7"),
                        tip2: s("c2cTip8"),
                        icon: "2",
                        background: 4
                    },
                    5: {
                        title: s("c2cTip9"),
                        tip1: s("c2cTip10"),
                        tip2: s("c2cTip11"),
                        icon: "3",
                        background: 5
                    },
                    6: {
                        title: s("cancelled"),
                        tip1: "*****",
                        tip2: "",
                        icon: "4",
                        background: 6
                    },
                    7: {
                        title: s("c2cTip12"),
                        tip1: s("c2cTip1"),
                        tip2: "",
                        icon: "5",
                        background: 7
                    },
                    8: {
                        title: s("withdrawState1"),
                        tip1: s("c2cTip4"),
                        tip2: s("tipPlaWaitPaciently"),
                        icon: "6",
                        background: 8
                    },
                    9: {
                        title: s("rechargeState1"),
                        tip1: s("c2cTip13"),
                        tip2: s("c2cTip14"),
                        icon: "7",
                        background: 9
                    },
                    10: {
                        title: s("c2cState10"),
                        tip1: s("c2cTip21"),
                        tip2: s("c2cTip22"),
                        icon: "8",
                        background: 10
                    },
                    11: {
                        title: s("c2cState11"),
                        tip1: s("c2cWTip1"),
                        tip2: s("c2cWTip2"),
                        tip3: s("c2cWTip3"),
                        icon: "8",
                        background: 11
                    },
                    12: {
                        title: s("c2cState11"),
                        tip1: s("c2cTip21"),
                        tip2: s("c2cTip22"),
                        icon: "8",
                        background: 10
                    },
                    13: {
                        title: s("c2cState13"),
                        tip1: s("c2cTip24"),
                        icon: "0",
                        background: 11
                    },
                    14: {
                        title: s("c2cState14"),
                        tip1: s("c2cTip46"),
                        tip2: s("c2cTip33"),
                        icon: "14",
                        background: 11
                    }
                }
                , p = I(0)
                , _ = I("00:00")
                , $ = I(null)
                , k = I(null)
                , l = I({
                    id: 0,
                    orderNo: "",
                    type: 0,
                    withdrawName: "",
                    createTime: "",
                    orderAmount: 0,
                    realAmount: 0,
                    discountAmount: 0,
                    serviceAmount: 0,
                    state: Number(((z = c.query) == null ? void 0 : z.state) || 0),
                    cancelReasonId: 0,
                    reasonText: "",
                    remark: "",
                    transactionNo: "",
                    sellerAccountNo: "",
                    rechargeFinishTime: ""
                })
                , w = I("")
                , d = V(() => i[l.value.state])
                , R = V(() => l.value.state == 10)
                , S = V(() => [9].includes(l.value.state))
                , N = V(() => [1, 9, 3].includes(l.value.state))
                , C = V(() => [2, 11, 12].includes(l.value.state))
                , m = V(() => [5, 6, 7, 14].includes(l.value.state));
            Ke(() => l.value.state, j => {
                D()
            }
                , {
                    deep: !0
                });
            const b = () => {
                v.back()
            }
                ;
            function T(j, q) {
                if (!j)
                    return;
                let g;
                return q ? g = JSON.parse(j).filter(J => J.fileType == q) : g = JSON.parse(j),
                    g.length == 0 ? !1 : g.map(J => (J.fileUrl = r.ossUrl + "/" + J.fileUrl,
                        J))
            }
            const B = async j => {
                const q = await ae(Va({
                    orderNo: j
                }));
                q && (l.value = q.data)
            }
                ;
            function D() {
                var j;
                if ([1, 13].includes(l.value.state)) {
                    const q = (j = l.value) == null ? void 0 : j.serviceTime.replace(/-/g, "/");
                    if (l.value.state == 1) {
                        const g = l.value.confrimEndTime.replace(/-/g, "/");
                        p.value = new Date(g).getTime() - new Date(q).getTime()
                    } else if (l.value.state == 13) {
                        const g = l.value.matchOutTime.replace(/-/g, "/");
                        p.value = new Date(g).getTime() - new Date(q).getTime()
                    }
                    clearInterval($.value),
                        M()
                } else
                    clearInterval($.value);
                (l.value.state === 7 || l.value.state === 6) && (i[l.value.state].tip1 = l.value.reasonText || "",
                    i[l.value.state].tip2 = l.value.remark || ""),
                    l.value.state === 0 ? (clearInterval(k.value),
                        X()) : clearInterval(k.value),
                    l.value.state === 3 && x()
            }
            const O = async j => {
                await ae(Cs({
                    orderNo: j
                })),
                    B(j)
            }
                , Q = async j => {
                    await ae(Ts({
                        orderNo: j
                    })),
                        B(j)
                }
                , W = j => {
                    const q = Math.floor(j / 36e5)
                        , g = Math.floor((j - q * 36e5) / 6e4)
                        , J = Math.floor((j - q * 36e5 - g * 6e4) / 1e3);
                    return `${q ? q.toString().padStart(2, "0") + ":" : ""}${g.toString().padStart(2, "0")}:${J.toString().padStart(2, "0")}`
                }
                , F = I(5);
            function M() {
                $.value = setInterval(() => {
                    F.value--,
                        p.value > 0 ? (p.value -= 1e3,
                            _.value = W(p.value)) : _.value = "00:00",
                        F.value == 0 && (B(w.value),
                            F.value = 5)
                }
                    , 1e3)
            }
            function X() {
                k.value = setInterval(() => {
                    B(w.value)
                }
                    , 5e3)
            }
            const G = () => {
                Tawk_API.toggle(),
                    window.Tawk_API.setAttributes({
                        order: w.value,
                        store: "withdraw"
                    }, function (j) { })
            }
                , x = () => {
                    let j = "https://embed.tawk.to/6452138631ebfa0fe7fbb175/1hb0ug9qm";
                    if (!document.getElementById("tawk-chatjs")) {
                        var q = document.createElement("script")
                            , g = document.getElementsByTagName("script")[0];
                        q.async = !0,
                            q.src = j,
                            q.charset = "UTF-8",
                            q.setAttribute("crossorigin", "*"),
                            q.id = "tawk-chatjs",
                            g.parentNode.insertBefore(q, g)
                    }
                }
                ;
            function P() {
                v.push({
                    name: "Withdraw-c2cWrongAmount",
                    query: {
                        orderNo: w.value
                    }
                })
            }
            function A(j) {
                ra({
                    images: [j],
                    closeable: !0
                })
            }
            return Ce(() => {
                var j, q;
                w.value = localStorage.getItem("c2cOrderNo") || ((q = (j = c.query) == null ? void 0 : j.order) == null ? void 0 : q.toString()) || "",
                    B(w.value)
            }
            ),
                Ut(() => { }
                ),
                ft(() => {
                    clearInterval($.value),
                        clearInterval(k.value)
                }
                ),
                (j, q) => {
                    var J, K, se, we, Oe, ye, ie, Ee, qe, pe, De, be, he, Me, je;
                    const g = L("NavBar");
                    return C.value ? (n(),
                        o(ne, {
                            key: 1
                        }, [l.value.orderNo != "" ? (n(),
                            Te(xy, {
                                key: 0,
                                orderNo: w.value,
                                "onUpdate:orderNo": q[7] || (q[7] = ke => w.value = ke),
                                OrderDetail: l.value,
                                "onUpdate:OrderDetail": q[8] || (q[8] = ke => l.value = ke)
                            }, null, 8, ["orderNo", "OrderDetail"])) : f("v-if", !0)], 64)) : (n(),
                                o("div", Hy, [e("div", {
                                    class: ee(["header", ["bgc" + d.value.background]])
                                }, [h(g, {
                                    title: "",
                                    "left-arrow": "",
                                    onClickLeft: b,
                                    backgroundColor: "transparent"
                                }), e("div", {
                                    class: ee(["head", ["hicon" + d.value.icon]])
                                }, [e("div", Gy, [E(t(d.value.title) + " ", 1), [1, 13].includes(l.value.state) ? (n(),
                                    o("span", Fy, t(_.value), 1)) : f("v-if", !0)]), e("div", zy, t(d.value.tip1), 1), d.value.tip2 ? (n(),
                                        o("div", Ky, t(d.value.tip2), 1)) : f("v-if", !0), N.value ? (n(),
                                            o("div", Qy, t(j.$t("c2cTip23")), 1)) : f("v-if", !0)], 2), N.value ? (n(),
                                                o("div", Yy, [e("div", {
                                                    class: "account btn",
                                                    onClick: q[0] || (q[0] = ke => O(l.value.orderNo))
                                                }, t(j.$t("confirmTheAccount")), 1), S.value ? (n(),
                                                    o("div", {
                                                        key: 0,
                                                        class: "appeal btn",
                                                        onClick: q[1] || (q[1] = ke => Q(l.value.orderNo))
                                                    }, t(j.$t("appeal")), 1)) : f("v-if", !0), l.value.state == 3 ? (n(),
                                                        o("div", {
                                                            key: 1,
                                                            class: "appeal btn",
                                                            onClick: q[2] || (q[2] = ke => G())
                                                        }, t(j.$t("AppealsAdmin")), 1)) : f("v-if", !0), l.value.state == 1 ? (n(),
                                                            o("div", {
                                                                key: 2,
                                                                class: "wrong btn",
                                                                onClick: q[3] || (q[3] = ke => P())
                                                            }, t(j.$t("c2cState14")), 1)) : f("v-if", !0)])) : f("v-if", !0)], 2), e("div", Zy, [f(" 进度条 "), h(en, {
                                                                state: (J = l.value) == null ? void 0 : J.state,
                                                                isAppealCompleted: (K = l.value) == null ? void 0 : K.isAppealCompleted
                                                            }, null, 8, ["state", "isAppealCompleted"]), e("div", Xy, [e("div", Jy, "New UPI " + t(j.$t("withdraw")), 1), e("div", eg, [e("span", null, t(j.$t("orderAmount")), 1), E(t(a(ue)(l.value.orderAmount)), 1)]), [4, 14].includes(l.value.state) ? (n(),
                                                                o("div", tg, [e("span", null, t(j.$t("actualAmount")), 1), E(t(a(ue)(l.value.realAmount)), 1)])) : f("v-if", !0), m.value ? f("v-if", !0) : (n(),
                                                                    o("div", ag, [e("span", null, t(j.$t("award")), 1), E(t(a(ue)(l.value.discountAmount)), 1)])), e("div", ng, [e("span", null, t(j.$t("orderTime")), 1), E(t(l.value.createTime), 1)]), l.value.state == 14 ? (n(),
                                                                        o("div", sg, [e("span", null, t(j.$t("c2cTip47")), 1), E(t(l.value.lastUpdateTime), 1)])) : f("v-if", !0), lg, R.value ? f("v-if", !0) : (n(),
                                                                            o("div", {
                                                                                key: 3,
                                                                                class: "order-id",
                                                                                onClick: q[4] || (q[4] = ke => a(Ae)(l.value.transactionNo))
                                                                            }, [og, E(t(l.value.transactionNo), 1)])), e("div", {
                                                                                class: "order-id",
                                                                                onClick: q[5] || (q[5] = ke => a(Ae)(l.value.orderNo))
                                                                            }, [e("span", null, t(j.$t("orderNo")), 1), E(t(l.value.orderNo), 1)]), R.value ? f("v-if", !0) : (n(),
                                                                                o("div", ig, [e("span", null, t(j.$t("PaymentTime")), 1), E(t(l.value.rechargeFinishTime), 1)]))]), R.value ? f("v-if", !0) : (n(),
                                                                                    o("div", rg, [e("div", cg, t(j.$t("information")), 1), e("div", {
                                                                                        class: "upi-id",
                                                                                        onClick: q[6] || (q[6] = ke => a(Ae)(l.value.sellerAccountNo))
                                                                                    }, [dg, E(t(l.value.sellerAccountNo), 1)])])), [5, 1, 9, 3, 4, 6].includes(l.value.state) && ((se = l.value) != null && se.rechargeOssUrls) ? (n(),
                                                                                        o("div", ug, [e("div", vg, t(j.$t("c2cTip50")), 1), e("div", pg, [(n(!0),
                                                                                            o(ne, null, Se(T((we = l.value) == null ? void 0 : we.rechargeOssUrls), (ke, He) => (n(),
                                                                                                o("div", {
                                                                                                    class: "imgD",
                                                                                                    key: He,
                                                                                                    style: ia(`background-image: url('${ke == null ? void 0 : ke.fileUrl}');`),
                                                                                                    onClick: re => A(ke == null ? void 0 : ke.fileUrl)
                                                                                                }, null, 12, _g))), 128))])])) : f("v-if", !0), ((Oe = l.value) == null ? void 0 : Oe.state) == 14 && ((ye = l.value) != null && ye.ossUrls) ? (n(),
                                                                                                    o("div", hg, [e("h1", null, t(j.$t("c2cTip48")), 1), e("div", mg, [(n(!0),
                                                                                                        o(ne, null, Se(T((ie = l.value) == null ? void 0 : ie.ossUrls, 1), (ke, He) => (n(),
                                                                                                            o("div", {
                                                                                                                class: "imgD",
                                                                                                                key: He,
                                                                                                                style: ia(`background-image: url('${ke == null ? void 0 : ke.fileUrl}');`),
                                                                                                                onClick: re => A(ke == null ? void 0 : ke.fileUrl)
                                                                                                            }, null, 12, fg))), 128))])])) : f("v-if", !0), ((Ee = l.value) == null ? void 0 : Ee.state) == 14 && T((qe = l.value) == null ? void 0 : qe.ossUrls, 2) ? (n(),
                                                                                                                o("div", wg, [e("h1", null, t(j.$t("c2cTip49")), 1), e("video", yg, [e("source", {
                                                                                                                    src: (De = T((pe = l.value) == null ? void 0 : pe.ossUrls, 2)[0]) == null ? void 0 : De.fileUrl,
                                                                                                                    type: "video/ogg"
                                                                                                                }, null, 8, gg), e("source", {
                                                                                                                    src: (he = T((be = l.value) == null ? void 0 : be.ossUrls, 2)[0]) == null ? void 0 : he.fileUrl,
                                                                                                                    type: "video/mp4"
                                                                                                                }, null, 8, $g), e("source", {
                                                                                                                    src: (je = T((Me = l.value) == null ? void 0 : Me.ossUrls, 2)[0]) == null ? void 0 : je.fileUrl,
                                                                                                                    type: "video/webm"
                                                                                                                }, null, 8, kg)])])) : f("v-if", !0)])]))
                }
        }
    });
const Cg = oe(bg, [["__scopeId", "data-v-0f202033"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/C2cDetail/index.vue"]])
    , J$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Cg
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , Tg = {
        class: "bankCard__container"
    }
    , Ig = {
        key: 0,
        class: "bankCard__container-content"
    }
    , Sg = {
        class: "bankCard__container-content__card"
    }
    , Ng = {
        class: "bankCard__container-content__card-top ar-1px-b"
    }
    , Dg = ["src"]
    , Ag = {
        class: "bankCard__container-content__card-mid"
    }
    , Rg = {
        class: "line"
    }
    , Bg = {
        class: "line"
    }
    , Ug = {
        class: "line"
    }
    , Wg = {
        key: 1,
        class: "bankCard__container-default"
    }
    , Pg = le({
        __name: "index",
        setup(y) {
            const { setLoading: s } = et()
                , v = fe();
            ct();
            const c = pt()
                , r = V(() => c.getWithdrawal);
            I(!1);
            const i = V(() => c.getWithdrawal.bid.toString())
                , p = I([]);
            function _() {
                v.replace({
                    name: "Withdraw",
                    query: {
                        bid: i.value
                    }
                })
            }
            const $ = Re({
                bid: c.getWithdrawal.bid,
                withdrawid: 5
            });
            function k(d) {
                v.replace({
                    name: "Withdraw",
                    query: {
                        bid: d.bid
                    }
                })
            }
            const l = Re({
                withdrawid: 5
            });
            async function w() {
                s(!0);
                const d = await ae(_t(l));
                d && (p.value = d.data.withdrawalslist,
                    d.data.withdrawalslist.length > 0 && c.getWithdrawal.bid == 0 || d.data.withdrawalslist.length == 1 ? r.value.bid = d.data.withdrawalslist[0].bid : d.data.withdrawalslist.length == 0 && (r.value.bid = 0),
                    c.setWithdrawal({
                        ...r.value
                    }),
                    c.setWithdrawalslist(d.data.withdrawalslist)),
                    s(!1)
            }
            return Ce(async () => {
                v.currentRoute.value.query.type == "Add" ? await w() : p.value = c.getWithdrawalslist
            }
            ),
                (d, R) => {
                    const S = L("NavBar")
                        , N = L("van-radio")
                        , C = L("van-radio-group");
                    return n(),
                        o("div", Tg, [h(S, {
                            title: d.$t("paymentMethod"),
                            "left-arrow": "",
                            onClickLeft: _
                        }, null, 8, ["title"]), p.value.length > 0 ? (n(),
                            o("div", Ig, [(n(!0),
                                o(ne, null, Se(p.value, (m, b) => (n(),
                                    o("div", {
                                        class: "bankCard__container-content__item",
                                        key: m.bid
                                    }, [h(C, {
                                        modelValue: i.value,
                                        "onUpdate:modelValue": R[0] || (R[0] = T => i.value = T)
                                    }, {
                                        default: te(() => [e("div", Sg, [e("div", Ng, [e("div", null, [e("img", {
                                            src: a($e)("wallet/withdrawType", `${$.withdrawid}`)
                                        }, null, 8, Dg), E(" " + t(d.$t("paymentMethodOfPix")), 1)]), e("div", null, [h(N, {
                                            name: `${m.bid.toString()}`,
                                            "icon-size": "22px",
                                            onClick: T => k(m)
                                        }, null, 8, ["name", "onClick"])])]), e("div", Ag, [e("div", Rg, t(m.beneficiaryName), 1), e("div", Bg, t(m.accountNo), 1), e("div", Ug, t(m.bankName), 1)]), f(` <div class="delete" @click="onShowDeleteDialog(item)">
							<van-icon name="delete" color="rgba(238, 54, 37, 1)" size="20" />
							{{ $t('delete') }}
						</div> `)])]),
                                        _: 2
                                    }, 1032, ["modelValue"])]))), 128))])) : (n(),
                                        o("div", Wg, [h(St, null, {
                                            text: te(() => [e("span", null, t(d.$t("noPaymentMethodsYet")), 1)]),
                                            _: 1
                                        })])), h(Zt, {
                                            type: 5
                                        }), f(` <Dialog
			v-model:show="delelteDialogShow"
			@confirm="onDelete"
			:show-cancel-btn="true"
			:title="$t('tipCanNotRetrivedAfterDeleted')"
			:confirmText="$t('confirmDelete')"
			:cancelText="$t('cancel')"
		>
			<template #header>
				<img v-lazy="getIconsPublic('common', 'warn')" />
			</template>
			<template #content>
				<img v-lazy="getIconsPublic('common', 'closeGrey')" class="dialog__content-bottom" @click="delelteDialogShow = false" />
			</template>
		</Dialog> `)])
                }
        }
    });
const Og = oe(Pg, [["__scopeId", "data-v-abf3326c"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/PIX/index.vue"]])
    , ek = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Og
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , Lg = y => (We("data-v-290c4222"),
        y = y(),
        Pe(),
        y)
    , Mg = {
        class: "type4_C"
    }
    , qg = {
        class: "type4_C-list"
    }
    , Vg = {
        class: "header-title"
    }
    , Eg = ["onClick"]
    , jg = {
        key: 0,
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none"
    }
    , xg = Lg(() => e("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M60 30C60 46.5686 46.5686 60 30 60C13.4314 60 0 46.5686 0 30C0 13.4314 13.4314 0 30 0C46.5686 0 60 13.4314 60 30ZM14.4 34.2149L19.3014 29.0266C20.9353 30.363 24.2029 33.2714 27.4705 37.2807C27.5276 37.3507 27.7006 36.9707 28.0345 36.2374C29.4965 33.0269 34.0423 23.0442 45.4425 14.4053C45.5467 14.3263 45.5229 15.1444 45.4865 16.397C45.4534 17.5342 45.41 19.0295 45.4425 20.5367C45.5024 23.3195 45.9093 26.1966 45.9093 26.1966C45.9093 26.1966 39.374 27.8474 28.1707 46.0063C28.1442 46.0494 27.8296 45.6959 27.2806 45.0789C25.2645 42.8134 20.0868 36.9951 14.4 34.2149Z",
        fill: "var(--main-color)"
    }, null, -1))
    , Hg = [xg]
    , Gg = {
        class: "type4-body"
    }
    , Fg = {
        class: "type4-body-id"
    }
    , zg = {
        key: 1,
        class: "noData"
    }
    , Kg = le({
        __name: "index",
        setup(y) {
            const s = fe()
                , v = ct()
                , c = s.currentRoute.value.query.Type4name
                , r = I([])
                , i = I(null)
                , p = () => {
                    const w = r.value.find(d => {
                        d.bid == i.value
                    }
                    ) ? i.value : 0;
                    s.replace({
                        name: "Withdraw",
                        query: {
                            bid: w,
                            type: 22
                        }
                    })
                }
                , _ = l => {
                    s.replace({
                        name: "Withdraw",
                        query: {
                            bid: l,
                            type: 22
                        }
                    })
                }
                , $ = async () => {
                    s.replace({
                        name: "Withdraw-AddRsnPay",
                        query: {
                            Type4name: c
                        }
                    })
                }
                , k = async () => {
                    var w;
                    const l = await ae(_t({
                        withdrawid: 22
                    }));
                    l && (r.value = ((w = l.data) == null ? void 0 : w.withdrawalslist) || [])
                }
                ;
            return Ce(() => {
                i.value = v.query.bid || 0,
                    k()
            }
            ),
                (l, w) => {
                    const d = L("NavBar")
                        , R = ot("throttle-click");
                    return n(),
                        o("div", Mg, [h(d, {
                            title: a(c) + l.$t("paymentMethod"),
                            "left-arrow": "",
                            onClickLeft: p
                        }, null, 8, ["title"]), e("div", qg, [r.value.length ? (n(!0),
                            o(ne, {
                                key: 0
                            }, Se(r.value, (S, N) => (n(),
                                o("div", {
                                    key: N,
                                    class: "type4_C-item"
                                }, [e("div", {
                                    class: ee(["header", `${S.walletName}`])
                                }, [e("div", Vg, t(S.bankName), 1), e("div", {
                                    class: ee(["select-btn", {
                                        isSelect: S.bid == i.value
                                    }]),
                                    onClick: C => _(S.bid)
                                }, [S.bid == i.value ? (n(),
                                    o("svg", jg, Hg)) : f("v-if", !0)], 10, Eg)], 2), e("div", Gg, [e("div", Fg, t(S.mobileNo), 1)])]))), 128)) : _e((n(),
                                        o("div", zg, [E(t(l.$t("upiAddPaymentMethod")), 1)])), [[R, {
                                            handler: $,
                                            wait: 1e3
                                        }]])])])
                }
        }
    });
const Qg = oe(Kg, [["__scopeId", "data-v-290c4222"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/RsnPay/index.vue"]])
    , tk = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Qg
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , Yg = y => (We("data-v-8da75fee"),
        y = y(),
        Pe(),
        y)
    , Zg = {
        class: "type4_C"
    }
    , Xg = {
        class: "type4_C-list"
    }
    , Jg = {
        class: "header-title"
    }
    , e0 = ["onClick"]
    , t0 = {
        key: 0,
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none"
    }
    , a0 = Yg(() => e("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M60 30C60 46.5686 46.5686 60 30 60C13.4314 60 0 46.5686 0 30C0 13.4314 13.4314 0 30 0C46.5686 0 60 13.4314 60 30ZM14.4 34.2149L19.3014 29.0266C20.9353 30.363 24.2029 33.2714 27.4705 37.2807C27.5276 37.3507 27.7006 36.9707 28.0345 36.2374C29.4965 33.0269 34.0423 23.0442 45.4425 14.4053C45.5467 14.3263 45.5229 15.1444 45.4865 16.397C45.4534 17.5342 45.41 19.0295 45.4425 20.5367C45.5024 23.3195 45.9093 26.1966 45.9093 26.1966C45.9093 26.1966 39.374 27.8474 28.1707 46.0063C28.1442 46.0494 27.8296 45.6959 27.2806 45.0789C25.2645 42.8134 20.0868 36.9951 14.4 34.2149Z",
        fill: "var(--main-color)"
    }, null, -1))
    , n0 = [a0]
    , s0 = {
        class: "type4-body"
    }
    , l0 = {
        class: "type4-body-name"
    }
    , o0 = {
        class: "type4-body-id"
    }
    , i0 = {
        key: 1,
        class: "noData"
    }
    , r0 = {
        class: "type4_C-addbtn"
    }
    , c0 = le({
        __name: "index",
        setup(y) {
            const s = fe()
                , v = ct()
                , c = s.currentRoute.value.query.Type4name
                , r = Number(s.currentRoute.value.query.withdrawType)
                , i = I([])
                , p = I(null)
                , _ = () => {
                    const d = i.value.find(R => {
                        R.bid == p.value
                    }
                    ) ? p.value : 0;
                    s.replace({
                        name: "Withdraw",
                        query: {
                            bid: d,
                            type: r
                        }
                    })
                }
                , $ = w => {
                    s.replace({
                        name: "Withdraw",
                        query: {
                            bid: w,
                            type: r
                        }
                    })
                }
                , k = async () => {
                    s.replace({
                        name: "Withdraw-AddType4",
                        query: {
                            Type4name: c,
                            withdrawType: r
                        }
                    })
                }
                , l = async () => {
                    var d;
                    const w = await ae(_t({
                        withdrawid: r
                    }));
                    w && (i.value = ((d = w.data) == null ? void 0 : d.withdrawalslist) || [])
                }
                ;
            return Ce(() => {
                p.value = v.query.bid || 0,
                    l()
            }
            ),
                (w, d) => {
                    const R = L("NavBar")
                        , S = ot("throttle-click");
                    return n(),
                        o("div", Zg, [h(R, {
                            title: a(c) + w.$t("paymentMethod"),
                            "left-arrow": "",
                            onClickLeft: _
                        }, null, 8, ["title"]), e("div", Xg, [i.value.length ? (n(!0),
                            o(ne, {
                                key: 0
                            }, Se(i.value, (N, C) => (n(),
                                o("div", {
                                    key: C,
                                    class: "type4_C-item"
                                }, [e("div", {
                                    class: ee(["header", `${N.walletName}`])
                                }, [e("div", Jg, t(N.walletName), 1), e("div", {
                                    class: ee(["select-btn", {
                                        isSelect: N.bid == p.value
                                    }]),
                                    onClick: m => $(N.bid)
                                }, [N.bid == p.value ? (n(),
                                    o("svg", t0, n0)) : f("v-if", !0)], 10, e0)], 2), e("div", s0, [e("div", l0, t(N.beneficiaryName), 1), e("div", o0, t(N.mobileNO), 1)])]))), 128)) : _e((n(),
                                        o("div", i0, [E(t(w.$t("upiAddPaymentMethod")), 1)])), [[S, {
                                            handler: k,
                                            wait: 1e3
                                        }]])]), _e((n(),
                                            o("div", r0, [E(t(w.$t("upiAddPaymentMethod")), 1)])), [[S, {
                                                handler: k,
                                                wait: 1e3
                                            }]])])
                }
        }
    });
const d0 = oe(c0, [["__scopeId", "data-v-8da75fee"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/Type4/index.vue"]])
    , ak = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: d0
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , u0 = {
        class: "USDT__container"
    }
    , v0 = {
        key: 0,
        class: "USDT__container-content"
    }
    , p0 = {
        class: "USDT__container-content__card"
    }
    , _0 = {
        class: "USDT__container-content__card-top"
    }
    , h0 = {
        class: "USDT__container-content__card-mid ar-1px-b"
    }
    , m0 = {
        key: 1,
        class: "USDT__container-default"
    }
    , f0 = le({
        __name: "index",
        setup(y) {
            const { setLoading: s } = et()
                , { getUserInfo: v } = Kt()
                , c = Ft();
            v({
                signature: c.token
            });
            const r = fe()
                , i = pt()
                , p = i.getWithdrawal;
            I(!1);
            const _ = V(() => i.getWithdrawal.bid.toString())
                , $ = I([]);
            Re({
                bid: i.getWithdrawal.bid,
                withdrawid: i.getWithdrawal.type
            });
            function k(R) {
                r.replace({
                    name: "Withdraw",
                    query: {
                        bid: R.bid
                    }
                })
            }
            const l = Re({
                withdrawid: i.getWithdrawal.type
            });
            async function w() {
                s(!0);
                const R = await ae(_t(l));
                R && ($.value = R.data.withdrawalslist,
                    R.data.withdrawalslist.length > 0 && i.getWithdrawal.bid == 0 || R.data.withdrawalslist.length == 1 ? p.bid = R.data.withdrawalslist[0].bid : R.data.withdrawalslist.length == 0 && (p.bid = 0),
                    i.setWithdrawal({
                        ...p
                    }),
                    i.setWithdrawalslist(R.data.withdrawalslist)),
                    s(!1)
            }
            Ce(async () => {
                r.currentRoute.value.query.type == "Add" ? await w() : $.value = i.getWithdrawalslist
            }
            );
            function d() {
                r.replace({
                    name: "Withdraw",
                    query: {
                        bid: _.value
                    }
                })
            }
            return (R, S) => {
                const N = L("NavBar")
                    , C = L("svg-icon")
                    , m = L("van-radio")
                    , b = L("van-radio-group");
                return n(),
                    o("div", u0, [h(N, {
                        title: R.$t("usdtAddr"),
                        "left-arrow": "",
                        onClickLeft: d
                    }, null, 8, ["title"]), $.value.length > 0 ? (n(),
                        o("div", v0, [(n(!0),
                            o(ne, null, Se($.value, T => (n(),
                                o("div", {
                                    class: "USDT__container-content__item",
                                    key: T.bid
                                }, [h(b, {
                                    modelValue: _.value,
                                    "onUpdate:modelValue": S[0] || (S[0] = B => _.value = B)
                                }, {
                                    default: te(() => [e("div", p0, [e("div", _0, [h(C, {
                                        name: "bankHeader"
                                    }), h(C, {
                                        name: "usdtLogo3"
                                    })]), e("div", h0, [e("span", null, t(T.accountNo), 1), e("span", null, t(T.usdtRemarkName), 1)]), e("div", null, [f("这是假的"), h(m, {
                                        name: `${T.bid.toString()}`,
                                        "icon-size": "18px",
                                        onClick: B => k(T)
                                    }, {
                                        default: te(() => [E(t(R.$t("select")), 1)]),
                                        _: 2
                                    }, 1032, ["name", "onClick"]), f(` <div @click="onShowDeleteDialog(item)">
								<img :src="getIcons('wallet/withdraw', 'delete')" />{{ $t('delete') }}
							</div> `)])])]),
                                    _: 2
                                }, 1032, ["modelValue"])]))), 128))])) : (n(),
                                    o("div", m0, [h(St, null, {
                                        text: te(() => [e("span", null, t(R.$t("noPaymentMethodsYet")), 1)]),
                                        _: 1
                                    })])), h(Zt, {
                                        type: 3
                                    }), f(` <Dialog
			v-model:show="delelteDialogShow"
			@confirm="onDelete"
			:show-cancel-btn="true"
			:title="$t('tipCanNotRetrivedAfterDeleted')"
			:confirmText="$t('confirmDelete')"
			:cancelText="$t('cancel')"
		>
			<template #content>
				<img v-lazy="getIcons('main', 'close')" class="dialog__content-bottom" @click="delelteDialogShow = false" />
			</template>
		</Dialog> `)])
            }
        }
    });
const w0 = oe(f0, [["__scopeId", "data-v-1cef303f"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/USDT/index.vue"]])
    , nk = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: w0
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , y0 = {
        class: "upi_C"
    }
    , g0 = {
        class: "upi_C-list"
    }
    , $0 = {
        class: "header"
    }
    , k0 = {
        class: "header-title"
    }
    , b0 = ["onClick"]
    , C0 = {
        class: "upi-body"
    }
    , T0 = {
        class: "upi-body-name"
    }
    , I0 = {
        class: "upi-body-id"
    }
    , S0 = {
        class: "upi-body-id"
    }
    , N0 = {
        class: "upi_C-addbtn"
    }
    , D0 = le({
        __name: "index",
        setup(y) {
            const s = fe()
                , v = ct()
                , c = I([])
                , r = I(null)
                , i = () => {
                    const l = c.value.find(w => {
                        w.bid == r.value
                    }
                    ) ? r.value : 0;
                    s.replace({
                        name: "Withdraw",
                        query: {
                            bid: l,
                            type: 2
                        }
                    })
                }
                , p = k => {
                    s.replace({
                        name: "Withdraw",
                        query: {
                            bid: k,
                            type: 2
                        }
                    })
                }
                , _ = async () => {
                    s.replace({
                        name: "Withdraw-AddUpi"
                    })
                }
                , $ = async () => {
                    var l;
                    const k = await ae(_t({
                        withdrawid: 2
                    }));
                    k && (c.value = ((l = k.data) == null ? void 0 : l.withdrawalslist) || [])
                }
                ;
            return Ce(() => {
                r.value = v.query.bid || 0,
                    $()
            }
            ),
                (k, l) => {
                    const w = L("NavBar")
                        , d = ot("throttle-click");
                    return n(),
                        o("div", y0, [h(w, {
                            title: k.$t("upiPaymentMethod"),
                            "left-arrow": "",
                            onClickLeft: i
                        }, null, 8, ["title"]), e("div", g0, [c.value.length ? (n(!0),
                            o(ne, {
                                key: 0
                            }, Se(c.value, (R, S) => (n(),
                                o("div", {
                                    key: S,
                                    class: "upi_C-item"
                                }, [e("div", $0, [e("div", k0, t(k.$t("upiCollectMoney")), 1), e("div", {
                                    class: ee(["select-btn", {
                                        isSelect: R.bid == r.value
                                    }]),
                                    onClick: N => p(R.bid)
                                }, null, 10, b0)]), e("div", C0, [e("div", T0, t(R.upiName), 1), e("div", I0, t(R.upiAccount), 1), e("div", S0, t(R.mobileNo), 1)])]))), 128)) : (n(),
                                    Te(St, {
                                        key: 1
                                    }, {
                                        text: te(() => [e("span", null, t(k.$t("noPaymentMethodsYet")), 1)]),
                                        _: 1
                                    }))]), _e((n(),
                                        o("div", N0, [E(t(k.$t("upiAddPaymentMethod")), 1)])), [[d, {
                                            handler: _,
                                            wait: 1e3
                                        }]])])
                }
        }
    });
const A0 = oe(D0, [["__scopeId", "data-v-68a41569"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/Upi/index.vue"]])
    , sk = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: A0
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , R0 = {
        class: "cancelW"
    }
    , B0 = {
        class: "orderInfo"
    }
    , U0 = {
        class: "b"
    }
    , W0 = {
        class: "reason"
    }
    , P0 = {
        class: "fail"
    }
    , O0 = {
        class: "van-dialog__content-title"
    }
    , L0 = {
        class: "van-dialog__content-note"
    }
    , M0 = le({
        __name: "index",
        setup(y) {
            const { t: s } = Ne()
                , v = fe()
                , c = ct()
                , r = I()
                , i = I("0")
                , p = I(!1)
                , _ = I("")
                , $ = V(() => {
                    var m;
                    return i.value == "0" ? _.value : (m = r.value.find(b => b.id == i.value)) == null ? void 0 : m.reasonText
                }
                )
                , k = () => {
                    v.go(-1)
                }
                , l = I("")
                , w = I("")
                , d = I("")
                , R = I("");
            async function S() {
                const m = await ae(Ba({
                    type: 1
                }));
                m && (r.value = m.data)
            }
            async function N() {
                await ae(Is({
                    orderNo: R.value,
                    cancelReason: $.value,
                    reamrk: ""
                })) && (p.value = !1,
                    k())
            }
            async function C() {
                if (i.value == "0" && _.value.trim().length == 0) {
                    ce(s("enterOtherReason"));
                    return
                }
                p.value = !0
            }
            return Ce(() => {
                var m, b, T, B, D, O, Q, W;
                l.value = ((b = (m = c.query) == null ? void 0 : m.orderAmount) == null ? void 0 : b.toString()) || "",
                    w.value = ((B = (T = c.query) == null ? void 0 : T.sellerAccountNo) == null ? void 0 : B.toString()) || "",
                    d.value = ((O = (D = c.query) == null ? void 0 : D.createTime) == null ? void 0 : O.toString()) || "",
                    R.value = ((W = (Q = c.query) == null ? void 0 : Q.orderNo) == null ? void 0 : W.toString()) || "",
                    S()
            }
            ),
                (m, b) => {
                    const T = L("NavBar")
                        , B = L("van-radio")
                        , D = L("van-radio-group")
                        , O = L("van-field")
                        , Q = L("van-dialog")
                        , W = ot("lazy");
                    return n(),
                        o("div", R0, [h(T, {
                            title: "取消订单",
                            "left-arrow": "",
                            onClickLeft: k,
                            backgroundColor: "transparent"
                        }), e("div", B0, [e("div", null, [e("span", null, t(m.$t("withdrawalA")), 1), e("span", U0, t(a(ue)(l.value)), 1)]), e("div", null, [e("span", null, "UPI " + t(m.$t("account")), 1), e("span", null, t(w.value), 1)]), e("div", null, [e("span", null, t(a(Wt)(d.value, "yyyy-MM-dd")), 1), e("span", {
                            class: "copy",
                            onClick: b[0] || (b[0] = F => a(Ae)(R.value))
                        }, t(R.value), 1)])]), e("div", W0, [e("h2", null, t(m.$t("cancelReason")), 1), h(D, {
                            modelValue: i.value,
                            "onUpdate:modelValue": b[1] || (b[1] = F => i.value = F),
                            shape: "dot",
                            "checked-color": "#ee0a24"
                        }, {
                            default: te(() => [(n(!0),
                                o(ne, null, Se(r.value, (F, M) => (n(),
                                    Te(B, {
                                        key: M,
                                        name: F.id.toString()
                                    }, {
                                        default: te(() => [E(t(F.reasonText), 1)]),
                                        _: 2
                                    }, 1032, ["name"]))), 128)), h(B, {
                                        name: "0"
                                    }, {
                                        default: te(() => [E(t(m.$t("other")), 1)]),
                                        _: 1
                                    })]),
                            _: 1
                        }, 8, ["modelValue"]), h(O, {
                            class: "textarea",
                            disabled: i.value != "0",
                            modelValue: _.value,
                            "onUpdate:modelValue": b[2] || (b[2] = F => _.value = F),
                            rows: "3",
                            autosize: "",
                            type: "textarea",
                            maxlength: "150",
                            placeholder: m.$t("enterOtherReason")
                        }, null, 8, ["disabled", "modelValue", "placeholder"])]), e("div", {
                            class: "cancel",
                            onClick: C
                        }, t(m.$t("confirmCancel")), 1), h(Q, {
                            show: p.value,
                            "onUpdate:show": b[4] || (b[4] = F => p.value = F),
                            "show-confirm-button": !1,
                            "z-index": "100",
                            closeOnClickOverlay: !0
                        }, {
                            default: te(() => [_e(e("img", P0, null, 512), [[W, a($e)("wallet/recharge", "tip")]]), e("div", O0, t(m.$t("cancelW")), 1), e("div", L0, [e("span", null, t(m.$t("c2cWTip11")), 1)]), e("div", {
                                class: "van-dialog__content-btn",
                                onClick: N
                            }, t(m.$t("confirmCancel")), 1), _e(e("img", {
                                class: "close",
                                onClick: b[3] || (b[3] = F => p.value = !1)
                            }, null, 512), [[W, a(ge)("main", "close")]])]),
                            _: 1
                        }, 8, ["show"])])
                }
        }
    });
const q0 = oe(M0, [["__scopeId", "data-v-522a488b"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/c2cCancelWithdrawal/index.vue"]])
    , lk = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: q0
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , V0 = {
        class: "wrongA"
    }
    , E0 = {
        class: "head"
    }
    , j0 = {
        class: "content"
    }
    , x0 = {
        class: "amount"
    }
    , H0 = {
        class: "input"
    }
    , G0 = {
        class: "place-div"
    }
    , F0 = {
        class: "img"
    }
    , z0 = {
        class: "uploadImg"
    }
    , K0 = {
        class: "tip"
    }
    , Q0 = {
        class: "img video"
    }
    , Y0 = {
        class: "uploadImg"
    }
    , Z0 = {
        key: 0,
        class: "v",
        controls: ""
    }
    , X0 = ["src"]
    , J0 = ["src"]
    , e$ = ["src"]
    , t$ = {
        key: 1,
        class: "videoBox loading"
    }
    , a$ = le({
        __name: "index",
        setup(y) {
            var m;
            const s = fe()
                , { t: v } = Ne()
                , c = V(() => Ve().getDollarSign)
                , r = I([])
                , i = I([])
                , p = I([])
                , _ = I()
                , $ = I()
                , k = I(!1)
                , l = I({
                    orderNo: (m = s.currentRoute.value.query) == null ? void 0 : m.orderNo,
                    realAmount: 0,
                    ossUrls: [{}]
                })
                , w = V(() => {
                    var b;
                    return !(((b = l.value.orderNo) == null ? void 0 : b.toString().trim().length) == 0 || +(l.value.realAmount <= 0) || p.value.length == 0 || k.value)
                }
                )
                , d = async b => {
                    const T = new FormData;
                    (b == null ? void 0 : b.length) > 0 ? b.forEach(D => {
                        T.append("files", D.file)
                    }
                    ) : T.append("files", b.file),
                        (await ae(La(T))).data.forEach(D => {
                            p.value.push(D.src)
                        }
                        )
                }
                , R = (b, T) => (p.value.filter((B, D) => {
                    T.index == D && p.value.splice(D, 1)
                }
                ),
                    !0)
                , S = async b => {
                    k.value = !0;
                    const T = new FormData;
                    T.append("files", b.file);
                    const B = await ae(Ss(T));
                    B && (_.value = B.data[0].ossHttp + "/" + B.data[0].src,
                        $.value = B.data[0].src),
                        k.value = !1
                }
                ;
            async function N() {
                if (!w.value)
                    return;
                if (k.value)
                    return ce({
                        message: v("c2cTip45"),
                        wordBreak: "break-word"
                    });
                l.value.ossUrls.length = 0,
                    p.value.forEach(B => {
                        l.value.ossUrls.push({
                            fileType: 1,
                            fileUrl: B
                        })
                    }
                    ),
                    $.value && l.value.ossUrls.push({
                        fileType: 2,
                        fileUrl: $.value
                    });
                const [b, T] = await Wa(Ns(l.value));
                T.code == 0 ? C(v("submitSuccess")) : T.msgCode == "281" && T.code == 1 ? C(T.msg) : Ht(T)
            }
            function C(b) {
                ce({
                    message: b,
                    wordBreak: "break-word"
                }),
                    setTimeout(() => {
                        s.replace({
                            name: "Withdraw-C2cDetail",
                            query: {
                                order: l.value.orderNo
                            }
                        })
                    }
                        , 2e3)
            }
            return (b, T) => {
                const B = L("NavBar")
                    , D = L("van-field")
                    , O = L("van-uploader")
                    , Q = L("van-icon");
                return n(),
                    o("div", V0, [e("div", E0, [h(B, {
                        title: "",
                        "left-arrow": "",
                        onClickLeft: T[0] || (T[0] = () => a(s).back()),
                        backgroundColor: "transparent"
                    }), e("h1", null, t(b.$t("c2cState14")), 1), e("div", null, t(b.$t("c2cTip35")), 1), e("div", null, t(b.$t("c2cTip36")), 1)]), e("div", j0, [e("div", x0, [e("h1", null, t(b.$t("c2cTip37")), 1), e("p", null, t(b.$t("c2cTip38")), 1), e("div", H0, [e("div", G0, t(c.value), 1), h(D, {
                        modelValue: l.value.realAmount,
                        "onUpdate:modelValue": T[1] || (T[1] = W => l.value.realAmount = W),
                        modelModifiers: {
                            number: !0
                        },
                        center: "",
                        type: "digit",
                        placeholder: b.$t("enterAmount"),
                        class: "inp"
                    }, null, 8, ["modelValue", "placeholder"])])]), e("div", F0, [e("h1", null, t(b.$t("c2cTip39")) + " (" + t(r.value.length) + "/3) ", 1), h(O, {
                        modelValue: r.value,
                        "onUpdate:modelValue": T[2] || (T[2] = W => r.value = W),
                        multiple: "",
                        "max-count": 3,
                        "max-size": 5e3 * 1024,
                        onOversize: T[3] || (T[3] = () => a(At)(b.$t("C2Cuploadtip2"))),
                        accept: "image/*",
                        "after-read": d,
                        "before-delete": R
                    }, {
                        default: te(() => [e("div", z0, t(b.$t("c2cTip40")), 1)]),
                        _: 1
                    }, 8, ["modelValue"]), e("div", K0, [h(Q, {
                        name: "warning-o",
                        size: "18"
                    }), E(t(b.$t("c2cTip41")), 1)])]), e("div", Q0, [e("h1", null, t(b.$t("c2cTip42")) + " (" + t(i.value.length) + "/1) ", 1), k.value ? f("v-if", !0) : (n(),
                        Te(O, {
                            key: 0,
                            modelValue: i.value,
                            "onUpdate:modelValue": T[4] || (T[4] = W => i.value = W),
                            "max-count": 1,
                            "max-size": 5e4 * 1024,
                            onOversize: T[5] || (T[5] = () => a(At)(b.$t("c2cTip51"))),
                            accept: "video/*",
                            "after-read": S
                        }, {
                            "preview-cover": te(({ file: W }) => [_.value ? (n(),
                                o("video", Z0, [e("source", {
                                    src: _.value,
                                    type: "video/ogg"
                                }, null, 8, X0), e("source", {
                                    src: _.value,
                                    type: "video/mp4"
                                }, null, 8, J0), e("source", {
                                    src: _.value,
                                    type: "video/webm"
                                }, null, 8, e$)])) : f("v-if", !0)]),
                            default: te(() => [e("div", Y0, t(b.$t("c2cTip43")), 1)]),
                            _: 1
                        }, 8, ["modelValue"])), k.value ? (n(),
                            o("div", t$, t(b.$t("c2cTip44")), 1)) : f("v-if", !0)]), e("div", {
                                class: ee(["cmdBth", {
                                    active: w.value
                                }]),
                                onClick: N
                            }, t(b.$t("c2cState14")), 3)])])
            }
        }
    });
const n$ = oe(a$, [["__scopeId", "data-v-5e595a70"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/Withdraw/c2cWrongAmount/index.vue"]])
    , ok = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: n$
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , bt = y => (We("data-v-9bca0648"),
        y = y(),
        Pe(),
        y)
    , s$ = {
        class: "WHD__container"
    }
    , l$ = ["src"]
    , o$ = {
        class: "WHD__container-body"
    }
    , i$ = {
        class: "container"
    }
    , r$ = {
        class: "top ar-1px-b"
    }
    , c$ = ["src"]
    , d$ = bt(() => e("span", null, "Bank Card 提现", -1))
    , u$ = Gt('<div class="item" data-v-9bca0648><div data-v-9bca0648><span data-v-9bca0648>订单金额</span><span class="yellow" data-v-9bca0648>$8888.88</span></div><div data-v-9bca0648><span data-v-9bca0648>扣除金额</span><span class="black" data-v-9bca0648>$8888.88</span></div><div data-v-9bca0648><span data-v-9bca0648>到账金额</span><span class="black" data-v-9bca0648>$8888.88</span></div><div data-v-9bca0648><span data-v-9bca0648>订单时间</span><span data-v-9bca0648>2022-06-01</span></div></div>', 1)
    , v$ = {
        class: "mImg"
    }
    , p$ = ["src"]
    , _$ = {
        class: "item"
    }
    , h$ = bt(() => e("span", null, "UTR", -1))
    , m$ = bt(() => e("span", null, "202246892345", -1))
    , f$ = bt(() => e("span", null, "订单号", -1))
    , w$ = bt(() => e("span", null, "2022102518543345000113", -1))
    , y$ = bt(() => e("span", null, "支付时间", -1))
    , g$ = bt(() => e("span", null, "2022-06-20 15：15：16", -1))
    , $$ = Gt('<div class="containerB" data-v-9bca0648><div class="top ar-1px-b" data-v-9bca0648><!-- &lt;img :src=&quot;getIcons(&#39;wallet/withdraw/withdrawHistory&#39;, &#39;bc&#39;)&quot; /&gt; --><span data-v-9bca0648>银行名称</span></div><div class="item" data-v-9bca0648><div data-v-9bca0648><span class="red" data-v-9bca0648>Account Name</span><span data-v-9bca0648>SAWARN TELECOM</span></div><div data-v-9bca0648><span class="red" data-v-9bca0648>Bank Number</span><span data-v-9bca0648>0005123100000315</span></div><div data-v-9bca0648><span class="red" data-v-9bca0648>Order Number</span><span data-v-9bca0648>2022102518543345000113</span></div></div></div>', 1)
    , k$ = le({
        __name: "index",
        setup(y) {
            const s = fe();
            function v() {
                s.back()
            }
            const c = history.state.paramValue || 0;
            return (r, i) => {
                const p = L("NavBar")
                    , _ = L("svg-icon");
                return n(),
                    o("div", s$, [h(p, {
                        title: "",
                        "left-arrow": "",
                        onClickLeft: v,
                        classN: `bg${a(c)}`
                    }, null, 8, ["classN"]), e("div", {
                        class: ee(["WHD__container-header", `bg${a(c)}`])
                    }, [e("div", null, [e("h1", null, t(r.$t(a(rt)(a(Le).WithdrawState, a(c)))), 1), e("span", null, t(r.$t(a(rt)(a(Le).WStateCorrelationT, a(c)))), 1)]), e("img", {
                        src: a($e)("wallet/withdraw/withdrawHistory/state", `${a(c)}`)
                    }, null, 8, l$)], 2), e("div", o$, [e("div", i$, [e("div", r$, [e("img", {
                        src: a($e)("wallet/withdraw/withdrawHistory", "bc")
                    }, null, 8, c$), d$]), u$, e("div", v$, [e("img", {
                        src: a($e)("wallet/withdraw/withdrawHistory", "moonBar")
                    }, null, 8, p$)]), e("div", _$, [e("div", null, [h$, m$, h(_, {
                        onClick: i[0] || (i[0] = $ => a(Ae)("1414"))
                    })]), e("div", null, [f$, w$, h(_, {
                        onClick: i[1] || (i[1] = $ => a(Ae)("1414"))
                    })]), e("div", null, [y$, g$, h(_, {
                        onClick: i[2] || (i[2] = $ => a(Ae)("1414"))
                    })])])]), $$])])
            }
        }
    });
const b$ = oe(k$, [["__scopeId", "data-v-9bca0648"], ["__file", "/var/lib/jenkins/workspace/web-印度-ar015-BDGWIN-02/src/views/wallet/WithdrawHistory/WithdrawHistoryDetail/index.vue"]])
    , ik = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: b$
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export { ak as A, nk as B, sk as C, lk as D, ok as E, ik as F, R$ as a, B$ as b, U$ as c, W$ as d, P$ as e, O$ as f, L$ as g, M$ as h, A$ as i, q$ as j, V$ as k, E$ as l, j$ as m, x$ as n, H$ as o, G$ as p, F$ as q, z$ as r, K$ as s, Q$ as t, Y$ as u, Z$ as v, X$ as w, J$ as x, ek as y, tk as z };
