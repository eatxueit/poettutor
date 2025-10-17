module.exports.config = {
    dir: {
        input: "blogmd",
        output: "blog"
    }
};

module.export = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("base.css");
};