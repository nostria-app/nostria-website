import { Routes } from '@angular/router';
import { FeaturesComponent } from './pages/features/features.component';
import { PremiumComponent } from './pages/premium/premium.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AboutComponent } from './pages/about/about.component';
import { FundingComponent } from './pages/funding/funding.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Nostria - Your Social Network'
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'features', component: FeaturesComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'funding', component: FundingComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' } // Catch any unfound routes and redirect to home
];
