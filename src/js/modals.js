$(".conferences-item").click((event)=>{
    const id=JSON.parse($(event.currentTarget).attr("data-id"));
    const conference=conferenceComponent.conferences.find(x=>x.id==id);
    $("#modalVitasLargeName").text(conference.name);
    $("#modalVitasLargeDescription").text(conference.description);
    $("#modalVitasLargeImage").attr("src",conference.img);
    $("#modalVitasLarge").modal("show");
});

$(".judge-item").click((event)=>{
    console.log(event)
    const id=JSON.parse($(event.currentTarget).attr("data-id"));
    const page=JSON.parse($(event.currentTarget).attr("data-page"));
    const type=$(event.currentTarget).attr("data-type");
    const judge=(type=='judges'?judgesComponent:reviewersComponent).judgePages[page].find(x=>x.id==id);
    $("#modalVitasSmallName").text(judge.name);
    $("#modalVitasSmallDescription").text(judge.description);
    $("#modalVitasSmallImage").attr("src",judge.img);
    $("#modalVitasSmallPlace").text(judge.from);
    $("#modalVitasSmallFlag").attr("src",judge.flag);
    $("#modalVitasSmallFlagSecondary").css("display","none");
    if(judge.flagSecondary){
        $("#modalVitasSmallFlagSecondary").css("display","block");
        $("#modalVitasSmallFlagSecondary").attr("src",judge.flagSecondary);
    }
    $("#modalVitasSmallLinkedIn").css("display","none");
    if(judge.linkedin){
        $("#modalVitasSmallLinkedIn").css("display","block");
        $("#modalVitasSmallLinkedIn").attr("href",judge.linkedin);
    }
    $("#modalVitasSmall").modal("show");
});

// $(".members-item").click((event)=>{
//     const id=JSON.parse($(event.currentTarget).attr("data-id"));
//     const member=membersComponent.members.find(x=>x.id==id);
//     $("#modalVitasName").text(member.name);
//     $("#modalVitasDescription").text(member.description);
//     $("#modalVitasImage").attr("src",member.img);
//     $("#modalVitasImage").attr("class","vitas-modal-img-others");
//     $("#modalVitas").modal("show");
// });

$(".tutorials-item").click((event)=>{
    const id=JSON.parse($(event.currentTarget).attr("data-id"));
    const tutorial=tutorialsComponent.tutorials.find(x=>x.id==id);
    $("#modalTutorialsName").text(tutorial.name);
    
    let html="";
    for(let i=0;i<tutorial.people.length;i++){
        const person=tutorial.people[i];
        const content=`
        <div class="tutorials-modal-container-vita">
            <div class="tutorials-modal-container-text">
                <h5 class="tutorials-modal-name">${person.name}</h5>
                <p class="tutorials-modal-content">${person.description}</p>
            </div>
            <div class="tutorials-modal-container-img">
                <img src="${person.img}" alt="Imagen de la persona" class="tutorials-modal-img">
            </div>
        </div>`;
        html+=content;
    }

    $("#modalTutorialsPeople").html(html);

    $("#modalTutorialsTitle").text(tutorial.title);
    $("#modalTutorialsSchedule").text(tutorial.schedule);
    $("#modalTutorialsObjective").text(tutorial.description);

    $("#modalTutorialsRequirements").parent().css("display",tutorial.requirements?"block":"none");
    let requirementsList="";
    for(let i=0;i<tutorial.requirements.length;i++){
        const requirement=tutorial.requirements[i];
        if(requirement.type=="link"){
            requirementsList+=`<li><a href="${requirement.text}" target="_blank">${requirement.text}</li>`;
        }else{
            requirementsList+=`<li>${requirement.text}</li>`;
        }
    }
    $("#modalTutorialsRequirements").html(`<ul>${requirementsList}</ul>`);
    $("#modalTutorialsThemes").parent().css("display",tutorial.themes?"block":"none");
    let list="";
    if(tutorial.themes)
        tutorial.themes.forEach(x=>list+=`<li class="tutorials-modal-theme">${x}</li>`)
    $("#modalTutorialsThemes").html(list);

    $("#modalTutorials").modal("show");
});

$(".workshops-item").click((event)=>{
    const id=JSON.parse($(event.currentTarget).attr("data-id"));
    const workshops=workshopsComponent.workshops.find(x=>x.id==id);
    
    let html="";
    for(let i=0;i<workshops.people.length;i++){
        const person=workshops.people[i];
        const content=`
        <div class="tutorials-modal-container-vita">
            <div class="tutorials-modal-container-text">
                <h5 class="tutorials-modal-name">${person.name}</h5>
                <p class="tutorials-modal-content">${person.description}</p>
            </div>
            <div class="tutorials-modal-container-img">
                <img src="${person.img}" alt="Imagen de la persona" class="tutorials-modal-img">
            </div>
        </div>`;
        html+=content;
    }

    $("#modalTutorialsPeople").html(html);

    $("#modalTutorialsTitle").text(workshops.title);
    $("#modalTutorialsSchedule").text(workshops.schedule);
    $("#modalTutorialsObjective").text(workshops.objective);
    
    $("#modalTutorialsRequirements").parent().css("display",workshops.requirements?"block":"none");
    $("#modalTutorialsRequirements").text(workshops.requirements);
    $("#modalTutorialsThemes").parent().css("display",workshops.themes?"block":"none");
    let list="";
    if(workshops.themes)
        workshops.themes.forEach(x=>list+=`<li class="tutorials-modal-theme">${x}</li>`)
    $("#modalTutorialsThemes").html(list);

    $("#modalTutorials").modal("show");
});

$(".panel-item").click((event)=>{
    const id=$(event.currentTarget).attr("data-id");
    const type=$(event.currentTarget).attr("data-type");
    let types=type=="moderator"?panelComponent.moderators:panelComponent.panels;
    const panel=types.find(x=>x.id==id);
    $("#modalVitasLargeName").text(panel.name);
    $("#modalVitasLargeDescription").text(panel.description);
    $("#modalVitasLargeImage").attr("src",panel.img);
    $("#modalVitasLarge").modal("show");
    // $("#modalVitasSmallName").text(panel.name);
    // $("#modalVitasSmallDescription").text(panel.description);
    // $("#modalVitasSmallImage").attr("src",panel.img);
    // $("#modalVitasSmallFlag").css("display","none");
    // $("#modalVitasSmallLinkedIn").css("display","none");
    // $("#modalVitasSmallFlagSecondary").css("display","none");
    // $("#modalVitasSmall").modal("show");
});