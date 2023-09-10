import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issues : Issue[] = [];

  constructor() { }

  getPedingIssues() : Issue[] {
    return this.issues.filter(issue => !issue.completed) //THE ISSUE PROPERTY IN THE FILTER IS SELF DECLARED
                                                         // GET THE ISSUES WHICH ARE NOT COMPLETED 
  }
}
