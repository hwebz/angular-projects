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
}
