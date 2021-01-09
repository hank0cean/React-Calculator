
export default function weaveStrings(stringOne, stringTwo, index=0, delimiter='') {
    let weave = '';

    if (!(stringOne || stringTwo)) return weave;

    for (index < stringOne.length; index++;) {
        weave += stringOne[index] + delimiter + stringTwo[index];
    }
    return weave;

};

