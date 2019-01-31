import { Component, ElementRef } from '@angular/core';
import { NavController, ToastController, AlertController, ModalController } from 'ionic-angular';

import { AlunoProvider, Aluno, AlunoList } from '../../providers/aluno/aluno';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  alunos: AlunoList[];

  totalAlunos: string
 
  constructor(public navCtrl: NavController, private alunoProvider: AlunoProvider, 
    private toast: ToastController, private alert: AlertController, private modalCtrl: ModalController) { }
 
  ionViewDidEnter() {
    this.alunoProvider.getAll()
      .then((result) => {
        this.alunos = result;
        this.alunos.sort((a, b) => (a.aluno.nome < b.aluno.nome) ? -1 : 1);

        this.totalAlunos = this.alunos.length+ " Alunos Registrado(s)!";
        
      });
  }

  addAluno() {
    this.navCtrl.push('ContactPage');
  }

  editAluno(item: AlunoList) {
    this.navCtrl.push('ContactPage', { key: item.key, aluno: item.aluno });
  }

  removeAluno(item: AlunoList) {

      const alert = this.alert.create({
        title: "Excluir",
        subTitle: '<strong>'+item.aluno.nome+'</strong> sera apagado!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              
            }
          }, {
            text: 'Excluir',
            
            handler: () => {
               this.alunoProvider.remove(item.key)
                .then(() => {
                  var index = this.alunos.indexOf(item);
                  this.alunos.splice(index, 1);
                  this.toast.create({ message: 'Aluno removido.', duration: 3000, position: 'botton' }).present();
                  
                  this.totalAlunos = this.alunos.length+ " Alunos Registrado(s)!";
                })
                
            }
          }
        ],
        cssClass: 'alertApresentacao'

      });
  
      alert.present();
    
  }

  
  itemClicked(item : AlunoList){

    const alert = this.alert.create({
      message: '<div>'+
      '<ion-icon name="contacts" height="80" ></ion-icon>'+
      '<img height="80" src="assets/imgs/user_circle.png">'+
      '</div>'+
      '<div>'+
            '<div class="titleNome">' + item.aluno.nome  +'</div>'+
            '<div class="contato"> Contato: '+ item.aluno.tel_contato +'</div>'+
            '<div class="pg"> Pagamento dia: '+ item.aluno.pagamentoData +'</div>'+
      '</div>',
      
      buttons: [
        {
          text: 'Editar',
          handler: () => {
            this.editAluno(item);
          }
          
        },
 
        {
          text: 'Ligar',
          handler: () => {
            console.log('Yes clicked');
          }
        },

        {
          text: 'Excluir',
          handler: () => {
            this.removeAluno(item)
          }
        }

      ],
      cssClass: 'alertApresentacao'
      
    });

    alert.present();
 
  }
  
}
