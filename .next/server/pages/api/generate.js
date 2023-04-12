"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const animal = req.body.animal || \"\";\n    console.log(\"animal\", animal);\n    if (animal.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please enter a valid animal\"\n            }\n        });\n        return;\n    }\n    try {\n        const completion = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: generatePrompt(animal),\n            max_tokens: 500,\n            temperature: 0.6\n        });\n        console.log(\"completion\", completion);\n        res.status(200).json({\n            result: completion.data.choices[0].text\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\nfunction generatePrompt(animal) {\n    const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1).toLowerCase();\n    console.log(\"capitalizedAnimal\", capitalizedAnimal);\n    return `Provide a response to the question?.\n\nQuestion: How do I adopt a pet? \nAnswer: Adopting a pet can be a rewarding and fulfilling experience, but it's important to approach it with thought and care. Here are some general steps you can take to adopt a pet. Determine the type of pet that best fits your lifestyle and living situation. Consider factors such as the size of your home, the amount of time you have to spend with the pet, and your budget for pet care. Research local animal shelters, rescues, and adoption agencies in your area. Look for organizations that have a good reputation and a track record of caring for animals.\nVisit the shelter or rescue to meet the pets available for adoption. Spend time with the animals to get a sense of their personality and energy level. Ask questions about the pet's history, health, and behavior.\n\nQuestion: ${capitalizedAnimal}\nAnswer:`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxJQUFJLENBQUNQLGNBQWNDLE1BQU0sRUFBRTtRQUN6Qk0sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsT0FBTztnQkFDTEMsU0FBUztZQUNYO1FBQ0Y7UUFDQTtJQUNGLENBQUM7SUFFRCxNQUFNQyxTQUFTTixJQUFJTyxJQUFJLENBQUNELE1BQU0sSUFBSTtJQUNsQ0UsUUFBUUMsR0FBRyxDQUFDLFVBQVVIO0lBQ3RCLElBQUlBLE9BQU9JLElBQUksR0FBR0MsTUFBTSxLQUFLLEdBQUc7UUFDOUJWLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJDLE9BQU87Z0JBQ0xDLFNBQVM7WUFDWDtRQUNGO1FBQ0E7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU1PLGFBQWEsTUFBTWIsT0FBT2MsZ0JBQWdCLENBQUM7WUFDL0NDLE9BQU87WUFDUEMsUUFBUUMsZUFBZVY7WUFDdkJXLFlBQVk7WUFDWkMsYUFBYTtRQUNmO1FBQ0FWLFFBQVFDLEdBQUcsQ0FBQyxjQUFjRztRQUMxQlgsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFZ0IsUUFBUVAsV0FBV1EsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJO1FBQUM7SUFDakUsRUFBRSxPQUFNbEIsT0FBTztRQUNiLGdFQUFnRTtRQUNoRSxJQUFJQSxNQUFNbUIsUUFBUSxFQUFFO1lBQ2xCZixRQUFRSixLQUFLLENBQUNBLE1BQU1tQixRQUFRLENBQUNyQixNQUFNLEVBQUVFLE1BQU1tQixRQUFRLENBQUNILElBQUk7WUFDeERuQixJQUFJQyxNQUFNLENBQUNFLE1BQU1tQixRQUFRLENBQUNyQixNQUFNLEVBQUVDLElBQUksQ0FBQ0MsTUFBTW1CLFFBQVEsQ0FBQ0gsSUFBSTtRQUM1RCxPQUFPO1lBQ0xaLFFBQVFKLEtBQUssQ0FBQyxDQUFDLCtCQUErQixFQUFFQSxNQUFNQyxPQUFPLENBQUMsQ0FBQztZQUMvREosSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDbkJDLE9BQU87b0JBQ0xDLFNBQVM7Z0JBQ1g7WUFDRjtRQUNGLENBQUM7SUFDSDtBQUNGLENBQUM7QUFFRCxTQUFTVyxlQUFlVixNQUFNLEVBQUU7SUFDOUIsTUFBTWtCLG9CQUNKbEIsTUFBTSxDQUFDLEVBQUUsQ0FBQ21CLFdBQVcsS0FBS25CLE9BQU9vQixLQUFLLENBQUMsR0FBR0MsV0FBVztJQUNyRG5CLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJlO0lBQ25DLE9BQU8sQ0FBQzs7Ozs7O1VBTUEsRUFBRUEsa0JBQWtCO09BQ3ZCLENBQUM7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBpZiAoIWNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgbWVzc2FnZTogXCJPcGVuQUkgQVBJIGtleSBub3QgY29uZmlndXJlZCwgcGxlYXNlIGZvbGxvdyBpbnN0cnVjdGlvbnMgaW4gUkVBRE1FLm1kXCIsXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgYW5pbWFsID0gcmVxLmJvZHkuYW5pbWFsIHx8ICcnO1xuICBjb25zb2xlLmxvZyhcImFuaW1hbFwiLCBhbmltYWwpXG4gIGlmIChhbmltYWwudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgIGVycm9yOiB7XG4gICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgYW5pbWFsXCIsXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxuICAgICAgcHJvbXB0OiBnZW5lcmF0ZVByb21wdChhbmltYWwpLFxuICAgICAgbWF4X3Rva2VuczogNTAwLFxuICAgICAgdGVtcGVyYXR1cmU6IDAuNixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcImNvbXBsZXRpb25cIiwgY29tcGxldGlvbilcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dCB9KTtcbiAgfSBjYXRjaChlcnJvcikge1xuICAgIC8vIENvbnNpZGVyIGFkanVzdGluZyB0aGUgZXJyb3IgaGFuZGxpbmcgbG9naWMgZm9yIHlvdXIgdXNlIGNhc2VcbiAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgIHJlcy5zdGF0dXMoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKS5qc29uKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aXRoIE9wZW5BSSBBUEkgcmVxdWVzdDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgeW91ciByZXF1ZXN0LicsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChhbmltYWwpIHtcbiAgY29uc3QgY2FwaXRhbGl6ZWRBbmltYWwgPVxuICAgIGFuaW1hbFswXS50b1VwcGVyQ2FzZSgpICsgYW5pbWFsLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc29sZS5sb2coXCJjYXBpdGFsaXplZEFuaW1hbFwiLCBjYXBpdGFsaXplZEFuaW1hbClcbiAgcmV0dXJuIGBQcm92aWRlIGEgcmVzcG9uc2UgdG8gdGhlIHF1ZXN0aW9uPy5cblxuUXVlc3Rpb246IEhvdyBkbyBJIGFkb3B0IGEgcGV0PyBcbkFuc3dlcjogQWRvcHRpbmcgYSBwZXQgY2FuIGJlIGEgcmV3YXJkaW5nIGFuZCBmdWxmaWxsaW5nIGV4cGVyaWVuY2UsIGJ1dCBpdCdzIGltcG9ydGFudCB0byBhcHByb2FjaCBpdCB3aXRoIHRob3VnaHQgYW5kIGNhcmUuIEhlcmUgYXJlIHNvbWUgZ2VuZXJhbCBzdGVwcyB5b3UgY2FuIHRha2UgdG8gYWRvcHQgYSBwZXQuIERldGVybWluZSB0aGUgdHlwZSBvZiBwZXQgdGhhdCBiZXN0IGZpdHMgeW91ciBsaWZlc3R5bGUgYW5kIGxpdmluZyBzaXR1YXRpb24uIENvbnNpZGVyIGZhY3RvcnMgc3VjaCBhcyB0aGUgc2l6ZSBvZiB5b3VyIGhvbWUsIHRoZSBhbW91bnQgb2YgdGltZSB5b3UgaGF2ZSB0byBzcGVuZCB3aXRoIHRoZSBwZXQsIGFuZCB5b3VyIGJ1ZGdldCBmb3IgcGV0IGNhcmUuIFJlc2VhcmNoIGxvY2FsIGFuaW1hbCBzaGVsdGVycywgcmVzY3VlcywgYW5kIGFkb3B0aW9uIGFnZW5jaWVzIGluIHlvdXIgYXJlYS4gTG9vayBmb3Igb3JnYW5pemF0aW9ucyB0aGF0IGhhdmUgYSBnb29kIHJlcHV0YXRpb24gYW5kIGEgdHJhY2sgcmVjb3JkIG9mIGNhcmluZyBmb3IgYW5pbWFscy5cblZpc2l0IHRoZSBzaGVsdGVyIG9yIHJlc2N1ZSB0byBtZWV0IHRoZSBwZXRzIGF2YWlsYWJsZSBmb3IgYWRvcHRpb24uIFNwZW5kIHRpbWUgd2l0aCB0aGUgYW5pbWFscyB0byBnZXQgYSBzZW5zZSBvZiB0aGVpciBwZXJzb25hbGl0eSBhbmQgZW5lcmd5IGxldmVsLiBBc2sgcXVlc3Rpb25zIGFib3V0IHRoZSBwZXQncyBoaXN0b3J5LCBoZWFsdGgsIGFuZCBiZWhhdmlvci5cblxuUXVlc3Rpb246ICR7Y2FwaXRhbGl6ZWRBbmltYWx9XG5BbnN3ZXI6YDtcbn1cbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJhbmltYWwiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInRyaW0iLCJsZW5ndGgiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwiZ2VuZXJhdGVQcm9tcHQiLCJtYXhfdG9rZW5zIiwidGVtcGVyYXR1cmUiLCJyZXN1bHQiLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJyZXNwb25zZSIsImNhcGl0YWxpemVkQW5pbWFsIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();