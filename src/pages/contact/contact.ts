import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlunoProvider, Aluno } from '../../providers/aluno/aluno';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {

  model: Aluno;
  key: string;

  numero_REGEXP =  /^\d+$/;

  pagamentoitens = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18',
    '19','20','21','22','23','24','25','26','27','28'];

  ingressoItens = ['1º','2º','3º','4º','5º','6º','7º','8º','9º'];

  arrayEstados = ['Acre - AC','Alagoas - AL','Amapá - AP','Amazonas - AM','Bahia - BA','Ceará - CE','Distrito Federal - DF',
    'Espírito Santo - ES','Goiás - GO','Maranhão - MA','Mato Grosso - MT','Mato Grosso do Sul - MS','Minas Gerais - MG','Pará - PA',
    'Paraíba - PB','Paraná - PR','Pernambuco - PE','Piauí - PI','Rio de Janeiro - RJ','Rio Grande do Norte - RN','Rio Grande do Sul - RS',
    'Rondônia - RO','Roraima - RR','Santa Catarina - SC','São Paulo - SP','Sergipe - SE','Tocantins - TO'];

  public cadastroForm: any;

  messageNome = "";
  messageData_nasc = "";
  messageS_ingresso = "";
  messageCep = "";
  messageRua = "";
  messageNumero = "";
  messageComple = "";
  messageBairro = "";
  messageCidade = "";
  messageEstado = "";
  messageNome_mae = "";
  messageCpf_mae = "";
  messageTel_contato = "";
  messagePagamentoData = "";

  errorNome = false;
  errorData_nasc = false;
  errorS_ingresso = false;
  errorCep = false;
  errorRua = false;
  errorNumero = false;
  errorComple = false;
  errorBairro = false;
  errorCidade = false;
  errorEstado = false;
  errorNome_mae = false;
  errorCpf_mae = false;
  errorTel_contato = false;
  errorPagamentoData = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alunoProvider: AlunoProvider, 
  private toast: ToastController, formBuilder: FormBuilder) {
      
    this.cadastroForm = formBuilder.group({
      nome: ['', Validators.compose([ Validators.minLength(3), Validators.maxLength(100),Validators.required ])],
      data_nasc: ['', Validators.required ], 
      s_ingresso: ['', Validators.required ],
      cep: ['', Validators.compose([ Validators.minLength(8), Validators.maxLength(8),Validators.required, Validators.pattern(this.numero_REGEXP) ])],
      rua: ['', Validators.compose([ Validators.maxLength(120),Validators.required ])],
      numero: ['', Validators.compose([ Validators.minLength(1), Validators.maxLength(10),Validators.required, Validators.pattern(this.numero_REGEXP) ])],
      comple: [],
      bairro: ['', Validators.compose([ Validators.maxLength(100),Validators.required])],
      cidade: [''],
      estado: [''],
      nome_mae: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(100),Validators.required])],
      cpf_mae: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11),Validators.required,Validators.pattern(this.numero_REGEXP) ])],
      tel_contato: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(13),Validators.required, Validators.pattern(this.numero_REGEXP)])],
      pagamentoData: [''],
    });

    if (this.navParams.data.aluno && this.navParams.data.key) {
      this.model = this.navParams.data.aluno;
      this.key =  this.navParams.data.key;
    } else {
      this.model = new Aluno();
    }
  }

  getdataAtual(){
    var date = new Date();
    var ano = date.getFullYear()
    var mes = date.getMonth() + 1;
    var dia = date.getDate();
    let dataAtual = ano + "-" + mes + "-" + dia;

    return dataAtual;
 }

  save() {

    let { nome, data_nasc, s_ingresso, cep, rua, numero, comple, bairro, cidade, estado, nome_mae, 
      cpf_mae, tel_contato, pagamentoData } = this.cadastroForm.controls;
 
    if (!this.cadastroForm.valid) {
 
      if (!nome.valid) {
        this.errorNome = true;
        this.messageNome ="Preenchimento obrigatório"
      } else {
        this.messageNome = "";
      }


    if (!this.cadastroForm.valid) {
 
      if (!data_nasc.valid) {
        this.errorData_nasc = true;
        this.messageData_nasc ="Campo obrigatório / Data não pode ser maior que á atual"
      } else {
        this.messageData_nasc = "";
      }
    }

    if (!this.cadastroForm.valid) {
 
      if (!s_ingresso.valid) {
        this.errorS_ingresso = true;
        this.messageS_ingresso ="Inválido"
      } else {
        this.messageS_ingresso = "";
      }
    }

    
    if (!this.cadastroForm.valid) {
 
      if (!cep.valid) {
        this.errorCep = true;
        this.messageCep ="Cep Inválido"
      } else {
        this.messageCep = "";
      }
    }

    
    if (!this.cadastroForm.valid) {
 
      if (!rua.valid) {
        this.errorRua = true;
        this.messageRua ="Favor verificar"
      } else {
        this.messageRua = "";
      }
    }

    
    if (!this.cadastroForm.valid) {
 
      if (!numero.valid) {
        this.errorNumero = true;
        this.messageNumero ="Favor verificar"
      } else {
        this.messageNumero = "";
      }
    }

    
    if (!this.cadastroForm.valid) {
 
      if (!comple.valid) {
        this.errorComple = true;
        this.messageComple ="Favor verificar"
      } else {
        this.messageComple = "";
      }
    }

    
    if (!this.cadastroForm.valid) {
 
      if (!bairro.valid) {
        this.errorBairro = true;
        this.messageBairro ="Favor verificar"
      } else {
        this.messageBairro = "";
      }
    }

    
    if (!this.cadastroForm.valid) {
 
      if (!cidade.valid) {
        this.errorCidade = true;
        this.messageCidade ="Favor verificar"
      } else {
        this.messageCidade = "";
      }
    }

    
    if (!this.cadastroForm.valid) {
 
      if (!estado.valid) {
        this.errorEstado = true;
        this.messageEstado ="Favor verificar"
      } else {
        this.messageEstado = "";
      }
    }

     
    if (!this.cadastroForm.valid) {
 
      if (!nome_mae.valid) {
        this.errorNome_mae = true;
        this.messageNome_mae ="Preenchimento obrigatório"
      } else {
        this.messageNome_mae = "";
      }
    }

    
    if (!this.cadastroForm.valid) {
 
      if (!cpf_mae.valid) {
        this.errorCpf_mae = true;
        this.messageCpf_mae ="Preenchimento obrigatório"
      } else {
        this.messageCpf_mae = "";
      }
    }

    if (!this.cadastroForm.valid) {
 
      if (!tel_contato.valid) {
        this.errorTel_contato = true;
        this.messageTel_contato ="Preenchimento obrigatório"
      } else {
        this.messageTel_contato = "";
      }
    }

    if (!this.cadastroForm.valid) {
 
      if (!pagamentoData.valid) {
        this.errorPagamentoData = true;
        this.messagePagamentoData ="Preenchimento obrigatório"
      } else {
        this.messagePagamentoData = "";
      }
    }

    }else {
      let dataAtual = new Date( this.getdataAtual() );
      let dataAluno = new Date( this.model.data_nasc );
    
      if(dataAluno <= dataAtual){
        this.saveAluno()
        .then(() => {
          this.toast.create({ message: 'Aluno salvo.', duration: 3000, position: 'botton' }).present();
          this.navCtrl.pop();
        })
        .catch(() => {
          
        });
        this.getdataAtual();

      }else{
        this.toast.create({ message: 'Data inválida!', duration: 3000, position: 'botton' }).present();
      }
    }
  }

  private saveAluno() {

    if (this.key) {
      return this.alunoProvider.update(this.key, this.model);
    } else {
      return this.alunoProvider.insert(this.model);
    }
  }

}