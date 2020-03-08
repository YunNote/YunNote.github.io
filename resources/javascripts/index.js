let socialModule = () => {
    const SOCIAL_TYPE = {
        tistory: {
          link : 'https://zzdd1558.tistory.com'
        },
        github: {
          link : 'https://github.com/yunnote',
        },
        instagram: {
            link : 'https://www.instagram.com/lv.28_0c9y2j5/',
        },
        facebook : {
            link : 'https://www.facebook.com/people/%EC%9C%A4%EC%9E%90/100003151658188',
        },
        linkedIn : {
            link : 'https://www.linkedin.com/in/%EC%9C%A4%EC%A7%84-%EC%B5%9C-6a9092115/',
        }
    };

    let getSocialLink = type => {
        return SOCIAL_TYPE[type].link;
    };

    let mySocialLinkEvent = (e) => {
        const {type} = e.currentTarget.dataset;
        window.open(getSocialLink(type), '_blank');
    };

    return {
        mySocialLinkEvent
    }
};

window.onload = () => {

    let socialModuleEvent = socialModule();
    let socialList = document.querySelectorAll(`.social-event`);
    socialList.forEach(v => {
        v.addEventListener("click" , socialModuleEvent.mySocialLinkEvent);
    })
}