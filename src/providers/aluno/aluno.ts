import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunoProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) {}

  public insert(aluno: Aluno) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, aluno);
  }
 
  public update(key: string, aluno: Aluno) {
    return this.save(key, aluno);
  }
 
  private save(key: string, aluno: Aluno) {
    return this.storage.set(key, aluno);
  }
 
  public remove(key: string) {
    return this.storage.remove(key);
  }
 
  public getAll() {
 
    let alunos: AlunoList[] = [];
 
    return this.storage.forEach((value: Aluno, key: string, iterationNumber: Number) => {
      let aluno = new AlunoList();
      aluno.key = key;
      aluno.aluno = value;
      alunos.push(aluno);
    })
      .then(() => {
       return Promise.resolve(alunos);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }


}

export class Aluno {
  nome : string;
  data_nasc : Date;
  serie_ingresso : number;
 
  //Endereço
   cep : number;
   rua: string;
   numero : number;
   complemento : string;
   bairro : string;
   cidade : string;
   estado : string;
  
 //Dados da mãe
  Nome_mae : string;
  cpf_mae : number;
  tel_contato : number;
  pagamentoData : number;
  
}

export class AlunoList {
  key: string;
  aluno: Aluno;
}