import { Component, OnInit } from '@angular/core';

import { BsModalRef} from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VoteService } from 'src/app/shared/vote.service';
import { Vote } from 'src/app/shared/vote.model';
@Component({
  selector: 'app-add-update-vote',
  templateUrl: './add-update-vote.component.html',
  styles: []
})
export class AddUpdateVoteComponent implements OnInit {


  constructor(public bsModalRef: BsModalRef, private voteService: VoteService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
 this.voteService.VoteFormAdd_update.markAsUntouched();
this.voteService.VoteList;
  }
  UpdateForm() {
    this.voteService.updateVote().subscribe(res => {
      if (res as Vote) {
        this.bsModalRef.hide();
        this.voteService.getListVote().subscribe(res => {
          this.voteService.VoteList = res as Vote[]
        })
        this._snackBar.open("La modification est effectuée avec succées", "X", {
          duration: 3000,
          verticalPosition: "top",
          horizontalPosition: "right",
          panelClass: ["green-snackbar"]
        });
      }
    },
      err => {
        console.log(err)
        this._snackBar.open('Erreur', "X", {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: "right",
          panelClass: ["red-snackbar"]
        });
      }
    )

  }

  PostForm() {
    debugger
    this.voteService.postVote().subscribe(res => {
      if (res as Vote) {
        debugger
        this.bsModalRef.hide();
        this.voteService.getListVote().subscribe(res => {
          this.voteService.VoteList = res as Vote[]
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
      this.voteService.VoteFormAdd_update.controls.idVote.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    }
     else {
      this.UpdateForm();
    }
  }

}