import { TestBed } from '@angular/core/testing';
import { Configuration } from '../model/configuration';
import { LoopDirection } from '../model/darkbox-configuration';

import { ImageIndexService } from './image-index.service';

describe('ImageIndexService', () => {
  let service: ImageIndexService;
  const configuration: Configuration = { darkboxConfiguration: {} } as Configuration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#calculateValidImageIndex return inbound value on increase', () => {
    configuration.darkboxConfiguration.loopDirection = LoopDirection.BOTH;
    const currentIndex = 0;
    const totalImageCount = 2;
    const increase = true;

    const result = service.calculateValidImageIndex(configuration, currentIndex, totalImageCount, increase);
    expect(result).toBe(1);
  });

  it('#calculateValidImageIndex return inbound value on decrease', () => {
    configuration.darkboxConfiguration.loopDirection = LoopDirection.BOTH;
    const currentIndex = 1;
    const totalImageCount = 2;
    const increase = false;

    const result = service.calculateValidImageIndex(configuration, currentIndex, totalImageCount, increase);
    expect(result).toBe(0);
  });

  it('#calculateValidImageIndex return outbound value on increase with loop direction both', () => {
    configuration.darkboxConfiguration.loopDirection = LoopDirection.BOTH;
    const currentIndex = 1;
    const totalImageCount = 2;
    const increase = true;

    const result = service.calculateValidImageIndex(configuration, currentIndex, totalImageCount, increase);
    expect(result).toBe(0);
  });

  it('#calculateValidImageIndex return outbound value on decrease with loop direction both', () => {
    configuration.darkboxConfiguration.loopDirection = LoopDirection.BOTH;
    const currentIndex = 0;
    const totalImageCount = 2;
    const increase = false;

    const result = service.calculateValidImageIndex(configuration, currentIndex, totalImageCount, increase);
    expect(result).toBe(1);
  });



  it('#calculateValidImageIndex return outbound value on increase with loop direction forward', () => {
    configuration.darkboxConfiguration.loopDirection = LoopDirection.FORWARD;
    const currentIndex = 1;
    const totalImageCount = 2;
    const increase = true;

    const result = service.calculateValidImageIndex(configuration, currentIndex, totalImageCount, increase);
    expect(result).toBe(0);
  });

  it('#calculateValidImageIndex return outbound value on decrease with loop direction forward', () => {
    configuration.darkboxConfiguration.loopDirection = LoopDirection.FORWARD;
    const currentIndex = 0;
    const totalImageCount = 2;
    const increase = false;

    const result = service.calculateValidImageIndex(configuration, currentIndex, totalImageCount, increase);
    expect(result).toBe(0);
  });

  it('#calculateValidImageIndex return outbound value on increase with loop direction backward', () => {
    configuration.darkboxConfiguration.loopDirection = LoopDirection.BACKWARD;
    const currentIndex = 1;
    const totalImageCount = 2;
    const increase = true;

    const result = service.calculateValidImageIndex(configuration, currentIndex, totalImageCount, increase);
    expect(result).toBe(1);
  });

  it('#calculateValidImageIndex return outbound value on decrease with loop direction backward', () => {
    configuration.darkboxConfiguration.loopDirection = LoopDirection.BACKWARD;
    const currentIndex = 0;
    const totalImageCount = 2;
    const increase = false;

    const result = service.calculateValidImageIndex(configuration, currentIndex, totalImageCount, increase);
    expect(result).toBe(1);
  });

  it('#calculateValidImageIndex return outbound value on increase with loop direction none', () => {
    configuration.darkboxConfiguration.loopDirection = LoopDirection.NONE;
    const currentIndex = 1;
    const totalImageCount = 2;
    const increase = true;

    const result = service.calculateValidImageIndex(configuration, currentIndex, totalImageCount, increase);
    expect(result).toBe(1);
  });

  it('#calculateValidImageIndex return outbound value on decrease with loop direction none', () => {
    configuration.darkboxConfiguration.loopDirection = LoopDirection.NONE;
    const currentIndex = 0;
    const totalImageCount = 2;
    const increase = false;

    const result = service.calculateValidImageIndex(configuration, currentIndex, totalImageCount, increase);
    expect(result).toBe(0);
  });
});
