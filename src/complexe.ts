/// <reference types="@workadventure/iframe-api-typings" />

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    const mapUrl = WA.room.mapURL
    const root = mapUrl.substring(0, mapUrl.lastIndexOf("/"))

    if(WA.player.tags.includes("admin")) {
        WA.player.setOutlineColor(0, 119, 141);
    } else {
        WA.controls.disableInviteButton();
        WA.controls.disableMapEditor();
        WA.controls.disableRoomList();
    }
    
    WA.ui.actionBar.addButton({
        id: 'help-btn',
        type: 'action',
        imageSrc: root + '/help.svg',
        toolTip: "Guide utilisateur",
        callback: () => {
            WA.ui.modal.openModal({
                title: "Guide utilisateur",
                src: "https://u2l.fr/guideminicampus",
                allowApi: false,
                allow: "microphone; camera",
                position: "center",
            }, () => WA.ui.modal.closeModal())
        }
    });
    WA.ui.actionBar.addButton({
        id: 'plan-btn',
        type: 'action',
        imageSrc: root + '/map-plan.svg',
        toolTip: "Plan du complexe",
        callback: () => {
            WA.ui.modal.openModal({
                title: "Plan du complexe",
                src: "https://u2l.fr/carteminicampus",
                allowApi: false,
                allow: "microphone; camera",
                position: "center",
            }, () => WA.ui.modal.closeModal())
        }
    });
    WA.ui.actionBar.addButton({
        id: 'program-btn',
        type: 'action',
        imageSrc: root + '/program-schedule.svg',
        toolTip: "Programme de la journée",
        callback: () => {
            WA.ui.modal.openModal({
                title: "Programme de la journée",
                src: "https://u2l.fr/programmeminicampus",
                allowApi: false,
                allow: "microphone; camera",
                position: "center",
            }, () => WA.ui.modal.closeModal())
        }
    });
}).catch(e => console.error(e));

export {};
