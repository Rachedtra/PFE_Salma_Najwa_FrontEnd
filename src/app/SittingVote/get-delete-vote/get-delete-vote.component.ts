import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VoteService } from 'src/app/shared/vote.service';
import { Vote } from 'src/app/shared/vote.model';
import { AddUpdateVoteComponent } from '../add-update-vote/add-update-vote.component';
@Component({
  selector: 'app-get-delete-vote',
  templateUrl: './get-delete-vote.component.html',
  styles: []
})
export class GetDeleteVoteComponent implements OnInit {

  constructor(private modalService: BsModalService,private voteService:VoteService,private _snackBar: MatSnackBar) { }
  
  bsModalRef: BsModalRef;

    ngOnInit() {
  this.getProjet();
    }
    getProjet() {
      this.voteService.getListVote().subscribe(res => {
        this.voteService.VoteList = res as Vote[]
      })}
      OnDelete(idMethod) {
        debugger
        if (confirm("Vous êtes sûr de vouloir supprimer")) {
          this.voteService.deleteVote(idMethod).subscribe(
            res => {
    
              if (res == "Delete Done") {
                debugger
                this.voteService.getListVote().subscribe(res => {
                  this.voteService.VoteList = res as Vote[]
                  this._snackBar.open("La suppression est effectuée avec succées", "X", {
                    duration: 3000,
                    verticalPosition: "top",
                    horizontalPosition: "right",
                    panelClass: ["green-snackbar"]
                  });
                })
    
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
          );
        }
      }
      openComponentForPost() {
        debugger
        this.voteService.initializeFormForPostVote();
        console.log(this.voteService.initializeFormForPostVote())
    
        this.bsModalRef = this.modalService.show(AddUpdateVoteComponent, {
          class: 'modal-dialog-centered', ignoreBackdropClick: true
        });
      }
      openComponentForUpdate(version:Vote) {
        this.voteService.initializeFormForUpdateVote(version);
        this.bsModalRef = this.modalService.show(AddUpdateVoteComponent, {
          class: 'modal-dialog-centered', ignoreBackdropClick: true
        });
      }
  }