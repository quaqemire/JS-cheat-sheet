// Практика для объектов

const userInformation = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 15,
    family: {
        dad: {
            name: 'Maksat',
            surname: 'Blablba',
            age: undefined
        },
        mom: {
            name: 'Gulzar',
            surname: 'Blablba',
        },
        brother: {
            name: 'Turar',
            surname: 'Blablba',
            age: '10'
        },
    }
}

const listOfFamily = {
    dad: 'Отец',
    mom: 'Мать',
    brother: 'Брат',
}

function getInfo(info) {
    let str = `У ${info.name} ${info.surname}`;
    let family =  '';
    let sizeOfFamily = 0;

    // str += ` ${familyKeys.length} член(-а/ов) семьи.`

    for (let familyMember in info.family) {
        const data = info.family[familyMember]

        const member = listOfFamily[familyMember]

        if (!member) {
            console.error(`Добавьте ${familyMember} в ${listOfFamily}`)
            continue
        }

        sizeOfFamily++;

        family += ` ${member}`

        family += ` - ${data.name} ${data.surname}`;

        if (typeof data.age === 'number' || typeof data.age === 'string') {
            family += ` ${data.age} лет.`
        } else {
            family += ` (возраст неизвестен).`
        }
    }

    str += ` ${sizeOfFamily} член(-а/ов) семьи.`
    str += family

    return str
}

const data = getInfo(userInformation)
console.log(data)