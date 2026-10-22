// 模拟你代码里的 computeChargeStrength 逻辑
function computeChargeStrength(performanceNow, chargeStartTime, chargeDuration) {
    const holdTime = (performanceNow - chargeStartTime) / 1000;
    return Math.min(1, holdTime / chargeDuration);
}

// 模拟 0.2 秒的按压
const holdTimeMs = 200;
const duration = 2.0; // 假设 chargeDuration 是 2.0

// 模拟 120Hz 下（每帧 8.33ms）的多个时间点
let charge120 = 0;
for(let i=0; i<24; i++) { // 0.2秒 / 8.33ms = 24帧
    const now = 1000 + (i * 8.33);
    charge120 = computeChargeStrength(now, 1000, duration);
}

// 模拟 60Hz 下（每帧 16.66ms）的多个时间点
let charge60 = 0;
for(let i=0; i<12; i++) { // 0.2秒 / 16.66ms = 12帧
    const now = 1000 + (i * 16.66);
    charge60 = computeChargeStrength(now, 1000, duration);
}

console.log("120Hz 最终蓄力值:", charge120);
console.log("60Hz 最终蓄力值:", charge60);
console.log("两者差异:", Math.abs(charge120 - charge60));
console.log("结论:", charge120 === charge60 ? "PASS (完全一致)" : "FAIL (有差异)");
