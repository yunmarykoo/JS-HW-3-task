var apartment = prompt('Введите ваш номер квартиры, чтобы узнать ваш подъезд');

if (apartment >= 1 && apartment <= 20){
    console.log('Вы живете в 1 подъезде');
} else if (apartment >= 20 && apartment <= 48){
    console.log('Вы живете в 2 подъезде');
} else if (apartment >= 49 && apartment <= 90){
    console.log('Вы живете в 3 подъезде');
}
