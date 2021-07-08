import { TestBed } from '@angular/core/testing';
import { DefaultDarkboxConfiguration } from '../config/darkbox-configuration.default';
import { ImageCaptionService } from './image-caption.service';


describe('ImageCaptionService', () => {
  let service: ImageCaptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageCaptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getImageCaption should only show the numbers part of the caption', () => {
    const darkboxConfiguration = new DefaultDarkboxConfiguration();
    const caption = service.getImageCaption(darkboxConfiguration, 1, 100, '');
    expect(caption).toBe('1/100');
  });

  it('#getImageCaption should show the full default caption', () => {
    const darkboxConfiguration = new DefaultDarkboxConfiguration();
    const caption = service.getImageCaption(darkboxConfiguration, 1, 100, 'Test');
    expect(caption).toBe('1/100 - Test');
  });

  it('#getImageCaption should show the full default caption with custom separator', () => {
    const darkboxConfiguration = new DefaultDarkboxConfiguration();
    darkboxConfiguration.captionSeparator = ': ';
    const caption = service.getImageCaption(darkboxConfiguration, 1, 100, 'Test');
    expect(caption).toBe('1/100: Test');
  });

  it('#getImageCaption should show a custom caption whith default seperator', () => {
    const darkboxConfiguration = new DefaultDarkboxConfiguration();
    darkboxConfiguration.captionTemplate = '${caption}${separator}Total: ${totalNumber} Current: ${currentNumber}';
    const caption = service.getImageCaption(darkboxConfiguration, 1, 100, 'Test');
    expect(caption).toBe('Test - Total: 100 Current: 1');
  });

  it('#getImageCaption should show a custom caption whith custom seperator', () => {
    const darkboxConfiguration = new DefaultDarkboxConfiguration();
    darkboxConfiguration.captionTemplate = '${caption}${separator}Total: ${totalNumber} Current: ${currentNumber}';
    darkboxConfiguration.captionSeparator = ': ';
    const caption = service.getImageCaption(darkboxConfiguration, 1, 100, 'Test');
    expect(caption).toBe('Test: Total: 100 Current: 1');
  });

  it('#getImageCaption should show a custom caption whith only the image caption', () => {
    const darkboxConfiguration = new DefaultDarkboxConfiguration();
    darkboxConfiguration.captionTemplate = '${caption}';
    darkboxConfiguration.captionSeparator = ': ';
    const caption = service.getImageCaption(darkboxConfiguration, 1, 100, 'Test');
    expect(caption).toBe('Test');
  });

  it('#getImageCaption should show a custom caption whithout separator', () => {
    const darkboxConfiguration = new DefaultDarkboxConfiguration();
    darkboxConfiguration.captionTemplate = '${currentNumber}/${totalNumber} ${caption}';
    const caption = service.getImageCaption(darkboxConfiguration, 1, 100, 'Test');
    expect(caption).toBe('1/100 Test');
  });
});
