import"./assets/styles-793dd55d.js";const e={email:"",message:""},a=document.querySelector(".feedback-form"),r=document.querySelector(".js-input-email"),l=document.querySelector(".js-input-message");a.addEventListener("input",m);function m(t){e[t.target.name]=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))}const s=localStorage.getItem("feedback-form-state");if(s){const t=JSON.parse(s);e.email=t.email||"",e.message=t.message||"",r.value=e.email,l.value=e.message}a.addEventListener("submit",o);function o(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),a.reset()}
//# sourceMappingURL=commonHelpers2.js.map
