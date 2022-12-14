import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues as sampleIssues } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issues: Issue[] = [];

  constructor() {
    this.issues = sampleIssues;
  }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  completeIssue(issue: Issue) {
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date()
    };
    const index = this.issues.findIndex(i => i === issue);
    this.issues[index] = selectedIssue;
  }

  getSuggestions(title: string): Issue[] {
    if (title.length > 3) {
      return this.issues.filter(issue => issue.title.toLowerCase().indexOf(title.toLowerCase()) !== -1)
    }
    return [];
  }

  updateIssue(issueNo: number, issue: Issue) {
    const existingIssue = this.issues.find(issue => issue.issueNo === issueNo);
    if (existingIssue) {
      const index = this.issues.indexOf(existingIssue);
      this.issues[index] = {
        ...existingIssue,
        ...issue
      }
    }
  }
}
