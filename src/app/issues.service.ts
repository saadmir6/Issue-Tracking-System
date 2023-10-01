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

  createIssue(issue : Issue) {
    issue.IssueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  completedIssue(issue : Issue) {
    const selectedIssue : Issue = {
      ...issue,  // OPEN THE ISSUE AND ADD THE CURRENT DATE
      completed : new Date()
    };
    const index = this.issues.findIndex(i => i === issue);
    this.issues[index] = selectedIssue;
  }

  getSuggestions(title : string): Issue[] {
    if (title.length > 3) {
      return this.issues.filter( issue => issue.title.indexOf(title) != -1);
    }
    return []
  }
}
