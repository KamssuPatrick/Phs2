import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController } from 'ionic-angular';
import { GestionUtilisateurPage } from '../../../../pages/gestion-utilisateur/gestion-utilisateur';

import { MessageriePage } from '../../../../pages/messagerie/messagerie';
import { ChatbodyPage } from '../../../../pages/chatbody/chatbody';
import { ChatProvider } from '../../../../providers/chat/chat';
import { AjoutLogisPage } from '../../../../pages/ajout-logis/ajout-logis';

@IonicPage()
@Component({
    selector: 'swipe-to-dismiss-layout-1',
    templateUrl: 'swipe-to-dismiss.html'
})
export class SwipeToDismissLayout1 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;

    animateItems = [];
    animateClass: any;

    constructor(public navCtrl: NavController, public chatProvider: ChatProvider) {
        this.animateClass = { 'fade-in-left-item': true };

    }

    onEvent(event: string, item: any, test: any, e: any) {
        if (this.events[event]) {
            this.events[event](item);
        }

        if (event === "onItemClick")
        {
            //this.navCtrl.push(ChatbodyPage, { item:item, test:test});

            /*this.chatProvider.initialize(test)
            this.navCtrl.push(ChatbodyPage, {
            Details: test
            });*/
        }

        if (event === "onAjouterLogis")
        {
            this.navCtrl.push(AjoutLogisPage);
        }
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
        let that = this;
        that.data = changes['data'].currentValue;
        if (that.data && that.data.items) {
            console.log("heeeeeeeeeeeeeeeeeeeee", that.data.items);
            that.animateItems = [];
            for (let i = 0; i < that.data.items.length; i++) {
                setTimeout(function () {
                    that.animateItems.push(that.data.items[i]);
                }, 200 * i);
            }
        }
    }
}
