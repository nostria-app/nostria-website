import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportComponent } from './support.component';

describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have support channels defined', () => {
    expect(component.supportChannels).toBeDefined();
    expect(component.supportChannels.length).toBeGreaterThan(0);
  });

  it('should include GitHub issues link', () => {
    const githubChannel = component.supportChannels.find(
      channel => channel.title === 'GitHub Issues'
    );
    expect(githubChannel).toBeDefined();
    expect(githubChannel?.link).toContain('github.com');
  });

  it('should include Nostr support account link', () => {
    const nostrChannel = component.supportChannels.find(
      channel => channel.title === 'Nostr Support Account'
    );
    expect(nostrChannel).toBeDefined();
    expect(nostrChannel?.link).toContain('nostria.app');
  });
});
