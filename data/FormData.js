
export class FormData{
    constructor(){
        this.id="",
        this.username="",
        this.city="",
        this.religion="",
        this.age = "",
        this.email= "",
        this.password = ""
    }

    copy(form){
        this.id=form.id,
        this.username=form.username,
        this.city=form.city,
        this.religion=form.religion,
        this.age = form.age,
        this.email= form.email,
        this.password = form.password
    }


}
