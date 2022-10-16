// postcss.config.js
//转换所有px为vw，移动端布局
module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            viewportWidth: 375,
        },
    },
};