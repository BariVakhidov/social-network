import React from "react";
import s from './Posts.module.css';

const Post = (props) => {
    console.log(props.message);

    let addLike = () => {
        props.dispatch({type:"ADD-LIKE", id: props.id});
    };

    return (
        <div className={s.post}>
            <div className={s.cont}>
                <div>
                    <img className={s.userAvatar}
                         alt="user avatar"
                         src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFhUXGRgbGBgXGBgYGhofGhsaGCAdGhgdHSgiGxslGxcXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lHyYtKy0vMi0wLS8tKy8tLS0tLS0vMS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMcA/QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABEEAACAQIEBAQDBgQEAwcFAAABAhEAAwQSITEFQVFhBhMicTKBoRQjQpGx0VJiwfAHcrLhc5LxFTNDU4KTohYkRGOD/8QAGwEAAgMBAQEAAAAAAAAAAAAAAgQBAwUABgf/xAAxEQACAgEEAQEGBgICAwAAAAAAAQIRAwQSITFBUQUTImFxoTKBkbHR8eHwFMEGI0L/2gAMAwEAAhEDEQA/AOacT4je8+8PPuj7y4ABccfjPeoBjcR/517/ANx/3ov/ANlZ792djduf6zVzFcDEGNo3qyeeMOxSWrxqW2+RfTHX/wDzrv8A7j/vV6zjroj726f/AOj/AL1SNvKYNT2FJMVasiJm7QWXGXQP+9uf87fvV3CY+5tmuE93b96L+HvDRuAMw0jamP8A+lF0AUjvvV+PVqEuejHy54N7UBeC4q4SpLt/zH966DhWlQdaA4Hw8ba6jWdNRTF5TKsERTU9TjzVtMzU4pwdtP7ntq4SCSdKixOKCjVj8qxPSuutKniLigggaUeHB7ydCSeTI1CHbJOO+IgghSZ96RsVxK4xnznHYM3717efMTJ1qNWRfiKqD1IFbKx4sEOa/M9No9KtPH1Z5Zu3mMB7n/O3710bwvw+4qZmcmeRJ/ek7h5s2vvWLXNPStuNT3Y6Ad6K4fxbfiLeHtKP57jsfooFeZ1+vxyltT4Dz6XV51WOLr1uv3H55HP61synqaST4uxJEDD2SeoNw/8Ax/3qHF8XxzoYuLaMbKoT/wCTFiPlWb/y8MfmLw9g6yTp0l9f4OgKTGk1ty1muIYqzjGMnHty0896K8FYoo82/cxBb0gZrzKZ3Cg6H2o5e0IJcKxuH/juVvmaOj4y6kSbgAOgIMzPSDrQHO9nzGzMViW39Mb79jJigfAbtvDF7K+tvU9q3Hl3Y1MQ4yvEsAQQYJBqSz/iTZDC3ft3LL7E3AGQToZyk6daUz67NkuEI8fc0dD7Fw6aXvJTbf2X6f8Af6E1zipyyHchmJDSTI02+U1PhOMFYfOzRJgkjOdwvsJH0oBxgHDFLqEvgXy/AZ8kkxoRo1veDE8q9TFpdDvauByG5QQSBoYOo00pRK1ZscXQ1f8AabMF9TM1zeJkDr7Zso70QwuDNtCWGZXfPfW4x85AdM6ODpl5KARAGxMlKulSiZrrpmJBZfUEAIKywGmZgO41prxfEZwwAdXu4hmsi8sGZ0cqmywVMzOvvFTGL3LkntVRzvxRiHZ7jo1y3aBCWlW85gBiSzHqwG0yINKw4je/8+7/AO4/7101+BlLN9Dli3ZC2w+ZwWJliUB9WUhSCToTOu1cxxVkETqTGs+51U9OXyrQjlTdeDNzR2s8XiV4N/312P8AiP8AvUiYq8TAv3QeR8xz9J1oXDA9f1ovw4grB+P8M7R3rsrceULZpuMbGHhOKu3LflvccXE1BDtDj3nQ+9MXDS8Al2BE/iJ/PWlrhzQMq7czzY9/2o9w+4dorGyye90eV12STbphm7fP8R/M1WtYhwCJY6n8Rre5anY+9UGvyYQTG8UKx7ltMzCpz4jbK+Dw8XXPV3/1GrWLtAzA/Kp1hbjf5m/U1J56rtHevQTwvJyh2epSyNoWcTwDzBK6HvRHgXholhoT1kUdsXFboKZuEKAoga9aUSyY3T6HF7RlljsRb4fgsiCNI0r3E8QVBqZ9q0xmNKrljX+9jSdxfibAxAgfEOZ9jU5cyqkavs/2c290i3xXjx1C6f3yNKeP45iEJ8rE3V02zkq3PZpB5+0VpeukekGRoVPvpr+Y/KhdsZzatxLM0KB88xPYCT8jVEOHZ6DYtu3wMtjxZjGsy6ITBIYZgXAn8I0Vo1nUdqX8fxC8yI7SrXGJCZcz5NlHckgnbYiitk+ZdREBC22ZyQIhAFAWd5bRY7zyq0OHgucS5KtMDqo6Ko5nQTvVy9paiHU2voV4fZemxtuEEmwbheFXcvqy5zvHvtude9W8PwQqZPxH2Mf0FEMRirCDUAREDdv2FU/tF28T5SBQD8bbfLv7VRm1WbPLdklf1HI4oQ4j9iTFhbSjzLiSxiAMzfSh6vdJK23togMepfV1jffn2q0vDWJlmJEax6RH8zE/tVE3bKiUghAQPLUmIkkBjtJmaqTX1ZY0/PCJHsXG0N9z/klB9K0+wrOvqJ/jJP6moU44uuWy3u7x2GgB0nvW93ijggZLbNE5RnaOWuutdU/T9iLx+v7nt6ANFRSOaouvaouM3gnkXFLFbitZaGOQlSHVHGmUjPqp0IIINQXMQGuZAgzRrlYgARuZBrZMRh71m7h7hdRmRkeDAKZ1kESRo3MVbjtP4irJta4NlsCQ94MrqcodNfLDELC2+uuhBMwdqEeO0yPYSVYKhh1UKrSZG2hOhmimBxYbIbl1VuCCubMoLQQW0BklZgcpNTcd4ab9m2NMgZizIQyr6ZB02E9ahT2ZU30W7U8bUXyb/wCHfHwbbYK8qMuUm2WMSCfUh3BEMdKG+LfDt3ht4X8OGFk5TvqhJkKxB+EwMrHQzQvgwW25w9z7tywa1fH4GiAD1RgYNPnAOOBy+Dxaqt1LbBgR6LyLqACNpkkADrRTuE90Va8r1XqVpKcaff8AvAB4Tx1buZiEZnUZ0dSUXLrplK5ZiZJovdR7OIwdsIwvLaLnMQSVJmco3b4gCdYiZpf474cfAXxctMRh7xAQ7shI0Rgd9yAToaYcHeH/AGnZUAIww4UqZOULIy92IjWdKOO290Oqb+xy3f8A12NXEL5XB3rmZc5RktZtV8y7A35GBz0BriV+4QRLZjA3Mx2+tdy8VXkTDshOXzEYM0D7s5TDBR0BJM1w/iWFezca24AdTBG/cEdQQQR2NDo5XFpr9RXVcyTK2WSI/LnVzDoRrGp/Qf71TadyKtq5AX20pqXQhnVqkG+F3oph4Ziw50iOv7CkgsVRiDyo1gcR5eBw7W4zvfUMTpMoxgnoKz8mFt2vUwtTo96vy3X2sa8biUtLmuHLzAMx2LRv7UHw1+7bm5dH3l45iCdFUCFUctpJHKavFlvWC59XkODbLCBn7D8QG4nmO1VuH2rxzeTB1l80EZjrInmdzHaojJY415J0enjhg934vP8AgDcR4i4u3NT8bj/5Gt8LjSQNSPeg3Erx867/AMS5/qNTYMk7mvUQyJIbzaeEY3Q28NvHNAM/Wn/gecL2PWkjw8wG0fOnTh+O2XQ/pSufG5mDLUwhmSog8S+kGQd9CNj/AL0l466rIeeWTEkRPQ/0pw8RYq7tlBQnSN6QONWwddCVPKRv1686xpJKVHu9G28Kb+wE4hxJ7Vth8TEwS2hAI5flW/BWa1hnxP47hyW+ZVZAMd3bT2Hegt9TicQtpRBZwgjXUtE07XLam+bSgeTaS0wEH8DMVjpmaWPUGrZpRil68sZhcmVsSLoVcPblWuX3Nwzr6DJOmoQDQe1ZdsM12ASWEAuJAHQHX4ogn3FMODwfolj6iAXPMgk/nr+tUeJYpbMIqhrhErbmIX+J+i++ppaOTc6S5GZ40lbZYweCs218xyIG7NtPYcyaiu+JJ9NtDrmHq0Om2g29tKCX1csrXHNxoMagKOyLsB9a1ttDzuCIO+hnpyiueNPvkr97XEeDTipuYiVuXSQNSCcqA/whFhZ+um5rSzjDbBVCSeTAaaDkKuYrDvozapppuBA0IA15xPeobVtSASoYHYaiTPM8gP6VamkqK3y7N7Sgo1xhB6roNDPpHXT61qt851UArMTH80GTuflVzE4MucpOW0pBuGNWJGbKo3HIe1TYTCw2izpOUn0gDaT+Uk8veutEUBLt5rgZAs3J9bgZSROiyNx2olgeBloVmblrJBJ6aDWKO4DgrgKzMAo56t7Qg0B95q9btWrRzhLj3TOxk6cui66x+1DLJ4QSj6gjiXg4smZriJMGTCs2hjSNZ7jlSmcPewTsyvpG6tmXWZDSACMpEqRGsU8WsPjXIZZtywLANmNyNgXP4R261vxZ0TJ51tXcbDQxO8HbbrrUxyVw+TpR8rg5zjLS4mPLTJcC/BsGA1+6nWNzlM9AasYO/wDbLQw7kjF2tLFzYsF18tv5gJANOFnh+HvDNaCErqEBBgbykahQZiNiTyofxTBNjcO+g+34YC4pt73bPQEAZmX1HrK96tUlLj/V/gi65/1/5L3g7jYxS3MNiyXxBGVluhQMoM/dgD0sIkmJmKn4dwY2sdYuuyuptlFf+MgyJ/heGiZMlSe1LWDwq8Vs7qmLSIcenP2c9W5HkdOdSXPHt0G0z21S7Z9DkKIuCSDnUD0sfxRuQCIoI43vbj54a9OO0WRkuFL6p/ydR41w8YooJAALhgR8YZYIUx7GRr0rkfi3hrIMIXYO5tOjPrLeVcIBM6zlYD2AFdTwviDDpYfGI2ZBkGRZueW7aDQawZEHqK5lxe+2Iw5uOCpTFOonXR0DQY7wajTue58fCuL9XX/QrnfDvsXjpznsK2RwwBMCNDHKKr3n+dSWgVGY8xt0/mptpefIi1wXsGgaS3wKRA/ibl8lq3hLcklZH4nt8gebp0U9tqr4RZVAOQ5mBPMkneaL2bFsAFhnYaruqqeojUn5x2pbJKhLLNJl7C4hrqgf93ZBkBR6n7rPb8Z+VH8EkqIVVUfCo2H7nqedAsCC8szSesAHTlI0+lMeCAKyRm9/9qyNVPmkZ2rlSpHLeI2z597/AIlz/Wa2w7watcXtRfujq7/6jVJtBXqsc0+TXyx38BrC40iNdKYMLxV1UQaSbb0Swl08jTuGab5MzUaGPZ0CxjxfGVtJHtrSvxjDMuYanrPadjzonwLGQ3q32gVb47i7RgnKpHX+tJ63RSb3wQ77N9owi/cTEzw3wsW2+0wIe8LFpy0Kpe25LHuAVUTsW7UZ4fYzZ31i4UYBhBAVQIYcoYNpVlMGqYO5ZzQ4JxH8pzQCsfNNPepuCAvbUkyz6kk+/wCWgrHyTtX56PSYl8VeESXr8MqoRnynNImFPc6TI0Bqpdw4BYgSW1JWS2o1M8+U+1E7WGCs7A+ptCWAIG0DuR171ca3ZlQVGY6yshCenMT2B51VGl0FJuXYl3cCWANskE7HXKRzjpW97AkCZI2IJjfkehB1pq8n1yAo1gqQZnoW5H3iahvYo23jy9gZVfSYn8SNuAfxIedWWytoEYK6GUEE6Kyk85jY/PYdqj+x/eAx6VmVnc679aL2Ut3M122Mp1zLlymRIzdxBmR0r3w++cFzAOb7tfwxzPLTnp+dQSka4DAsLZdhDsASCT6EnKDP8Tdd4qS9goXKs52ZSANAANZcnvpHSilxixWMzLqYX8TzC/IDbvVTi14WpLguWJUWwYGaPhzRoqjVm5tIrlyc2izavKVl5KHRVMif4QeZJ3gVbfEvbUjKASBmUQMo/mP0ieRoTg7zNcVwAbpJyiDlUE/FEkkxttvNErnFEtrltqsKSobSSxPqJbaQdNPblQ0dZAmGxTeqVVNTIEadPVHL5Vth2RBlVxl5hQDHzRcpqTQgMzFgebEMJg6LKknX+E1tZuiQMuUyIzSu++i6kdt6h2Smhd4wpAzgEMD6TCuTJIGW4gkEGTJ1pWxHFyuNXEAPbuowDPbUanbKy7Fj9aeuI4d7oKLlJAMXsNK3FB3z2jqRruNjXMsfau2bxZna6q6FmJGxiGJ2Ov1pnE01RXJUxl8QcKtW3XiOEuAWbzAtbIjKZ9Qg+kGZ0OxNFbvhexxOxcxSI1m69wIjH4LgHxXSuzBhEsOYNF/C1tcRYa1etAoYKkMrw2u3MGJFB+EXHwt/I3mHJcPkWEJVWUEx5rtoluYUrpqJk6VEZ/qgq4oW+FYbGcKxDXCjtYRgl9kEq1s8yD8JHxKxiCB11O8U8OO3Cb14XBdW3iPNt3EyxctkKpZoHxAbjkQa6HewytdtX1AKuMpESCG1a0RzWeRFR8K4Z9mvtZthRgLwI8oxlW40hlU8gYGh66VdOa7RTKHw8Hz+lqDmOw+tePfEzz5AUV8YcKbC4q7htVS23oJ1ZkbVW6baUNwWHkgAan+9asVVvl/Qi/mXeGhltu7AHUBV5D51es4kMVCzJMBTzPaKqM+gQbD6mrfhnDi/jLUaIjiW2lieXYUpN/DLJLxb/gVeHe2wlgyTOU6jeKJYfGMEUgHK2xnQ+1XTwcL5oYxlzCR1Og/WmDw/wpbVlUYBgBIkAxMk1j59TBR3JX/X9GTqNK3Pa3z2c98T2QLrx/E23uaW2M/Onrj2HDNcO0M36mlHE4Uhtq1NHqrjtZ6BRRVtDXWrKOVIjapbeD1omnBmdZA+VaENVGL5ZM8NxB9rHsDXn2g3GClviIH5mK2xHDnTUj9KrYG4qXbTtMK6M0dFYE/StnFqd0PhYlDHjU+EPd+wzDEAR6RbA6xnQsAOoRSa3YHPCCVmNP4Yk/33q9iW+8uwSQHdp02kxt/LpWnCrgGYHQmBOuvMjT3FeRT5PTVSv1JLBJUG4MsDSTq0cupIk1tCRpp2LFR8gdJmamvOdT8I2B00Gpgjlz60t8Z43lJBYZFEs25AmARG8n+tWKLfRQ5UFMTcZDq4IG0EBj2nUGe8VoLzOqhlIGhGaQQRuP5TykUnNx+4xSQC7EELlltdiVJ5jWJ94ptwWJuop89JETAEgDl0AH0rprZW59hwTn0iLCM1oMAJAZsq9JWIAH8wE1Jcc2gpkuwGpH83L8o26VWxvGbeYDWD6QwIEHTedPrQPGX7l5yGbKqxAAmezE761MVfIMuOBt4biyltm1OwB5JI1n22iflQzE8UthzqCAAF5gHmw79uVAL+IIUqGc5vUZmCRoJ9oFK+P4k2qjSdCRqd9h0Har4Y7ZU5D4OMvePl4Wy1xmnPkUyF2GciAi1o+Dulg7kSImSXyjoo+EEDmQaK/wCF+N+zYNnw6o1w5hdnWSJyjsK55wjE32xasubNm+81O0+rN2qi97ksbrb3aGIrbt3K7Hzh/GGtvD/eCR8XxouuoUGCnwyyg8piKa7dxLqxoZ5xKmNZzcuxMUg4vAtiLv3RC5ZCOc253C5QTtO+lPXB8PasWwIzuu0kiB3MxHahjNSgmTOCT4KmM4e3mIyFxctnYzDqRyuGVn0iMxg+9ZxLhSv63GUsvqzAAHNoc3IzG/7UUxXE8voDTGsLtryA0UfOq68XthvvTCjcn1NoMxAjkBrUW/BHAFw3D2w0uGhE1RQwyiNgpiffXWpeLY1r9uw6XCqucxYQ5KsSHtB/wgMvuPSdKs8Wwn21WUObYBmQBPUDKPjEa/Oh3h/hqph7tlXFwK7MI0KN8TrEkD0kbE6rr3triwE+Rl8M8TS7CMBaw9gjy50JcSCBJzGDll20JI60xYixaJF1gQbgBVDIPpgk5JgmIMnYCa5v9nGZHZcxtSwtH4XMAgGI3KiJ001px8KcctYy4t5iWu5GbIVn7PlJtszEfCzhZGmsECaNIGT8oDf4kcJTH4UYuyJvWN1AOY25OZYInQ+oddY3rlPDVksBuVOWvoDEY21bs3cSpXW3nDDK3mIsQ0rOZPVE7Qa5D4z4Z5DJjbIH2fEGR5f/AIdyJZco/DIYj3NSuYuHkV1EL+KIp4O0bpIacoJEDnHU00cMw+UjJpliAO1A8BcRmZkIOYyY/blTLg7ZEEc6o1uR9dIVcqGnxVOe2q/+MVJjpzn8/pTDhb8DalTFYoO9hix+6tkEH+L/AKVZbxOiaR9KwFhnLHGKXV/v/Bj5MkfeS55KOJtAu5afib9aHcSwCkAkfKjmOgEnnmOnzoJjMUA3I9qLHKbn8JoT1UcXZnC+CktJ1FH7eGNuV/I8qHcK4qLe+s9aP/bbToVBBaJjkKdlHK1chSftJZZUuADx+yhtyAAJrnmMAkxtTr4jvkLB6/Kkm9BJra9lzai7J0qbySbY/wCDYmymYyTbtgk9wDrUmHuW2C3M0giV5TrH5iKoY3Em3g3caH7Oke+SP61F4WxDJZURDKIE7gHpodT9KU29y+Z6ty4S+Qw4myXJP5KxIEdxzNJ/ibDAq2Zicp2gKNtNOkgftzpoe+zCCxJ39Tc+pJ3HtUWK4V5gGcAqRDD4pG/1+VHCVMrkrELwHF3H2g5AzZyCYAzZWM/lMUz+NPGNy1ZuYHJEsj27wOXQgTA56yO0VVueHrCmUZkKmQRyM1ZxbuFEhbkS3qUAnmYmYPYRU5Jf+1TStVVExjcNrdc2CLlp3w1suC1x0nKN5mVPuQAaw4W4yg75RDETE9f6T1BrLGMe9cyxrsusxPU9YkQOtMWH41aw7eTbyn0kMvPUQfcxR4INXfrf0JyzTqv7Fp8Dcaw10vB2joBI2jqN6WrOXzMt0Ag89tqZuIcYUWUtKMoUuHO8+okHp8JAoFfRLyt5ckjtr86bqhdcl7g+Ou4W4WsuCGMFG0Ecp79wJp6t4oHUxmePTMqAeRO5oZwXw0fLU3mQXAFJQkAqY2Y8jGutHrfCUYzDAaFXkR7abKetZ+aGOUtzXPqM45yjGkySy5AgKymZ9AHqGo2IMgzr0opkJAzBR3dtvYRJqnhrb29LeVRqXJc5vmCYI/LlU98MFzSHEGNv+sVWybBWOw4XQsbp5C3oN507+/evLOV7ZGgIzaAEswCk7ROh0k7+qtEuM7QrsSRoR6hz5DqKrtibgKr8TIS0A5SSIADTzI01OlHEFlvgPHAG8t3gErkUH1a7bAx/lprwXC0Juuq5XYQSYhyZloGxOvvJFIWEtE3SbWTTMVLAhbZ3ynvvp2roOAuIQFt3JeEY559JjUD+FoEhe9F0wfAr8SZkBIIJAAbfUaga9iai8N4oWMa6ZsnnBYMaN215Zi2/MtRbjODabgPqK6gyNteXYgfnSfxxT9ht4oAh7d0AHqC0R3GtW1u4IXB0DxPYUYDFWbNvyQpcfdrGaVD3BaWPSmZgDH4s3MTSb/h3eGMweLwF5S1pTaNojV1LtH3Z6oQW+ZG1M9viLXMDfv8AoNlUu+oEZvOUEXD0ynXbdlJ/FXHfDHGWwd+3fT4l/SIiPnUKMqf5EpJqglxbhP2a7esXchuW7gtyV0OaCpGx1BHSNaO4TCjzSLQeRE282dhHP2kH5U1eKMAuPweGxoQs1k+Y6Dd1bXf+VobY6AilHgJYXBdadcVbukgyGthSIK/xqSDJOs7Urne6HdGXmwuMmi/jV001YnQDUk7xApeOL6hZ7z+9NvEcFnBYSo+0Wro5E5Sc2ntFJ/E1HmvlJKliQSIJkk6jrVWj2yiZGHB8bbDGOxpLuCdmYD8zQa9flqnx9sm9cA3zt/qNU8RbIOo1o8UIRkaebQKMbZMMQRzq5heI5QSTQcvVRsT8q1IqLXJnf8KMwlxrjDXNJkCha6/kajLzUlq3qY50EaguDSxYo41SHjjeGzYVkUb2renX4f2qqt1bSKSpkfL5k6fSjnFrTCy2X4vKUL7jUfoKWrXEVvoGIM8xp7a/tSmNto2sipoL4ItdbOJA21AOvXsKPLYXJAaQTrrJPueevypcw94ZQFIX8iI56fvV77cEEyNvhG59yNAOcVDBPMRbgkAjvqJ+lVr1vQ5gX6g7xy05Ciy4sJqQqjqYGb251W4pfW2gz6E6xop1nfnXKzrEji9ry3tvb3UzA0AnT5VRu8PAu5tZZgRJ1Gskj/eiPFbouEKslydJ0nX4R7dTG9WEwCqAbtzMx2RRIPvGp35U1GTSBUbBv2XzHfNqBBHSdtR0NWOAwl0MANDqPwgzppzijeLwN3Iirhrua44W2ShQOYJAExyDH5VYTwXjk9T2BG+UXFLd+f70M5xrmQSXIVwFgFc2575dTzmQdCelF7CggQtyNdCGUDuTAX50vYbDXbQt3WCLbdQUZbqNOYaQDrsd+1GcNg1uTkvOrQAZOYAwOp0P0qloku+SnMwp3GXeerDce5qpjHURla2IGgIOaPlpr7zVTH3LtokBVddBoTm3gkzA1B5VF565TmBQ9SZjoCJ/SooGyljeIMFKMzoDvAVF02MzvrtzFUCl24QmZCp7AEgRJAiWP1q1fxBZjBhSBqTM9dI33/OqmIAQhiFLx6JJg+rboGABNGjg74fUu6sUUKBBzzPvEaGBtvTIlxLd22xmLsETqWYsQNBryoHhMSAoIJF4kaiGyjNqqzpmMwTy1ohwZjcxAAhlRWJIzZgVIyiCI2O6nXNOs1FHE3EcKtu6MpzLcaHBIJE/0g0ieOsUtjBphPxO+cqIMKjaExsS0/lTeyF7rXPhFv1tOghZJ0OxgVxzE3bnEMVpAa80CdAqxuTyCrJPzq/FC+bBlKuBowuKNnglwlmBxF7y7aeoBUEXHMHSWAGuujDvAng/B8/qcGCCRrHYa++nzFXvFvGbF/FG9JNpPTYsDQhRqS/JZbluQF5AUNxPiFnUIq5ROsaDnpXSUn0WRpHRuF+JzhRlGUoqoiqeZiAP1npzNQ+IeG/Zb/oEWrgFy3qCIOpWR/CxPyIpIseZdfzCNeg2+VdWtYD7Vw9bQYG4gzWzzB19B9xAn2pHMk1RGbE5RsHfaA9sUq8VtLmo7gGCoQQZ215HpQ3iWFYkUhpWoTaMPUY3BN/MKrwr71jGpY/qap8c4fqTA0GppsZB5jR1NUMcisGBGkb1mLUy97ZuZU8kaZy7EWzrQzQ0xcXwxBMbUFeyAJNeqwZlKNmRW10Rheu1WsAk3FHVlH1FVQ00S8P2ScRZG83F/Wask+CfKR0zGqM8EfhP6kVzzimDaxdLoCUJlgN1I5+xroXEHm5H8v8AWhmKw4LHTcc9aSxTcDenFTQv2sbpJE89+RqbD4hwDkAJOsDl0jvFVGti0xV/hn09RP4f2mt/tRykIConfSdOpn9KZ47Qs+HRMmIYOHubKR6Sdf8A1ftVPEuwh2LFnJ7yd4Ejlp9a2wWHDEuSSq6knY8tB7mrtrDPcYXGWFki0nOORI2zEySeQrroihX4hhL3mKUPqEyeSg9T0mnrwfx3D4RrROEY3BmF27mRi3TJJECeVb3cEqL8A1HqYjQjoomYO31qq2Gs3ILWhqYCg7zGpPQUTmpRqR20MeJPHF7EG01sYewtm4Lim5cV3zAMsMoMDRj1oDxjxri8XFtbhMyIsr5anr94TqPaq+LwVqYREGUQG1k6TJXaNf61IyZFjKCM0DmNhqI2Jk6aUS2V0BtRU4V4cUn79sogelFmJ/m5/KnOx5NsAKHWdjcB15bgwJ/sVR4fjLcKtw5JgArmUg/kRHbvVvHXRbU58pUwVuKIkEn4lOk1XOTk+Q0U8fiXktbBJXdCdYAPw9RVKxiA6i22hMhQTo0/hzcjzE1Hi+IhMhuGA3pW4fhJnYkaqYI376mqfEE8wOB6WXVoBEHkY3ExoRIrqORAlxwzowDt/AdGgGJg8j1FWbDoyMgCxubdxtVIgko8aRA3HI1SW/56qzybyxJgTGxkiO21HsPws3UDwoaYzPlUXFOoBPxSO42A3rnKiUjOEYEsQq3DBXUEbayY1lus96eL923hrKzKgBI21OXRY32g0G/7aweCs+ZcOZhAQhZE/wD6zAYj3pB4n40OIvebdlbKtmVFkljy7AkCOgFcoSl0TY1ePOPrYwrq2t/Eo6KNJVGEM7doOUdSTXHrKn8MjkInXlAP0ojxLF3sXeNxvU7kAAHRRyUfyijeJwa4TC2rd9R5j+Yyka+WCVGY9dzoaahUFt8sBp/jfQqsrLAII2I9iJH5jnV3hp9Q0mORpu4RdwOhvgEFQqZ7ZYFQPSTlko3IxIBPKm/CcF4ewUW0WSoaAC4EmPigMPaqM2euGmX40u0xO4bh3OogL0NM/Cca9rYgyPh+mh5aUSv+F1j7lj1Akmf8vUfWgz8PInKWOWcwIMrH1IrPabdobUk1QycYw6BUurqtwano43B77fWgONxqKQCRNHvDiK9p7V0gKSANNDOzKZjNPzrnHiO1dtYi5ZufFbMT1B1B+YINDDSKWS/Bha/E+vB1AWpuGep/WosZakMv9/nU7rFw9ia3SCDJry05VNs1EuBJ8RYLKhMaRSLiUJ1rsvGcEGSDG1cw47h1RyB9K3vZeq3KvJlauG3ImvICmKKeFLv/AN1Z1/GKFXkE1b4D6cTZIP8A4i/rW7JXFg418S+qOncRb7xfn+vSosZb5jUjWpOIH1L7n61vcfWazr6o3YrsV/EmBm35i9Ae80G4fiFuLuSxMFYAAjq21OOIEEr+Fpif0pF4/wAMazc862pK813HeKbwyT+F/kU5oP8AEhkw1uIBGmkwJAj9TRL7Qtsly8sBosjSdem/6UDwN1LiIbdwoCORJA7MN9+lbXQyT5wZVGodYKN7Ms6/5oNdduipwa5CJxGcyZj+bqToY56a61JiUKF2JgGMuXXSIOv5/nQKzxZSwLGV5Gdew/6VrjuMC5Ju3ewRJExzPSaLbIC0avfzXs0QqgBRvBnoOcaE0Ytaw0iT8WmZY6EaCNh2NLVvG2EliCB/CNhtGYkyeem1TYPjSglbaXCDoTuDOsBRsPerHF+ERaDuKxjIpWykEH8RDAdhpK+1YMUxAUkAtrpOXuNRp31oXdxWJuEtZsluREZS3Q69KkscPxBOfEXUtgbIIuMJ7Kco+dVterQaTfSNcDdHmm2rKUMgq+xHTXT2ioGtzdZLDEMogzJAA5Kx0A3qxZwtgN92jXn6v6+/wiEG3SiTYQlDcvsEA2AAjTl/0qJZEuiyOJvsr4DiIttrYW7d3k8hpBYj0z8qo8f8Tq0hbYN0aGCcmusBdSwG8SNT8qpXsY+IP2fBp93s1zbTnLGMo+vSjnAvDqWjI9TxDMdp3IHQfU0TnHHzLv0/k5Y97pdeoItcBuXF+0Yu5AyyR+IDkP5R/KKk8PeGheIv3li1qbaDQ9iw5g9KONhvtdzL/wDjWzoOV1h1/lBmj25CxA0+mn0qjJqJpV5f2L44ov6fuCcPwlVuSqhSBOg5kx0oL/iI0YnDjcC1LCJmWPLvFPOCtZ7jg6iFHLqaQf8AEt44iqicq2EDDfm5/qKHSScs35MHVJLH+YN8PnJ6vMQETovLbeATOuw3oxjOIMj5mYm6uRRdGVWAHrXpIJMGdeVKSp5ZDE6sNcuwI1iefLarFjEZmGYbEMQJBjpPeK0ZRsRQ8cO8ZXgQotfaH1m3IEAbEOo335CNd6Z8VxvCMgbEhrDZsivmDE6ZpVo9ag8+ormmHu5UPlhnNxwERfSeZlmPMbAc6v3rpzO+jgW4RWXRZVQc3VpPxcsh9qpeKPjgPfIeXxBslCWzW3IK3rbAo0bBtMo5adqs8R8O2+I5bl27DrIzKNWUmQDHTWPeuYeHPEWIwrDKBlMh8O8ZLiiJAJO4E+r2rsFjhtllW5YukW7ihlG4gjl06VVODx9hpxycM1ezLNuDr+tQWbhU6iddqJgyWHc1DetjfnNeGlP4mmX7eAbxjEypjTSuX8cuS51rovipDkO1cvxp+8OutbvsiCrcjJ1XOSgddE0Q8M4d7mItZVkI6sx5AA8zUeHwj3bgRIk8+g6muhcA4alvKlsQBBZubNtJ9628udQjXljOl07yfE+kEMauqyOf0OoqPEJp3ncVdxtuF9iCPaqd86d550mukaS7K2JSQZnQ6RVC5ZDgqR7g8/api8ajetWbUciKJMIVsZwm5ZY3MNpzZDsw7dDV3hHFc4ISVcfEh/qNiO9H7WVtDVHivAkua/Cw2YaEfPmKt94pcS/UDZXMSsz2z8di1m/4an6jWq7ixv5Fmf8AIQagNu9a0dc3cc+/aprOMVtCsUVPw/uA2vJaN62qmLaf5chM/np9apJxJpIt20QdAAv+kE/WrSYe2x1JjXrHtVyy1tYUKJ7VydfMmkDFXFOTNwqvtH13qaxwpWjNLc/V/Qc5ouqMdJyjpuT2qvi8aLZNuypu3o1AMhOmZvwgGutvhEceTfE4uzhUzXNI0RNJY+w/L50IGAvY1vNxRa3ZHw2hozf5tfSKKcK4N5b+bfbzr52Y7IP5AZiOsc6KXEYkAiR+nvQe8UPw9+v8BbN34v0/kqcOwQQQqrbt8lUH3+Z9zWuNBYeXbMZpzETMdPf9Kna7mOVdgd/y296my5R0I0+Z12qpt3ZZXgtYSwiAKogLAgbCssoZnu31129q0whOp/atcZigmVPxR+tV82S+i3w8MsSIZm12Jj5GuT+IuIeZj8RJnM4QHsgCkfmCK69ZtMll7p/Ajv0jKpP9K4XZQkLcEEtmzzG7c/entBFXKT+gpq5dRLj4drmuWAARlAMKe561d4Oio5a4GyhdVIktzgMNmBIaOYr3DNIIk+oHKTsCBtoN6HX7jBRm1g6j256Gadu+BYMcJvAq9t3ASQwI3DhpEgDRTqSJ2FTDGH7UXs3AsKRGYkXM2wIM6seWu/LSQ/AmBuepAVkyCxXkdVbeaK28t2Uw8W8+XMzNmZSjZQFaCczdAdJ51D4ZDLGHwnkpcuX0A8wwzgAXbZJ0ylpABBOkE6jQGjl/iV3DELhke3bIX7oBHRIUAlWOksZYgczzofdZ7bnIC/mWhmW72nVhrlfUxz/pWwjsqhcPbuACMxDNdDE9zGWNdBUOn2Sm0+DseoYyOZqtckEwPapbV45jI5morqmS0186a+Nj76FbxZeyqQTXN8Tcljzp08Z3yxIEe9AvDvDTduZ2X7tD/wAzch7cya9T7NiseHczKeN5M1IL+HOHeVbzEet9/wCg+VMnDiqvln1suaOwMT7T+dBOOcbt4VA7CWJhVBgsf6KOdLPgPjLvxPPdYMbqlNB6QZBUDsNaYx4Z5byvpfc18k4YorFHv9jpHEDJjt+9Cr+wI5VfxxIOvf6UNY79NvzqIndELOT/AFjlUDANpzH971LZPX86lyAct6Lons0wz5YBGb9fergIPX23qFbc84H61KjR8P8AvQkmGzoRuKGYjh6EyQZ6ryop9pChmcwqySTppvNCsTxe2SA5i0wnoW5aDnV+KMn0UZZqPZC962qhBdQszKqsTl9JMNv+MCatDFqwAtCQCw8wgySPSQo35HU0qcQsq+Ltt6Vw5dUUKCsxuwJ2Yvy6U6YDCCyoVNVlj6ozSSW5abmrc0I40vLAxSc7dcEBwl5tBNoHdpBuEfy/hQHmdTV7huEW0AETKswAPqzGZLdzrXgxB226d/nUyL9OuvelZSbGEkj25dkRt9Dr0qBnmUWf526Dp7mp1QAFp219v7mocJIGv4jLd/bpVYRLgsJEN/f5VqygsT8hO1WbhYRpE9Khsp033qE/JL9DewQi6kd6XuHYg38SzawDA15AxpV3jzKAF/F17c560G4BiFVy2UlVb8OgAOuYz020q2MLTaK3Lmh28ccQTD8MxEmGuWzaUdTc9P8ApzH5Vw7CKyxAQzG5/UUxf4jeJWxVxLIgJbJIHU7An5TQPD4Ukanbfbnrp3rR0sPd4ufIjle7Iy1ZUiI5nafTXuIhlCnQzy7awG7V4rQhIUSfyUtp1r04UaDT0gDnuTrPbWj4uyDLDqEtgKZ2JbnrrHTTWpMJaK3BkLqwaYgFRt3kAxUeIcLkA3mNN+5+UVZRpkgAg8xoN9yDMjtXX5IGXhOKUZ0uhbilmhWzOc3xZ1OwMkiO9HMEcOF8stkVIyBUjRtZMb6/pSbdt3WyopGUAtB02A1npyiidhr66re8ssAWCrmMyfiM/kBVTXkI61uTy1NVFw5kk66/3pRWIzH3qACFLExuTXznf8Tr1HbtHO/EnD/NvZFMA6sQNgN/nyqtxzHJgcOGCg6hbSEkAnckxqY3J5mp/Efie3YYzDXDtbHxN0zfwj3rnvEL9/F3c95ojRVUjKo3gfvzr2ug0s5Qj7z8K+5TccKe38T+xQv+ZiHNy65JO55DtHIcoophLgtNbujTKQ4GxOXrXty0qp6V21MHXXQHXbfaqaIZJ1ncMwEjrrtNa7akq8C6VcnV/tq30S4moYSNduqnuDVe0dG5bn+lLPhniaITaJOUkan+I8/nTO1qCPqKy5Q2SofjLcrICms9qlAnXnWmgFS2lO4oQujLTDWRUr3BWtxGgkCe1R3FcddKiuTrIcXaFxSrQQRquwImY+nzpa8LuXe+rAF0edhonJVPICNKNXsUZKskzsRvrSricQbGMs3RIDkJc5dF36gEH/01oYIvY0I5Wt1jXcwwd7kN6NJQhTm5Ek9PYTpvVHgeLYXrmCc5sql7Tk6ldBlJ5xJj2NFcQAvqjXrsdPod6XeI4w2cSl5h/wB3dBI3IS4kGe2s/OgSc04/Lj6h2oNP58jq1jKOwquLuaRoJ51JfuMxVBrzJkRH+4qAJ7wP73pJfMafyJyk+k7AAn5f3zqTDoP3IqOzY59ZzDrz3q5btxuP770MmEkbBQNZ7CssXAJJ227VE6k1DiYJCT7/ANaE4XuJ3Szs/IAxQnDcRGGw7ONzmgHclp/6VP4hvgZ50hoGvTSkbiWONwgToPqetaOnwb1T6FMuSufJX80liTBJMmaN4NibeY8tBHpjXp1NL4NM+B9dvkstmOszlgD9K0MvCFI9niWTOghZzGe20/tUlm2STuQxJP6gR+Xyq3jboRJ0/PWTNCcRma2SpkT8PvpmnpS65LCbFYbMI0O22jSOfarGCxIQeW6zKmZMan+vvVTA4dRmYkknsdCK1xy5/haSpM6Rz0idtKKl0QE7OJGxOlzYTqB/X2rzC8TyzF8WwYPpA9XuDtFCcLZIZSfYSZnT9TW68PuHVEBHONYPfvXbYpncn0kzb1zb/FjxTfw5t4aw2TOhZ3HxRMAKeXPWsrK8V7CxQya74ldJv8xnNxDg5Zw5sx9Ukk/FuST1nei4wKlGldQeUDTrpzrKyva5nT4KILgFXsQLZ9OZtPxbR7ddqnuY8XlGkFfUY2NZWVZsWxS8g3yEuDxdByzmncwNtY05EAiuhYS3CfkNd/zrKykNQlyX421JENsT+e1TIv8At0+dZWUmNFy0m/TlXpj4TP8AsP8ArXlZQkg+5bAcaSJ58qU/GOBGQkb5S0d15/lXlZTemk96FtRFKFjDxjFCEbeQDMDYrvB5x+VLHie2rWbtzWZt6ncrIGoGh5VlZV+nVNFOd80NHhbGeZhLJGrZcp5H0nLvzo0bQ+GPhmTO5Ne1lIZlWSSXqPY+YolspHIGdpFTFAx0rKyqWGRXVy7daFcXfKjEdN+deVlHBWwZ8I5PxziBdyJO5oQaysr0WOKjFUZU22zdBB70Y4Jc9bAmOcCYMcqysqMnTIiFcchlY/v89z71Vw9s7bjXfp0+le1lKrotN8qqmhBM6gr6R7CtLeHz5WBy7yNOVZWV1nE+EtFVIbUCYA77Se3ar3CbropKMRJ1gwNKysoGyT//2Q=='/>
                </div>
                <div className={s.postMessage}>
                    {props.message}
                </div>
            </div>
                <div className={s.like}>
                    <button className='button' onClick={addLike}>
                        <img className={s.likeLogo} alt="like button" src='https://cdn.worldvectorlogo.com/logos/like-2.svg'
                             title='Like'/>
                    </button>
                    <span className="like"> likes: </span>{props.likes}
                </div>
        </div>
    );
};

export default Post;
