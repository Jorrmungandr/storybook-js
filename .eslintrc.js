module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": "off",
        "no-console": "off",
        "import/no-extraneous-dependencies": "off",
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
    }
};
