import { Routes } from '@angular/router';
import { FeaturesComponent } from './pages/features/features.component';
import { PremiumComponent } from './pages/premium/premium.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AboutComponent } from './pages/about/about.component';
import { FundingComponent } from './pages/funding/funding.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PreSeedFundRaisedComponent } from './pages/press/pre-seed-fund-raised/pre-seed-fund-raised.component';
import { PressComponent } from './pages/press/press.component';
import { PreSeedComponent } from './pages/funding/pre-seed.component';

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
  { path: 'press', component: PressComponent },
  { path: 'press/pre-seed-fund-raised', component: PreSeedFundRaisedComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'funding', component: FundingComponent },
  { path: 'funding/pre-seed', component: PreSeedComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' } // Catch any unfound routes and redirect to home
];
