class logoutPage{
    constructor(page){
        this.page=page;
        this.menu="//img[@alt='menu']";
        this.signoutoption="//button[normalize-space()='Sign out']";

    }

    async logoutFromApplication(){
      await  this.page.click(this.menu);
      await  this.page.click(this.signoutoption);
    }
}

module.exports=logoutPage;