import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentaireService } from 'src/app/shared/commentaire.service';
import { Commentaire } from 'src/app/shared/commentaire.model';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { DemandeInfo } from 'src/app/shared/demande-info.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomaineService } from 'src/app/shared/domaine.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StarRatingComponent } from 'ng-starrating';
import { FormControl, FormGroup } from '@angular/forms';
import { Rating } from 'ngx-rating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes: Commentaire[] = [];

  constructor(    private router: Router,
    private languageService: CommentaireService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
 this.languageService.CommentaireFormAdd_update.markAsUntouched();
 this.GetCommentaire();
  }
 
  /* #region  GetListMethods */
  GetCommentaire() {
    console.log("test");
    this.languageService.GetListCommentaire().subscribe(res => {
      this.languageService.CommentaireList = res as Commentaire[];
      console.log("test2",res);

    })
  }
  
  PostForm() {
    debugger
    this.languageService.postCommentaire().subscribe(res => {
      if (res == "Added done") {
        debugger
        this.languageService.GetListCommentaire().subscribe(res => {
          this.languageService.CommentaireList = res as Commentaire[]
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




  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
  // directives: [Rating]

  // demandeInfo:[];
  // searchText;
  // constructor( private modalService: BsModalService, private snackBar: MatSnackBar,private domainService: DomaineService,private _snackBar: MatSnackBar,private demandInfo:DemandeInfoService,private commentaireService:CommentaireService) { }
  // bsModalRef: BsModalRef;
  // starsCount: number;

  // ngOnInit() {
    // this.commentaireService.CommentaireFormAdd_update.markAsUntouched();
    // this.demandInfo.DemandeInfoFormAdd_update.markAsUntouched();

    // this.demandInfo.getDemandeInfoList()
    // .subscribe(res => this.demandeInfo = res as []); 
    // this.GetAll();
  // }
  // onSubmit() {
    // TODO: Use EventEmitter with form value
  //   console.warn(this.profileForm.value);
  // }
//  GetAll()
//  {
//   console.log("test");
//   this.demandInfo.getDemandeInfoList().subscribe(res => {
//     this.demandInfo.DemandeList = res as DemandeInfo[];
//     console.log("test2",res);
//    })
//   }
//   PostForm() {
//     debugger
//     this.commentaireService.postCommentaire().subscribe(res => {
//       if (res == "Added done") {
//         debugger
//         this.bsModalRef.hide();
//         this.commentaireService.getCommentaireList().subscribe(res => {
//           this.commentaireService.CommentaireList = res as Commentaire[]
//         })
//         this._snackBar.open("L'ajout est effectué avec succées", "X", {
//           duration: 3000,
//           verticalPosition: "top",
//           horizontalPosition: "right",
//           panelClass: ["green-snackbar"]
//         });
//       }

//     },
//       err => {
//         console.log(err)
//         this._snackBar.open("Erreur", "X", {
//           duration: 3000,
//           verticalPosition: 'top',
//           horizontalPosition: "right",
//           panelClass: ["red-snackbar"]
//         });
//       }


//     )
//   }

//   onClickMe() {
//     debugger
//     if (
//       this.commentaireService.CommentaireFormAdd_update.controls.idCom.value ==
//       "00000000-0000-0000-0000-000000000000"
//     ) {
//       this.PostForm();
//     }
//      else {
//       this.PostForm();
//     }
//   }
//   onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
//     alert(`Old Value:${$event.oldValue}, 
//       New Value: ${$event.newValue}, 
//       Checked Color: ${$event.starRating.checkedcolor}, 
//       Unchecked Color: ${$event.starRating.uncheckedcolor}`);
//   }
}
