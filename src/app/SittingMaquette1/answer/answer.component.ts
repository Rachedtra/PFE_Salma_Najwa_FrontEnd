import { Component, OnInit } from '@angular/core';
import { DemandeInfo } from 'src/app/shared/demande-info.model';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { CommentaireService } from 'src/app/shared/commentaire.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Commentaire } from 'src/app/shared/commentaire.model';
import { ActivatedRoute } from '@angular/router';
import { VoteService } from 'src/app/shared/vote.service';
import { Vote } from 'src/app/shared/vote.model';
import { Observable, of } from 'rxjs';
import { Rating } from 'ngx-rating';
import { MicroserviceService } from 'src/app/shared/microservice.service';
import { Microservice } from 'src/app/shared/microservice.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  
  constructor( private modalService: BsModalService,private route: ActivatedRoute,private vote:VoteService,
    private _snackBar: MatSnackBar,private demandInfo:DemandeInfoService,private commentaireService:CommentaireService,private microservice:MicroserviceService) { }
    directives: [Rating]
    starsCount: number;
    bsModalRef: BsModalRef;

  ngOnInit() {
  

    this.GetAll();

}
GetAll()
{
console.log("test");
this.demandInfo.getDemandeInfoList().subscribe(res => {
  this.demandInfo.DemandeList = res as DemandeInfo[];
  console.log("test2",res);
 })
}
get()
{
console.log("test");
this.commentaireService.GetListCommentaire().subscribe(res => {
  this.commentaireService.CommentaireList = res as Commentaire[];
  console.log("test2",res);
 })
}
GetVote()
{
console.log("test");
this.vote.getListVote().subscribe(res => {
  this.vote.VoteList = res as Vote[];
  console.log("test2",res);
 })
}

PostForm() {
  debugger
  this.commentaireService.postCommentaire().subscribe(res => {
    if (res as Commentaire) {
      debugger
      this.bsModalRef.hide();
      this.commentaireService.GetListCommentaire().subscribe(res => {
        this.commentaireService.CommentaireList = res as Commentaire[]
      })
      this._snackBar.open("L'ajout est effectué avec succées", "X", {
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "right",
        panelClass: ["green-snackbar"]
      });
    }

  },
    err => {
      console.log(err)
      this._snackBar.open("Erreur", "X", {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: "right",
        panelClass: ["red-snackbar"]
      });
    }


  )
}


    onSubmit() {
          
        this.PostForm();

    }




  onRate($event:{oldValue:number, newValue:number}) {
    this.vote.postVote().subscribe(res => {
      if (res as Vote) {
        this.vote.getListVote().subscribe(res => {
          console.log('get comment service');
          this.vote.VoteList = res as Vote[]

           });

          
        }
        
      }
    )}
    consulterquestion(demande: DemandeInfo) {
      console.log('rrrrr')
      this.demandInfo.initializeFormForUpdateDemandeInfo(demande);
      localStorage.setItem('ID_demande', demande.idInf);
      this.commentaireService.getcommentaireByIDdemande(localStorage.getItem('ID_demande')).subscribe(res => {
        debugger
        this.commentaireService.CommentaireList = res as Commentaire[];
      }
      )
  
  
    }
  }
  

  