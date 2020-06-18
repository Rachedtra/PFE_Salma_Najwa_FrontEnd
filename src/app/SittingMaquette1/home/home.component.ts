import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentaireService } from 'src/app/shared/commentaire.service';
import { Commentaire } from 'src/app/shared/commentaire.model';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { DemandeInfo } from 'src/app/shared/demande-info.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  demandeInfo:[];

  constructor(private _snackBar: MatSnackBar,private demandInfo:DemandeInfoService,private commentaireService:CommentaireService) { }

  ngOnInit() {
    this.commentaireService.CommentaireFormAdd_update.markAsUntouched();

    // this.demandInfo.getDemandeInfoList()
    // .subscribe(res => this.demandeInfo = res as []); 
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

   PostForm() {
    debugger
    this.commentaireService.postCommentaire().subscribe(res => {
      if (res == "Added done") {
        debugger
        this.commentaireService.getCommentaireList().subscribe(res => {
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
    debugger
    if (
      this.commentaireService.CommentaireFormAdd_update.controls.idCom.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    }
     else {
      this.PostForm();
    }
  }

}
