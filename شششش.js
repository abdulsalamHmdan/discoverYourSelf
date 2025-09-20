// Object.entries(<%-p2%>)
//     .sort(([, a], [, b]) => b - a)
//     .slice(0, 4)
//     .map(([key, value], index) => {
//         const dimInfo = dimensionPairs
//             .flatMap(p => p.dimensions)
//             .find(d => d.key === key);
//         const percentage = Math.round((value / totalScore) * 100);
//         const medals = ['🥇', '🥈', '🥉', '🏅'];

//         return `
// <div class="flex justify-between items-center p-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
//     <div class="flex items-center">
//         <span class="ml-2">${medals[index]}</span>
//         <span class="text-sm font-medium text-gray-800">${dimInfo?.name || key}:</span>
//     </div>
//     <span class="text-sm font-bold text-orange-700">${value} نقطة (${percentage}%)</span>
// </div>
// `;
//     }).join('')