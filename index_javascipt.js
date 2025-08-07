const SubmitButton = () =>{
        let realnameDom = document.querySelector("input[name=realname]")
        let nicknameDom = document.querySelector("input[name=nickname]")
        let engnameDom = document.querySelector("input[name=engname]")
        let GenderDom = document.querySelector("input[name=Gender]:checked")
        let bdayDom = document.querySelector("input[name=bdate]")
        let adayDom = document.querySelector("input[name=adate]")
        let rolesDom = document.querySelector("input[name=roles]")
        let salaryDom = document.querySelector("input[name=salary]")
        let moneytypeDom = document.querySelector("input[name=moneytype]:checked")
        let interestDom = document.querySelectorAll("input[name=interest]:checked")
        let descriptionDom = document.querySelector("textarea[name=description]")

        let interest = ''
        for(let i = 0 ; i<interestDom.length;i++){
            interest += interestDom[i].value
            if(i< interestDom.length-1){
                interest += ', '
            }
        }

        let userdata = {
            realname: realnameDom.value,
            nickname: nicknameDom.value,
            engname: engnameDom.value,
            Gender: GenderDom.value, 
            bday: bdayDom.value,
            aday: adayDom.value,
            role: rolesDom.value,
            salary: salaryDom.value,
            moneytype: moneytypeDom.value,
            description: descriptionDom.value,
            interest: interest
        }
        console.log("submitted" , userdata)
}