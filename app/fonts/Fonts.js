import * as Font from 'expo-font';

const customFonts = {
    Piedra: require('./../../assets/fonts/textFont/Piedra/Piedra-Regular.ttf'),
    'Dancing-Script': require('./../../assets/fonts/textFont/Dancing_Script/DancingScript-VariableFont_wght.ttf')
};

Font.loadAsync(customFonts);