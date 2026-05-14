let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};


document.getElementById('gender').addEventListener('change', function() {
            if (this.value === 'female') {
                document.getElementById('hip-label').style.display = 'block';
                document.getElementById('hip').style.display = 'block';
            } else {
                document.getElementById('hip-label').style.display = 'none';
                document.getElementById('hip').style.display = 'none';
            }
        });
 
        function hesapla() {
            const gender = document.getElementById('gender').value;
            const neck = parseFloat(document.getElementById('neck').value);
            const waist = parseFloat(document.getElementById('waist').value);
            const height = parseFloat(document.getElementById('height').value);
            const weight = parseFloat(document.getElementById('weight').value);
 
            if (
                gender === "" ||
                neck === "" ||
                waist === "" ||
                height === "" ||
                weight === ""
            ) {
                alert("Tüm alanları doldurunuz!");
                return;
            }       
 
            let yag;
            if (gender === 'male') {
                const numerator = waist - neck;
                const denominator = 1.0324 - (0.19077 * Math.log10(numerator)) + (0.15456 * Math.log10(height));
                yag = (495 / denominator) - 450;
            } else {
                const hip = parseFloat(document.getElementById('hip').value);
                if (!hip) {
                    alert('Kalça çevresi gerekli!');
                    return;
                }
                const numerator = waist + hip - neck;
                const denominator = 1.29579 - (0.35004 * Math.log10(numerator)) + (0.22100 * Math.log10(height));
                yag = (495 / denominator) - 450;
            }
 
            const yagKutlesi = weight * (yag / 100);
            const kasKutlesi = weight - yagKutlesi;
 
            document.getElementById('result').innerHTML = `
                <strong>Yağ Oranı: ${yag.toFixed(2)}%</strong><br>
                Yağ Kütlesi: ${yagKutlesi.toFixed(2)} kg<br>
                Kas Kütlesi: ${kasKutlesi.toFixed(2)} kg
            `;
            document.getElementById('result').style.display = 'block';
        }

        