import { Component, OnInit, ViewChild, ElementRef, Output, Input, EventEmitter } from '@angular/core';
import { DomaineService } from 'src/app/shared/domaine.service';
import { Observable } from 'rxjs';
import { Domaine } from 'src/app/shared/domaine.model';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { DemandeInfo } from 'src/app/shared/demande-info.model';
import { CommentaireService } from 'src/app/shared/commentaire.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { MicroserviceService } from 'src/app/shared/microservice.service';
import { VoteService } from 'src/app/shared/vote.service';
import { Microservice } from 'src/app/shared/microservice.model';
import { Vote } from 'src/app/shared/vote.model';
import { Commentaire } from 'src/app/shared/commentaire.model';

@Component({
  selector: 'app-list-domain',
  templateUrl: './list-domain.component.html',
  styleUrls: ['./style.css']
})
export class ListDomainComponent implements OnInit {
  @Input() idInf: '00000000-0000-0000-0000-000000000000'
  @Output() onClick = new EventEmitter()
  demandeInfoList:[];

  constructor(    private router: Router,private vote: VoteService,private commentaireService:CommentaireService,
    private MSService: MicroserviceService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.MSService.MicroserviceFormAdd_update.markAsUntouched();
    this.commentaireService.CommentaireFormAdd_update.markAsUntouched();

    this.GetAll();
    this.get();

}
GetAll()
{
console.log("test");
this.MSService.getListMicroservice().subscribe(res => {
  this.MSService.MicroserviceList = res as Microservice[];
  console.log("test2",res);
 })
}get()
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
  this.commentaireService.postCommentaire().subscribe(res => {
    if ("added done") {
      this.commentaireService.GetListCommentaire().subscribe(res => {
        console.log('get comment service');
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
      console.log('eroor',err)
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
    console.log('testOnsubmit');
  
      this.PostForm();

  }



  onRate($event:{oldValue:number, newValue:number}) {
    this.vote.postVote().subscribe(res => {
      if ("added done") {
        this.vote.getListVote().subscribe(res => {
          console.log('get comment service');
          this.vote.VoteList = res as Vote[]

           });

          
        }
        
      }
    )}
    consulter(demand: Microservice) {
      this.MSService.initializeFormForUpdateMicroservice(demand);
    
    }
  }
  





  //  @ViewChild('myDiv') myDiv: ElementRef;


  
//  get(id) {
//   console.log("test");
//   this.demandeInfoService.get(id).subscribe(res => {
//     this.demandeInfoService.DemandeList
//         console.log("test2",res);
// })
// }

